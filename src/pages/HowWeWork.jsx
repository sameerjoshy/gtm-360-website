import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PlanningCycleMinimal from '../components/visuals/PlanningCycleMinimal';

const HowWeWork = () => {
    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="How GTM-360 Works | Diagnose, Design, Build"
                description="We work alongside your team — not above it. Three phases: find the real problem, design the fix, build it. We stay until it's working."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        We work alongside your team.<br />Not above it.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Think of us as a senior GTM partner — someone who's been in these conversations before, knows what to look for, and can work with your team to fix what's actually in the way.
                    </p>
                </div>
            </section>

            {/* THE THREE PHASES */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl space-y-6">

                    {[
                        {
                            phase: "Phase 1",
                            color: "emerald",
                            title: "Find what's actually broken",
                            duration: "10–14 days",
                            body: "Before we touch anything, we find the real constraint. Not the one that looks most obvious — the one that's actually causing the problem. Most teams we talk to have already tried the obvious fix. More pipeline. Better tools. New process. It hasn't worked because the diagnosis was wrong.\n\nWe spend 10 to 14 days examining how your revenue system actually behaves — pipeline quality, how deals move, where they stall, whether your ICP still matches who you're selling to, and whether your forecast reflects reality.\n\nAt the end, you get a clear read on what's actually in the way. No obligation to continue.",
                            gets: ["The real constraint, clearly named", "Why previous fixes didn't stick", "What needs to change first — and what can wait", "An honest view of what it will take"],
                            link: "/start-here",
                            cta: "Start with the diagnostic"
                        },
                        {
                            phase: "Phase 2",
                            color: "indigo",
                            title: "Design the fix",
                            duration: "Typically 4–8 weeks",
                            body: "Once we know the constraint, we redesign the parts of the revenue system that are causing it. This might be pipeline stage definitions. It might be the ICP. It might be how marketing and sales hand off to each other, or how you run your weekly forecast call.\n\nWe design the fix with your team — not for them. The people running the system need to understand it and believe in it, or it won't hold.",
                            gets: ["GTM operating model redesign", "ICP and segmentation clarity", "Pipeline and stage architecture", "Handoff protocols and governance", "The metrics that actually matter"],
                            link: "/start-here",
                            cta: "Talk about your situation"
                        },
                        {
                            phase: "Phase 3",
                            color: "violet",
                            title: "Build it",
                            duration: "Depends on scope",
                            body: "A good system design on paper doesn't help anyone. Our specialists build the changes — CRM architecture, outbound infrastructure, automation workflows, AI signal layers, reporting. You don't manage a list of vendors. We own the implementation end to end.\n\nWhen it's done, your team has a running system they understand and can operate — not a set of slides.",
                            gets: ["CRM rebuilt around the new model", "Outbound infrastructure and sequencing", "Automation that reduces manual work", "Reporting that reflects real performance", "Handover with documentation and training"],
                            link: "/start-here",
                            cta: "Start with the diagnostic"
                        }
                    ].map((phase, i) => (
                        <div key={i} className={`bg-white rounded-xl p-8 md:p-10 border border-slate-200 hover:border-${phase.color}-200 transition-colors`}>
                            <div className="flex flex-wrap items-center gap-3 mb-5">
                                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">{phase.phase}</span>
                                <span className={`text-xs font-bold text-${phase.color}-600 uppercase tracking-widest`}>·</span>
                                <span className="text-xs text-slate-400">{phase.duration}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-5">{phase.title}</h3>
                            {phase.body.split('\n\n').map((para, j) => (
                                <p key={j} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                            ))}
                            <div className="mt-6 pt-6 border-t border-slate-100">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">What you get</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {phase.gets.map((g, j) => (
                                        <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                            <span className={`text-${phase.color}-500 font-bold mt-0.5`}>✓</span> {g}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Link to={phase.link} className={`text-${phase.color}-700 font-bold text-sm hover:underline`}>{phase.cta} →</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* HOW WE THINK */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">How we think about every engagement</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Every conversation we have — whether it's a diagnostic call or a quarterly review — starts from the same five questions. It keeps us honest and stops us from jumping to solutions before we've understood the problem.
                            </p>
                            <div className="space-y-3">
                                {["Where are we, really?", "How did we get here?", "Where could we be?", "How do we get there?", "Are we getting there?"].map((q, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-slate-200 w-5">{i + 1}</span>
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

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which phase applies to you?</h2>
                    <p className="text-slate-500 mb-10">Most engagements start with a conversation. Tell us what's happening and we'll tell you what we'd suggest.</p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Talk to us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HowWeWork;
