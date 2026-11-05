// Builds the goodground website from the design canvas pages.
// usage: node build.js <pages dir> <assets dir> <out dir>
const fs = require('fs');
const path = require('path');
const { parseDocument } = require('htmlparser2');

const [SRC, BLOBS, OUT] = process.argv.slice(2);
const SITE = 'https://goodground.cc';

const ROUTES = {
  LandingV2: '/', 'LandingV2-xtqw': '/', Landing: '/', Main: '/', Details: '/', Result: '/',
  ChatStart: '/plan', ChatHome: '/plan/home', ChatSavings: '/plan/savings', ChatDebt: '/plan/debt', ChatGrow: '/plan/grow', PlanHome: '/plan/home', PlanSavings: '/plan/savings', PlanDebt: '/plan/debt', PlanGrow: '/plan/grow',
  LearnPage: '/learn', CourseSaving: '/learn/saving', CourseDebt: '/learn/debt', CourseInvesting: '/learn/investing', CourseBasics: '/learn/basics',
  BlogPage: '/blog', StoryPage: '/story', PromisePage: '/promise', ContactPage: '/contact', LegalPage: '/terms'
};

const META = {
  '/': ['goodground | Plan your money with confidence in the UAE', 'Free, private money planning for life in the UAE. Plan buying a home, build your savings, clear debt and grow your money. No sign up, nothing stored.'],
  '/plan': ['Start planning | goodground', 'Answer a few simple questions and get a clear, realistic plan. Free and private.'],
  '/plan/home': ['Plan buying a home | goodground', 'See what you can comfortably afford in the UAE, the full cost of buying and when you could get the keys.'],
  '/plan/savings': ['Plan your savings | goodground', 'Build your safety net and savings goals, and see exactly how long it will take.'],
  '/plan/debt': ['Plan your way out of debt | goodground', 'Add what you owe and get a clear payoff order and debt free date.'],
  '/plan/grow': ['Grow your money | goodground', 'See how regular investing could grow over time, with clear and careful assumptions.'],
  '/learn': ['Learn | goodground', 'Short, fact checked money courses for life in the UAE.'],
  '/learn/saving': ['Saving course | goodground', 'Five short lessons on building savings that last.'],
  '/learn/debt': ['Debt course | goodground', 'Five short lessons on understanding and clearing debt in the UAE.'],
  '/learn/investing': ['Investing course | goodground', 'Five short lessons on investing safely from the UAE.'],
  '/learn/basics': ['Money basics course | goodground', 'Five short lessons on budgeting for life in the UAE.'],
  '/blog': ['Blog | goodground', 'Clear, practical writing on money in the UAE.'],
  '/story': ['Our story | goodground', 'Why goodground exists and who it is for.'],
  '/promise': ['Our promise | goodground', 'Independent, private and always on your side.'],
  '/contact': ['Contact | goodground', 'Get in touch with goodground.'],
  '/terms': ['Terms and disclaimer | goodground', 'Terms of use, disclaimer and privacy for goodground.']
};

// files on disk for each asset id
const blobFiles = {};
for (const f of fs.readdirSync(BLOBS)) blobFiles[f.split('.')[0]] = f;

function rewrite(s) {
  s = s.replace(/\/_blob\/([0-9a-f]{32})/g, (m, id) => {
    if (!blobFiles[id]) throw new Error('missing asset ' + id);
    return '/assets/' + blobFiles[id];
  });
  s = s.replace(/\b([A-Z][A-Za-z0-9]*(?:-[a-z0-9]+)?)\.dc\.html/g, (m, name) => {
    if (!(name in ROUTES)) throw new Error('unknown page link ' + m);
    return ROUTES[name];
  });
  // '/#planner' style links stay as they are; '/' + '#x' join cleanly
  return s;
}

function compact(node) {
  if (node.type === 'text') return node.data;
  if (node.type !== 'tag' && node.type !== 'script' && node.type !== 'style') return null;
  const kids = (node.children || []).map(compact).filter((k) => k !== null && k !== '');
  return [node.name, node.attribs || {}, kids];
}

function parsePage(file) {
  let s = fs.readFileSync(path.join(SRC, file + '.dc.html'), 'utf8');
  s = rewrite(s);
  const helmet = s.slice(s.indexOf('<helmet>') + 8, s.indexOf('</helmet>'));
  const scriptAt = s.indexOf('<script type="text/x-dc"');
  const tplHtml = s.slice(s.indexOf('</helmet>') + 9, scriptAt).trim();
  const script = s.slice(s.indexOf('>', scriptAt) + 1, s.indexOf('</script>', scriptAt));
  const doc = parseDocument(tplHtml, { lowerCaseTags: false, lowerCaseAttributeNames: false, recognizeSelfClosing: true, decodeEntities: true });
  const tpl = doc.children.map(compact).filter((k) => k !== null && !(typeof k === 'string' && !k.trim()));
  return { helmet, tpl, script };
}

function fixScript(name, js) {
  if (name.startsWith('Chat')) {
    const o = 'download: () => this.setState({ downloaded: true }),';
    if (js.includes(o)) js = js.replace(o, 'download: () => { this.setState({ downloaded: true }); setTimeout(() => { try { window.print(); } catch (e) {} }, 60); },');
  }
  return js;
}

