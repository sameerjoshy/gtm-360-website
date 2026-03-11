import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const B2BSalesConsulting = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="B2B Sales Consulting | Fix Pipeline, Win Rate & Forecast | GTM-360"
                description="B2B sales consulting for SaaS companies between $5M–$50M ARR. We diagnose why pipeline isn't converting, win rates are falling, or forecasts keep moving — and fix the underlying system."
                canonical="https://gtm-360.com/b2b-sales-consulting"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "B2B Sales Consulting",
                    "description": "B2B sales consulting that diagnoses why pipeline isn't converting, win rates are falling, or forecasts are unreliable — and fixes the underlying revenue system.",
                    "provider": { "@type": "Organization", "@id": "https://gtm-360.com/#organization", "name": "GTM-360" },
                    "serviceType": "B2B Sales Consulting",
                    "areaServed": "Worldwide"
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What does a B2B sales consultant do?", "acceptedAnswer": { "@type": "Answer", "text": "A B2B sales consultant diagnoses why a company's revenue system is underperforming and designs the fix. This is different from sales training, which focuses on rep skills. A sales consultant examines the system those reps work inside — ICP definition, pipeline stage design, qualification criteria, forecasting governance, and GTM alignment — and identifies the structural constraint preventing predictable revenue growth." } },
                        { "@type": "Question", "name": "When should a B2B company hire a sales consultant?", "acceptedAnswer": { "@type": "Answer", "text": "The clearest signal is a combination of two things: the pipeline looks healthy but revenue isn't moving, and adding more effort (headcount, tools, activity) is not producing proportional results. Other signals include declining win rates, forecast volatility that can't be explained, sales cycles that keep getting longer, and disagreement between marketing and sales about what's causing the problem." } },
                        { "@type": "Question", "name": "How is B2B sales consulting different from sales training?", "acceptedAnswer": { "@type": "Answer", "text": "Sales training improves how reps execute within the existing system. Sales consulting examines and redesigns the system itself. If stage definitions are wrong, training reps to advance deals faster makes the problem worse. If the ICP has drifted, better discovery skills don't fix the qualification problem. GTM-360's approach is always to diagnose the system constraint before building any fix." } },
                        { "@type": "Question", "name": "What causes B2B sales performance to decline?", "acceptedAnswer": { "@type": "Answer", "text": "The most common causes are: ICP drift (the pipeline fills with buyers outside the ideal profile), stage definitions that don't require buyer commitment (deals advance on seller optimism), messaging that no longer matches buyer priorities, forecast categories with inconsistent definitions across the team, and GTM misalignment where marketing and sales are optimising for different outcomes." } }
                    ]
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">B2B Sales Consulting · Pipeline · Win Rate · Forecast</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        B2B sales consulting.<br />Fix the system, not the team.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-6">
                        The team is executing. Close rates are still falling. Forecasts keep moving. Pipeline is growing and revenue isn't. This isn't a performance problem — it's a system problem.
                    </p>
                    <p className="text-lg text-slate-700 font-medium mb-8 max-w-2xl">
                        GTM-360 diagnoses the underlying constraint in your B2B revenue system — pipeline quality, ICP alignment, stage definition, forecast governance — and fixes it.
                    </p>
                    <p className="text-xs text-slate-400 mb-8">Former AWS COO · Dell revenue leadership · 20+ years in B2B · Series A–C engagements</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <Link to="/gtm-consulting" className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            Full GTM consulting overview →
                        </Link>
                    </div>
                </div>
            </section>

            {/* THE PROBLEMS WE FIX */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">The B2B sales problems we fix</h2>
                    <p className="text-lg text-slate-500 font-light mb-12">Each of these looks like a sales performance problem. Each one is actually a system problem.</p>
                    <div className="space-y-6">
                        {[
                            {
                                problem: "Pipeline is growing but revenue isn't",
                                root: "Stage definitions measure seller activity, not buyer commitment. Deals advance based on what the rep did — not what the buyer decided. The pipeline looks full because the stages say so, not because the deals are real.",
                                fix: "Redefine stage entry and exit criteria around buyer evidence. Pipeline shrinks initially, then win rates and forecast accuracy improve together.",
                                link: "/problems/stalled-growth",
                                insight: "/insights/stage-definition-problem"
                            },
                            {
                                problem: "Win rates are falling quarter over quarter",
                                root: "The most common cause is ICP drift — the pipeline has filled with buyers outside the original ideal profile. Often triggered by inbound that attracts adjacent personas, or product changes that open new use cases that haven't been evaluated for fit.",
                                fix: "Analyse win/loss data by segment to identify where the ICP has shifted. Redefine qualification criteria. Tighten pipeline entry to match the refined ICP.",
                                link: "/problems/pipeline-conversion",
                                insight: "/insights/icp-drift"
                            },
                            {
                                problem: "The forecast changes every week",
                                root: "Forecast volatility is a signal problem. When CRM stages don't require buyer evidence, reps apply different interpretations to what 'Commit' means. The forecast aggregates these incompatible inputs into a number that means nothing.",
                                fix: "Standardise commit criteria across the team. Build a forecast governance cadence. Add triangulation using pipeline, activity, and historical patterns.",
                                link: "/problems/forecast-volatility",
                                insight: "/insights/forecast-decay"
                            },
                            {
                                problem: "Sales cycles keep getting longer",
                                root: "Sales cycles lengthen when the buyer's decision structure isn't mapped in the sales motion. Reps are chasing champions who don't have authority, skipping economic buyers, or not surfacing procurement requirements until too late.",
                                fix: "Map the decision structure explicitly in qualification criteria. Require multi-threaded engagement before deals enter late stage. Add decision process questions to discovery.",
                                link: "/gtm-consulting",
                                insight: "/insights/solving-wrong-problem"
                            },
                            {
                                problem: "AI and tools increased activity but not revenue",
                                root: "AI accelerates the motion underneath it. If that motion is misaligned — wrong ICP, weak stage criteria, vague messaging — AI produces more volume of a broken process. Activity goes up. Win rates stay flat or decline.",
                                fix: "Diagnose the motion before re-enabling AI tooling. Fix ICP, messaging, and stage definitions first. Then use AI to amplify a validated system.",
                                link: "/services/gtm-signals-and-ai",
                                insight: "/insights/when-ai-makes-gtm-worse"
                            }
                        ].map((item, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-8 hover:shadow-sm transition-all">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div>
                                        <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">The symptom</p>
                                        <h3 className="text-base font-bold text-slate-900">{item.problem}</h3>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Root cause</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.root}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">The fix</p>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.fix}</p>
                                        <div className="flex flex-col gap-1">
                                            <Link to={item.insight} className="text-xs text-indigo-600 font-medium hover:underline">Read the analysis →</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT'S DIFFERENT */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">How B2B sales consulting at GTM-360 is different</h2>
                    <div className="space-y-8">
                        {[
                            {
                                heading: "Diagnosis before prescription",
                                body: "Most sales consultants arrive with a methodology they apply regardless of the actual problem. We spend the first 10–14 days finding the real constraint — through data analysis, team interviews, pipeline review, and CRM audit. The fix follows the diagnosis. Not the other way around."
                            },
                            {
                                heading: "System-level, not skills-level",
                                body: "We do not train salespeople. We fix the revenue system those salespeople work inside. Better reps executing a broken motion produce better execution of a broken motion. The constraint is almost always structural: how the ICP is defined, how pipeline stages work, how forecasts are built, how marketing and sales are aligned."
                            },
                            {
                                heading: "Implementation, not recommendations",
                                body: "The deliverable is a working system — not a slide deck or a playbook PDF. We implement the changes alongside your team: CRM reconfiguration, stage redesign, forecast cadence build, outbound infrastructure, reporting. We stay until it is running."
                            },
                            {
                                heading: "Direct, not layered",
                                body: "Sameer leads the diagnostic and design phases personally. There is no account management layer. The people diagnosing the problem are the same people designing the fix. Every engagement is staffed with specialists, not generalists who subcontract the work."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <span className="text-indigo-600 font-bold text-lg mt-0.5 flex-shrink-0">0{i + 1}</span>
                                <div>
                                    <h3 className="text-base font-bold text-slate-900 mb-2">{item.heading}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">{item.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROOF */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">B2B sales results from real engagements</h2>
                    <p className="text-slate-500 font-light mb-12">Companies anonymised. Every number is real.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            { metric: "14% → 22%", label: "Win rate", arr: "$14M ARR", tag: "Pipeline Quality", desc: "Pipeline was at 4× coverage. Revenue was flat. Stage criteria were measuring rep activity, not buyer commitment. Fixed the stage definitions. Win rate recovered in two quarters.", slug: "/insights/case-studies/pipeline-full-revenue-flat" },
                            { metric: "58% → 84%", label: "Forecast accuracy", arr: "$22M ARR · Series B", tag: "Forecasting", desc: "Eight reps. Eight definitions of 'Commit'. The forecast was averaging incompatible inputs. Standardised criteria, restructured forecast calls, added triangulation.", slug: "/insights/case-studies/forecast-board-wanted-predictability" },
                            { metric: "94 → 58 days", label: "Sales cycle", arr: "$9M ARR", tag: "ICP Alignment", desc: "Sales cycles had doubled. The product was built for operations buyers. Inbound had filled the pipeline with finance and HR buyers. Realigned ICP and tightened qualification.", slug: "/insights/case-studies/sales-cycle-doubled-icp-drift" }
                        ].map((cs) => (
                            <div key={cs.metric} className="border border-slate-200 rounded-xl p-8 flex flex-col hover:shadow-sm transition-all">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">{cs.tag}</span>
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-slate-900">{cs.metric}</span>
                                    <span className="text-sm text-slate-400 ml-2">{cs.label}</span>
                                </div>
                                <p className="text-xs text-slate-400 mb-3">{cs.arr}</p>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{cs.desc}</p>
                                <Link to={cs.slug} className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">B2B sales consulting — common questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "What does a B2B sales consultant do?", a: "A B2B sales consultant diagnoses why a company's revenue system is underperforming and designs the fix. This is different from sales training, which focuses on rep skills. A sales consultant examines the system those reps work inside — ICP definition, pipeline stage design, qualification criteria, forecasting governance — and identifies the structural constraint preventing predictable revenue growth." },
                            { q: "When should a B2B company hire a sales consultant?", a: "The clearest signal is a combination of two things: the pipeline looks healthy but revenue isn't moving, and adding more effort — headcount, tools, activity — is not producing proportional results. Other signals include declining win rates, forecast volatility that can't be explained, and disagreement between marketing and sales about what's causing the problem." },
                            { q: "How is B2B sales consulting different from sales training?", a: "Sales training improves how reps execute within the existing system. Sales consulting examines and redesigns the system itself. If stage definitions are wrong, training reps to advance deals faster makes the problem worse. If the ICP has drifted, better discovery skills don't fix the qualification problem." },
                            { q: "What causes B2B sales performance to decline?", a: "The most common causes are: ICP drift (the pipeline fills with buyers outside the ideal profile), stage definitions that don't require buyer commitment, messaging that no longer matches buyer priorities, forecast categories with inconsistent definitions across the team, and misalignment between what marketing optimises for and what sales needs to close." },
                            { q: "How quickly do results from B2B sales consulting show up?", a: "Stage and qualification changes show up in win rate and forecast accuracy within one to two quarters. Pipeline changes are visible faster because bad deals start getting removed or correctly categorised. Revenue impact from ICP realignment typically takes two to three quarters to fully materialise, as the pipeline rebuilds with better-fit opportunities." }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-slate-200 pb-8 last:border-0">
                                <h3 className="text-base font-bold text-slate-900 mb-3">{item.q}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELATED READING */}
            <section className="py-16 bg-white border-t border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Related reading</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "The Stage Definition Problem Nobody Talks About", slug: "/insights/stage-definition-problem", tag: "Insight" },
                            { title: "ICP Drift — The Silent Revenue Killer", slug: "/insights/icp-drift", tag: "Insight" },
                            { title: "Why Forecasts Decay Over Time", slug: "/insights/forecast-decay", tag: "Insight" }
                        ].map((a) => (
                            <Link key={a.slug} to={a.slug} className="border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-indigo-200 transition-all group">
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
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start with a B2B sales diagnostic.</h2>
                    <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">10–14 days. We find the real constraint in your revenue system. No pitch before the diagnosis.</p>
                    <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                        Start with the diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default B2BSalesConsulting;
