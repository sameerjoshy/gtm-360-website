import React from 'react';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ForecastingGovernance = () => (
    <div className="min-h-screen bg-white font-sans text-slate-900">
        <SEO
            title="B2B Sales Forecast Accuracy & Revenue Governance | GTM-360"
            description="Build forecast accuracy for B2B revenue teams. Replace gut-feel pipeline reviews with structured governance that produces numbers the board can trust."
            canonical="https://gtm-360.com/services/forecasting-governance"
        />
        <Helmet>
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Forecasting & Revenue Governance",
                "description": "B2B sales forecast accuracy consulting. Rebuild the governance system that produces reliable revenue forecasts — starting with pipeline signal quality.",
                "provider": { "@type": "Organization", "@id": "https://gtm-360.com/#organization" },
                "serviceType": "Revenue Forecasting Consulting"
            })}</script>
            <script type="application/ld+json">{JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                    { "@type": "Question", "name": "What causes B2B sales forecast inaccuracy?", "acceptedAnswer": { "@type": "Answer", "text": "B2B forecast inaccuracy is almost always a signal problem, not a process problem. When CRM stage definitions don't require buyer evidence, each rep advances deals on their own interpretation of what 'qualified' means. The forecast aggregates these incompatible inputs — eight reps with eight different definitions of 'Commit' — and produces a number that reflects averages of optimism, not a prediction of buyer behaviour." } },
                    { "@type": "Question", "name": "What is revenue governance in B2B sales?", "acceptedAnswer": { "@type": "Answer", "text": "Revenue governance is the operating system for how a company produces, challenges, and commits to its revenue forecast. It includes: stage criteria that require buyer evidence, standardised forecast categories with shared definitions, a structured forecast call cadence, a triangulation model that cross-checks pipeline against activity and historical close rate data, and an escalation process for at-risk deals." } },
                    { "@type": "Question", "name": "How do you improve B2B sales forecast accuracy?", "acceptedAnswer": { "@type": "Answer", "text": "Improving forecast accuracy requires fixing the signal before improving the process. Step one: rebuild pipeline stage criteria to require buyer evidence at each stage, so that stage position actually reflects buyer engagement. Step two: standardise commit criteria so all reps use the same definition. Step three: build a triangulation model using pipeline data, rep commit, and historical close rates. The forecast call process then produces a prediction rather than a negotiation." } }
                ]
            })}</script>
        </Helmet>

        <section className="pt-32 pb-20 bg-white border-b border-slate-100">
            <div className="container max-w-3xl">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">Forecasting · Revenue Governance · Predictability</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Forecasting & Revenue Governance</h1>
                <p className="text-xl text-slate-500 font-light leading-relaxed mb-6">
                    The forecast keeps changing. Committed deals keep slipping. The board is asking questions the team can't confidently answer. This isn't a forecasting process problem — it's a pipeline signal problem.
                </p>
                <p className="text-lg text-slate-700 font-medium mb-8 max-w-2xl">
                    Forecast accuracy is downstream of pipeline quality. We fix both — building a governance system that produces numbers the board can trust.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">Start with the diagnostic →</Link>
                    <Link to="/insights/case-studies/forecast-board-wanted-predictability" className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">See the case study →</Link>
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why B2B forecasts become unreliable</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Forecast volatility is a signal problem. The forecast process isn't the issue — the data feeding it is. When pipeline stage definitions don't require buyer evidence, deals advance based on rep judgment rather than buyer behaviour. The forecast then aggregates incompatible inputs: each rep's definition of "Commit" is slightly different, each manager's pipeline review interprets stage criteria slightly differently, and the resulting number is an average of disconnected estimates rather than a prediction.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Adding a more structured forecast process to a pipeline with bad signal quality doesn't fix the problem. It creates a more formally organised version of the same noise. Better process on bad data produces confident inaccuracy — which is worse than uncertain inaccuracy because it takes longer to diagnose.
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <p className="text-slate-700 font-medium leading-relaxed">The fix has two parts: fix the pipeline signal quality first, then build the governance system that reads that signal accurately. Both are required. Neither works alone.</p>
                </div>
            </div>
        </section>

        <section className="py-20 bg-slate-50 border-y border-slate-100">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-6">What forecasting governance work covers</h2>
                <div className="space-y-8">
                    {[
                        { n: "01", title: "Pipeline signal audit", body: "Before touching the forecast process, we audit the pipeline signal. We review stage definitions across every rep against a single test: does advancing to this stage require documented buyer evidence? We quantify the proportion of pipeline advancing on seller activity vs. buyer commitment. This determines how much of the forecast inaccuracy is a signal problem vs. a process problem." },
                        { n: "02", title: "Stage and commit definition rebuild", body: "We rebuild stage definitions around buyer evidence, and simultaneously standardise forecast category definitions — Commit, Best Case, Pipeline — so that all reps are using the same language with the same meaning. This is the single most impactful change. When eight reps have one shared definition of Commit, the forecast immediately becomes more predictable." },
                        { n: "03", title: "Triangulation model build", body: "We build a forecast model that triangulates three inputs: rep commit (what the seller believes), pipeline × historical close rate by stage and segment (what the data predicts), and activity signal (leading indicators of deal health). The gaps between these inputs surface the deals at risk — before the quarter ends." },
                        { n: "04", title: "Governance cadence design", body: "We redesign the forecast call structure — weekly deal reviews, monthly forecast calls, quarterly planning cycles — with specific agenda formats, required data inputs, and decision outputs for each. The goal is a cadence that produces accountability and early warning signals, not a reporting exercise that validates existing views." }
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
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Forecasting governance results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-slate-200 rounded-xl p-8 flex flex-col">
                        <div className="mb-3"><span className="text-4xl font-bold text-slate-900">58% → 84%</span></div>
                        <p className="text-sm text-slate-400 mb-4">Forecast accuracy · $22M ARR · Series B</p>
                        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">Eight reps. Eight different definitions of Commit. The forecast was averaging incompatible inputs rather than predicting buyer behaviour. Standardised commit criteria, rebuilt stage definitions, and implemented a triangulation model. Forecast accuracy exceeded 80% within two quarters.</p>
                        <Link to="/insights/case-studies/forecast-board-wanted-predictability" className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                    </div>
                    <div className="border border-slate-200 rounded-xl p-8 flex flex-col">
                        <div className="mb-3"><span className="text-4xl font-bold text-slate-900">14% → 22%</span></div>
                        <p className="text-sm text-slate-400 mb-4">Win rate · $14M ARR</p>
                        <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">Forecast volatility was a downstream symptom. The real problem was pipeline quality. Fixed stage definitions first — win rate improved, and forecast accuracy followed automatically because the pipeline was now producing reliable signal.</p>
                        <Link to="/insights/case-studies/pipeline-full-revenue-flat" className="text-sm font-bold text-indigo-600 hover:underline">Read case study →</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 bg-slate-50 border-t border-slate-100">
            <div className="container max-w-3xl">
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Common questions</h2>
                <div className="space-y-8">
                    {[
                        { q: "What causes B2B sales forecast inaccuracy?", a: "Forecast inaccuracy is almost always a signal problem. When CRM stages don't require buyer evidence, each rep advances deals on their own interpretation of qualified. The forecast aggregates these incompatible inputs and produces a number that reflects averages of optimism, not a prediction of buyer behaviour." },
                        { q: "What is revenue governance?", a: "Revenue governance is the operating system for how a company produces, challenges, and commits to its revenue forecast. It includes stage criteria requiring buyer evidence, standardised forecast categories with shared definitions, a structured forecast cadence, a triangulation model, and an escalation process for at-risk deals." },
                        { q: "Can we fix forecast accuracy without changing the CRM?", a: "Partially. The forecast cadence and commit definitions can be improved without CRM changes. But durable accuracy requires the CRM stage data to be reliable — which means enforcing buyer-evidence criteria at the stage level. Manual enforcement degrades over time. CRM-enforced criteria are self-sustaining." },
                        { q: "How quickly does forecast accuracy improve?", a: "Standardising commit definitions produces immediate improvement in the next forecast cycle — even before stage changes are implemented. Full forecast accuracy improvement (pipeline signal + governance) typically shows up within two quarters of implementation." }
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
                        { title: "Why Forecasts Decay Over Time", href: "/insights/forecast-decay", tag: "Insight" },
                        { title: "The Stage Definition Problem Nobody Talks About", href: "/insights/stage-definition-problem", tag: "Insight" },
                        { title: "Series B GTM Strategy", href: "/series-b-gtm-strategy", tag: "Overview" }
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
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Start with the forecast diagnostic.</h2>
                <p className="text-xl text-slate-400 mb-4 font-light leading-relaxed">We review your pipeline signal quality and forecast governance against the criteria that predict accuracy. You get a diagnosis before we propose anything.</p>
                <p className="text-slate-500 mb-12 text-sm">Goes directly to a partner. Not a CRM queue.</p>
                <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">Start with the diagnostic →</Link>
            </div>
        </section>
    </div>
);

export default ForecastingGovernance;
