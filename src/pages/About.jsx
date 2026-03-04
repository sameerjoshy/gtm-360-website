import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const team = [
    {
        name: "[ Your Name ]",
        role: "Founder & Revenue Architect",
        domain: "GTM Strategy · Revenue Systems · Diagnostic",
        bio: "15+ years inside B2B revenue teams — scaling, fixing, and rebuilding systems through multiple growth cycles. Built GTM-360 because the gap between strategy and execution keeps showing up in the same places.",
        linkedin: "#",
        initials: "YN"
    },
    {
        name: "[ Specialist Name ]",
        role: "CRM & RevOps Architect",
        domain: "HubSpot · Salesforce · Pipeline Architecture",
        bio: "Specialist in CRM architecture, pipeline design, and revenue operations infrastructure for B2B SaaS teams at scale.",
        linkedin: "#",
        initials: "S1"
    },
    {
        name: "[ Specialist Name ]",
        role: "Outbound Infrastructure",
        domain: "Clay · Sequencing · Signal Enrichment",
        bio: "Builds outbound systems that run on buyer signals, not spray-and-pray volume. Clay-certified, multi-channel execution specialist.",
        linkedin: "#",
        initials: "S2"
    },
    {
        name: "[ Specialist Name ]",
        role: "AI & Automation Engineer",
        domain: "Workflow Automation · AI Agents · Systems Integration",
        bio: "Designs and implements automation layers that give revenue teams leverage — without adding operational noise.",
        linkedin: "#",
        initials: "S3"
    }
];

const About = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="About | GTM-360"
                description="Operator-led revenue architecture. Built from years inside real B2B revenue teams — not from consulting theory."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white">
                <div className="container max-w-4xl">
                    <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Who We Are</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        Operators who've<br />sat in the seat.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-light">
                        GTM-360 is not a consulting practice built on frameworks. It's built from years inside real revenue teams — scaling, fixing, and rebuilding systems as companies grew through the same inflection points we now help others navigate.
                    </p>
                </div>
            </section>

            {/* FOUNDER STORY */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        {/* Photo placeholder */}
                        <div className="bg-slate-200 rounded-xl aspect-[4/5] flex items-center justify-center">
                            <div className="text-center text-slate-400">
                                <div className="w-20 h-20 rounded-full bg-slate-300 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-500">
                                    [ Photo ]
                                </div>
                                <p className="text-sm">Add founder photo here</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Founder</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-2">[ Your Name ]</h2>
                            <p className="text-indigo-600 font-medium mb-8">Revenue Architect · GTM-360</p>

                            <div className="space-y-5 text-slate-600 leading-relaxed">
                                <p>
                                    I've spent [ X ] years inside B2B revenue teams — as an operator, not a consultant. I've built sales motions from scratch, rebuilt broken ones, hired and managed revenue teams, and sat in front of boards explaining why the numbers weren't tracking.
                                </p>
                                <p>
                                    What I kept seeing at the $10M–$30M stage was the same pattern: capable teams executing against an incomplete understanding of the problem. More pipeline. More tools. More pressure. None of it working — because the system underneath hadn't been designed. It had been improvised.
                                </p>
                                <p className="font-medium text-slate-800">
                                    GTM-360 exists to close that gap. With diagnosis first, then architecture, then implementation by specialists who've done it before.
                                </p>
                            </div>

                            <div className="mt-8 flex gap-4">
                                <a
                                    href="[ Your LinkedIn URL ]"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:underline"
                                >
                                    LinkedIn →
                                </a>
                                <Link to="/start-here" className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:underline">
                                    Work with us →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE SPECIALIST TEAM */}
            <section className="py-20 bg-white">
                <div className="container max-w-6xl">
                    <div className="mb-12">
                        <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">The Team</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Specialists at every layer.</h2>
                        <p className="text-lg text-slate-500 max-w-xl font-light">
                            Every engagement draws on specialists matched to what the system actually needs — not a generalist team stretched thin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {team.map((member, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-8 hover:border-indigo-200 transition-colors">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-slate-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">{member.name}</h3>
                                        <p className="text-sm text-indigo-600 font-medium">{member.role}</p>
                                        <p className="text-xs text-slate-400 mt-0.5">{member.domain}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-300 mt-6 italic text-center">⚠ Replace placeholder names with real team members + LinkedIn links before publishing.</p>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-4xl">
                    <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-8 block">How We Operate</span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Diagnosis before execution",
                                desc: "We don't start building until we understand the constraint. Executing against the wrong problem is expensive."
                            },
                            {
                                title: "Operators, not theorists",
                                desc: "Everything we recommend comes from having done it — not from frameworks built in isolation."
                            },
                            {
                                title: "AI as infrastructure, not magic",
                                desc: "We use AI and automation where they create genuine leverage. We don't lead with technology."
                            },
                            {
                                title: "The customer is the expert on their business",
                                desc: "We bring outside perspective and system design. We never pretend to know your business better than you do."
                            }
                        ].map((v, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">{v.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white border-t border-slate-100 text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to have an honest conversation?</h2>
                    <p className="text-slate-500 mb-8">No qualification layer. No sales deck. Direct conversation with a partner.</p>
                    <Link
                        to="/start-here"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all"
                    >
                        Start with a diagnostic
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
