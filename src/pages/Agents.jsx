import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';

const agents = [
    {
        question: 'What is actually going on inside this company?',
        name: 'Prospect Researcher',
        what: 'A company becomes a briefing — ARR, funding, ICP fit, growth signals, and the opener that works. The same research we do before any engagement, now run live.',
    },
    {
        question: 'Is our pipeline data trustworthy?',
        name: 'CRM Hygiene Watchdog',
        what: 'Stale deals, missing fields, data debt. A health score and the concrete fixes — not a lecture. The diagnostic we run on day one, now runnable on your own account.',
    },
    {
        question: 'What is really happening with this deal?',
        name: 'Deal Intelligence',
        what: 'Stakeholders, buyer readiness, risk flags, and the next action that moves a deal. The way a senior operator reads a pipeline, applied deal by deal.',
    },
    {
        question: 'Do we have anything worth saying?',
        name: 'Content Studio',
        what: 'A raw observation becomes a QC-scored draft in your voice. Nothing publishes without your approval. Same standard we hold our own output to.',
    },
    {
        question: 'Where does the revenue system stand?',
        name: 'Weekly Briefing',
        what: 'Pipeline pulse, OKRs, escalations, flags, and the one thing that matters. The memo we write for founders and CROs, now written from your data.',
    },
    {
        question: 'Who is showing buying intent right now?',
        name: 'Outbound Engine',
        what: 'Buying-intent signals become a three-step sequence. Evidence first, judgment always — nothing goes out without your call.',
    },
];

const AgentsPage = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="The Operator's Desk | GTM-360"
                description="The same revenue system we use in every engagement, running live on a sample workspace. Six questions. Six agents. Try the method, not a demo."
                canonical="https://gtm-360.com/agents"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "GTM-360 Operator's Desk",
                        "provider": { "@type": "Organization", "name": "GTM-360" },
                        "description": "The revenue system GTM-360 uses in engagements, running live on a sample workspace: prospect research, CRM hygiene, deal intelligence, content, weekly briefing, and outbound.",
                    })}
                </script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-20 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">
                        The Operator's Desk · The method, live
                    </p>
                    <h1 className="text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        We believe judgment comes from evidence.
                        <br />
                        Here's the system that produces it.
                    </h1>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl font-light leading-relaxed">
                        Every engagement starts with the same six questions. These agents answer
                        them with evidence, not opinion — the way a senior operator works. No AI
                        theater. Signals, judgment, decision support.
                    </p>
                    <a
                        href="https://hq.gtm-360.com"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all"
                    >
                        Run them on a sample workspace →
                    </a>
                    <p className="mt-4 text-xs text-slate-400">
                        Try the full suite on anonymised sample data. No signup, no demo call.
                    </p>
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
                        This is how we diagnose.
                        <br />
                        See it work before you talk to us.
                    </h2>
                    <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Run the agents on a sample workspace and see the quality of the output
                        yourself. If that's the standard you want on your own data, that's the
                        conversation.
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