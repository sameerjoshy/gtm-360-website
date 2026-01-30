import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GrowthStallChart from '../components/visuals/GrowthStallChart';
import PlanningCycleMinimal from '../components/visuals/PlanningCycleMinimal';

const Home = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="GTM-360 | The Operating System for Revenue Teams"
                description="Growth doesn’t stall because teams stop working hard. It stalls because the system that got you here doesn’t get you there."
            />

            {/* v1.0 HERO */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
                        Growth doesn’t stall because <br /> teams stop working hard.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        It stalls because the system that got you here doesn’t get you there.
                    </p>
                    <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                        GTM-360 helps founders and CROs rethink how revenue actually gets built — <br />
                        across strategy, execution, and the systems underneath.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/start-here" className="btn bg-[var(--color-primary)] text-white px-8 py-4 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold">
                            Start here
                        </Link>
                        <Link to="/how-we-work" className="btn bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded hover:bg-slate-50 hover:border-slate-300 transition-all font-medium">
                            How we work
                        </Link>
                    </div>
                </div>
            </section>

            {/* v1.0 REALITY CHECK */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">The Reality Most Teams Hit</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                You didn’t do anything wrong.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Most teams reach a point where growth feels heavier than it should.
                            </p>
                            <ul className="space-y-4 mb-8 text-slate-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span>Pipeline volume is there, but quality isn’t consistent</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span>Forecasts need more explanation than confidence</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span>Differentiation sounds fine on slides, weaker in deals</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">●</span>
                                    <span>Everyone is busy — progress is harder to see</span>
                                </li>
                            </ul>
                            <div className="bg-white p-6 rounded-lg border-l-4 border-[var(--color-primary)] shadow-sm">
                                <p className="font-bold text-slate-900 mb-2">This isn’t failure. It’s an inflection point.</p>
                                <p className="text-slate-600 text-sm">The habits and systems that helped you grow from 5 to 10 don’t naturally take you from 10 to 50.</p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            {/* Growth Stall Chart Visual */}
                            <GrowthStallChart />
                            <p className="text-center text-sm text-slate-400 mt-4 italic">Same system, diminishing returns.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* v1.0 PLANNING CYCLE */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Our Operating Lens</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                                How we think about growth
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 font-light">
                                Every engagement — advisory or product — follows the same operating loop. <br />
                                <strong>Not a framework. A way of seeing reality clearly.</strong>
                            </p>
                            <ul className="space-y-4 text-lg text-slate-700">
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-slate-300">01</span> Where are we, really?
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-slate-300">02</span> How did we get here?
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-slate-300">03</span> Where could we be?
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-slate-300">04</span> How do we get there?
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="font-bold text-slate-300">05</span> Are we getting there?
                                </li>
                            </ul>
                            <p className="mt-8 text-slate-500 italic text-sm">
                                This loop shows up in our conversations, our diagnostics, and the Workbench itself.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <PlanningCycleMinimal />
                        </div>
                    </div>
                </div>
            </section>

            {/* v1.0 HOW WE HELP (PREVIEW) */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-6xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12">
                        How teams typically work with us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        {/* CARD 1 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Diagnostic</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The first conversation</h3>
                            <p className="text-slate-600 text-sm mb-4">A focused diagnostic to understand where growth is getting constrained — and why.</p>
                            <p className="text-slate-500 text-xs italic">No deck. No scorecard. Just clarity.</p>
                        </div>
                        {/* CARD 2 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Advisory</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Ongoing partnership</h3>
                            <p className="text-slate-600 text-sm mb-4">We work alongside founders and CROs as a thinking partner — shaping decisions, pressure-testing plans, and keeping the system honest.</p>
                        </div>
                        {/* CARD 3 */}
                        <div className="bg-white p-8 rounded-xl border border-slate-200">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Workbench</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">The operating system</h3>
                            <p className="text-slate-600 text-sm mb-4">A practical Workbench that turns strategy into signals, evidence, and decisions — without creating more operational noise.</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <Link to="/how-we-work" className="text-[var(--color-primary)] font-bold hover:underline">
                            How we work →
                        </Link>
                    </div>
                </div>
            </section>

            {/* v1.0 CREDIBILITY & FINAL CTA */}
            <section className="py-24 bg-white text-center border-t border-slate-100">
                <div className="container max-w-3xl">
                    <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                        This work is built from years inside real revenue teams — scaling, fixing, rebuilding, and operating through multiple growth cycles. <br />
                        <span className="text-slate-800 font-medium">What we’re offering isn’t theory. It’s a system we wish we had earlier.</span>
                    </p>
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                        If growth feels harder than it should, start here.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/start-here" className="btn bg-slate-900 text-white px-8 py-4 rounded hover:bg-slate-800 transition-all font-bold">
                            Start here
                        </Link>
                        <Link to="/workbench" className="btn bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded hover:bg-slate-50 transition-all font-bold">
                            Explore the Workbench
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
