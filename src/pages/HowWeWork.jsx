import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PlanningCycleMinimal from '../components/visuals/PlanningCycleMinimal';
import EngagementTimeline from '../components/visuals/EngagementTimeline';

const HowWeWork = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="GTM Consulting Process: Diagnose, Design, Build | GTM-360"
                description="How GTM-360 works: a 3-phase consulting engagement that starts with diagnosis, not assumptions. Find the real constraint, design the fix, build it."
                canonical="https://gtm-360.com/how-we-work"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "How GTM-360 Works: B2B GTM Consulting Engagement",
                    "description": "A 3-phase GTM consulting engagement that starts with diagnosis and ends with a working revenue system.",
                    "step": [
                        {
                            "@type": "HowToStep",
                            "position": 1,
                            "name": "Phase 1: Diagnostic",
                            "text": "A standalone 10–14 day engagement to identify the real revenue constraint. We interview the team, analyse pipeline data, review CRM stage definitions, examine forecast accuracy, and assess GTM motion alignment. Output: a constraint diagnosis with evidence."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 2,
                            "name": "Phase 2: Architecture",
                            "text": "Design the revenue system fix. We redefine the ICP, redesign pipeline stages, build a forecasting governance model, align the GTM operating model, and establish the metrics framework. Output: a revenue system blueprint."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 3,
                            "name": "Phase 3: Engineering",
                            "text": "Implement the fix with specialists. We configure the CRM, build outbound infrastructure, set up automation workflows, integrate AI signals, and build reporting. We stay until it is working."
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How long does a GTM consulting engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "The Diagnostic phase is a standalone 10–14 day engagement. Architecture typically runs 3–6 weeks. Engineering runs 6–16 weeks. Most companies start with the Diagnostic only." } },
                        { "@type": "Question", "name": "What does the GTM diagnostic cover?", "acceptedAnswer": { "@type": "Answer", "text": "The diagnostic reviews ICP definition, pipeline stage criteria, forecast governance, GTM alignment between marketing/sales/CS, and any AI or tooling in the motion. Output is a written constraint diagnosis." } },
                        { "@type": "Question", "name": "What is the difference between a GTM consultant and a fractional CRO?", "acceptedAnswer": { "@type": "Answer", "text": "A fractional CRO provides ongoing executive revenue leadership. A GTM consultant runs defined diagnostic and design engagements with specific deliverables and end dates. GTM-360 runs engagements, not ongoing placements." } }
                    ]
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        We work alongside your team.<br />Not above it.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Think of us as a senior GTM partner — someone who's been in these conversations before, knows what to look for, and can work with your team to fix what's actually in the way.
                    </p>
                </div>
            </section>

            {/* THE THREE PHASES */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl space-y-6">

                    {[
                        {
                            phase: "Phase 1",
                            color: "emerald",
                            title: "Find what's actually broken",
                            duration: "10–14 days",
                            body: "Before we touch anything, we find the real constraint. Not the one that looks most obvious — the one that's actually causing the problem. Most teams we talk to have already tried the obvious fix. More pipeline. Better tools. New process. It hasn't worked because the diagnosis was wrong.\n\nWe spend 10 to 14 days examining how your revenue system actually behaves — pipeline quality, how deals move, where they stall, whether your ICP still matches who you're selling to, and whether your forecast reflects reality.\n\nAt the end, you get a clear read on what's actually in the way. No obligation to continue.",
                            gets: ["The real constraint, clearly named", "Why previous fixes didn't stick", "What needs to change first — and what can wait", "An honest view of what it will take"],
                            link: "/start-here",
                            cta: "Start with the diagnostic"
                        },
                        {
                            phase: "Phase 2",
                            color: "indigo",
                            title: "Design the fix",
                            duration: "Typically 4–8 weeks",
                            body: "Once we know the constraint, we redesign the parts of the revenue system that are causing it. This might be pipeline stage definitions. It might be the ICP. It might be how marketing and sales hand off to each other, or how you run your weekly forecast call.\n\nWe design the fix with your team — not for them. The people running the system need to understand it and believe in it, or it won't hold.",
                            gets: ["GTM operating model redesign", "ICP and segmentation clarity", "Pipeline and stage architecture", "Handoff protocols and governance", "The metrics that actually matter"],
                            link: "/start-here",
                            cta: "Talk about your situation"
                        },
                        {
                            phase: "Phase 3",
                            color: "violet",
                            title: "Build it",
                            duration: "Depends on scope",
                            body: "A good system design on paper doesn't help anyone. Our specialists build the changes — CRM architecture, outbound infrastructure, automation workflows, AI signal layers, reporting. You don't manage a list of vendors. We own the implementation end to end.\n\nWhen it's done, your team has a running system they understand and can operate — not a set of slides.",
                            gets: ["CRM rebuilt around the new model", "Outbound infrastructure and sequencing", "Automation that reduces manual work", "Reporting that reflects real performance", "Handover with documentation and training"],
                            link: "/start-here",
                            cta: "Start with the diagnostic"
                        }
                    ].map((phase, i) => (
                        <div key={i} className={`bg-white rounded-xl p-8 md:p-10 border border-slate-200 hover:border-${phase.color}-200 transition-colors`}>
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{phase.phase}</span>
                                <span className={`text-xs font-bold text-${phase.color}-600 uppercase tracking-widest`}>·</span>
                                <span className="text-xs text-slate-400">{phase.duration}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-5">{phase.title}</h3>
                            {phase.body.split('\n\n').map((para, j) => (
                                <p key={j} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                            ))}
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What you get</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {phase.gets.map((g, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className={`text-${phase.color}-500 font-bold mt-0.5`}>✓</span> {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Link to={phase.link} className={`text-${phase.color}-700 font-bold text-sm hover:underline`}>{phase.cta} →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW WE THINK */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">

                    {/* Timeline visual */}
                    <div className="mb-16">
                        <EngagementTimeline />
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How we think about every engagement</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Every conversation we have — whether it's a diagnostic call or a quarterly review — starts from the same five questions. It keeps us honest and stops us from jumping to solutions before we've understood the problem.
                            </p>
                            <div className="space-y-3">
                                {["Where are we, really?", "How did we get here?", "Where could we be?", "How do we get there?", "Are we getting there?"].map((q, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-slate-200 w-5">{i + 1}</span>
                                        <span className="text-slate-700">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <PlanningCycleMinimal />
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-xl mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">What we build in Phase 3.</h2>
                        <p className="text-slate-500 leading-relaxed">Each engagement is scoped to the constraint we found in Phase 1. These are the four areas we work in.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            {
                                title: "GTM Operating Model",
                                desc: "Align strategy, roles, handoffs, and KPIs into a single system. Fix the friction between marketing, sales, and customer success that kills velocity.",
                                link: "/services/gtm-operating-model"
                            },
                            {
                                title: "Pipeline & Deal Quality",
                                desc: "Rebuild stage definitions around buyer commitment, not seller activity. Fix the inflated pipeline that produces optimistic forecasts and missed targets.",
                                link: "/services/pipeline-quality"
                            },
                            {
                                title: "Forecasting & Governance",
                                desc: "Replace gut-feel forecasts with a model that reflects how deals actually move. Install the governance that keeps it honest over time.",
                                link: "/services/forecasting-governance"
                            },
                            {
                                title: "GTM Signals & AI",
                                desc: "Audit your stack, reduce noise, and wire AI to actual decisions. Tools should amplify good judgment — not replace it or add confusion.",
                                link: "/services/gtm-signals-and-ai"
                            }
                        ].map((s, i) => (
                            <Link key={i} to={s.link}
                                className="group border border-slate-200 rounded-xl p-7 hover:border-slate-900 hover:shadow-md transition-all block">
                                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <span className="text-xs font-bold text-slate-400 group-hover:text-slate-900 transition-colors">See details →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


            {/* FAQ */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">How GTM-360 engagements work — common questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "How long does a GTM consulting engagement take?", a: "The Diagnostic phase is a standalone 10–14 day engagement. Architecture (design) typically runs 3–6 weeks depending on scope. Engineering (implementation) runs 6–16 weeks. Most companies start with the Diagnostic only — it produces a findings report and a clear recommendation for what to do next. Whether to proceed with Architecture and Engineering is a separate decision." },
                            { q: "What does the GTM diagnostic actually cover?", a: "The diagnostic reviews: ICP definition and how well current pipeline matches it; pipeline stage criteria and whether they require buyer evidence or seller activity; forecast governance and accuracy patterns; GTM alignment between marketing, sales, and customer success; and any AI or tooling deployed on top of the motion. The output is a written constraint diagnosis — what's actually blocking revenue growth and why." },
                            { q: "Do you work with companies that already have a CRO or VP of Sales?", a: "Yes — most of our engagements are with companies that already have a revenue leader. We work alongside existing leadership as an independent diagnostic and design partner, not as a replacement. Many CROs and VPs of Sales use the diagnostic as an independent verification of their own read of the system — particularly when they're new to the role and need an external view before making changes." },
                            { q: "What's the difference between a GTM consultant and a fractional CRO?", a: "A fractional CRO provides ongoing executive revenue leadership. A GTM consultant runs defined diagnostic and design engagements with specific deliverables and end dates. GTM-360 runs engagements, not ongoing placements. The output is a working system, not an executive relationship." },
                            { q: "How do you measure whether the engagement worked?", a: "We define success metrics before the engagement starts — specific, measurable outcomes tied to the constraint we identified. For pipeline quality work: win rate and forecast accuracy. For operating model work: sales cycle length and MQL-to-revenue conversion. For forecasting work: forecast accuracy variance. Every engagement has a written definition of what 'it worked' looks like." }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-slate-200 pb-8 last:border-0">
                                <h3 className="text-base font-bold text-slate-900 mb-3">{item.q}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which phase applies to you?</h2>
                    <p className="text-slate-500 mb-10">Most engagements start with a conversation. Tell us what's happening and we'll tell you what we'd suggest.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Start with the diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
