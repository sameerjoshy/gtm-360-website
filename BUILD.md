# GTM-360 Build Guide

## Development
```bash
npm run dev
```

## Production Build (with SSG/prerender)
```bash
npm run build:ssg
```
This runs three steps:
1. `vite build` — client bundle
2. `vite build --ssr` — server bundle  
3. `node prerender.mjs` — generates static HTML for all routes

## Cloudflare Pages Settings
- **Build command:** `npm run build:ssg`
- **Build output directory:** `dist`
- **Node version:** 18+

## Why SSG?
The site is built with React (Vite SPA). Without prerendering, crawlers and AI tools
(Google AI, Perplexity, Claude, etc.) only see an empty HTML shell. The SSG step
generates a complete HTML file for every route so content is visible to all crawlers.

## Adding a New Route
1. Create the page in `src/pages/`
2. Add the route to `src/App.jsx`
3. Add the URL to the `routes` array in `prerender.mjs`
4. Add the URL to `public/sitemap.xml`
