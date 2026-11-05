# goodground

Free, private money planning for life in the UAE. Live at https://goodground.cc

## How this repo works

- `design/` holds the page designs exported from the design canvas (`*.dc.html`) and their images and videos (`design/assets`).
- `build/` turns those designs into the website. It renders each design with a small Preact runtime (`build/src/gg.js`).
- `site/` is the built website that Vercel serves. Don't edit it by hand.

## Rebuild after a design change

```
cd build
npm install
node build.js ../design ../design/assets ../site
```

Then commit and push. Vercel redeploys on every push to `main`.

## Pages

| Path | Design |
| --- | --- |
| `/` | LandingV2 (light) and LandingV2-xtqw (dark), picked by the visitor's setting |
| `/plan` | ChatStart |
| `/plan/home`, `/plan/savings`, `/plan/debt`, `/plan/grow` | ChatHome, ChatSavings, ChatDebt, ChatGrow |
| `/learn` | LearnPage |
| `/learn/saving`, `/learn/debt`, `/learn/investing`, `/learn/basics` | Course pages |
| `/blog`, `/story`, `/promise`, `/contact`, `/terms` | Site pages |

Nothing a visitor types is stored or sent anywhere. The planners run entirely in the browser.
