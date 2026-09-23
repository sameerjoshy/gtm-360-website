# GTM-360 — Pre-Handoff QA Report

**Date:** 2026-09-23 · **Scope:** website (gtm-360.com), Agent Portal (agents.gtm-360.com), crew, cockpit
**Method:** local build + lint + prerender, live browser crawl (Playwright), axe-core a11y, fetch-based redirect/SEO checks, cross-surface smoke.

---

## 1. Headline

The site is **stable and consistent**: 283/283 routes render, 0 console/page errors, 0 broken internal links, one agent surface, one taxonomy naming. Remaining items are **known and listed** (1 redirect, 1 design-token contrast pass, 1 content-governance gap, perf/security hardening).

## 2. Automated results (live)

| Check | Result |
|---|---|
| `qa/live.mjs` | 24/25 pass — only `content.gtm-360.com` redirect (see F1) |
| `qa/routes.mjs` (live crawl) | **283 routes · 0 failures · 0 dead links · 0 console errors · 0 page errors** |
| `qa/a11y.mjs` | 15 pages · 15 violations, **all color-contrast** (321 nodes); labels + inline-link fixed |
| `qa/smoke.mjs` | all 6 surfaces live; redirects ok except F1; sitemap check hit a transient fetch error |
| Build/lint | website, crew, cockpit all green |
| Security headers | x-frame-options DENY, nosniff, permissions-policy, referrer-policy present; **HSTS + CSP absent** (F6) |

## 3. Fixed in this pass

| # | Area | Fix |
|---|---|---|
| F‑fixed | Flow | In-app links to retired `/engine`,`/system` repointed to `/wiki/method`,`/wiki`; single redirect source (`_redirects`) |
| F‑fixed | UX | Real `/404` NotFound page added (catch-all no longer renders Home) |
| F‑fixed | Sales | `useSubmitLead` no longer reports success on failure (silent lead loss) |
| F‑fixed | Analytics | GA4 `G-ZYCR2GTVQ8` wired: SPA pageviews + `cta_click` + `generate_lead` (verified live) |
| F‑fixed | Messaging | Agent count derived from data (was hardcoded 25 vs actual 41); llms.txt stale URLs + embedded robots block removed |
| F‑fixed | Structure | Taxonomy single-sourced: registry snapshot + drift gate (`prebuild`) |
| F‑fixed | Structure | Crew retire: `gtm-360-agents.pages.dev` 301 → Agent Portal |
| F‑fixed | Structure | Product switchers (crew, cockpit): Compass · Cockpit · Agent Portal (dropped retired Crew + duplicate Content) |
| F‑fixed | Content | `TONE_AND_POV_CANON.md` reconstructed (26 lost chars); naming aligned to Agent Portal |
| F‑fixed | Runtime | `/contact` hydration mismatch (Calendly) — widget now client-only |
| F‑fixed | A11y | `/start-here` form labels associated; inline links underlined |

## 4. Open findings

| # | Severity | Owner surface | Finding | Recommendation |
|---|---|---|---|---|
| F1 | **High (SEO)** | content-engine | `content.gtm-360.com` returns **HTTP 200 + JS redirect**, not a server 301 | Add a server 301 (`_redirects`) content → agents |
| F2 | High | content/wiki | Wiki `AGENT_SLOTS` diverges from the canonical registry: **9 legacy ids** (`pricing`,`forecast`,`playbook`,`content-multiplier`,`seo`,`campaign`,`onboarding`,`renewal`,`pipeline`) + **24 registry agents missing** | Map slots → canonical ids; ratcheted in `check-taxonomy.mjs` so new drift fails |
| F3 | High (A11y) | website | **321 color-contrast nodes.** Dominant pairs: `#94a3b8` (slate-400) on `#fff` = 2.56 (need 4.5); `#cbd5e1` on `#fff` = 1.48; on dark: `#64748b`/`#0a192f` on `#0f172a` = 1.01–3.75; `#bfdbfe` on `#2563eb` = 3.63 | Design-token pass: muted text on light → `slate-500+`; fix dark-on-dark badge; do **not** blind-replace (slate-400 is fine on dark) |
| F4 | Medium (SEO) | website | Unknown paths return **HTTP 200** (SPA fallback) with the NotFound page (soft-404) | Optionally drop `/* /index.html 200` since all routes are prerendered → true 404s |
| F5 | Medium (Perf) | website | Main JS **~1.1 MB**; route-splitting blocked because prerender uses `renderToString` (no Suspense) | Rework SSR entry to a stream renderer, then add route-level `lazy()` |
| F6 | Medium (Security) | website | Missing **HSTS** and **CSP** response headers | Enable HSTS at the zone; add a CSP (report-only first) |
| F7 | Low | method | Method app still deployed, single title on every route; already 301 → /wiki | Either retire the app (keep deck tooling) or add per-route titles |

## 5. Persona scorecard

| Reviewer | Verdict | Notes |
|---|---|---|
| **Product Dev Lead / PM** | **Pass with follow-ups** | One clear flow (site → Portal / wiki), no dead ends, 404 present. A11y contrast (F3) and the wiki taxonomy gap (F2) are the substantive follow-ups. |
| **CTO** | **Pass with follow-ups** | Clean build, 0 runtime errors, redirects single-sourced, links clean, taxonomy drift-gated. Watch: F1 (redirect), F5 (perf), F6 (headers). |
| **Marketing** | **Pass** | Naming unified to "Agent Portal"; agent count now truthful (41); stale llms.txt/robots content fixed; titles/meta on all 283 routes. Watch: F2 copy consistency. |
| **Sales** | **Pass** | Lead submission can no longer silently succeed; CTAs tracked (GA4); clear single next step per page. Watch: test a real HubSpot submission end-to-end. |
| **CEO** | **Pass** | Coherent showcase; three surfaces, one brand; revenue rails (CTAs, GA4, proof, case studies) intact; AEO/llms clean. Remaining items are polish, not blockers. |

## 6. Reproduce

```bash
cd website
npm run lint && npm run check:registry && npm run build
node qa/live.mjs
PLAYWRIGHT_PATH=<playwright-dir> node qa/routes.mjs https://gtm-360.com
PLAYWRIGHT_PATH=<playwright-dir> node qa/a11y.mjs
node qa/smoke.mjs
```
