import ReactGA from 'react-ga4';

// GA4 Measurement IDs are public (they ship in the page source), so a default is
// safe here; VITE_GA4_ID can override per environment.
const GA_ID = import.meta.env.VITE_GA4_ID || 'G-ZYCR2GTVQ8';

let enabled = false;

/** Initialise GA4 once, client-side only. No-ops when no measurement ID is set. */
export function initAnalytics() {
    if (enabled || !GA_ID || typeof window === 'undefined') return;
    ReactGA.initialize(GA_ID, { gtagOptions: { send_page_view: false } });
    enabled = true;
}

/** SPA pageview — route changes must be sent explicitly. */
export function trackPageView(path, title) {
    if (!enabled) return;
    ReactGA.send({ hitType: 'pageview', page: path, title: title || undefined });
}

/** Named interaction / conversion event. */
export function track(event, params = {}) {
    if (!enabled) return;
    ReactGA.event(event, params);
}
