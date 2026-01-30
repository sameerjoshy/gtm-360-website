import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import PlanningCycleDiagram from '../components/visuals/PlanningCycleDiagram';

const StartHere = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Start Here | GTM-360"
                description="If growth feels harder than it should, start here. A guide to understanding revenue stalls and system complexity."
            />

            <div className="container max-w-3xl pt-32 pb-24">
                {/* HEADER */}
                <div className="mb-16 border-b border-gray-100 pb-8 text-center md:text-left">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Manifesto</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Start Here
                    </h1>
                    <p className="text-xl text-slate-600 font-light">
                        If growth feels harder than it should, this is a good place to pause.
                    </p>
                </div>

                {/* MANIFESTO BODY */}
                <div className="prose prose-lg text-slate-600 space-y-8">
                    <p className="font-medium text-slate-800 text-xl">
                        Most companies don’t slow down because they lose ambition.
                    </p>
                    <p>
                        They slow down because the system that helped them grow is now being asked to do more than it was designed for.
                    </p>

                    <p>
                        That moment is normal. It shows up in companies of every size.
                    </p>

                    <div className="pl-6 border-l-4 border-emerald-200 py-2 my-8 bg-emerald-50/50 rounded-r">
                        <p className="text-emerald-900 font-medium italic m-0">
                            This page exists to help you get oriented — before trying to fix anything.
                        </p>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 pt-8">The Pattern We See</h3>
                    <p>
                        Growth usually happens in phases:
                    </p>
                    <ul className="list-none pl-0 space-y-2">
                        <li className="flex gap-3"><span className="text-slate-400">01</span> Early momentum driven by speed and hustle</li>
                        <li className="flex gap-3"><span className="text-slate-400">02</span> Mid-stage growth requiring coordination and clarity</li>
                        <li className="flex gap-3"><span className="text-slate-400">03</span> Later growth depending on systems that scale judgment</li>
                    </ul>
                    <p>
                        The hardest part isn’t growth itself. It’s the transition between phases. <br />
                        This is where most teams struggle — quietly.
                    </p>
                </div>

                {/* THE PLANNING CYCLE (Signature Section) */}
                <div className="mt-16 bg-white rounded-xl py-12 border-t border-b border-gray-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">When things feel stuck, we return to five questions:</h3>

                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="w-full md:w-1/2">
                            <PlanningCycleDiagram />
                        </div>
                        <div className="w-full md:w-1/2 space-y-6">
                            {[
                                { Q: "Where are we?", context: "Not what the plan says — what’s actually happening." },
                                { Q: "How did we get here?", context: "The decisions, shortcuts, and constraints that shaped today." },
                                { Q: "Where can we be?", context: "Not aspirational. Realistic." },
                                { Q: "How do we get there?", context: "What needs to change — and what doesn’t." },
                                { Q: "Are we getting there?", context: "Signals that tell us the truth early." }
                            ].map((item, i) => (
                                <div key={i}>
                                    <span className="font-bold text-slate-900 block text-lg">{item.Q}</span>
                                    <span className="text-slate-500 text-sm">{item.context}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* WHY THIS MATTERS */}
                <div className="prose prose-lg text-slate-600 mt-16 space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Why This Matters</h3>
                    <p>
                        Most teams try to optimize too early: Better tools, Tighter processes, More AI.
                        That can help — briefly.
                    </p>
                    <p className="font-bold text-slate-900">
                        But moving from 10 to 50 usually requires a rethink, not just efficiency. <br />
                        Clarity comes first. Execution follows.
                    </p>
                </div>

                {/* SOFT REFLECTION */}
                <div className="mt-16 bg-indigo-50 p-10 rounded-xl text-center">
                    <p className="text-lg text-indigo-900 mb-6">
                        You don’t need answers right now. Just notice:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-indigo-800">
                        <div className="bg-white/50 p-4 rounded">Where things feel heavier than before</div>
                        <div className="bg-white/50 p-4 rounded">Where decisions take longer</div>
                        <div className="bg-white/50 p-4 rounded">Where confidence has quietly dropped</div>
                    </div>
                    <p className="mt-8 text-indigo-400 text-xs uppercase tracking-widest font-bold">
                        THOSE ARE SIGNALS — NOT FAILURES.
                    </p>
                </div>

                {/* ROUTING OPTIONS */}
                <div className="mt-20 pt-10 border-t border-gray-100 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8">If this framing resonates, you have two options:</h3>

                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        {/* OPTION 1: Conversation */}
                        <Link to="/contact" className="btn bg-white border border-gray-200 hover:border-indigo-300 hover:shadow-lg text-slate-600 px-8 py-4">
                            Explore how we work
                        </Link>
                        {/* OPTION 2: Workbench */}
                        <Link to="/workbench" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg">
                            Continue inside the Agent Workbench
                        </Link>
                    </div>
                    <p className="mt-6 text-slate-400 text-sm">No forms. No pressure.</p>
                </div>
            </div>
        </div>
    );
};

export default StartHere;
