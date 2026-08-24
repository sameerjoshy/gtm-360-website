import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const products = [
    {
        name: 'Compass',
        tagline: 'Set the course',
        url: 'https://okr.gtm-360.com',
        desc: 'Goals, OKRs, alignment, and confidence. The strategy you approve lives here, checked in on weekly so drift shows up in weeks, not quarters.',
        step: '01 — Plan',
        cta: 'Open Compass →',
    },
    {
        name: 'Cockpit',
        tagline: 'Command the execution',
        url: 'https://brain.gtm-360.com',
        desc: 'The agent swarm runs research, deal work, content, and the weekly briefing. It proposes; you confirm. Nothing executes without your call.',
        step: '02 — Execute',
        cta: 'Open Cockpit →',
    },
    {
        name: 'Crew',
        tagline: 'Specialists on call',
        url: 'https://agents.gtm-360.com',
        desc: 'Evidence-first specialist agents across strategy, sales, marketing, CS, and RevOps. Ask a focused question, get a grounded answer.',
        step: '03 — Ask',
        cta: 'Open Crew →',
    },
];

const SystemPage = () => {
    const [identity, setIdentity] = React.useState(null);

    React.useEffect(() => {
        const match = document.cookie.match(/(?:^|;\s*)gtm360_id=([^;]+)/);
        if (match) {
            try { setIdentity(JSON.parse(decodeURIComponent(atob(match[1])))); } catch { /* ignore */ }
        }
    }, []);

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="The GTM-360 Operating System | Compass · Cockpit · Crew"
                description="GTM-360 is one operating system: Compass sets the course, Cockpit commands the execution, Crew puts specialists on call. Strategy is the plan. AI is the execution."
                canonical="https://gtm-360.com/system"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "GTM-360 Operating System",
                    "url": "https://gtm-360.com/system",
                    "provider": { "@type": "Organization", "name": "GTM-360" },
                    "applicationCategory": "BusinessApplication",
                    "description": "Compass (goals & strategy), Cockpit (execution command), Crew (specialist agents). One GTM-360 account across all three.",
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-16 bg-white">
                <div className="container max-w-3xl text-center">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">
                        GTM-360 · The Revenue Operating System
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        One system. Strategy to execution.
                    </h1>
                    <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                        Compass sets the course. Cockpit commands the execution. Crew puts specialists
                        on call. The strategy you approve runs itself — AI does the work, you confirm
                        the moves.
                    </p>
                    <a href="https://okr.gtm-360.com"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        {identity ? 'Open Compass →' : 'Start with Compass — free →'}
                    </a>
                    <div className="mt-4">
                        <Link to="/resources/gtm-diagnostic-checklist"
                            className="text-sm text-slate-400 hover:text-slate-200 underline underline-offset-4 transition-colors">
                            Not ready to sign up? Run the free 24-point diagnostic checklist →
                        </Link>
                    </div>
                    <p className="mt-4 text-xs text-slate-400">
                        {identity
                            ? <>Signed in as <span className="text-slate-500 font-medium">{identity.name || identity.email}</span> — one GTM-360 account across all three products.</>
                            : 'One GTM-360 account across all three products. No credit card to start.'}
                    </p>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.map((p) => (
                            <div key={p.name} className="bg-white border border-slate-200 rounded-xl p-8 hover:border-indigo-200 hover:shadow-md transition-all flex flex-col">
                                <p className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-2">{p.step}</p>
                                <div className="mb-2">
                                    <span className="text-2xl font-bold text-slate-900">{p.name}</span>
                                    <span className="text-slate-400 text-sm ml-2">· {p.tagline}</span>
                                </div>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{p.desc}</p>
                                <a href={p.url} target="_blank" rel="noopener noreferrer"
                                    className="text-sm font-bold text-indigo-600 hover:underline inline-flex items-center gap-1 pt-4 border-t border-slate-100">
                                    {p.cta}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE LOOP */}
            <section className="py-20 bg-white">
                <div className="container max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">How the three work as one</h2>
                    <div className="space-y-4">
                        {[
                            ["01", "Compass sets the goal", "OKRs, alignment, and confidence — the strategy you and your operator agreed on, captured in one place and checked weekly."],
                            ["02", "Cockpit runs it", "The agent swarm executes the support work — research, deal intelligence, content, briefings. Proposals land for your approval before anything runs."],
                            ["03", "Crew answers the specialists", "When a specific question needs a specialist — churn risk, forecast integrity, competitor moves — the Crew answers with evidence from your data."],
                        ].map(([n, title, desc]) => (
                            <div key={n} className="flex gap-6 items-start p-6 bg-slate-50 rounded-xl">
                                <span className="text-3xl font-bold text-slate-200 flex-shrink-0">{n}</span>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <a href="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </a>
                        <p className="mt-3 text-xs text-slate-400">Prefer a guided start? The diagnostic is where the strategy begins.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SystemPage;