// Web3Forms access key: messages go to malak@mpavida.com
const FORM_KEY = '4860b84f-3ab4-49ce-8049-280ccea01396';
function fixContact(p) {
  let js = p.script;
  const o1 = "send: () => { if (okEmail && okMsg) this.setState({ sent: true }); else this.setState({ tried: true }); },";
  if (!js.includes(o1)) throw new Error('contact send not found');
  js = js.replace(o1, `send: () => {
if (!(okEmail && okMsg)) { this.setState({ tried: true }); return; }
if (s.sending) return;
this.setState({ sending: true, sendErr: false });
const label = (topics.find((t) => t[0] === s.topic) || ['', 'A question'])[1];
fetch('https://api.web3forms.com/submit', {
method: 'POST',
headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
body: JSON.stringify({ access_key: '${FORM_KEY}', from_name: 'goodground website', subject: 'goodground: ' + label, name: String(s.name).trim() || 'Not given', email: String(s.email).trim(), replyto: String(s.email).trim(), topic: label, message: String(s.message).trim() })
}).then((r) => r.json().catch(() => ({})).then((d) => { if (!r.ok || d.success === false || d.success === 'false') throw new Error('send'); }))
.then(() => this.setState({ sending: false, sent: true }))
.catch(() => this.setState({ sending: false, sendErr: true }));
},
sendErr: !!s.sendErr,
sendLabel: s.sending ? 'Sending' : 'Send message',
`);
  p.script = js;
  // button label, error line and a hidden spam trap
  const walk = (nodes) => {
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (Array.isArray(n)) {
        if (n[0] === 'button' && n[1].onClick === '{{send}}') {
          const t = n[2].findIndex((k) => typeof k === 'string' && k.includes('Send message'));
          n[2][t] = n[2][t].replace('Send message', '{{sendLabel}}');
          nodes.splice(i + 1, 0,
            ['sc-if', { value: '{{sendErr}}' }, [['p', { role: 'alert', style: 'margin: 0; font-size: 14px; color: var(--err)' }, ['Sorry, your message did not send. Please try again in a moment.']]]]);
          return true;
        }
        if (walk(n[2])) return true;
      }
    }
    return false;
  };
  if (!walk(p.tpl)) throw new Error('contact button not found');
}

function bundle(name, p) {
  return `GG.define(${JSON.stringify(name)}, ${JSON.stringify(p.tpl)}, (function () {\nconst DCLogic = GG.DCLogic;\n${fixScript(name, p.script)}\nreturn Component;\n})());\n`;
}

const PRINT_CSS = `@media print{@page{margin:14mm}body{background:#fff!important}body *{visibility:hidden!important}[role=dialog] article,[role=dialog] article *{visibility:visible!important}[role=dialog]{position:static!important;background:none!important;backdrop-filter:none!important}[role=dialog] article{position:absolute!important;left:0;top:0;width:100%!important;margin:0!important;box-shadow:none!important}}`;

function pageHtml(route, helmet, scripts, mountCall) {
  const [title, desc] = META[route];
  const fonts = helmet.match(/<link[^>]*>/g) || [];
  const styles = (helmet.match(/<style>[\s\S]*?<\/style>/g) || []).join('\n');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=1440">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${SITE}${route}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="goodground">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${SITE}${route}">
<meta property="og:image" content="${SITE}/og.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
${fonts.join('\n')}
${styles}
<style>${PRINT_CSS}</style>
</head>
<body>
<div id="app"></div>
<noscript>goodground needs JavaScript to run its planners.</noscript>
<script src="/js/preact.min.js"></script>
<script src="/js/gg.js"></script>
${scripts.map((s) => `<script src="${s}"></script>`).join('\n')}
<script>${mountCall}</script>
</body>
</html>
`;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(path.join(OUT, 'js/pages'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });
fs.copyFileSync(path.join(__dirname, 'node_modules/preact/dist/preact.min.umd.js'), path.join(OUT, 'js/preact.min.js'));
fs.copyFileSync(path.join(__dirname, 'src/gg.js'), path.join(OUT, 'js/gg.js'));
for (const f of fs.readdirSync(BLOBS)) fs.copyFileSync(path.join(BLOBS, f), path.join(OUT, 'assets', f));
for (const f of fs.readdirSync(path.join(__dirname, 'static'))) fs.copyFileSync(path.join(__dirname, 'static', f), path.join(OUT, f));

function writeRoute(route, html) {
  const dir = path.join(OUT, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
}

// home page: light and dark designs
const light = parsePage('LandingV2');
const dark = parsePage('LandingV2-xtqw');
fs.writeFileSync(path.join(OUT, 'js/pages/home.js'), bundle('home-light', light) + bundle('home-dark', dark));
writeRoute('/', pageHtml('/', light.helmet, ['/js/pages/home.js'], "GG.mountLanding('home-light', 'home-dark');"));

for (const [name, route] of Object.entries(ROUTES)) {
  if (route === '/' || name.startsWith('Plan')) continue;
  const p = parsePage(name);
  if (name === 'ContactPage') fixContact(p);
  const slug = route.slice(1).replace(/\//g, '-');
  fs.writeFileSync(path.join(OUT, `js/pages/${slug}.js`), bundle(name, p));
  writeRoute(route, pageHtml(route, p.helmet, [`/js/pages/${slug}.js`], `GG.mount(${JSON.stringify(name)});`));
}

// 404, sitemap, robots
fs.writeFileSync(path.join(OUT, '404.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | goodground</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F6F2EB;color:#2B2E1F;font-family:Georgia,serif;text-align:center;padding:24px}a{color:#2B2E1F}@media(prefers-color-scheme:dark){body{background:#1F2116;color:#F3EEE6}a{color:#F3EEE6}}</style></head><body><div><h1 style="font-weight:400;font-size:40px;margin:0 0 12px">This page does not exist</h1><p style="font-family:system-ui,sans-serif;font-size:17px;margin:0"><a href="/">Back to goodground</a></p></div></body></html>`);
const routes = [...new Set(Object.values(ROUTES))];
fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => `<url><loc>${SITE}${r}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log('built', routes.length, 'pages');
