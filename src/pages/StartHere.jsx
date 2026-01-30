import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import SEO from '../components/SEO';

const StartHere = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Start Here | GTM-360"
                description="If growth feels harder than it should, start here. A guide to understanding revenue stalls and system complexity."
            />

            <div className="container max-w-3xl pt-32 pb-24">
                {/* HEADER */}
                <div className="mb-16 border-b border-gray-100 pb-8">
                    <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                        <Compass className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        If growth feels harder than <br /> it should, start here.
                    </h1>
                </div>

                {/* MANIFESTO BODY */}
                <div className="prose prose-lg text-slate-600 space-y-8">
                    <p className="font-medium text-slate-800 text-xl">
                        Most companies don’t wake up one day "needing help."
                    </p>
                    <p>
                        They wake up noticing that decisions take longer. Planning conversations loop. Execution feels busy, but outcomes are uneven.
                    </p>

                    <div className="pl-6 border-l-4 border-indigo-200 py-2 my-8 bg-indigo-50/50 rounded-r">
                        <p className="text-indigo-900 font-medium italic m-0">
                            That’s rarely a failure. It’s usually a signal that the system has evolved.
                        </p>
                    </div>

                    <p>
                        Before we talk solutions, we pause and ask a few grounding questions.
                        You don’t need to answer them perfectly. You just need a place to start.
                    </p>
                </div>

                {/* THE 5 QUESTIONS (Static Representation) */}
                <div className="mt-16 bg-slate-50 rounded-xl p-10 border border-slate-100">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">The Orientation Cycle</h3>
                    <ul className="space-y-6">
                        {[
                            { Q: "Where are we today?", context: "Ground Truth vs. Dashboard Reality" },
                            { Q: "How did we get here?", context: "Decisions & Constraints" },
                            { Q: "Where could we realistically be?", context: "Scenarios, not dreams" },
                            { Q: "How do we get there?", context: "Structure & Resources" },
                            { Q: "Are we getting there?", context: "Signals & Feedback Loops" }
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="font-mono text-indigo-300 font-bold">0{i + 1}</span>
                                <div>
                                    <span className="font-bold text-slate-800 block">{item.Q}</span>
                                    <span className="text-sm text-slate-500">{item.context}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ROUTING OPTIONS */}
                <div className="mt-20 pt-10 border-t border-gray-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">Where to go next</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* OPTION 1: Workbench */}
                        <Link to="/workbench" className="group block p-8 rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                            <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center group-hover:text-indigo-600 transition-colors">
                                Understand the framework <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-slate-600 text-sm">
                                See how we turn these questions into a repeatable operating system.
                            </p>
                        </Link>

                        {/* OPTION 2: Conversation */}
                        <Link to="/contact" className="group block p-8 rounded-xl border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                            <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center group-hover:text-emerald-600 transition-colors">
                                Talk it through <ArrowRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-slate-600 text-sm">
                                No pitch. Just a diagnostic conversation to see where you sit.
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartHere;
