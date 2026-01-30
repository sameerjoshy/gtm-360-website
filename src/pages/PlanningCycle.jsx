import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, RefreshCw, Check, Map, Target, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import PlanningCycleDiagram from '../components/visuals/PlanningCycleDiagram';

const PlanningCycle = () => {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="The Planning Cycle | GTM-360"
                description="The core methodology of GTM-360. A 5-step cycle for maintaining clarity and momentum in complex revenue systems."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
                <div className="container max-w-5xl text-center">
                    <span className="text-[var(--color-primary)] font-mono text-xs tracking-widest uppercase mb-4 block">Methodology</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        The Planning Cycle
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
                        When things feel stuck, we return to five questions. <br />
                        This isn't just a strategy exercise. It’s an operating rhythm.
                    </p>
                </div>
            </section>

            {/* THE DIAGRAM */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl flex justify-center">
                    <div className="scale-100 transform">
                        <PlanningCycleDiagram />
                    </div>
                </div>
            </section>

            {/* DEEP DIVE STEPS */}
            <section className="py-20 bg-white">
                <div className="container max-w-3xl space-y-20">

                    {/* STEP 1 */}
                    <div className="flex gap-8">
                        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold text-indigo-600">01</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where are we today?</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Most teams skip this. They start with "What should we do?" instead of "What is actually happening?"
                            </p>
                            <div className="bg-slate-50 p-6 rounded border-l-4 border-indigo-200">
                                <span className="font-bold text-indigo-900 block mb-2">The Shift:</span>
                                <p className="text-slate-700">From "Dashboard Reality" to "Ground Truth".</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 2 */}
                    <div className="flex gap-8">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold text-emerald-600">02</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How did we get here?</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Understanding the root cause. Was it a bad decision? A market shift? Or a constraint we accepted long ago?
                            </p>
                            <div className="bg-slate-50 p-6 rounded border-l-4 border-emerald-200">
                                <span className="font-bold text-emerald-900 block mb-2">The Shift:</span>
                                <p className="text-slate-700">From "Blame" to "Systemic Understanding".</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 3 */}
                    <div className="flex gap-8">
                        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold text-purple-600">03</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Where could we realistically be?</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                Scenarios, not dreams. Defining the range of possible outcomes based on current constraints.
                            </p>
                            <div className="bg-slate-50 p-6 rounded border-l-4 border-purple-200">
                                <span className="font-bold text-purple-900 block mb-2">The Shift:</span>
                                <p className="text-slate-700">From "Wishful Thinking" to "Credible Scenarios".</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 4 */}
                    <div className="flex gap-8">
                        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold text-amber-600">04</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How do we get there?</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                The strategy. The tradeoffs. The resources required to move the needle.
                            </p>
                            <div className="bg-slate-50 p-6 rounded border-l-4 border-amber-200">
                                <span className="font-bold text-amber-900 block mb-2">The Shift:</span>
                                <p className="text-slate-700">From "Activity Lists" to "Focused Bets".</p>
                            </div>
                        </div>
                    </div>

                    {/* STEP 5 */}
                    <div className="flex gap-8">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold text-red-600">05</div>
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Are we getting there?</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-4">
                                The feedback loop. Installing the signals that tell us if the plan is working — early enough to adjust.
                            </p>
                            <div className="bg-slate-50 p-6 rounded border-l-4 border-red-200">
                                <span className="font-bold text-red-900 block mb-2">The Shift:</span>
                                <p className="text-slate-700">From "Lagging Indicators" to "Leading Signals".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-bold mb-8">Run this cycle with your team.</h2>
                    <p className="text-lg text-slate-300 mb-8">
                        You can do this on a whiteboard. <br /> Or you can use the Workbench to keep it running.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/workbench" className="btn bg-[var(--color-primary)] text-white hover:bg-indigo-700 px-8 py-4 shadow-lg flex items-center justify-center">
                            See the Workbench <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PlanningCycle;
