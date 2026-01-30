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
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                        Built from experience across startups and scaled GTM organizations.
                    </p>
                    <div className="bg-slate-50 p-10 rounded-xl inline-block text-left border border-slate-100">
                        <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                            I’ve spent years inside revenue teams — scaling, fixing, and rebuilding systems as companies grew. <br />
                            What I kept seeing was this gap:
                        </p>
                        <ul className="space-y-4 text-lg text-slate-800 font-bold mb-8 pl-4 border-l-4 border-slate-300">
                            <li>Strategy lived in decks</li>
                            <li>Execution lived in tools</li>
                            <li>Reality lived somewhere in between</li>
                        </ul>
                        <p className="text-lg text-slate-700">
                            GTM-360 exists to close that gap — with clarity, systems, and respect for the people doing the work.
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <span className="text-slate-400 font-mono uppercase text-xs tracking-widest pt-2">Values</span>
                            <span className="text-slate-900 font-medium">No mythology.</span>
                            <span className="text-slate-300 hidden sm:inline">|</span>
                            <span className="text-slate-900 font-medium">No guru positioning.</span>
                            <span className="text-slate-300 hidden sm:inline">|</span>
                            <span className="text-slate-900 font-medium">Bias toward clarity.</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
