import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';



const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="About GTM-360 | B2B GTM Consultant · Former AWS & Dell"
                description="20+ years running B2B revenue teams at AWS, Dell, and Series B SaaS. GTM-360 is a GTM consulting firm that diagnoses the real constraint before building the fix."
                canonical="https://gtm-360.com/about"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "@id": "https://gtm-360.com/about#sameer",
                    "name": "Sameer Joshi",
                    "jobTitle": "Founder & GTM Consultant",
                    "worksFor": { "@id": "https://gtm-360.com/#organization" },
                    "description": "20+ years running B2B revenue teams including roles at AWS and Dell. Founder of GTM-360, a GTM consulting firm for B2B SaaS companies.",
                    "sameAs": ["https://www.linkedin.com/in/sameerjoshy"],
                    "url": "https://gtm-360.com/about",
                    "knowsAbout": ["GTM consulting", "B2B sales", "revenue operations", "sales forecasting", "pipeline management", "ICP definition"]
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Former AWS COO · Dell · Series B RevOps · 20+ Years B2B</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Built by people who've been in the room.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
                        Not consultants who study revenue systems from the outside. Operators who've run them, broken them, and fixed them — at companies that look a lot like yours.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                        {[
                            { label: "AWS India COO", sub: "Scaled to $500M ARR" },
                            { label: "Innovapptive VP RevOps", sub: "+70% forecast accuracy" },
                            { label: "Dell & Amazon", sub: "US enterprise revenue" },
                            { label: "2× SaaS co-founder", sub: "Series A–B" }
                        ].map((c, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3">
                                <p className="font-bold text-slate-900 text-xs">{c.label}</p>
                                <p className="text-slate-500 text-xs">{c.sub}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-400 mt-5">
                        Background independently verifiable on{" "}
                        <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">LinkedIn</a>.
                    </p>
                </div>
            </section>

            {/* FOUNDER */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Founder photo */}
                        <div className="rounded-xl overflow-hidden aspect-[4/5] bg-slate-100">
                            <img
                                src="/sameer-joshi.jpg"
                                alt="Sameer Joshi — Founder, GTM-360"
                                className="w-full h-full object-cover object-top"
                            />
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

                            <div className="mt-8 flex gap-6 items-center">
                                <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 border border-indigo-200 bg-indigo-50 px-4 py-2 rounded hover:bg-indigo-100 transition-all">
                                    Verify on LinkedIn →
                                </a>
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
                    <p className="text-xs text-slate-400 mt-5">
                        Background independently verifiable on{" "}
                        <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">LinkedIn</a>.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50 border-t border-slate-100 text-center">
                <div className="container max-w-xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Want to have a conversation?</h2>
                    <p className="text-slate-500 mb-8 text-sm">Tell us what's happening. We'll tell you honestly if we can help.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Start with the diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
