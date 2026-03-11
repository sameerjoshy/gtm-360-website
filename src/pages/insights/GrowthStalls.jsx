import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PlanningCycleMinimal from '../../components/visuals/PlanningCycleMinimal';
import { ArrowLeft } from 'lucide-react';

const GrowthStalls = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Why growth stalls after early traction | GTM-360 Insights"
                description="Most companies don’t stall because demand disappears. They stall because the system that helped them grow early starts producing weaker signals."
            />

            {/* NAV UP */}
            <div className="pt-32 pb-8 container max-w-3xl">
                <Link to="/insights" className="text-slate-400 hover:text-slate-900 transition-colors flex items-center text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Insights
                </Link>
            </div>

            {/* HEADER */}
            <article className="pb-24">
                <div className="container max-w-3xl">
                    <span className="text-slate-900 font-mono text-xs tracking-widest uppercase mb-6 block">Flagship Insight</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                        Why growth stalls after early traction.
                    </h1>
                    <div className="text-xl text-slate-600 leading-relaxed font-light mb-12 border-l-4 border-slate-900 pl-6 py-2">
                        <p className="mb-6">Most companies don’t stall because demand disappears.</p>
                        <p>
                            They stall because the system that helped them grow early starts producing weaker signals as complexity increases.
                        </p>
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="font-bold text-slate-900">This is subtle. And that’s why it’s dangerous.</p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">What changes as you scale</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 not-prose">
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-400 uppercase text-xs tracking-widest mb-4">When a company is small</h4>
                                <ul className="space-y-3 text-slate-700 text-sm">
                                    <li className="flex items-center gap-2">Context lives in people’s heads</li>
                                    <li className="flex items-center gap-2">Decisions are fast</li>
                                    <li className="flex items-center gap-2">Signals are informal but trusted</li>
                                </ul>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
                                <h4 className="font-bold text-slate-400 uppercase text-xs tracking-widest mb-4">As the company grows</h4>
                                <ul className="space-y-3 text-slate-700 text-sm">
                                    <li className="flex items-center gap-2">Context fragments</li>
                                    <li className="flex items-center gap-2">Decisions slow down</li>
                                    <li className="flex items-center gap-2">Signals multiply — but confidence drops</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Teams respond by adding more tools, more dashboards, and more process. <br />
                            <strong>That often creates activity, not clarity.</strong>
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">The real inflection point</h2>
                        <p>
                            The inflection point isn’t about effort. It’s about the fit between stage and system.
                        </p>
                        <p>The questions change:</p>
                        <ul className="bg-indigo-50 p-6 rounded-lg list-none border-l-4 border-indigo-200 my-6">
                            <li className="mb-2 text-indigo-900">From <strong>“How do we get more leads?”</strong></li>
                            <li className="text-indigo-900">To <strong>“Which motion actually compounds?”</strong></li>
                        </ul>
                        <p>
                            Optimization works within a system. Growth beyond a plateau requires rethinking the system itself.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">The planning cycle we use</h2>
                        <p>
                            We keep coming back to five questions. This isn’t theory. It’s how teams regain signal when noise creeps in.
                        </p>
                    </div>

                    {/* DIAGRAM INSERT */}
                    <div className="my-16 bg-slate-50 p-8 rounded-xl border border-slate-100 flex justify-center">
                        <PlanningCycleMinimal />
                    </div>

                    <div className="prose prose-lg prose-slate max-w-none">
                        <p className="font-bold text-slate-900 text-xl">
                            If growth feels heavier than it should, pause before optimizing harder.
                        </p>
                        <p>
                            You may not need better execution. <br />
                            You may need a clearer system.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-16 pt-8 border-t border-slate-100">
                        <Link to="/start-here" className="btn bg-slate-900 text-white px-8 py-4 rounded shadow-lg hover:bg-indigo-700 transition-all font-bold inline-block">
                            Start here →
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default GrowthStalls;
