import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Target, Users } from 'lucide-react';
import SEO from '../components/SEO';
import PlanningCycleDiagram from '../components/visuals/PlanningCycleDiagram';

const AgentWorkbench = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Agent Workbench | GTM-360"
                description="A calm place to think through growth — before rushing to execution. The Agent Workbench helps founders and revenue leaders get oriented, reduce noise, and make better decisions."
            />

            {/* HERO: Orientation */}
            <section className="pt-32 pb-20 bg-white border-b border-gray-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">The Agent Workbench</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        A calm place to think through growth — <br /> <span className="text-[var(--color-primary)]">before rushing to execution.</span>
                    </h1>

                    <div className="max-w-2xl mx-auto text-left mt-16 space-y-6 text-lg text-slate-600">
                        <p>
                            Most revenue problems don’t start as problems. They start as signals:
                        </p>
                        <ul className="space-y-3 ml-4">
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
                                Forecasts feel less reliable
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
                                Pipeline looks busy, but momentum feels uneven
                            </li>
                            <li className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2.5 mr-3 flex-shrink-0"></span>
                                Teams are working hard, yet outcomes feel harder to predict
                            </li>
                        </ul>
                        <p className="font-medium text-slate-900 pt-4">
                            This is usually a sign that the system needs attention — not more activity. <br />
                            The Agent Workbench exists for this exact moment.
                        </p>
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
                        <a href="https://app.gtm-360.com" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg flex items-center justify-center">
                            Enter the Agent Workbench <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                        <Link to="/contact" className="px-6 py-4 text-slate-500 font-medium hover:text-[var(--color-primary)] flex items-center justify-center">
                            See how we use this in practice →
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION: WHAT IT IS (Plain Speak) */}
            <section className="py-24 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-semibold mb-6">Not a tool you use all day.</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                The Agent Workbench is a <strong>thinking surface</strong> — designed to help founders and revenue leaders:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <Brain className="w-5 h-5 text-indigo-500" /> Get oriented
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <Target className="w-5 h-5 text-emerald-500" /> Reduce noise
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <Users className="w-5 h-5 text-purple-500" /> Make better decisions with less effort
                                </li>
                            </ul>
                            <p className="text-slate-600 italic border-l-2 border-indigo-100 pl-4">
                                "It supports how experienced operators already think — it just makes that thinking easier to maintain as complexity grows."
                            </p>
                        </div>
                        <div className="bg-slate-50 p-10 rounded-xl border border-slate-100 flex items-center justify-center">
                            {/* Reusing Planning Diagram to reinforce "Thinking Surface" */}
                            <div className="scale-75 origin-center">
                                <PlanningCycleDiagram />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: HOW IT FITS (The Cycle) */}
            <section className="py-24 bg-[var(--color-secondary)]">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-6">How it fits our work.</h2>
                        <p className="text-xl text-slate-600">
                            Our work follows a simple planning cycle. The Workbench supports each step.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded shadow-sm">
                            <h3 className="font-bold text-lg mb-4 text-slate-900 border-b border-gray-100 pb-2">The Cycle</h3>
                            <ul className="space-y-3 text-slate-600">
                                <li>1. Where are we?</li>
                                <li>2. How did we get here?</li>
                                <li>3. Where can we be?</li>
                                <li>4. How do we get there?</li>
                                <li>5. Are we getting there?</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-8 rounded shadow-sm border border-indigo-100">
                            <h3 className="font-bold text-lg mb-4 text-indigo-900 border-b border-indigo-200 pb-2">The Workbench Support</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1" /> Agents surface signals without data floods</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1" /> Context preserved across decisions</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-indigo-600 mt-1" /> Nothing moves forward without shared context</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: WHO IT'S FOR */}
            <section className="py-24 bg-white text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-semibold mb-8">Who is this for?</h2>
                    <div className="bg-slate-50 p-8 rounded-lg border border-slate-100 text-left space-y-4 mb-12">
                        <p className="flex items-start gap-3">
                            <span className="text-[var(--color-primary)] font-bold">›</span> Founders navigating growth inflection points
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-[var(--color-primary)] font-bold">›</span> CROs and revenue leaders managing complexity
                        </p>
                        <p className="flex items-start gap-3">
                            <span className="text-[var(--color-primary)] font-bold">›</span> Teams that have outgrown spreadsheets and intuition alone
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container">
                    <p className="text-xl mb-8 text-slate-300">
                        If growth feels harder than it should — this is usually where we start.
                    </p>
                    <a href="https://app.gtm-360.com" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg inline-flex items-center">
                        Enter the Agent Workbench <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                </div>
            </section>

        </div>
    );
};

export default AgentWorkbench;
