/**
 * GTM-360 Static Prerender Script
 * Runs after `vite build` to generate static HTML for every route.
 * Makes the site fully readable by crawlers, Google AI, Perplexity, and LLMs.
 * 
 * Usage: node prerender.mjs
 * Full build: npm run build:ssg
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// All routes to prerender
const routes = [
    '/',
    '/about',
    '/contact',
    '/how-we-work',
    '/problems',
    '/problems/stalled-growth',
    '/problems/pipeline-conversion',
    '/problems/forecast-volatility',
    '/insights',
    '/insights/why-growth-stalls',
    '/insights/stage-definition-problem',
    '/insights/forecast-decay',
    '/insights/solving-wrong-problem',
    '/insights/when-ai-makes-gtm-worse',
    '/insights/icp-drift',
    '/insights/case-studies/pipeline-full-revenue-flat',
    '/insights/case-studies/forecast-board-wanted-predictability',
    '/insights/case-studies/sales-cycle-doubled-icp-drift',
    '/insights/case-studies/fixing-the-wrong-problem',
    '/insights/case-studies/when-ai-created-noise-not-clarity',
    '/start-here',
    '/services/gtm-operating-model',
    '/services/pipeline-quality',
    '/services/forecasting-governance',
    '/services/gtm-signals-and-ai',
    '/gtm-consulting',
    '/b2b-sales-consulting',
    '/series-b-gtm-strategy',
    '/resources/gtm-diagnostic-checklist',
    '/privacy',
    '/terms',
    '/thank-you',
];

const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

async function prerender() {
    // Check dist exists
    if (!fs.existsSync(templatePath)) {
        console.error('❌ dist/index.html not found. Run `vite build` first.');
        process.exit(1);
    }

    const template = fs.readFileSync(templatePath, 'utf-8');

    // Load the SSR build
    const serverEntryPath = path.resolve(distDir, 'server', 'entry-server.js');
    if (!fs.existsSync(serverEntryPath)) {
        console.warn('⚠️  SSR entry not found. Generating meta-only prerender (still improves crawlability).');
        // Fallback: copy index.html to each route path for basic SPA crawling
        for (const route of routes) {
            const outDir = path.resolve(distDir, route.slice(1));
            if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
            fs.writeFileSync(path.resolve(outDir, 'index.html'), template);
            console.log(`  ✓ ${route}`);
        }
        console.log('\n✅ Basic prerender complete. Each route now has its own index.html.');
        return;
    }

    const { render } = await import(serverEntryPath);

    for (const route of routes) {
        try {
            const { html: appHtml, helmet } = render(route);

            // Inject rendered content + helmet tags into template
            let pageHtml = template
                .replace('<!--app-head-->', helmet ? [
                    helmet.title?.toString() || '',
                    helmet.meta?.toString() || '',
                    helmet.link?.toString() || '',
                ].join('\n') : '')
                .replace('<!--app-html-->', appHtml);

            // Write to dist/<route>/index.html
            const routeDir = route === '/'
                ? distDir
                : path.resolve(distDir, route.slice(1));

            if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
            fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageHtml);
            console.log(`  ✓ ${route}`);
        } catch (err) {
            console.warn(`  ⚠️  Skipped ${route}: ${err.message}`);
        }
    }

    console.log('\n✅ Full SSR prerender complete. Site is crawler-readable.');
}

prerender().catch(console.error);
