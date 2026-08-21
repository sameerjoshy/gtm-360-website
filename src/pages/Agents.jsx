import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const agents = [
    {
        name: 'Prospect Researcher',
        question: 'What is actually going on inside this company?',
        what: 'Turns any company into a decision-grade briefing — ARR, funding, ICP fit, growth signals, and the opener that works.',
        free: true,
    },
    {
        name: 'CRM Hygiene Watchdog',
        question: 'Is our pipeline data trustworthy?',
        what: 'Scans HubSpot for stale deals, missing fields, and data debt. A health score and concrete fix actions, not a lecture.',
        free: true,
    },
    {
        name: 'Deal Intelligence',
        question: 'What is really happening with this deal?',
        what: 'Reads an active deal the way a senior operator would: stakeholders, buyer readiness, risk flags, and the next action that moves it.',
        free: true,
    },
    {
        name: 'Content Studio',
        question: 'Do we have anything worth saying?',
        what: 'Turns a raw observation into a QC-scored draft in your voice. Nothing publishes without your approval.',
        free: true,
    },
    {
        name: 'Weekly Briefing',
        question: 'Where does the revenue system stand?',
        what: 'The Chief of Staff memo: pipeline pulse, OKRs, escalations, flags, and the single most important thing.',
        free: true,
    },
    {
        name: 'Outbound Engine',
        question: 'Who is showing buying intent right now?',
        what: 'Detects buying-intent signals and drafts a three-step sequence. Evidence first, judgment always.',
        free: true,
    },
];

const AgentsPage = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="The Agent Suite | GTM-360"
                description="Six revenue agents, free to try. Prospect research, CRM hygiene, deal intelligence, content, weekly briefings, and outbound — all on your own data."
                canonical="https://gtm-360.com/agents"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "GTM-360 Agent Suite",
                        "provider": { "@type": "Organization", "name": "GTM-360" },
                        "description": "Six revenue agents free to try: prospect researcher, CRM hygiene, deal intelligence, content studio, weekly briefing, outbound engine.",
                    })}
                </script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-20 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">
                        The Agent Suite · Free to try
                    </p>
                    <h1 className="text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        Six agents.
                        <br />
                        Your revenue questions.
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light leading-relaxed">
                        We built the tools we use in engagements. Each agent answers one real
                        revenue question with evidence, not opinion. No AI theater, no magic —
                        signals, judgment, decision support.
                    </p>
                    <a
                        href="https://hq.gtm-360.com"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all"
                    >
                        Try them free →
                    </a>
                </div>
            </section>

            {/* AGENTS GRID */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {agents.map((a) => (
                            <div key={a.name} className="bg-white border border-slate-200 rounded-xl p-7 hover:border-indigo-200 hover:shadow-sm transition-all">
                                <p className="text-xs font-mono text-indigo-500 mb-3">"{a.question}"</p>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{a.name}</h3>
                                <p className="text-slate-600 leading-relaxed">{a.what}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        The same thinking.
                        <br />
                        On your data. Free.
                    </h2>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        These agents run on your own HubSpot and company data. Try the full suite —
                        no signup gate, no demo call, no upsell trap.
                    </p>
                    <a
                        href="https://hq.gtm-360.com"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-10 py-4 rounded font-bold hover:bg-slate-700 transition-all"
                    >
                        Open the Operator's Desk →
                    </a>
                    <p className="mt-4 text-xs text-slate-400">
                        Or <a href="/start-here" className="text-indigo-500 hover:underline">start with a conversation</a> about your revenue system.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AgentsPage;