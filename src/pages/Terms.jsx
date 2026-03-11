import React from 'react';
import SEO from '../components/SEO';

const Terms = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="Terms of Service | GTM-360 GTM Consulting"
                description="Terms of service for gtm-360.com. Governs use of the GTM-360 website and consulting services including diagnostic, architecture, and implementation engagements."
                canonical="https://gtm-360.com/terms"
            />
            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-2xl">
                    <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Legal</span>
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">Terms of Service</h1>
                    <p className="text-sm text-slate-400 mb-12">Last updated: January 2026</p>

                    <div className="space-y-8 text-slate-600 leading-relaxed">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Use of this site</h2>
                            <p>gtm-360.com is an informational website. The content — articles, case studies, frameworks, and tool descriptions — is provided for general information purposes. It does not constitute binding commercial, legal, or financial advice.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Intellectual property</h2>
                            <p>All content on this site — including written frameworks, case study structures, visual diagrams, and branding — is owned by GTM-360. You may reference or quote individual ideas with attribution, but you may not reproduce entire frameworks, articles, or structural methodologies without written permission.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Accuracy</h2>
                            <p>We aim to keep content accurate and current. Case study metrics are drawn from real engagements and are presented accurately, with client details anonymised. We make no guarantees that outcomes described will be replicated in other situations.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">External links</h2>
                            <p>Links to third-party sites (LinkedIn, Calendly, HubSpot, tool vendors) are provided for convenience. GTM-360 has no control over and accepts no responsibility for their content or practices.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Changes</h2>
                            <p>We may update these terms. Continued use of the site after changes constitutes acceptance. Material changes will be noted with an updated date above.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Contact</h2>
                            <p>Questions: <a href="mailto:hello@gtm-360.com" className="text-slate-900 font-medium hover:underline">hello@gtm-360.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
