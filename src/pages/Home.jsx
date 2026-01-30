import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import GrowthStallChart from '../components/visuals/GrowthStallChart';
import PlanningCycleDiagram from '../components/visuals/PlanningCycleDiagram';

const Home = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="GTM-360 | The Operating System for Revenue Teams"
                description="Helping B2B companies scale their revenue systems. Not more hustle. Not more tools. Better judgment, supported by systems."
            />

            {/* BLOCK 1: HERO */}
            <section className="pt-32 pb-24 bg-white">
                <div className="container max-w-4xl text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1]">
                        Growth gets harder <br /> before it gets messy.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Most teams feel it — fewer leads convert, pipelines become noisy, forecasts lose meaning.
                    </p>
                    <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
                        GTM-360 helps founders and CROs rethink how growth decisions get made as the business scales. <br />
                        <span className="font-semibold text-slate-700">Not more hustle. Not more tools. Better judgment, supported by systems.</span>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/start-here" className="btn bg-[var(--color-primary)] text-white px-8 py-4 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold">
                            Start Here
                        </Link>
                        <Link to="/workbench" className="btn bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded hover:bg-slate-50 hover:border-slate-300 transition-all font-medium">
                            See the Workbench
                        </Link>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: REALITY CHECK (WHAT'S REALLY HAPPENING) */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">The Problem</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                If you’ve grown from 5 → 10 → 20, you didn’t get there by accident.
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                You built momentum by moving fast, wearing multiple hats, and fixing problems as they showed up.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                At some point, that same approach starts to work against you. <br />
                                <strong>Not because it’s wrong — but because the business has changed shape.</strong>
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                            {/* Growth Stall Chart Visual */}
                            <GrowthStallChart />
                            <p className="text-center text-sm text-slate-400 mt-4 italic">The Complexity Wall</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: THE INFLECTION POINT */}
            <section className="py-24 bg-white">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                        Every growth curve has inflection points.
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Early growth rewards speed. Later growth demands clarity. <br />
                        Most teams try to push through the next phase by optimizing funnels, adding dashboards, or throwing AI at execution.
                    </p>
                    <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 inline-block text-left max-w-2xl">
                        <p className="text-lg text-indigo-900 font-medium mb-4">
                            That might get you from 10 → 12. It won’t get you from 10 → 50.
                        </p>
                        <p className="text-slate-700">
                            That jump requires a rethink of:
                        </p>
                        <ul className="mt-4 space-y-2 text-slate-700">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> What decisions matter</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> Who owns them</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span> How signals turn into action</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: THE PLANNING CYCLE (SIGNATURE) */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden">
                <div className="container max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-4 block">Our Methodology</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                This is how we think about growth — simply.
                            </h2>
                            <ul className="space-y-6 text-lg text-slate-300">
                                <li>
                                    <strong className="text-white block mb-1">Where are we?</strong>
                                    What’s actually happening across pipeline, conversion, and execution — not just what the dashboard says.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">How did we get here?</strong>
                                    Which decisions, incentives, and shortcuts created today’s reality.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">Where could we be?</strong>
                                    Not a fantasy plan — a credible next phase.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">How do we get there?</strong>
                                    The operating changes that matter, not surface-level tweaks.
                                </li>
                                <li>
                                    <strong className="text-white block mb-1">Are we getting there?</strong>
                                    Clear signals, not vanity metrics.
                                </li>
                            </ul>
                            <p className="mt-8 text-indigo-300 italic">
                                This cycle runs everything we do — advisory, diagnostics, and the Workbench.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            {/* Inverted Diagram for Dark Background */}
                            <div className="bg-white/5 p-8 rounded-full">
                                <PlanningCycleDiagram />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 5: HOW IT FITS (A + B) */}
            <section className="py-24 bg-white text-center">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                        Some teams want a thinking partner in the room. <br />
                        Some want a system that keeps the machine honest. <br />
                        <span className="text-[var(--color-primary)]">Most need both, at different moments.</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-12">
                        That’s how GTM-360 is designed.
                    </p>
                    <Link to="/how-we-work" className="btn bg-white text-[var(--color-primary)] border-2 border-[var(--color-primary)] px-8 py-4 rounded font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all">
                        See How We Work
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
