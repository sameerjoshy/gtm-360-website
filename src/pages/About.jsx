import React from 'react';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="About | GTM-360"
                description="Operator-led. Built from experience across startups and scaled GTM orgs."
            />

            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-3xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Ethos</span>
                    <h1 className="text-4xl font-bold text-slate-900 mb-10">
                        Operator-led.
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Built from experience across startups and scaled GTM orgs.
                    </p>
                    <div className="bg-slate-50 p-8 rounded-xl inline-block text-left">
                        <ul className="space-y-4 text-lg text-slate-700 font-medium">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-slate-900 rounded-full"></span> No mythology.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-slate-900 rounded-full"></span> No guru positioning.
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-slate-900 rounded-full"></span> Just a bias toward clarity.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
