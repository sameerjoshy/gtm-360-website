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
                description="We don’t sell packages. We work through inflection points. Diagnostic, Advisory, and Agents."
            />

            {/* v1.0 HEADER */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Engagement Models</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        We don’t sell packages. <br />
                        We work through inflection points.
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                        Different teams engage with us in different ways — <br />
                        but the underlying system stays the same.
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
                                Everything we do runs on the same planning cycle:
                            </p>
                            <p className="text-slate-700 italic border-l-4 border-indigo-100 pl-4 py-2 bg-slate-50 rounded-r mb-6">
                                Where are we → How did we get here → Where could we be → How do we get there → Are we getting there
                            </p>
                            <p className="text-slate-600">
                                The difference is how deeply we’re involved at each stage.
                            </p>
                        </div>
                    </div>

                    {/* THE 3 MODES */}
                    <div className="space-y-8">

                        {/* MODE 1: DIAGNOSTIC */}
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 md:flex gap-8 group hover:border-emerald-200 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                                <MessageSquare className="w-8 h-8 text-emerald-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">1. The First Conversation (Diagnostic)</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    A short, focused diagnostic to understand where growth is getting constrained.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
                                    <div>
                                        <strong className="block text-slate-400 text-xs uppercase mb-1">What happens</strong>
                                        We map where you are, trace how you got here, and identify where the system is straining.
                                    </div>
                                    <div>
                                        <strong className="block text-slate-400 text-xs uppercase mb-1">Outcome</strong>
                                        Clarity — not a list of tasks.
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 italic mb-4">No audit checklist. No pre-sold solution. No obligation.</p>
                                <Link to="/contact" className="text-emerald-700 font-bold text-sm hover:underline">
                                    Start here →
                                </Link>
                            </div>
                        </div>

                        {/* MODE 2: ADVISORY */}
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 md:flex gap-8 group hover:border-indigo-200 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                                <Users className="w-8 h-8 text-indigo-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">2. Ongoing Partnership (Advisory)</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    A senior operating partner for founders and CROs navigating scale.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
                                    <div>
                                        <strong className="block text-slate-400 text-xs uppercase mb-1">How it shows up</strong>
                                        Planning cycles, trade-off discussions, decision hygiene, course correction.
                                    </div>
                                    <div>
                                        <strong className="block text-slate-400 text-xs uppercase mb-1">Outcome</strong>
                                        Fewer reactive decisions. More deliberate momentum.
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 italic mb-4">We don’t run your team. We help your team see more clearly.</p>
                                <Link to="/contact" className="text-indigo-700 font-bold text-sm hover:underline">
                                    Start partner conversation →
                                </Link>
                            </div>
                        </div>

                        {/* MODE 3: WORKBENCH */}
                        <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 md:flex gap-8 group hover:border-purple-200 transition-colors">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm border border-slate-100">
                                <Cpu className="w-8 h-8 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">3. The Agents (Product)</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    A productized Agents that supports how we think and work — whether we’re in the room or not.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 mb-6">
                                    <div>
                                        <strong className="block text-slate-400 text-xs uppercase mb-1">What it enables</strong>
                                        Signals instead of noise. Evidence over opinions. Decisions that compound.
                                    </div>
                                    <div>
                                        <strong className="block text-slate-400 text-xs uppercase mb-1">Outcome</strong>
                                        Strategy that survives contact with reality.
                                    </div>
                                </div>
                                <p className="text-xs text-slate-500 italic mb-4">Either way, it exists to prevent drift — not to add complexity.</p>
                                <Link href="https://agents.gtm-360.com" target="_blank" rel="noopener noreferrer" className="text-purple-700 font-bold text-sm hover:underline">
                                    Explore the Agents →
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* v1.0 CLOSING */}
            <section className="py-20 text-center bg-white border-t border-slate-100">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">There’s no fixed path.</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Teams move between these modes as the business evolves. <br />
                        We follow the problem — not a sales motion.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg font-bold">
                            Start with a conversation
                        </Link>
                        <Link href="https://agents.gtm-360.com" target="_blank" rel="noopener noreferrer" className="btn bg-white text-[var(--color-primary)] hover:bg-indigo-50 px-8 py-4 shadow-sm border border-indigo-100 font-bold">
                            Explore the Agents
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HowWeWork;
