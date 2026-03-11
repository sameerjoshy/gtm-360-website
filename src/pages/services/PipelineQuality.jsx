import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PipelineQuality = () => (
    <div className="min-h-screen bg-white font-sans text-slate-900">
        <SEO
            title="B2B Pipeline Quality & Win Rate Improvement | GTM-360"
            description="Fix B2B pipeline quality: define stage entry/exit criteria that map to buyer commitment, not seller activity. Improve win rates and forecast accuracy together."
            canonical="https://gtm-360.com/services/pipeline-quality"
        />
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Pipeline Quality & Win Rate Improvement",
                "description": "B2B pipeline quality consulting. Rebuild stage definitions around buyer evidence to improve win rates and forecast accuracy together.",
                "provider": { "@type": "Organization", "@id": "https://gtm-360.com/#organization" },
                "serviceType": "B2B Pipeline Consulting"
            })}</script>
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What is B2B pipeline quality?", "acceptedAnswer": { "@type": "Answer", "text": "B2B pipeline quality refers to the degree to which deals in the pipeline represent genuine buyer intent and commitment at each stage. A high-quality pipeline has stage criteria that require documented buyer evidence — a confirmed problem, an identified economic buyer, a known decision process — not just a rep completing an activity. Low pipeline quality means deals advance based on seller optimism rather than buyer behaviour, producing high pipeline coverage with low win rates." } },
                    { "@type": "Question", "name": "Why does high pipeline coverage produce low win rates?", "acceptedAnswer": { "@type": "Answer", "text": "High pipeline coverage with low win rates is almost always a stage definition problem. When stages are defined by seller activities — sent demo, had discovery call, submitted proposal — deals can advance regardless of whether the buyer is genuinely engaged. The pipeline fills with deals that look real by the CRM's criteria but aren't real by any buyer behaviour criteria. Adding more pipeline at the top makes the problem worse, not better." } },
                    { "@type": "Question", "name": "How do you improve B2B win rates?", "acceptedAnswer": { "@type": "Answer", "text": "The most reliable way to improve B2B win rates is to rebuild stage definitions around buyer evidence rather than seller activity. This means: defining what the buyer must have done or confirmed at each stage before the deal can advance, removing deals that can't meet those criteria, and training managers to inspect deals against buyer evidence rather than rep activity. Win rates improve because the pipeline shrinks to deals that actually have a buyer — and the team's time concentrates on those deals." } }
                ]
            })}</script>
        </Helmet>

        <section className="pt-32 pb-20 bg-white border-b border-slate-100">
            <div className="container max-w-3xl">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Pipeline Quality · Win Rate · Stage Design</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Pipeline Quality & Win Rate Improvement</h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-6">
                    4× pipeline coverage. Missing targets. Win rates falling quarter over quarter. This is the most common pattern we see — and it almost never means you need more pipeline.
                </p>
                <p className="text-lg text-slate-700 font-medium mb-8 max-w-2xl">
                    It means your stage definitions are measuring what reps do, not what buyers commit to. That's a structural problem with a structural fix.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">Start with the diagnostic →</Link>
                    <Link to="/insights/case-studies/pipeline-full-revenue-flat" className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">See the case study →</Link>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why pipeline quality collapses</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Pipeline quality degrades silently. The CRM stage names don't change. The pipeline coverage number looks fine. But the deals inside the stages are advancing for the wrong reasons.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    The mechanism is simple: when stage criteria are defined by seller activity ("proposal sent", "demo completed", "follow-up scheduled"), deals advance whenever the rep takes an action. There is no checkpoint requiring the buyer to confirm anything — problem, fit, priority, budget, timeline, or decision process.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Over time, the pipeline fills with deals that are real in the CRM and not real in the market. Win rates fall. Late-stage slippage increases. The forecast gets harder to predict. The instinctive response — add more pipeline at the top — compounds the problem by creating more work on more deals that won't close.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-600 rounded-r-xl p-5">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Key insight</p>
                    <p className="text-slate-800 font-medium leading-relaxed">Pipeline coverage is a vanity metric unless stage definitions require buyer evidence. 4× coverage on a pipeline with seller-activity criteria is the same as 4× coverage on noise.</p>
                </div>
            </div>
        </section>

        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What pipeline quality work looks like</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-10">Three phases. The first two are diagnostic and design. The third is implementation in the CRM and the team.</p>
                <div className="space-y-8">
                    {[
                        { n: "01", title: "Stage definition audit", body: "We review every pipeline stage against a single question: does advancing to this stage require the buyer to have confirmed something? We map the current criteria, identify which stages are activity-based vs. evidence-based, and quantify the proportion of your current pipeline that would fail the evidence test. This is usually a sobering number — and a clarifying one." },
                        { n: "02", title: "Buyer-evidence stage redesign", body: "We rebuild stage definitions from scratch using buyer evidence as the unit of measure. Each stage requires the buyer to have confirmed: the problem (stage 1), the fit (stage 2), the decision maker (stage 3), the decision process and timeline (stage 4), and final approval authority (stage 5). Exit criteria are written in buyer language, not seller language." },
                        { n: "03", title: "CRM implementation and pipeline purge", body: "We implement the new stage criteria in the CRM, run a pipeline review against the new definitions, and remove or reclassify deals that don't meet the evidence standard. The pipeline typically shrinks by 20–40%. What remains is a smaller pipeline that's actually predictable — and a team that spends its time on deals with a real buyer." }
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

        <section className="py-20 bg-white">
            <div className="container max-w-4xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Pipeline quality results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { metric: "14% → 22%", label: "win rate", desc: "$14M ARR. Pipeline at 4× coverage. Win rate had declined for three quarters. Stage criteria were measuring rep activity. Fixed in two quarters after rebuilding stage definitions.", slug: "/insights/case-studies/pipeline-full-revenue-flat" },
                        { metric: "58% → 84%", label: "forecast accuracy", desc: "Pipeline quality work and forecast governance together. $22M ARR Series B. The pipeline was the input problem; the forecast was the output symptom.", slug: "/insights/case-studies/forecast-board-wanted-predictability" },
                        { metric: "94 → 58 days", label: "sales cycle", desc: "$9M ARR. ICP had drifted. Pipeline was full of buyers who looked qualified by activity criteria but weren't qualified by fit criteria.", slug: "/insights/case-studies/sales-cycle-doubled-icp-drift" }
                    ].map(cs => (
                        <div key={cs.metric} className="border border-slate-200 rounded-xl p-7 flex flex-col hover:shadow-sm transition-all">
                            <div className="mb-3"><span className="text-3xl font-bold text-slate-900">{cs.metric}</span><span className="text-sm text-slate-400 ml-2">{cs.label}</span></div>
                            <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{cs.desc}</p>
                            <Link to={cs.slug} className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Common questions</h2>
                <div className="space-y-8">
                    {[
                        { q: "What is B2B pipeline quality?", a: "B2B pipeline quality refers to whether deals in the pipeline represent genuine buyer intent at each stage. A high-quality pipeline requires buyer evidence — confirmed problem, economic buyer identified, decision process known — not just rep activity. Low pipeline quality means the pipeline coverage number is high but the win rate is low, because stages are being advanced on seller optimism rather than buyer behaviour." },
                        { q: "Why does high pipeline coverage produce low win rates?", a: "When stages are defined by seller activities, deals advance regardless of buyer engagement. The pipeline fills with deals that look real in the CRM but aren't real in the market. Adding more pipeline at the top makes it worse, not better. The fix is rebuilding stage definitions around buyer evidence." },
                        { q: "How long does pipeline quality work take to show results?", a: "The pipeline purge and stage redesign happen in weeks 1–4. Win rate improvement shows up in the first quarter after implementation. Forecast accuracy improvement follows — usually by quarter 2 — because the pipeline is now producing reliable signals rather than activity noise." },
                        { q: "Will pipeline quality work make our pipeline look worse before it looks better?", a: "Yes — deliberately. The pipeline typically shrinks by 20–40% as deals that can't pass buyer-evidence criteria are removed or reclassified. This is the point. A smaller pipeline with real deals produces better outcomes than a large pipeline with inflated numbers. Revenue leadership needs to be prepared for this conversation before starting." }
                    ].map((item, i) => (
                        <div key={i} className="border-b border-slate-100 pb-8 last:border-0">
                            <h3 className="text-base font-bold text-slate-900 mb-3">{item.q}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-16 bg-white border-t border-slate-100">
            <div className="container max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Related reading</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "The Stage Definition Problem Nobody Talks About", href: "/insights/stage-definition-problem", tag: "Insight" },
                        { title: "ICP Drift — The Silent Revenue Killer", href: "/insights/icp-drift", tag: "Insight" },
                        { title: "B2B Sales Consulting overview", href: "/b2b-sales-consulting", tag: "Overview" }
                    ].map(a => (
                        <Link key={a.href} to={a.href} className="border border-slate-200 rounded-xl p-6 hover:shadow-sm hover:border-indigo-200 transition-all group">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-3">{a.tag}</span>
                            <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-indigo-700 transition-colors">{a.title}</h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 bg-slate-900 text-white">
            <div className="container max-w-2xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start with the pipeline diagnostic.</h2>
                <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">We audit your current stage definitions and pipeline against buyer-evidence criteria. You get a clear picture of what's real and what isn't.</p>
                <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">Start with the diagnostic →</Link>
            </div>
        </section>
    </div>
);

export default PipelineQuality;
