import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Contact | GTM-360"
                description="Direct conversation with a partner. No SDR, no qualification layer."
            />

            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-2xl text-center">
                    <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Get in touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Let's talk.</h1>
                    <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed">
                        Direct line to a partner. No SDR qualification layer.
                    </p>

                    <div className="bg-slate-50 p-10 rounded-xl border border-slate-200 mb-8">
                        {/* REPLACE THIS with your Cal.com or Calendly embed */}
                        {/* Example Cal.com: <Cal calLink="your-username/30min" /> */}
                        {/* Example Calendly: <InlineWidget url="https://calendly.com/your-link" /> */}
                        <p className="text-slate-400 text-sm mb-6 italic">⚠ Add your Cal.com or Calendly booking link here</p>
                        <a
                            href="mailto:hello@gtm-360.com"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all w-full mb-3"
                        >
                            Email us directly
                        </a>
                        <p className="text-xs text-slate-400">hello@gtm-360.com — we respond within one business day</p>
                    </div>

                    <p className="text-slate-400 text-sm">
                        Prefer to share context first?{' '}
                        <Link to="/start-here" className="text-slate-700 font-bold hover:underline">Use the Start Here form →</Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Contact;
