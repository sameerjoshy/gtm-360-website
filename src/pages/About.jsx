import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';



const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="About | GTM-360"
                description="GTM-360 is built by operators who've been in the room — not consultants who haven't."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Built by people who've been in the room.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Not consultants who study revenue systems from the outside. Operators who've run them, broken them, and fixed them — at companies that look a lot like yours.
                    </p>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Founder identity block */}
                        <div className="bg-slate-900 rounded-xl aspect-[4/5] flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-24 h-24 rounded-full bg-indigo-600 mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">SJ</div>
                                <p className="text-white font-bold text-lg">Sameer Joshi</p>
                                <p className="text-slate-400 text-sm mt-1">Founder, GTM-360</p>
                                <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer"
                                    className="inline-block mt-4 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors">
                                    LinkedIn →
                                </a>
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Founder</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-1">Sameer Joshi</h2>
                            <p className="text-indigo-600 font-medium mb-8">GTM-360</p>

                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>I've spent 20+ years inside global B2B revenue teams — not advising from the outside, but running them. As COO at AWS India I scaled the business to $500M ARR. As VP of Strategy and RevOps at Innovapptive I rebuilt the entire revenue engine of a Series B SaaS company — forecast accuracy up 70%, win rates up 10 points, expansion revenue unlocked. Before that, Dell and Amazon in the US, and two startups as a co-founder.</p>
                                <p>The pattern I kept seeing across all of it was the same: capable teams executing against an incomplete understanding of the problem. More pipeline, more tools, more headcount, more pressure. None of it working — because the diagnosis was wrong.</p>
                                <p className="font-medium text-slate-800">GTM-360 exists to fix the diagnosis first. Then fix the system. Then build it so it actually runs.</p>
                            </div>

                            <div className="mt-8 flex gap-6">
                                <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer"
                                    className="text-sm font-bold text-indigo-600 hover:underline">LinkedIn →</a>
                                <Link to="/start-here" className="text-sm font-bold text-slate-700 hover:underline">Work with us →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW ENGAGEMENTS ARE STAFFED */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">How engagements are staffed.</h2>
                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg font-light">
                        <p>Each engagement is staffed based on what needs to be built. CRM and pipeline work draws on RevOps specialists. Outbound infrastructure on sequencing and enrichment practitioners. Automation and AI signal layers on people who build these systems day-to-day.</p>
                        <p>You work directly with whoever is doing the work — there's no account management layer between you and the people actually building. The diagnostic and design phases are led by Sameer.</p>
                    </div>
                </div>
            </section>

            {/* HOW WE OPERATE */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">How we operate.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            { t: "Diagnosis before anything else", d: "We don't start building until we know what's actually broken. Fixing the wrong problem is expensive." },
                            { t: "We work with your team, not around them", d: "The people running the system need to understand it. We design with them — not for them." },
                            { t: "AI is a tool, not the answer", d: "We use AI and automation where they genuinely help. We don't lead with technology." },
                            { t: "We'll tell you if we can't help", d: "If the diagnostic shows we're not the right fit, we'll say so. We'd rather lose a deal than waste your time." }
                        ].map((v, i) => (
                            <div key={i} className="border border-slate-200 rounded-lg p-6">
                                <h3 className="font-bold text-slate-900 mb-2">{v.t}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{v.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container max-w-xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Want to have a conversation?</h2>
                    <p className="text-slate-500 mb-8 text-sm">Tell us what's happening. We'll tell you honestly if we can help.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Talk to us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
