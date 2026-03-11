import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Talk to GTM-360 | No SDR, Direct Partner Conversation"
                description="Direct conversation with a partner. No SDR, no qualification layer. Book a call or use the Start Here form."
                canonical="https://gtm-360.com/contact"
            />

            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-2xl text-center">
                    <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Get in touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's talk.</h1>
                    <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                        Direct line to a partner. No SDR, no qualification layer.
                    </p>

                    <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 mb-8">
                        {/* Calendly inline embed */}
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/sameer-gtm-360/new-meeting?hide_gdpr_banner=1&primary_color=0f172a"
                            style={{ minWidth: '320px', height: '700px' }}
                        />
                        <script
                            type="text/javascript"
                            src="https://assets.calendly.com/assets/external/widget.js"
                            async
                        />
                    </div>

                    <p className="text-slate-400 text-sm">
                        Prefer to share context first?{' '}
                        <Link to="/start-here" className="text-slate-700 font-bold hover:underline">
                            Use the Start Here form →
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
