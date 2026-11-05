/* goodground page runtime: renders the page templates with Preact. */
(function () {
  var P = window.preact;
  var h = P.h;
  var HOLE = /\{\{\s*([^}]+?)\s*\}\}/g;
  var ONLY = /^\{\{\s*([^}]+?)\s*\}\}$/;

  function lookup(scope, path) {
    var parts = path.split('.');
    var v = scope[parts[0]];
    for (var i = 1; i < parts.length; i++) {
      if (v == null) return undefined;
      v = v[parts[i]];
    }
    return v;
  }

  function attrValue(raw, scope) {
    var m = ONLY.exec(raw);
    if (m) return lookup(scope, m[1]);
    if (raw.indexOf('{{') === -1) return raw;
    return raw.replace(HOLE, function (_, p) {
      var v = lookup(scope, p);
      return v == null ? '' : String(v);
    });
  }

  function textOf(raw, scope) {
    if (raw.indexOf('{{') === -1) return raw;
    return raw.replace(HOLE, function (_, p) {
      var v = lookup(scope, p);
      return v == null ? '' : String(v);
    });
  }

  function renderNodes(nodes, scope, out) {
    for (var i = 0; i < nodes.length; i++) renderNode(nodes[i], scope, out);
    return out;
  }

  function renderNode(n, scope, out) {
    if (typeof n === 'string') {
      out.push(textOf(n, scope));
      return;
    }
    var tag = n[0], attrs = n[1], kids = n[2];
    if (tag === 'sc-if') {
      if (attrValue(attrs.value || '', scope)) renderNodes(kids, scope, out);
      return;
    }
    if (tag === 'sc-for') {
      var list = attrValue(attrs.list || '', scope) || [];
      var as = attrs.as || 'item';
      for (var j = 0; j < list.length; j++) {
        var child = Object.create(scope);
        child[as] = list[j];
        renderNodes(kids, child, out);
      }
      return;
    }
    var props = {};
    var type = attrs.type;
    for (var name in attrs) {
      if (name.indexOf('hint-') === 0 || name.indexOf('data-dc') === 0) continue;
      var v = attrValue(attrs[name], scope);
      var key = name;
      if (name === 'onChange' && (tag === 'textarea' || (tag === 'input' && type !== 'checkbox' && type !== 'radio'))) key = 'onInput';
      else if (name === 'class') key = 'class';
      if (key === 'value' && v == null) v = '';
      props[key] = v;
    }
    out.push(h(tag, props, kids.length ? renderNodes(kids, scope, []) : null));
  }

  class DCLogic extends P.Component {
    render() {
      var tpl = this.constructor.__tpl;
      var vals = this.renderVals ? this.renderVals() : {};
      var out = renderNodes(tpl, vals, []);
      return out.length === 1 ? out[0] : h(P.Fragment, null, out);
    }
  }

  var registry = {};
  window.GG = {
    DCLogic: DCLogic,
    define: function (name, tpl, Comp) { Comp.__tpl = tpl; registry[name] = Comp; },
    mount: function (name) {
      P.render(h(registry[name], {}), document.getElementById('app'));
    },
    // Home page: one of two designs, chosen by the saved or system colour mode.
    mountLanding: function (light, dark) {
      var root = document.getElementById('app');
      function want() {
        var s = null;
        try { s = window.localStorage.getItem('gg-theme'); } catch (e) {}
        if (s === 'dark' || s === 'light') return s;
        return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var current = null;
      function draw() {
        var w = want();
        if (w === current) return;
        current = w;
        document.documentElement.setAttribute('data-mode', w);
        P.render(null, root);
        P.render(h(registry[w === 'dark' ? dark : light], {}), root);
      }
      draw();
      document.addEventListener('click', function (e) {
        if (e.defaultPrevented) return;
        var a = e.target.closest && e.target.closest('a[href]');
        if (!a) return;
        var u = new URL(a.getAttribute('href'), location.href);
        if (u.origin !== location.origin || u.pathname !== '/') return;
        e.preventDefault();
        draw();
        if (u.hash && u.hash !== '#top') {
          var t = document.getElementById(u.hash.slice(1));
          if (t) t.scrollIntoView({ behavior: 'smooth' });
        } else if (u.hash === '#top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      try {
        matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () { draw(); });
      } catch (e) {}
    }
  };
})();
