import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const SeriesBGTM = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="Series B GTM Strategy | Revenue System After Series A | GTM-360"
                description="Series B GTM strategy consulting. The GTM motion that got you to Series A doesn't scale beyond it. We diagnose what's breaking and rebuild."
                canonical="https://gtm-360.com/series-b-gtm-strategy"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "Series B GTM Strategy",
                    "description": "GTM strategy consulting for post-Series B SaaS companies. Diagnose and fix the revenue system constraints that emerge when founder-led growth is no longer scaling.",
                    "provider": { "@type": "Organization", "@id": "https://gtm-360.com/#organization", "name": "GTM-360" },
                    "serviceType": "GTM Strategy Consulting",
                    "areaServed": "Worldwide",
                    "audience": { "@type": "Audience", "audienceType": "Series B SaaS founders and CROs" }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What GTM challenges are specific to post-Series B companies?", "acceptedAnswer": { "@type": "Answer", "text": "Post-Series B companies face a specific set of GTM challenges: the founder-led sales motion no longer scales, the ICP that drove initial growth has drifted as the product evolved, the revenue team has grown but roles and accountability are unclear, forecast volatility is increasing as deal complexity grows, and the board is demanding predictability the current system cannot produce. These are system problems, not execution problems." } },
                        { "@type": "Question", "name": "Why does GTM break at Series B?", "acceptedAnswer": { "@type": "Answer", "text": "The GTM motion that worked at Seed and Series A is typically founder-led, intuition-driven, and relationship-dependent. At Series B, you are trying to replicate that motion across a team of 15–30 people. The ICP is no longer implicit — it needs to be defined and enforced. Stage criteria need to mean the same thing to every rep. Forecasting needs to be a system, not a conversation. The transition from motion to system is where most Series B companies stall." } },
                        { "@type": "Question", "name": "When should a Series B company hire a GTM consultant?", "acceptedAnswer": { "@type": "Answer", "text": "The right time is when growth has plateaued despite the team executing, or when the board is asking questions about predictability that leadership cannot confidently answer. Common triggers: a new CRO hire who needs to diagnose the system before changing it, a missed quarter despite healthy-looking pipeline, or board pressure to show a path to more predictable revenue ahead of a Series C raise." } },
                        { "@type": "Question", "name": "What does GTM-360 do differently for Series B companies?", "acceptedAnswer": { "@type": "Answer", "text": "GTM-360 starts with a 10–14 day diagnostic to identify the specific constraint in the revenue system — not a generic framework applied to every company. Series B constraints are usually a combination of ICP drift (the early customers look different from recent wins), stage definitions that made sense at 5 reps but break at 15, and a forecasting process that was good enough for the board at Series A but is not holding up now." } }
                    ]
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Series B GTM Strategy · Revenue System Design · $10M–$50M ARR</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        The GTM that got you to Series A<br />
                        won't get you through Series B.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-6">
                        You have capital, headcount, and a product that works. But the revenue system built on founder instinct and early relationships doesn't scale to 20 reps across three segments. Something has to be redesigned.
                    </p>
                    <p className="text-lg text-slate-700 font-medium mb-8 max-w-2xl">
                        GTM-360 diagnoses what's breaking in post-Series B revenue systems — and rebuilds the parts that need to run without the founder in every deal.
                    </p>
                    <p className="text-xs text-slate-400 mb-8">Former AWS COO ($500M ARR scale) · Series B RevOps rebuild (+70% forecast accuracy) · 20+ years in B2B</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <Link to="/how-we-work" className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            How engagements work →
                        </Link>
                    </div>
                </div>
            </section>

            {/* THE SERIES B INFLECTION POINT */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">What actually breaks at Series B</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Series B is not a bigger version of Series A. It is a fundamentally different operating challenge. The commercial model that worked at $5M–$8M ARR stops producing at $15M–$25M ARR — not because the team got worse, but because the system was never designed to scale.
                    </p>
                    <div className="space-y-6">
                        {[
                            {
                                n: "01",
                                title: "The ICP has drifted — silently",
                                body: "The early customers that shaped your product roadmap look different from the buyers entering the pipeline today. Inbound has attracted adjacent personas. Partnerships brought in different verticals. The product evolved to serve use cases beyond the original design. Nobody updated the ICP definition. The sales team is now chasing buyers who take longer to close, churn faster, and generate more support tickets."
                            },
                            {
                                n: "02",
                                title: "Stage definitions that worked at 5 reps break at 15",
                                body: "When the founder or VP of Sales is in every deal, stage criteria can be implicit — everyone knows what a real Commit looks like. At 15 reps across two segments, implicit stage criteria produce 15 different interpretations. The pipeline shows 4× coverage. Forecasts look solid. And then Q3 ends with a miss because half the Commit column was optimism, not evidence."
                            },
                            {
                                n: "03",
                                title: "The forecasting process can't support board-level conversations",
                                body: "At Series A, the board accepted range estimates and founder judgment. At Series B, with institutional investors and a new CFO, the forecast needs to be a system — not a conversation. Volatility that was acceptable before is now a credibility problem. The fix requires rebuilding the underlying pipeline signal quality, not just improving the forecast call."
                            },
                            {
                                n: "04",
                                title: "Marketing and sales have decoupled",
                                body: "Early on, marketing and sales shared the same founders' understanding of who the customer was. As both teams grew independently, they optimised for different things. Marketing hit MQL targets. Sales said the leads were wrong. Customer success inherited accounts that sales should never have closed. The hand-off points became friction points — and nobody owns fixing them."
                            },
                            {
                                n: "05",
                                title: "The revenue motion is in people's heads, not documented",
                                body: "The sales motion works because three experienced AEs know how to navigate it intuitively. New hires take 6–9 months to ramp — twice as long as leadership expected — because the motion was never written down. Replication requires documentation. Documentation requires understanding what the motion actually is. Most Series B companies have never had to do this before."
                            }
                        ].map((item) => (
                            <div key={item.n} className="bg-white border border-slate-200 rounded-xl p-8">
                                <div className="flex gap-4 items-start">
                                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest flex-shrink-0 pt-1">{item.n}</span>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW WE WORK AT SERIES B */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">How a Series B GTM engagement works</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-10">
                        The engagement structure is the same as all GTM-360 work — Diagnostic, Architecture, Engineering — but the emphasis at Series B is typically on the first two phases.
                    </p>
                    <div className="space-y-8 mb-10">
                        {[
                            {
                                phase: "Diagnostic",
                                time: "10–14 days · standalone",
                                focus: "At Series B specifically, the diagnostic looks for: which ICP segments have the highest win rates and NRR vs. which segments are filling the pipeline; whether stage definitions mean the same thing to every rep; how the forecast is being built and where it is consistently wrong; where the marketing-to-sales handoff is breaking; and whether the revenue motion is documented enough to be replicable.",
                            },
                            {
                                phase: "Architecture",
                                time: "3–6 weeks",
                                focus: "The design phase at Series B usually covers at minimum: ICP redefinition grounded in current win rate and retention data; stage redesign with buyer-evidence criteria that can be enforced consistently; a forecasting governance model; and a documented revenue motion that new hires can learn from. Often also includes GTM alignment between marketing, sales, and CS on shared definitions and metrics.",
                            },
                            {
                                phase: "Engineering",
                                time: "6–16 weeks",
                                focus: "Implementation with specialists: CRM reconfiguration to support the new stage definitions, reporting build-out, outbound infrastructure if applicable, and AI tooling aligned to the validated motion. The priority at Series B is usually CRM and forecasting before outbound — because the system needs to be trustworthy before it can be scaled.",
                            }
                        ].map((p, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex-shrink-0 w-28 text-right">
                                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{p.phase}</span>
                                    <p className="text-xs text-slate-400 mt-1">{p.time}</p>
                                </div>
                                <div className="border-l-2 border-slate-200 pl-6 pb-6">
                                    <p className="text-slate-600 leading-relaxed text-sm">{p.focus}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6">
                        <p className="text-slate-700 font-medium">The Diagnostic is a standalone engagement. Many Series B founders and CROs start there — especially when a new revenue leader has just joined and needs an independent view of the system before making changes.</p>
                    </div>
                </div>
            </section>

            {/* PROOF */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Results from Series B and growth-stage engagements</h2>
                    <p className="text-slate-500 font-light mb-12">All companies anonymised. All numbers real.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { metric: "58% → 84%", label: "Forecast accuracy", context: "$22M ARR, Series B. Eight reps, eight different definitions of Commit. Rebuilt stage criteria and forecast cadence.", slug: "/insights/case-studies/forecast-board-wanted-predictability" },
                            { metric: "14% → 22%", label: "Win rate", context: "$14M ARR. 4× pipeline coverage, revenue flat. Stage definitions were measuring rep activity. Fixed the evidence criteria.", slug: "/insights/case-studies/pipeline-full-revenue-flat" },
                            { metric: "94 → 58 days", label: "Sales cycle", context: "$9M ARR. ICP had drifted from operations to finance buyers. Realigned ICP and tightened qualification to fit.", slug: "/insights/case-studies/sales-cycle-doubled-icp-drift" }
                        ].map((cs) => (
                            <div key={cs.metric} className="bg-white border border-slate-200 rounded-xl p-8 flex flex-col hover:shadow-sm transition-all">
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-slate-900">{cs.metric}</span>
                                    <span className="text-sm text-slate-400 ml-2">{cs.label}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{cs.context}</p>
                                <Link to={cs.slug} className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">Series B GTM — common questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "What GTM challenges are specific to post-Series B companies?", a: "Post-Series B companies face a specific set of system challenges: the founder-led sales motion no longer scales, the ICP has drifted as the product evolved, revenue team roles are unclear, forecast volatility is increasing as deal complexity grows, and the board is demanding predictability the current system cannot produce. These are structural problems, not execution problems." },
                            { q: "Why does GTM break at Series B?", a: "The GTM motion that worked at Seed and Series A is typically founder-led, intuition-driven, and relationship-dependent. At Series B, you are trying to replicate that motion across 15–30 people. The ICP needs to be defined and enforced — not just known intuitively. Stage criteria need to mean the same thing to every rep. Forecasting needs to be a system. The transition from motion to system is where most Series B companies stall." },
                            { q: "When should a Series B company hire a GTM consultant?", a: "The right time is when growth has plateaued despite the team executing, or when the board is asking questions the revenue team cannot confidently answer. Common triggers: a new CRO hire who needs an independent view before making changes, a missed quarter despite healthy-looking pipeline, or board pressure ahead of a Series C raise." },
                            { q: "Should a Series B company hire a fractional CRO or a GTM consultant?", a: "It depends on the gap. If the company lacks a CRO and needs ongoing senior revenue leadership, a fractional CRO makes sense. If the company has a CRO (or a VP of Sales acting in that role) but the revenue system needs to be diagnosed and redesigned, a GTM consultant is the right choice. GTM-360 runs defined engagements with clear deliverables — not an ongoing executive placement." },
                            { q: "How long does Series B GTM work take to show results?", a: "Stage and qualification changes typically show up in win rate and forecast accuracy within one to two quarters. Pipeline quality improvements are visible faster. ICP realignment takes two to three quarters to fully materialise as the pipeline rebuilds with better-fit opportunities. The Diagnostic phase produces an initial constraint diagnosis within 10–14 days." }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-slate-200 pb-8 last:border-0">
                                <h3 className="text-base font-bold text-slate-900 mb-3">{item.q}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Related reading</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Why Growth Stalls After Early Traction", slug: "/insights/why-growth-stalls", tag: "Insight" },
                            { title: "ICP Drift — The Silent Revenue Killer", slug: "/insights/icp-drift", tag: "Insight" },
                            { title: "The Hidden Cost of Solving the Wrong Problem", slug: "/insights/solving-wrong-problem", tag: "Insight" }
                        ].map((a) => (
                            <Link key={a.slug} to={a.slug} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-indigo-200 transition-all group">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">{a.tag}</span>
                                <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">{a.title}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start with the GTM diagnostic.</h2>
                    <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">10–14 days. Independent view of the constraint. Designed for Series B teams that need to know what's actually broken before changing anything.</p>
                    <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                        Start with the diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SeriesBGTM;
