import React from 'react';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Contact | GTM-360"
                description="Let’s talk. If you’re at an inflection point and want a clearer view of what’s next, start here."
            />

            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-2xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Get in touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                        Let’s talk.
                    </h1>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                        If you’re at an inflection point and want a clearer view of what’s next, start here.
                    </p>

                    <div className="bg-slate-50 p-8 rounded-xl border border-slate-100 shadow-sm inline-block w-full max-w-md">
                        {/* Placeholder for Booking Calendar (e.g., Cal.com/HubSpot) */}
                        <button className="btn bg-[var(--color-primary)] text-white w-full py-4 rounded font-bold hover:bg-indigo-700 transition-all mb-4">
                            Book a conversation
                        </button>
                        <p className="text-sm text-slate-400">
                            Direct line to a partner. No SDR qualification layer.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
