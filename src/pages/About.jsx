import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const team = [
    {
        name: "[ Your Name ]",
        role: "Founder",
        domain: "GTM Strategy · Revenue Systems · Diagnostic",
        bio: "[ X ] years inside B2B revenue teams. Built sales motions from scratch, fixed broken ones, and sat in front of boards explaining why the numbers weren't moving. GTM-360 is built from that experience.",
        linkedin: "[ LinkedIn URL ]",
        initials: "YN"
    },
    {
        name: "[ Specialist Name ]",
        role: "CRM & RevOps",
        domain: "HubSpot · Salesforce · Pipeline Architecture",
        bio: "Builds CRM systems that reflect how revenue actually works — not how it's supposed to work on paper.",
        linkedin: "#",
        initials: "S1"
    },
    {
        name: "[ Specialist Name ]",
        role: "Outbound & Sequencing",
        domain: "Clay · Multi-channel · Enrichment",
        bio: "Builds outbound infrastructure on buyer signals, not volume. Runs on Clay and knows how to make it actually convert.",
        linkedin: "#",
        initials: "S2"
    },
    {
        name: "[ Specialist Name ]",
        role: "Automation & AI",
        domain: "Workflow Automation · AI Agents · Integrations",
        bio: "Automates the parts of your GTM that shouldn't require human time — without adding complexity to everything else.",
        linkedin: "#",
        initials: "S3"
    }
];

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
                        {/* Photo */}
                        <div className="bg-slate-100 rounded-xl aspect-[4/5] flex items-center justify-center">
                            <div className="text-center text-slate-400">
                                <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-slate-400">?</div>
                                <p className="text-sm">Add photo here</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Founder</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-1">[ Your Name ]</h2>
                            <p className="text-indigo-600 font-medium mb-8">GTM-360</p>

                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>I've spent [ X ] years inside B2B revenue teams. Not advising — running them. Building sales motions from scratch, rebuilding ones that had stopped working, hiring and managing revenue teams, and sitting in front of boards explaining why the numbers weren't where they needed to be.</p>
                                <p>The pattern I kept seeing was the same at every company that hit the $10M wall: the system that had worked stopped working, and nobody could quite name why. So they added more. More pipeline. More tools. More process. More pressure. None of it helped — because the diagnosis was wrong.</p>
                                <p className="font-medium text-slate-800">GTM-360 exists to fix the diagnosis first. Then fix the system. Then build it so it runs.</p>
                            </div>

                            <div className="mt-8 flex gap-6">
                                <a href="[ LinkedIn URL ]" target="_blank" rel="noopener noreferrer"
                                    className="text-sm font-bold text-indigo-600 hover:underline">LinkedIn →</a>
                                <Link to="/start-here" className="text-sm font-bold text-slate-700 hover:underline">Work with us →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 mb-3">The team behind the work.</h2>
                        <p className="text-slate-500 font-light max-w-xl">Every engagement draws on specialists matched to what needs to be built. You work with the people who actually do the work — not an account manager.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {team.map((m, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl p-7 hover:border-indigo-200 transition-colors">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-600 to-slate-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {m.initials}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{m.name}</h3>
                                        <p className="text-sm text-indigo-600 font-medium">{m.role}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{m.domain}</p>
                                    </div>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-300 mt-5 italic text-center">⚠ Replace placeholders with real names + LinkedIn links before publishing.</p>
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
