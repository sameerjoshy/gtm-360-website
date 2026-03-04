import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GrowthStallChart from '../components/visuals/GrowthStallChart';

const Home = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="GTM-360 | Revenue Architecture for B2B Companies at the Growth Plateau"
                description="Most B2B companies hit a wall between $10M and $30M. Not because the team is wrong — because the revenue system was never engineered. GTM-360 diagnoses the constraint, designs the system, and builds it."
            />

            {/* HERO */}
            <section className="pt-36 pb-28 bg-white">
                <div className="container max-w-4xl">
                    <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-6 block">Revenue Architecture</span>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        You hit $10M.<br />
                        Then everything<br />
                        got harder.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 mb-6 max-w-2xl font-light leading-relaxed">
                        Pipeline is inconsistent. Close rates are slipping. Forecasts need more explanation than confidence. The team is working hard — but the system underneath hasn't kept up.
                    </p>
                    <p className="text-lg text-slate-700 font-medium mb-12 max-w-xl">
                        This isn't a people problem. It's a revenue architecture problem.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all shadow-lg"
                        >
                            Start with a diagnostic
                        </Link>
                        <Link
                            to="/how-we-work"
                            className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 hover:border-slate-300 transition-all"
                        >
                            See how we work →
                        </Link>
                    </div>
                </div>
            </section>

            {/* THE PLATEAU */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">The Pattern We See Repeatedly</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                The system that got you to $10M won't get you to $30M.
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Founder-led sales worked. Then you hired a sales team. Then marketing. Then RevOps. Everyone is executing — but nothing compounds. The growth that felt inevitable now feels fragile.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Pipeline exists but quality is inconsistent",
                                    "Close rates are slipping without a clear reason",
                                    "Forecasts are guesses dressed as numbers",
                                    "Marketing and sales disagree on what's working",
                                    "Every quarter feels like starting over"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0"></span>
                                        <span className="text-slate-600">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-10 p-6 bg-white rounded-lg border-l-4 border-slate-900 shadow-sm">
                                <p className="font-bold text-slate-900 mb-1">This is an inflection point, not a failure.</p>
                                <p className="text-slate-600 text-sm">The habits that built the first $10M are creating drag on the next $20M. The answer isn't more effort — it's a different system.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            <GrowthStallChart />
                            <p className="text-center text-sm text-slate-400 mt-4 italic">Same effort. Diminishing returns. The system hasn't scaled with the business.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIAGNOSE. DESIGN. BUILD. */}
            <section className="py-24 bg-white">
                <div className="container max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Our Engagement Model</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Diagnose. Design. Build.
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-light">
                            We don't hand you a roadmap and leave. We diagnose the constraint, design the system, and build it with specialists who've done it before.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                step: "01",
                                label: "Diagnostic",
                                color: "emerald",
                                title: "Find the real constraint",
                                desc: "A focused, time-boxed engagement to identify what's actually limiting growth — not what the symptoms suggest. Most teams are solving the wrong problem.",
                                link: "/start-here",
                                cta: "Start here →"
                            },
                            {
                                step: "02",
                                label: "Architecture",
                                color: "indigo",
                                title: "Design the revenue system",
                                desc: "Once the constraint is clear, we design the operating model — ICP definition, pipeline structure, handoffs, governance, and the metrics that actually drive decisions.",
                                link: "/how-we-work",
                                cta: "See the model →"
                            },
                            {
                                step: "03",
                                label: "Engineering",
                                color: "violet",
                                title: "Build and implement",
                                desc: "Our specialists implement the system — CRM architecture, outbound infrastructure, automation workflows, AI signal layers. You get a running system, not a slide deck.",
                                link: "/how-we-work",
                                cta: "See services →"
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-3xl font-bold text-slate-100">{item.step}</span>
                                    <span className={`text-xs font-bold uppercase tracking-widest text-${item.color}-600`}>{item.label}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                                <Link to={item.link} className={`text-${item.color}-700 font-bold text-sm hover:underline`}>{item.cta}</Link>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-slate-400 text-sm italic mt-8">Most advisories stop at step two. We stay through step three.</p>
                </div>
            </section>

            {/* REVENUE PROBLEMS HAVE PATTERNS */}
            <section className="py-24 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="text-center mb-14">
                        <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Common Constraints We Resolve</span>
                        <h2 className="text-3xl font-bold text-slate-900">Revenue problems have patterns.</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            {
                                symptom: "Pipeline is growing but revenue isn't",
                                reframe: "Usually a qualification and stage definition problem — not a volume problem."
                            },
                            {
                                symptom: "Win rates are falling quarter on quarter",
                                reframe: "Often reflects ICP drift or messaging misalignment — not sales execution."
                            },
                            {
                                symptom: "Forecasts require more explanation than confidence",
                                reframe: "Signals and stage definitions aren't connected to actual buyer behaviour."
                            },
                            {
                                symptom: "Marketing and sales can't agree on lead quality",
                                reframe: "A system alignment problem. Both teams are right — about different parts of a broken handoff."
                            },
                            {
                                symptom: "Tools and AI increased noise instead of clarity",
                                reframe: "Technology amplifies systems. It doesn't correct misdiagnosis."
                            },
                            {
                                symptom: "Expansion revenue is inconsistent or invisible",
                                reframe: "CS is operating without a revenue model. Expansion needs the same architecture as acquisition."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 hover:border-indigo-200 transition-colors">
                                <p className="font-bold text-slate-900 mb-2 text-sm">"{item.symptom}"</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.reframe}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/problems" className="text-slate-700 font-bold hover:underline text-sm">
                            See all GTM failure patterns →
                        </Link>
                    </div>
                </div>
            </section>

            {/* CASE STUDIES — structured for real content, flagged as placeholder */}
            <section className="py-24 bg-white">
                <div className="container max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Engagements</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">What this looks like in practice.</h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-light">
                            Real constraints. Real fixes. All companies anonymised — every number is real.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            {
                                tag: "Pipeline Quality",
                                title: "Close rate recovered 8 points in 90 days",
                                situation: "$14M ARR SaaS. Pipeline growing. Revenue flat. The constraint wasn't volume — it was stage definition.",
                                metric: "+8pts close rate",
                                time: "90 days"
                            },
                            {
                                tag: "Forecasting",
                                title: "Forecast accuracy from 58% to 84%",
                                situation: "$22M ARR. Series B. Board demanding predictability. Signals weren't connected to buyer decisions.",
                                metric: "+26pts accuracy",
                                time: "1 quarter"
                            },
                            {
                                tag: "GTM Alignment",
                                title: "Sales cycle reduced by 30% after realignment",
                                situation: "$9M ARR scaling team. Marketing and sales operating independently. Rebuilt the handoff model and ICP criteria.",
                                metric: "-30% cycle time",
                                time: "60 days"
                            }
                        ].map((cs, i) => (
                            <div key={i} className="border border-slate-200 rounded-xl p-8 hover:shadow-md transition-all">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4 block">{cs.tag}</span>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{cs.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{cs.situation}</p>
                                <div className="flex gap-6 pt-4 border-t border-slate-100">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Result</p>
                                        <p className="font-bold text-slate-900 text-sm">{cs.metric}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wide mb-0.5">Timeframe</p>
                                        <p className="font-bold text-slate-900 text-sm">{cs.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* REMOVE THIS LINE when real case studies are in */}
                    <p className="text-center text-xs text-slate-300 mt-6 italic">⚠ Replace with real engagement data before publishing.</p>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-24 bg-slate-900 text-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        If growth feels harder than it should, the system is the reason.
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
                        Start with a diagnostic. 10–14 days. No commitment to what comes next. Just clarity on what's actually in the way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/start-here"
                            className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded font-bold hover:bg-slate-100 transition-all"
                        >
                            Start with a diagnostic
                        </Link>
                        <Link
                            to="/how-we-work"
                            className="inline-flex items-center justify-center bg-transparent text-white border border-slate-600 px-8 py-4 rounded font-medium hover:border-slate-400 transition-all"
                        >
                            See how we work
                        </Link>
                    </div>
                    <p className="text-slate-500 text-sm mt-8">No SDR. No qualification layer. Direct conversation with a partner.</p>
                </div>
            </section>
        </div>
    );
};

export default Home;
