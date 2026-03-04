import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Filter, BarChart2, Users, Zap, Eye } from 'lucide-react';
import SEO from '../components/SEO';

const agents = [
    {
        icon: <Filter className="w-6 h-6" />,
        name: "Pipeline Clarity Agent",
        question: "Which deals in my pipeline are real?",
        what: "Analyses open opportunities against stage criteria, buyer engagement signals, and historical close patterns. Surfaces deals that look active but have no genuine buyer momentum.",
        output: "A ranked view of pipeline by evidence quality — not rep optimism.",
        color: "emerald"
    },
    {
        icon: <BarChart2 className="w-6 h-6" />,
        name: "Forecast Confidence Agent",
        question: "What can I actually commit to this quarter?",
        what: "Triangulates pipeline signals, historical conversion rates, deal velocity, and engagement depth to produce a confidence-weighted forecast.",
        output: "A defensible number — with the evidence behind it, not just the gut behind it.",
        color: "indigo"
    },
    {
        icon: <Activity className="w-6 h-6" />,
        name: "Execution Drift Agent",
        question: "Where is the team drifting from the plan?",
        what: "Monitors activity signals, stage progression, and engagement patterns against expected behaviour. Surfaces drift early — before it shows up as a missed quarter.",
        output: "Early warning on where execution is diverging from strategy.",
        color: "violet"
    },
    {
        icon: <Users className="w-6 h-6" />,
        name: "ICP Signal Agent",
        question: "Are we still targeting the right accounts?",
        what: "Analyses win/loss patterns, deal velocity, and conversion rates by segment to surface ICP drift — when the accounts being pursued no longer match the accounts that close.",
        output: "Clarity on which segment is performing and where targeting has drifted.",
        color: "blue"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        name: "Deal Momentum Agent",
        question: "Which deals need attention now?",
        what: "Tracks buyer engagement signals across email, meetings, and content interaction. Flags deals going cold before the rep notices and identifies where deals are stalling.",
        output: "A daily view of which deals have momentum and which are quietly dying.",
        color: "amber"
    },
    {
        icon: <Eye className="w-6 h-6" />,
        name: "Expansion Signal Agent",
        question: "Which customers are ready to expand?",
        what: "Monitors product usage, support patterns, and engagement signals within existing accounts to identify expansion readiness before customers ask.",
        output: "A prioritised expansion view — surfaced by evidence, not by CS intuition alone.",
        color: "teal"
    }
];

const AgentWorkbench = () => {
    const [activeAgent, setActiveAgent] = useState(0);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
            <SEO
                title="GTM Intelligence Layer | GTM-360"
                description="AI agents that answer the revenue questions your team is already asking — with evidence instead of opinion."
            />

            {/* HERO */}
            <section className="pt-32 pb-24 bg-slate-900 text-white">
                <div className="container max-w-4xl">
                    <span className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-6 block">Revenue Intelligence</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white leading-tight">
                        The questions your team asks every week — answered with evidence, not gut feel.
                    </h1>
                    <p className="text-xl text-slate-300 mb-6 max-w-2xl font-light leading-relaxed">
                        Every revenue team has the same weekly questions. Which deals are real? What can we actually commit? Where is execution drifting? The GTM Intelligence Layer answers them with evidence — not gut feel.
                    </p>
                    <p className="text-slate-400 mb-12 max-w-xl">
                        Not a dashboard. Not more data. A layer that sits on top of your existing systems and produces decisions, not noise.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://app.gtm-360.com"
                            className="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40"
                        >
                            Request access <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                        <Link
                            to="/how-we-work"
                            className="inline-flex items-center justify-center bg-transparent text-slate-300 border border-slate-700 px-8 py-4 rounded font-medium hover:border-slate-500 transition-all"
                        >
                            See how it fits the system
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHAT IT IS — honest, non-hype */}
            <section className="py-24 bg-white border-b border-slate-100">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                label: "What it is",
                                text: "A set of purpose-built AI agents, each designed to answer one specific revenue question. Built on top of your CRM, outbound, and engagement data."
                            },
                            {
                                label: "What it is not",
                                text: "It is not a replacement for human judgment. It is not another dashboard to maintain. It does not add complexity to an already noisy system."
                            },
                            {
                                label: "What makes it different",
                                text: "Each agent is trained on the same diagnostic frameworks we use in engagements. The output is designed to support decisions — not to create more things to look at."
                            }
                        ].map((item, i) => (
                            <div key={i} className="border-l-2 border-slate-200 pl-6">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{item.label}</p>
                                <p className="text-slate-700 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE AGENTS */}
            <section className="py-24 bg-slate-50">
                <div className="container max-w-6xl">
                    <div className="text-center mb-14">
                        <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">The Agent Suite</span>
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Six questions. Six agents.</h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-light">
                            Each agent is built around a real question revenue leaders ask every week. Select one to see what it does.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Agent selector */}
                        <div className="lg:col-span-2 space-y-3">
                            {agents.map((agent, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveAgent(i)}
                                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                                        activeAgent === i
                                            ? 'bg-slate-900 border-slate-900 text-white'
                                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={activeAgent === i ? 'text-indigo-400' : 'text-slate-400'}>
                                            {agent.icon}
                                        </span>
                                        <span className="font-medium text-sm">{agent.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Agent detail */}
                        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-10">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">The question it answers</p>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                                "{agents[activeAgent].question}"
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">What it does</p>
                                    <p className="text-slate-600 leading-relaxed">{agents[activeAgent].what}</p>
                                </div>
                                <div className="p-5 bg-slate-50 rounded-lg border-l-4 border-indigo-500">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Output</p>
                                    <p className="text-slate-800 font-medium leading-relaxed">{agents[activeAgent].output}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW IT FITS */}
            <section className="py-24 bg-white border-y border-slate-100">
                <div className="container max-w-4xl text-center">
                    <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">Context</span>
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        Built to run on top of the system we build with you.
                    </h2>
                    <p className="text-xl text-slate-500 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
                        The Intelligence Layer is most effective after the revenue system has been designed and implemented. It's the monitoring and signal layer — not a shortcut to the thinking.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                        <a
                            href="https://app.gtm-360.com"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all"
                        >
                            Request access
                        </a>
                        <Link
                            to="/start-here"
                            className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all"
                        >
                            Start with a diagnostic first
                        </Link>
                    </div>
                    <p className="text-slate-400 text-sm">All data stays in your systems. Nothing is hidden. Every agent shows its inputs and reasoning.</p>
                </div>
            </section>
        </div>
    );
};

export default AgentWorkbench;
