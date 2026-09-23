#!/usr/bin/env node
// Accessibility scan (axe-core) on key pages.
//   PLAYWRIGHT_PATH=<dir> node qa/a11y.mjs [baseUrl]
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pwPath = process.env.PLAYWRIGHT_PATH
const { chromium } = pwPath ? require(pwPath) : require('playwright')

const BASE = process.argv[2] || 'https://gtm-360.com'
const PAGES = ['/', '/agents', '/offerings', '/problems', '/how-we-work', '/insights', '/about',
  '/wiki', '/wiki/method', '/wiki/method/agents', '/wiki/method/tools', '/wiki/method/layer/L5',
  '/wiki/method/process/crm-management', '/wiki/glossary', '/wiki/guides', '/wiki/playbooks',
  '/start-here', '/contact', '/diagnostic-score', '/gtm-consulting', '/resources/gtm-diagnostic-checklist',
  '/services/gtm-operating-model', '/problems/stalled-growth', '/insights/why-growth-stalls',
  '/insights/case-studies/pipeline-full-revenue-flat', '/privacy', '/terms',
  '/agents/strategy/diagnostic', '/agents/strategy/diagnostic/guide', '/wiki/playbooks/the-qbr-trap']

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
let total = 0
const byRule = {}

for (const p of PAGES) {
  try {
    await page.goto(BASE + p, { waitUntil: 'load', timeout: 30000 })
    await page.addScriptTag({ url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js' })
    const res = await page.evaluate(async () => {
      // eslint-disable-next-line no-undef
      return await axe.run(document, { resultTypes: ['violations'], runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } })
    })
    const v = res.violations || []
    total += v.length
    for (const x of v) byRule[x.id] = (byRule[x.id] || 0) + x.nodes.length
    console.log(`${v.length ? '✗' : '✓'} ${p} — ${v.length} violations`)
    v.forEach((x) => console.log(`    [${x.impact}] ${x.id}: ${x.nodes.length} node(s) — ${x.help}`))
  } catch (e) {
    console.log(`! ${p} — ${e.message.slice(0, 80)}`)
  }
}

console.log(`\nTOTAL violations across ${PAGES.length} pages: ${total}`)
if (Object.keys(byRule).length) console.log('By rule:', JSON.stringify(byRule))
await browser.close()
