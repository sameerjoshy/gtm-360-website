import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Bowtie from '../components/visuals/Bowtie';
import VideoEmbed from '../components/media/VideoEmbedMp4';
import { ENGINES, JOURNEY_TABLE } from '../data/engines';

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
                title="The GTM-360 Revenue Operating System | Strategy · Attract · Convert · Grow · Validate"
                description="GTM-360 is one revenue system: Strategy aims it, Marketing attracts, Sales converts, Expansion grows, Operations validates. Five engines, one loop, 55 specialist jobs — you confirm every move."
                canonical="https://gtm-360.com/system"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    "name": "GTM-360 Revenue Operating System",
                    "url": "https://gtm-360.com/system",
                    "provider": { "@type": "Organization", "name": "GTM-360" },
                    "applicationCategory": "BusinessApplication",
                    "description": "Five engines — Strategy, Marketing, Sales, Expansion, Operations — running the end-to-end go-to-market process with defined handoffs. AI does the work, you confirm the moves."
                })}</script>
            </Helmet>

            {/* HERO — the system, one loop */}
            <section className="pt-36 pb-16 bg-white">
                <div className="container max-w-3xl text-center">
                    <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-6">
                        GTM-360 · The Revenue Operating System
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        One system. Strategy to expansion.
                    </h1>
                    <p className="text-xl text-slate-500 mb-8 max-w-5xl mx-auto font-light leading-relaxed">
                        Strategy aims the system. Marketing attracts. Sales converts. Expansion grows.
                        Operations validates the numbers. The loop feeds a better next quarter — and you
                        confirm every move.
                    </p>
                    <Link to="/start-here"
                        className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        {identity ? 'Open the system →' : 'Start with the diagnostic →'}
                    </Link>
                    <p className="mt-3 text-xs text-slate-400">
                        Not ready to talk? <Link to="/resources/gtm-diagnostic-checklist" className="text-indigo-500 hover:underline">Run the free 54-point checklist →</Link>
                    </p>
                </div>
            </section>

            {/* THE BOWTIE */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <Bowtie />
                    <div className="mt-10 max-w-3xl mx-auto">
                        <VideoEmbed
                            src="/videos/bowtie-launch.mp4"
                            label="GTM-360 launch video — one loop, five engines"
                            autoplay
                            loop
                        />
                    </div>
                    <p className="text-slate-400 text-sm italic mt-6 text-center">
                        Most revenue tools map to your org chart. Ours maps to your customer's journey.
                    </p>
                </div>
            </section>

            {/* THE CLAIM */}
            <section className="py-16 bg-white">
                <div className="container max-w-3xl text-center">
                    <h5 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                        Most systems help you attract, convert, and grow.
                        <br />Ours understands before you start — and validates before you commit.
                    </h5>
                    <p className="text-lg text-slate-500 font-light leading-relaxed">
                        AI doesn't run the show. It keeps the method running between engagements — so the
                        discipline we set up doesn't stop when we leave the room. The strategy you approve
                        runs itself. You confirm the moves.
                    </p>
                </div>
            </section>

            {/* THE JOURNEY — mapped to engines */}
            <section className="py-54 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-5xl mb-15">
                        <h5 className="text-3xl font-bold text-slate-900 mb-3">The customer journey, mapped.</h5>
                        <p className="text-slate-500 font-light">Every stage your customer passes through — and the engine that serves it.</p>
                    </div>
                    <div className="space-y-3">
                        {JOURNEY_TABLE.map((row) => (
                            <div key={row.stage} className="flex items-center gap-5 bg-white border border-slate-500 rounded-xl p-5">
                                <div className="w-35 flex-shrink-0">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                                        style={{ background: `${row.color}1a`, color: row.color }}>
                                        {row.stage}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-slate-700 font-medium text-sm">{row.moment}</p>
                                </div>
                                <div className="w-64 text-right flex-shrink-0">
                                    <p className="text-sm font-bold text-slate-900">{row.engine}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE QUOTE */}
            <section className="py-16 bg-white">
                <div className="container max-w-3xl text-center">
                    <blockquote className="text-5xl md:text-3xl font-light text-slate-800 leading-relaxed">
                        "Automation applied to an efficient operation will magnify the efficiency. The
                        second is that automation applied to an inefficient operation will magnify the
                        inefficiency."
                    </blockquote>
                    <p className="text-sm text-slate-400 mt-4">— Bill Gates, <em>The Road Ahead</em>, 1995</p>
                    <p className="text-slate-500 text-sm mt-6 max-w-xl mx-auto">
                        This is why the system starts with Strategy and ends with Operations — process
                        first, technology second. The engine runs a good process. It never fixes a bad one.
                    </p>
                </div>
            </section>

            {/* THE ENGINES — with what each does */}
            <section className="py-54 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-5xl">
                    <div className="max-w-5xl mb-15">
                        <h5 className="text-3xl font-bold text-slate-900 mb-3">The five engines.</h5>
                        <p className="text-slate-500 font-light">Twenty-five specialist jobs, one accountable outcome each.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                        {ENGINES.map((e) => (
                            <div key={e.id} className="bg-white border border-slate-500 rounded-xl p-7">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-lg font-bold text-slate-900" style={{ color: e.color }}>{e.name}</span>
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">{e.agents.length} agents</span>
                                </div>
                                <p className="text-slate-700 font-medium mb-1">{e.what}</p>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{e.claim}</p>
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {e.agents.map((a) => (
                                        <span key={a.id} className="text-xs px-5 py-1 rounded bg-slate-100 text-slate-600">{a.name}</span>
                                    ))}
                                </div>
                                <p className="text-xs text-slate-400 italic">{e.handoff}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/engine"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-3 rounded font-bold hover:bg-slate-700 transition-all">
                            Explore the engine in detail →
                        </Link>
                    </div>
                </div>
            </section>

            {/* HOW IT RUNS — the loop story */}
            <section className="py-54 bg-white">
                <div className="container max-w-4xl">
                    <h5 className="text-3xl font-bold text-slate-900 mb-8 text-center">How the loop runs as one</h5>
                    <div className="space-y-4">
                        {[
                            ["Strategy", "know who to serve, decide what to do — the goal is set", "#5563eb"],
                            ["Marketing", "attract — content, SEO, ABM at your named accounts", "#10b981"],
                            ["Sales", "convert — signal, outreach, qualify, close", "#d97706"],
                            ["Expansion", "grow — the book is kept and compounded", "#0d9488"],
                            ["Operations", "validate — the numbers hold, the learnings feed back", "#475569"],
                        ].map(([name, desc, color], i) => (
                            <div key={i} className="flex gap-6 items-start p-6 bg-slate-50 rounded-xl">
                                <span className="w-4 h-4 rounded-full flex-shrink-0 mt-1.5" style={{ background: color }} />
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-1">{name}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                            Start with the diagnostic →
                        </Link>
                        <p className="mt-3 text-xs text-slate-400">Prefer a guided start? The diagnostic is where the strategy begins.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SystemPage;