import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Filter, GitMerge } from 'lucide-react';
import SEO from '../components/SEO';
import WorkbenchLoopVisual from '../components/visuals/WorkbenchLoopVisual';

const AgentWorkbench = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
            <SEO
                title="The GTM Workbench | GTM-360"
                description="A practical system for turning strategy into signals, evidence, and decisions. The layer that makes your CRM usable again."
            />

            {/* v1.0 HERO */}
            <section className="pt-32 pb-24 bg-slate-900 text-white border-b border-slate-800">
                <div className="container max-w-4xl text-center">
                    <span className="text-purple-400 font-mono text-xs tracking-widest uppercase mb-4 block">Product</span>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-white leading-[1.1]">
                        The GTM Workbench
                    </h1>
                    <p className="text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        A practical system for turning strategy into signals, evidence, and decisions.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="https://app.gtm-360.com" className="btn bg-purple-600 text-white px-8 py-4 rounded shadow-lg shadow-purple-900/50 hover:bg-purple-500 transition-all font-bold flex items-center">
                            Request Access <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="https://app.gtm-360.com/login" className="btn bg-slate-800 text-slate-300 border border-slate-700 px-8 py-4 rounded hover:bg-slate-700 transition-all font-bold">
                            Login
                        </a>
                    </div>
                </div>
            </section>

            {/* v1.0 WHAT IT IS */}
            <section className="py-24 bg-white">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">What it is</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                The Workbench groups agent swarms around real GTM questions:
                            </p>
                            <ul className="space-y-3 mb-8 text-slate-700">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Pipeline quality</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Account focus</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Differentiation signals</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Forecast confidence</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Execution drift</li>
                            </ul>
                            <p className="text-slate-600">
                                Each swarm combines multiple agents — research, signals, drafting, review — into one coherent flow.
                            </p>
                        </div>

                        {/* THE LOOP VISUAL */}
                        <div className="w-full">
                            <WorkbenchLoopVisual />
                        </div>
                    </div>
                </div>
            </section>

            {/* v1.0 HOW TEAMS USE IT */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How teams use it</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                        <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                            <span className="text-2xl font-bold text-purple-200 block mb-2">01</span>
                            <h4 className="font-bold text-slate-900">Start with a question</h4>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                            <span className="text-2xl font-bold text-purple-200 block mb-2">02</span>
                            <h4 className="font-bold text-slate-900">Run a swarm</h4>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                            <span className="text-2xl font-bold text-purple-200 block mb-2">03</span>
                            <h4 className="font-bold text-slate-900">Review signals & evidence</h4>
                        </div>
                        <div className="bg-white p-6 rounded shadow-sm border border-slate-200">
                            <span className="text-2xl font-bold text-purple-200 block mb-2">04</span>
                            <h4 className="font-bold text-slate-900">Decide what to do next</h4>
                        </div>
                    </div>
                    <div className="text-center mt-12 mx-auto max-w-xl">
                        <p className="text-slate-500 italic">No dashboards for the sake of dashboards. No "AI magic".</p>
                    </div>
                </div>
            </section>

            {/* v1.0 TRANSPARENCY */}
            <section className="py-24 bg-white border-t border-slate-200">
                <div className="container max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Transparency</h2>
                    <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                        Every agent shows what it does, what inputs it uses, what outputs it produces, and what data it reads/writes.
                    </p>
                    <p className="text-lg font-bold text-slate-900 mb-12">Nothing is hidden.</p>

                    <a href="https://app.gtm-360.com" className="btn bg-purple-600 text-white px-8 py-4 rounded hover:bg-purple-500 transition-all font-bold">
                        Request Access
                    </a>
                </div>
            </section>
        </div>
    );
};

export default AgentWorkbench;
