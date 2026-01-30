import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Users, Cpu, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import PlanningCycleMinimal from '../components/visuals/PlanningCycleMinimal';

const HowWeWork = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="How We Work | GTM-360"
                description="Not packages. Not programs. Just the ways we typically partner at different stages: Diagnostic, Advisory, and Workbench."
            />

            {/* HEADER */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Engagement Models</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        How teams work with GTM-360
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Not packages. Not programs. <br />
                        Just the ways we typically partner at different stages.
                    </p>
                </div>
            </section>

            {/* FOUNDATION: PLANNING CYCLE */}
            <section className="py-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                        <div className="w-full md:w-1/2">
                            <PlanningCycleMinimal />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Shared Foundation</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                No matter how we engage, the work is grounded in the same <strong>Planning Cycle</strong>.
                            </p>
                            <p className="text-slate-600">
                                We focus on clarity first: Where are we? How did we get here? Are we getting there?
                            </p>
                        </div>
                    </div>

                    {/* THE 3 MODES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* MODE 1: DIAGNOSTIC */}
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-emerald-200 transition-colors group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                                <MessageSquare className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">1. The First Conversation (Diagnostic)</h3>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                Every engagement starts the same way: a focused conversation to understand where you are and how decisions are currently being made.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Establish shared reality</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Surface blind spots</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Decide if it’s worth going deeper</li>
                            </ul>
                            <Link to="/contact" className="text-emerald-700 font-bold text-sm hover:underline">
                                Start with a conversation →
                            </Link>
                        </div>

                        {/* MODE 2: ADVISORY */}
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-indigo-200 transition-colors group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                                <Users className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">2. Ongoing Partnership (Advisory)</h3>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                For teams navigating active inflection points. Acting as a CRO / RevOps thinking partner to pressure-test plans before execution.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Thinking partner in the room</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Fewer, better decisions</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Living rhythm, not quarterly ritual</li>
                            </ul>
                            <Link to="/contact" className="text-indigo-700 font-bold text-sm hover:underline">
                                Explore partnership →
                            </Link>
                        </div>

                        {/* MODE 3: WORKBENCH */}
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 hover:border-purple-200 transition-colors group">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all">
                                <Cpu className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">3. The Workbench (Product)</h3>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                The system that supports how we work. Turns signals into context and decisions into repeatable patterns.
                            </p>
                            <ul className="space-y-3 mb-8 text-sm text-slate-500">
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Prevents drift</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Activity into evidence</li>
                                <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-400"></span> Shared source of truth</li>
                            </ul>
                            <Link to="/workbench" className="text-purple-700 font-bold text-sm hover:underline">
                                Explore the Workbench →
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            {/* CLOSING: FLEXIBILITY */}
            <section className="py-20 text-center bg-[var(--color-secondary)]">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">How teams move between these</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        There’s no fixed path. <br /><br />
                        Some start with a conversation, then adopt the Workbench. <br />
                        Some begin with the Workbench and bring us in later. <br />
                        Some stay advisory-led.
                    </p>
                    <p className="font-bold text-indigo-900 mb-12">
                        We follow the problem — not a sales motion.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg">
                            Start with a conversation
                        </Link>
                        <Link to="/workbench" className="btn bg-white text-[var(--color-primary)] hover:bg-indigo-50 px-8 py-4 shadow-sm border border-indigo-100">
                            Enter the Workbench
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowWeWork;
