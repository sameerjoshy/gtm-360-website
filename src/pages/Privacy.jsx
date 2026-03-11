import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="Privacy Policy | GTM-360"
                description="How GTM-360 handles information collected through our website."
                canonical="https://gtm-360.com/privacy"
            />
            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-2xl">
                    <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Legal</span>
                    <h1 className="text-4xl font-bold text-slate-900 mb-3">Privacy Policy</h1>
                    <p className="text-sm text-slate-400 mb-12">Last updated: January 2026</p>

                    <div className="space-y-8 text-slate-600 leading-relaxed">
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">What we collect</h2>
                            <p>We only collect information you voluntarily provide — typically your name, work email, and company name when you use our Start Here or contact form. We don't run tracking pixels or build behavioural profiles.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">How we use it</h2>
                            <p>Solely to respond to your enquiry and, if you become a client, to run the engagement. We don't sell your data, share it with third parties for marketing purposes, or add you to automated nurture sequences without your consent.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Third-party tools</h2>
                            <p>We use HubSpot to receive form submissions and Calendly for scheduling. Both have their own privacy policies. We use Cloudflare for site delivery — standard access logs only, no additional tracking.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Cookies</h2>
                            <p>We use a HubSpot tracking cookie (hubspotutk) if you interact with our forms. This helps us connect form submissions to prior site visits. You can block this via your browser settings without any loss of site functionality.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Your rights</h2>
                            <p>You can request a copy of any data we hold about you, ask us to delete it, or ask us to stop using it. Email <a href="mailto:privacy@gtm-360.com" className="text-slate-900 font-medium hover:underline">privacy@gtm-360.com</a> and we'll respond within 5 business days.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-900 mb-3">Contact</h2>
                            <p>Questions about this policy: <a href="mailto:privacy@gtm-360.com" className="text-slate-900 font-medium hover:underline">privacy@gtm-360.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
