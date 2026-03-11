import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const GTMConsulting = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <SEO
                title="B2B GTM Consulting | Revenue System Diagnostics | GTM-360"
                description="GTM consulting for B2B SaaS companies at the growth plateau. We diagnose the real revenue constraint — pipeline quality, ICP drift, forecast volatility — and fix it. Series A–C engagements."
                canonical="https://gtm-360.com/gtm-consulting"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": "B2B GTM Consulting",
                    "description": "GTM consulting for B2B SaaS companies at the growth plateau. Diagnostic-first approach that identifies the real revenue constraint before building any fix.",
                    "provider": {
                        "@type": "Organization",
                        "@id": "https://gtm-360.com/#organization",
                        "name": "GTM-360"
                    },
                    "serviceType": "GTM Consulting",
                    "areaServed": "Worldwide",
                    "audience": {
                        "@type": "Audience",
                        "audienceType": "B2B SaaS founders and CROs, Series A to Series C"
                    }
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">GTM Consulting · B2B SaaS & Technology</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        B2B GTM consulting.<br />Diagnostic first. Fix second.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-8">
                        Most GTM consulting starts with a solution. We start with the problem. Because the thing that looks broken is rarely the thing that needs fixing.
                    </p>
                    <p className="text-xs text-slate-400 mb-8">20+ years in B2B GTM · Former AWS & Dell revenue leadership · Series A–C engagements</p>
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

            {/* WHAT IS GTM CONSULTING */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">What is GTM consulting?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        GTM (go-to-market) consulting is the practice of diagnosing and fixing the revenue system that connects a company's product to its customers. That system includes how you define your ideal customer, how your pipeline is structured, how deals progress through stages, how you forecast, how your team is aligned, and which tools actually help versus which ones add noise.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        GTM consulting is not sales training. It is not CRM implementation. It is not a marketing audit. It is a strategic diagnosis of why the revenue system is underperforming — followed by a structured fix.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The companies that benefit most from GTM consulting have already done the early work. They have product-market fit. They have a team. They have pipeline. But the system that got them to $5M–$10M is not producing the same results at $15M–$30M — and adding more people, tools, or activity is not moving the number.
                    </p>
                </div>
            </section>

            {/* WHEN YOU NEED A GTM CONSULTANT */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">When does a B2B company need a GTM consultant?</h2>
                    <p className="text-lg text-slate-500 font-light mb-12">The trigger is almost always one of these five situations.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                n: "01",
                                title: "Growth has stalled",
                                desc: "Revenue was growing predictably and has flattened. The team is working harder than ever, but the number isn't moving. This is the growth plateau — the point where the original GTM motion hits its ceiling and needs to be redesigned."
                            },
                            {
                                n: "02",
                                title: "Pipeline doesn't convert",
                                desc: "The pipeline looks healthy. Coverage is at 3× or 4×. But close rates are falling and late-stage deals keep slipping. Adding more pipeline at the top makes the problem worse. The constraint is qualification and stage definition, not volume."
                            },
                            {
                                n: "03",
                                title: "The forecast is unreliable",
                                desc: "Every forecast call ends with the same uncertainty. Committed deals get pushed. The board is asking questions the team can't confidently answer. Forecast volatility is a structural problem — it doesn't fix itself."
                            },
                            {
                                n: "04",
                                title: "You're preparing for the next stage",
                                desc: "Series A to Series B. Series B to Series C. A new CRO hire. A board-driven push to improve predictability. These transitions require the revenue system to be rebuilt, not just patched."
                            },
                            {
                                n: "05",
                                title: "The team is great but the system isn't",
                                desc: "You've ruled out people as the problem. The reps are good. Marketing is generating leads. CS is managing accounts. But the system they're working inside hasn't kept up with the business. This is the most common and most underdiagnosed GTM problem."
                            },
                            {
                                n: "06",
                                title: "AI and tools are adding noise, not signal",
                                desc: "The stack has grown. Sequences are automated. AI is scoring leads and summarising calls. Activity is up. But qualified pipeline hasn't grown and win rates are flat. AI accelerated a motion that was already broken."
                            }
                        ].map((item) => (
                            <div key={item.n} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-sm transition-all">
                                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block mb-3">{item.n}</span>
                                <h3 className="text-base font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW GTM-360 APPROACHES IT */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">How GTM-360 approaches GTM consulting</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Most GTM consultants arrive with a framework and apply it. We arrive with questions. The diagnosis comes before the solution — always. This matters because the thing that looks like the problem is almost never the real constraint.
                    </p>
                    <div className="space-y-8 mb-10">
                        {[
                            {
                                phase: "Phase 1",
                                title: "Diagnostic",
                                time: "10–14 days · standalone engagement",
                                desc: "We interview the revenue team, analyse pipeline data, examine CRM stage definitions, review forecast accuracy, and assess GTM motion alignment. We are looking for the real constraint — not the surface symptom. The output is a diagnosis with evidence, not a list of recommendations."
                            },
                            {
                                phase: "Phase 2",
                                title: "Architecture",
                                time: "3–6 weeks",
                                desc: "Once we know the constraint, we design the fix. This might be ICP redefinition, pipeline stage redesign, forecasting governance, operating model alignment, or tech stack rationalisation. Often it is a combination. We build the blueprint before touching anything."
                            },
                            {
                                phase: "Phase 3",
                                title: "Engineering",
                                time: "6–16 weeks",
                                desc: "Implementation with specialists. CRM configuration, outbound infrastructure, automation workflows, AI signal integration, reporting build-out. We do not hand over a slide deck. We stay until the system is working."
                            }
                        ].map((p, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-24 text-right">
                                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{p.phase}</span>
                                </div>
                                <div className="border-l-2 border-slate-200 pl-6 pb-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">{p.title}</h3>
                                    <p className="text-xs text-slate-400 mb-3">{p.time}</p>
                                    <p className="text-slate-600 leading-relaxed text-sm">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                        <p className="text-slate-700 font-medium">Each phase is a standalone engagement. You can start with the Diagnostic and decide what to do next. You are never committed to the full engagement before you know what you are getting into.</p>
                    </div>
                </div>
            </section>

            {/* WHAT WE FIX */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">What GTM-360 consulting covers</h2>
                    <p className="text-lg text-slate-500 font-light mb-12">The four areas we work in. Each engagement is scoped to the constraint we found in Phase 1.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "GTM Operating Model",
                                desc: "Align strategy, roles, and KPIs across marketing, sales, and customer success into a unified revenue engine. Remove the silos that cause forecast errors and execution gaps.",
                                link: "/services/gtm-operating-model"
                            },
                            {
                                title: "Pipeline Quality & Win Rate",
                                desc: "Fix stage definitions that allow deals to advance without buyer commitment. Improve win rates and forecast accuracy together by mapping pipeline stages to buyer behaviour.",
                                link: "/services/pipeline-quality"
                            },
                            {
                                title: "Forecasting & Revenue Governance",
                                desc: "Replace gut-feel pipeline reviews with structured governance. Build the models and cadences that produce numbers the board can trust.",
                                link: "/services/forecasting-governance"
                            },
                            {
                                title: "GTM Signals & AI Alignment",
                                desc: "Audit the stack and align AI tooling to the revenue motion. Reduce noise, fix data quality, and ensure technology amplifies decisions — not just activity.",
                                link: "/services/gtm-signals-and-ai"
                            }
                        ].map((s) => (
                            <Link key={s.title} to={s.link} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-indigo-200 transition-all group block">
                                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">{s.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                                <span className="text-indigo-600 text-sm font-bold group-hover:underline">Learn more →</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROOF */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Results from real GTM consulting engagements</h2>
                    <p className="text-slate-500 font-light mb-12">Companies anonymised. Every number is real.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                metric: "14% → 22%",
                                label: "Win rate",
                                context: "$14M ARR. The pipeline was full. Revenue was flat. Stage criteria were measuring rep activity, not buyer commitment.",
                                link: "/insights/case-studies/pipeline-full-revenue-flat"
                            },
                            {
                                metric: "58% → 84%",
                                label: "Forecast accuracy",
                                context: "$22M ARR, Series B. Eight reps, eight definitions of 'Commit'. The forecast was averaging incompatible inputs.",
                                link: "/insights/case-studies/forecast-board-wanted-predictability"
                            },
                            {
                                metric: "94 → 58 days",
                                label: "Sales cycle",
                                context: "$9M ARR. Sales cycles had doubled. The ICP had quietly drifted from operations buyers to finance and HR buyers.",
                                link: "/insights/case-studies/sales-cycle-doubled-icp-drift"
                            }
                        ].map((cs) => (
                            <div key={cs.metric} className="border border-slate-200 rounded-xl p-8 hover:shadow-sm transition-all flex flex-col">
                                <div className="mb-4">
                                    <span className="text-3xl font-bold text-slate-900">{cs.metric}</span>
                                    <span className="text-sm text-slate-400 ml-2">{cs.label}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6">{cs.context}</p>
                                <Link to={cs.link} className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10">Frequently asked questions about GTM consulting</h2>
                    <Helmet>
                        <script type="application/ld+json">{JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                { "@type": "Question", "name": "How is GTM consulting different from sales consulting?", "acceptedAnswer": { "@type": "Answer", "text": "Sales consulting typically focuses on the sales team — training, process, methodology, hiring. GTM consulting is broader: it covers the entire system connecting product to customer, including ICP definition, pipeline structure, forecasting governance, marketing-sales alignment, and technology. A GTM consultant diagnoses where the revenue system is breaking down, which may or may not be in the sales team." } },
                                { "@type": "Question", "name": "How long does a GTM consulting engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "The Diagnostic phase runs 10–14 days as a standalone engagement. If the full engagement follows, Architecture typically takes 3–6 weeks and Engineering 6–16 weeks depending on scope. Most clients see the first measurable results within 60–90 days of starting the Engineering phase." } },
                                { "@type": "Question", "name": "What is the difference between a GTM consultant and a fractional CRO?", "acceptedAnswer": { "@type": "Answer", "text": "A fractional CRO is an experienced revenue executive who fills the CRO role on a part-time basis. A GTM consultant typically runs a defined engagement to diagnose and fix a specific system problem, then steps back. GTM-360 operates as a consulting firm — a defined engagement with clear deliverables — rather than as an ongoing executive placement." } },
                                { "@type": "Question", "name": "Do you work with companies outside the US?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. GTM-360 works with B2B companies globally. Most engagements are conducted remotely with on-site sessions as needed." } },
                                { "@type": "Question", "name": "What size company benefits most from GTM consulting?", "acceptedAnswer": { "@type": "Answer", "text": "The highest-impact engagements are with B2B SaaS companies between $5M and $50M ARR — typically Series A or Series B — that have achieved product-market fit and built a sales team, but have hit a ceiling. At this stage, the revenue system that worked at $5M no longer produces the same results at $20M, and the fix requires strategic redesign rather than more headcount or tools." } }
                            ]
                        })}</script>
                    </Helmet>
                    <div className="space-y-8">
                        {[
                            { q: "How is GTM consulting different from sales consulting?", a: "Sales consulting typically focuses on the sales team — training, process, methodology. GTM consulting is broader: it covers the entire revenue system, including ICP definition, pipeline structure, forecasting governance, and marketing-sales alignment. A GTM consultant diagnoses where the system is breaking down, which may or may not be in the sales team." },
                            { q: "How long does a GTM consulting engagement take?", a: "The Diagnostic phase runs 10–14 days as a standalone engagement. Architecture typically takes 3–6 weeks and Engineering 6–16 weeks depending on scope. Most clients see the first measurable results within 60–90 days of starting the Engineering phase." },
                            { q: "What is the difference between a GTM consultant and a fractional CRO?", a: "A fractional CRO fills the CRO role on a part-time basis. A GTM consultant runs a defined engagement to diagnose and fix a specific system problem, then steps back. GTM-360 operates as a consulting firm — defined engagement, clear deliverables — rather than as an ongoing executive placement." },
                            { q: "What size company benefits most from GTM consulting?", a: "The highest-impact engagements are with B2B SaaS companies between $5M and $50M ARR — typically Series A or Series B — that have achieved product-market fit and built a team, but hit a ceiling. At this stage, the revenue system that worked at $5M no longer produces the same results at $20M." },
                            { q: "Do you work with companies outside the US?", a: "Yes. GTM-360 works with B2B companies globally. Most engagements are conducted remotely with on-site sessions as needed." }
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
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start with the diagnostic.</h2>
                    <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">
                        A standalone 10–14 day engagement to find the real constraint. You are never committed to the full engagement until you know what you are getting into.
                    </p>
                    <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                        Start with the diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default GTMConsulting;
