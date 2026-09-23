# GTM-360 — Pre-Handoff QA Report (FINAL)

**Date:** 2026-09-23 · **Scope:** website (gtm-360.com), Agent Portal (agents.gtm-360.com), crew, cockpit, method
**Method:** local build/lint/prerender, live browser crawl (Playwright, 283 routes), axe-core WCAG A/AA, fetch-based redirect/header/SEO checks, cross-surface smoke.

---

## 1. Result

**Release-ready.** 283/283 routes render, 0 console/page errors, 0 broken internal links, 0 accessibility violations across 30 page templates, real 404s, security headers on, taxonomy single-sourced with a build-time drift gate, and route-level code splitting.

## 2. Automated results (live)

| Check | Result |
|---|---|
| `qa/routes.mjs` (live crawl) | **283 routes · 0 failures · 0 dead links · 0 console errors · 0 page errors** |
| `qa/a11y.mjs` (axe, 30 pages) | **0 violations** |
| `qa/live.mjs` | **25/25 pass** |
| 404 behaviour | unknown path → **HTTP 404** with the branded page |
| Security headers | HSTS, CSP (report-only), X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy |
| Build/lint | website · crew · cockpit · method all green; prerender 283 + 404 |
| Main JS bundle | **1,141 KB → 47 KB** (route chunks: Process 455, content 116, motion 115, …) |
| Taxonomy gate | `check:registry` passes; runs on `prebuild` |

## 3. Findings — all resolved

| # | Sev | Finding | Resolution |
|---|---|---|---|
| F3 | High (A11y) | 321 color-contrast nodes | Surface-aware CSS guardrails (`slate`/`gray`/`red`/`green` by background) + `forText()` darkener for brand accents. **0 violations.** |
| F2 | High | Wiki taxonomy diverged from the registry (9 legacy ids, 24 agents missing) | `AGENT_SLOTS` now generated from the registry; all legacy ids remapped; process arrays validated; gate has no allowlist. |
| F4 | Medium (SEO) | Unknown paths returned HTTP 200 (soft-404) | Generate `dist/404.html`; dropped the SPA fallback → real 404s. |
| F5 | Medium (Perf) | ~1.1 MB main JS; route splitting blocked by `renderToString` | Streaming SSR (`renderToPipeableStream` + `onAllReady`) + route-level `lazy()`. Main bundle **47 KB**. |
| F6 | Medium (Security) | Missing HSTS + CSP | Added via `public/_headers` (CSP report-only), existing cache rules preserved. |
| F7 | Low | Method app had one title on every route | Per-route `document.title` (layer/process aware). |
| F1 | High (SEO) | `content.gtm-360.com` used a client-side JS redirect | **Resolved & live** — server-side 301 via a Pages Function (`content-engine/apps/web/functions/_middleware.js`), deployed to the `content-engine` project. `live.mjs` now 25/25. |
| — | — | Problem pages rendered empty related-reading cards (`[LINKS]` array bug) | Fixed in StalledGrowth / PipelineConversion / ForecastVolatility. |
| — | — | `/contact` hydration mismatch (Calendly) | Widget now client-only. |
| — | — | Silent lead loss; GA4 unwired; stale llms.txt; wrong agent count; corrupted canon; crew duplicate portal; switcher duplication; missing labels | All fixed earlier in this engagement. |

## 4. Persona scorecard

| Reviewer | Verdict |
|---|---|
| Product Dev Lead / PM | **Pass** — one flow, no dead ends, 404, 0 a11y violations |
| CTO | **Pass** — clean build/links/redirects, real 404s, headers, 47 KB main bundle, drift gate |
| Marketing | **Pass** — naming unified, counts truthful (41), titles/meta on all routes, AEO files clean |
| Sales | **Pass** — no silent lead failures, GA4 events tracked |
| CEO | **Pass** — coherent showcase, three surfaces, one brand |

## 5. Reproduce

```bash
cd website
npm run lint && npm run check:registry && npm run build
node qa/live.mjs
PLAYWRIGHT_PATH=<pw-dir> node qa/routes.mjs https://gtm-360.com
PLAYWRIGHT_PATH=<pw-dir> node qa/a11y.mjs https://gtm-360.com
node qa/smoke.mjs
```
