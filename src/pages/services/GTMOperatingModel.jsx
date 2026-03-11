import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GTMOperatingModel = () => (
    <div className="min-h-screen bg-white font-sans text-slate-900">
        <SEO
            title="GTM Operating Model Consulting | Revenue System Design | GTM-360"
            description="GTM operating model consulting for B2B companies. We align strategy, roles, and KPIs into a unified revenue engine and eliminate the silos slowing growth."
            canonical="https://gtm-360.com/services/gtm-operating-model"
        />
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": ["Service", "Product"],
                "name": "GTM Operating Model Realignment",
                "description": "GTM operating model consulting for B2B companies. Aligns strategy, roles, and KPIs across marketing, sales, and customer success into a unified revenue engine.",
                "provider": { "@type": "Organization", "@id": "https://gtm-360.com/#organization" },
                "serviceType": "GTM Operating Model Consulting"
            })}</script>
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is a GTM operating model?", "acceptedAnswer": { "@type": "Answer", "text": "A GTM operating model is the system of accountabilities, metrics, meeting cadences, and decision rights that governs how a company takes its product to market. It defines how marketing, sales, and customer success operate as a unified revenue engine — including who owns what, how teams are measured, how information flows across functions, and how strategic decisions are made and executed." } },
                    { "@type": "Question", "name": "Why does GTM alignment break down at growth stage?", "acceptedAnswer": { "@type": "Answer", "text": "GTM alignment breaks down because functional teams scale independently and optimise for their own metrics. Marketing optimises for MQL volume. Sales optimises for pipeline and closed revenue. Customer success optimises for renewals. Without shared definitions, shared accountability, and shared metrics, these functions develop competing priorities. The result is friction at every handoff: MQLs that sales ignores, deals that CS inherits without context, and strategy that takes quarters to reach the front line." } },
                    { "@type": "Question", "name": "What does GTM-360's operating model engagement produce?", "acceptedAnswer": { "@type": "Answer", "text": "The engagement produces three outputs: a documented operating model with defined roles, decision rights, and accountability structure; a metrics framework with shared definitions across marketing, sales, and CS; and a redesigned cadence system — weekly, monthly, and quarterly rhythms that enforce alignment rather than create overhead." } }
                ]
            })}</script>
        </Helmet>

        {/* HERO */}
        <section className="pt-32 pb-20 bg-white border-b border-slate-100">
            <div className="container max-w-3xl">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">GTM Operating Model · Revenue System Design</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    GTM Operating Model Realignment
                </h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-6">
                    Marketing hits its MQL target. Sales misses revenue. Customer success inherits accounts that shouldn't have been closed. The team is executing — but against different definitions of success.
                </p>
                <p className="text-lg text-slate-700 font-medium mb-8 max-w-2xl">
                    We align strategy, roles, and KPIs into a unified revenue engine. Not by reorganising the org chart — by redesigning the operating model that sits underneath it.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">Start with the diagnostic →</Link>
                    <Link to="/gtm-consulting" className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">GTM consulting overview →</Link>
                </div>
            </div>
        </section>

        {/* WHAT IT IS */}
        <section className="py-20 bg-white">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What is a GTM operating model?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    A GTM operating model is the system of accountabilities, metrics, cadences, and decision rights that governs how your company takes its product to market. It defines how marketing, sales, and customer success operate as a single revenue engine — not as three separate departments that hand work to each other.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Most B2B companies build their operating model implicitly — through early hires, founder habits, and whatever worked last quarter. That implicit model scales well to about $8M–$12M ARR. After that, it starts generating friction: misaligned metrics, unclear decision rights, handoffs that lose context, and strategy that takes two quarters to reach the front line.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                    GTM operating model realignment makes the implicit explicit — and then redesigns the parts that are producing friction rather than velocity.
                </p>
            </div>
        </section>

        {/* SYMPTOMS */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What GTM misalignment looks like</h2>
                <p className="text-lg text-slate-500 font-light mb-12">These symptoms share a common root: functions that are measuring and optimising for different things.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { symptom: "Marketing hits MQL targets, sales misses revenue", cause: "Marketing is measured on volume metrics that don't correlate with what sales needs to close. The ICP that drives MQL volume is different from the ICP that drives revenue." },
                        { symptom: "Customer success inherits accounts they can't retain", cause: "Sales closed deals that looked good on paper but were outside the ICP. CS inherits the churn risk without the context of how the deal was sold or what was promised." },
                        { symptom: "Strategic initiatives take quarters to execute", cause: "Decision rights are unclear. The org chart says one thing; the actual decision flow says another. Each functional leader has veto authority over things that technically sit in another function." },
                        { symptom: "The forecast changes even though the process looks right", cause: "The forecast process is only as good as the pipeline data feeding it. If stage definitions aren't shared and enforced across the revenue team, the process produces noise." },
                        { symptom: "New hires take 6–9 months to ramp", cause: "The revenue motion is in people's heads, not documented. What looks like a standard sales process is actually a set of individual approaches that happen to produce similar outcomes — until the person teaching them leaves." },
                        { symptom: "Revenue leadership disagrees on what the real problem is", cause: "Without shared metrics and shared definitions, each function diagnoses the same problem differently. Marketing sees a sales effectiveness problem. Sales sees a lead quality problem. Both are partially right — and neither can fix it alone." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-xl p-7">
                            <p className="text-xs font-bold text-red-500 uppercase tracking-widest mb-2">Symptom</p>
                            <h3 className="text-sm font-bold text-slate-900 mb-3">{item.symptom}</h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Root cause</p>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.cause}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="py-20 bg-white">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What a GTM operating model engagement produces</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">The engagement produces three documented outputs — not slides, but working systems that the team uses after we leave.</p>
                <div className="space-y-8">
                    {[
                        { n: "01", title: "Accountability & decision rights map", body: "A clear document of who owns what in the revenue system — not the org chart (which describes reporting), but the actual decision rights: who can block, who must be consulted, who decides. Includes the ICP definition, pipeline criteria, forecast governance, and handoff standards." },
                        { n: "02", title: "Shared metrics framework", body: "A single set of metrics and definitions shared across marketing, sales, and CS. Includes: how MQLs are defined and measured against downstream conversion, how pipeline is qualified and staged, how revenue is forecasted, and how expansion and retention are tracked. Built so that each function can see its contribution to the shared outcome." },
                        { n: "03", title: "Redesigned operating cadence", body: "The meeting and review system that keeps the operating model running. Includes weekly deal reviews, monthly performance reviews, quarterly planning cycles, and the specific agenda formats, data requirements, and decision outputs for each. The goal is a cadence that produces alignment as a byproduct, not as an additional workload." }
                    ].map(item => (
                        <div key={item.n} className="flex gap-6">
                            <span className="text-indigo-600 font-bold text-lg flex-shrink-0 mt-0.5">{item.n}</span>
                            <div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* PROOF */}
        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Results from operating model engagements</h2>
                <p className="text-slate-500 font-light mb-10">Operating model fixes tend to show up in forecast accuracy and sales cycle first, then in win rate and NRR over subsequent quarters.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { metric: "2 quarters", label: "to stable forecast", desc: "After rebuilding shared stage definitions and forecasting governance, a $22M ARR Series B achieved consistent forecast accuracy above 80%.", slug: "/insights/case-studies/forecast-board-wanted-predictability" },
                        { metric: "58 days", label: "avg sales cycle (from 94)", desc: "ICP and operating model realignment at a $9M ARR company. Marketing and sales had been optimising for different buyer profiles for 18 months.", slug: "/insights/case-studies/sales-cycle-doubled-icp-drift" },
                        { metric: "14% → 22%", label: "win rate", desc: "Pipeline operating model fix — stage definitions rebuilt around buyer evidence. A $14M ARR company saw win rates recover in two quarters.", slug: "/insights/case-studies/pipeline-full-revenue-flat" }
                    ].map(cs => (
                        <div key={cs.metric} className="bg-white border border-slate-200 rounded-xl p-7 flex flex-col">
                            <div className="mb-3"><span className="text-3xl font-bold text-slate-900">{cs.metric}</span><span className="text-sm text-slate-400 ml-2">{cs.label}</span></div>
                            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{cs.desc}</p>
                            <Link to={cs.slug} className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Common questions</h2>
                <div className="space-y-8">
                    {[
                        { q: "What is a GTM operating model?", a: "A GTM operating model is the system of accountabilities, metrics, meeting cadences, and decision rights that governs how your company takes its product to market. It defines how marketing, sales, and customer success operate as a unified revenue engine — including who owns what, how teams are measured, how information flows across functions, and how decisions are made and executed." },
                        { q: "Why does GTM alignment break down at growth stage?", a: "GTM alignment breaks down because functional teams scale independently and optimise for their own metrics. Marketing optimises for MQL volume. Sales optimises for pipeline. CS optimises for renewals. Without shared definitions and shared accountability, these functions develop competing priorities — producing friction at every handoff." },
                        { q: "How long does a GTM operating model engagement take?", a: "The operating model engagement typically runs 6–10 weeks. The first two weeks cover the diagnostic and current-state mapping. Weeks 3–6 cover the redesign and documentation. The final phase covers adoption — facilitating the first operating cadence cycles to make sure the new system actually runs." },
                        { q: "Does this require a reorganisation?", a: "No. GTM operating model realignment is almost never about changing the org chart. It is about redefining how the existing structure works — what gets measured, who decides what, how information flows, and how teams are held accountable to shared outcomes. The org chart is usually fine; the operating model underneath it usually isn't." }
                    ].map((item, i) => (
                        <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
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
                        { title: "Why Growth Stalls After Early Traction", href: "/insights/why-growth-stalls", tag: "Insight" },
                        { title: "The Hidden Cost of Solving the Wrong Problem", href: "/insights/solving-wrong-problem", tag: "Insight" },
                        { title: "Series B GTM Strategy", href: "/series-b-gtm-strategy", tag: "Overview" }
                    ].map(a => (
                        <Link key={a.href} to={a.href} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-indigo-200 transition-all group">
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start with the diagnostic.</h2>
                <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">We identify the specific alignment constraint before designing any fix.</p>
                <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">Start with the diagnostic →</Link>
            </div>
        </section>
    </div>
);

export default GTMOperatingModel;
