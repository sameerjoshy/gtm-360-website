import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Settings, Cpu } from 'lucide-react';
import SEO from '../components/SEO';
import PlanningCycleMinimal from '../components/visuals/PlanningCycleMinimal';

const HowWeWork = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="How We Work | GTM-360"
                description="Three phases. Diagnose the constraint. Design the revenue system. Build it with specialists. No roadmaps without implementation."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Engagement Model</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Diagnose. Design. Build.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Most advisories hand you a roadmap and leave. We diagnose the constraint, design the revenue system, and build it with specialists who've done it before.
                    </p>
                </div>
            </section>

            {/* THE OPERATING LENS */}
            <section className="py-20 bg-white border-b border-slate-100">
                <div className="container max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Our Operating Lens</span>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">How we think about every engagement</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Every engagement — regardless of phase — runs on the same planning cycle. Not a framework. A way of seeing what's actually happening.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Where are we, really?",
                                    "How did we get here?",
                                    "Where could we be?",
                                    "How do we get there?",
                                    "Are we getting there?"
                                ].map((q, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-slate-200 w-6">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="text-slate-700">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            <PlanningCycleMinimal />
                        </div>
                    </div>
                </div>
            </section>

            {/* THE THREE PHASES */}
            <section className="py-20 bg-slate-50">
                <div className="container max-w-5xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Three phases. One system.</h2>

                    <div className="space-y-6">
                        {/* PHASE 1 */}
                        <div className="bg-white rounded-xl p-8 md:p-10 border border-slate-200 md:flex gap-8 hover:border-emerald-200 transition-colors">
                            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 border border-emerald-100">
                                <MessageSquare className="w-7 h-7 text-emerald-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Phase 01</span>
                                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Diagnostic</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Find the real constraint</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    A focused, time-boxed engagement — typically 10 to 14 days. We examine how your revenue system actually behaves in practice, not how it's supposed to work on paper. Most teams are solving the wrong problem. The diagnostic finds the right one.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 mb-6">
                                    <div>
                                        <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">What we examine</p>
                                        <p>Pipeline quality, deal dynamics, ICP coherence, operating rhythm, tooling effectiveness</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">What you get</p>
                                        <p>Constraint map, misdiagnosis breakdown, change sequencing, executive readout</p>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 italic mb-4">Standalone engagement. No obligation to continue.</p>
                                <Link to="/diagnostic" className="text-emerald-700 font-bold text-sm hover:underline">Read about the diagnostic →</Link>
                            </div>
                        </div>

                        {/* PHASE 2 */}
                        <div className="bg-white rounded-xl p-8 md:p-10 border border-slate-200 md:flex gap-8 hover:border-indigo-200 transition-colors">
                            <div className="w-14 h-14 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 border border-indigo-100">
                                <Settings className="w-7 h-7 text-indigo-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Phase 02</span>
                                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Architecture</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Design the revenue system</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Once the constraint is clear, we design the operating model that removes it. ICP definition, pipeline architecture, handoff design, governance structure, and the metrics that actually drive decisions — not the ones that generate reports.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 mb-6">
                                    <div>
                                        <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">What we design</p>
                                        <p>GTM operating model, ICP and segmentation, pipeline stages, handoff protocols, governance cadences</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">What you get</p>
                                        <p>A clear system design — not a slide deck. Built to be implemented, not filed.</p>
                                    </div>
                                </div>
                                <Link to="/start-here" className="text-indigo-700 font-bold text-sm hover:underline">Start a conversation →</Link>
                            </div>
                        </div>

                        {/* PHASE 3 */}
                        <div className="bg-white rounded-xl p-8 md:p-10 border border-slate-200 md:flex gap-8 hover:border-violet-200 transition-colors">
                            <div className="w-14 h-14 bg-violet-50 rounded-full flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 border border-violet-100">
                                <Cpu className="w-7 h-7 text-violet-600" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Phase 03</span>
                                    <span className="text-xs font-bold text-violet-600 uppercase tracking-widest">Engineering</span>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Build and implement</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Our specialists implement the system across CRM architecture, outbound infrastructure, automation workflows, and AI signal layers. You don't manage a fragmented vendor list — we own the build end to end.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-600 mb-6">
                                    <div>
                                        <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">What we build</p>
                                        <p>CRM architecture, outbound infrastructure, automation workflows, AI signal layer, reporting systems</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-400 text-xs uppercase tracking-wide mb-1">What you get</p>
                                        <p>A running system — not a roadmap. Specialists matched to each layer of the build.</p>
                                    </div>
                                </div>
                                <Link to="/agents" className="text-violet-700 font-bold text-sm hover:underline">See the intelligence layer →</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLOSING */}
            <section className="py-20 bg-white border-t border-slate-100 text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Teams move between phases as the business evolves.</h2>
                    <p className="text-slate-500 mb-10 leading-relaxed">
                        Some engagements start and end at the diagnostic. Others run through all three phases. We follow the problem — not a fixed sales motion.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start the conversation
                        </Link>
                        <Link to="/diagnostic" className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                            Read about the diagnostic
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
