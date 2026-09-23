import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
// Agent videos come from the build-time registry (produced by build-agent-videos.mjs).
import AgentVideo from '../../components/media/AgentVideo';
import { ENGINES } from '../../data/engines';
import { AGENT_GUIDES } from '../../data/agentGuides';
import videoRegistry from '../../data/videoRegistry.json';

/**
 * Canonical per-agent page: gtm-360.com/agents/<engine>/<agent>.
 * Renders the agent's contract (Takes → Gives) in the outcome-first standard
 * description format, with breadcrumb, engine/journey context, a "Try it" CTA,
 * and JSON-LD for discoverability. Rendered statically at build time.
 */

// Which product surface each agent deep-links to for "Try it".
const AGENT_SURFACE = {
  'seo-analyzer': 'https://agents.gtm-360.com/seo',
  qualifier: 'https://agents.gtm-360.com/qualify',
  diagnostic: 'https://agents.gtm-360.com/diagnostic',
  listener: 'https://agents.gtm-360.com/listen',
  sniper: 'https://agents.gtm-360.com/snipe',
  'content-radar': 'https://agents.gtm-360.com/radar',
  'angle-validator': 'https://agents.gtm-360.com/create',
  researcher: 'https://agents.gtm-360.com/create',
  'spec-builder': 'https://agents.gtm-360.com/create',
  writer: 'https://agents.gtm-360.com/create',
  editor: 'https://agents.gtm-360.com/create',
  distribute: 'https://agents.gtm-360.com/create',
  'goal-designer': 'https://agents.gtm-360.com/goal-designer',
  'market-research': 'https://agents.gtm-360.com/market',
  'roadmap-align': 'https://agents.gtm-360.com/roadmap-align',
  'campaign-builder': 'https://agents.gtm-360.com/campaign',
  'account-planner': 'https://agents.gtm-360.com/account-planner',
  'abm-playbook': 'https://agents.gtm-360.com/abm',
  'video-outreach': 'https://agents.gtm-360.com/video-outreach',
  'pricing-strategist': 'https://agents.gtm-360.com/pricing',
  'negotiation-coach': 'https://agents.gtm-360.com/negotiation',
  'onboarding-coach': 'https://agents.gtm-360.com/onboarding',
  'renewal-analyst': 'https://agents.gtm-360.com/renewal',
  'cross-sell-scout': 'https://agents.gtm-360.com/cross-sell',
  'goal-integrity': 'https://agents.gtm-360.com/goal-integrity',
  'signals-scout': 'https://agents.gtm-360.com/scout',
  'deal-room': 'https://agents.gtm-360.com/deal-room',
  'health-monitor': 'https://agents.gtm-360.com/churn',
  'churn-predictor': 'https://agents.gtm-360.com/churn',
  'expansion-radar': 'https://agents.gtm-360.com/expansion',
  'win-loss': 'https://agents.gtm-360.com/win-loss',
  'pipeline-auditor': 'https://agents.gtm-360.com/pipeline-audit',
  attribution: 'https://agents.gtm-360.com/attribution',
  'comp-quota': 'https://agents.gtm-360.com/comp-quota',
  'workflow-builder': 'https://agents.gtm-360.com/workflow',
  'chief-of-staff': 'https://agents.gtm-360.com/command',
  hygiene: 'https://agents.gtm-360.com/hygiene',
  'forecast-analyser': 'https://agents.gtm-360.com/forecast',
  'planning-cycle': 'https://agents.gtm-360.com/planning',
  'icp-clarifier': 'https://agents.gtm-360.com/icp',
  'competitor-intel': 'https://agents.gtm-360.com/competitor',
};

const AgentPage = () => {
    const { engine, agent } = useParams();
    const eng = ENGINES.find((e) => e.id === engine);
    const ag = eng?.agents.find((a) => a.id === agent);

    if (!eng || !ag) {
        return (
            <div className="pt-36 pb-24 bg-white font-sans text-slate-900 min-h-screen">
                <div className="container max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-6">Agent not found</h1>
                    <Link to="/agents" className="text-indigo-600 font-bold hover:underline">← Back to the agent directory</Link>
                </div>
            </div>
        );
    }

    const surface = AGENT_SURFACE[ag.id] ?? 'https://agents.gtm-360.com';
    const journeyLabel = eng.journey ? ` · ${eng.journey.charAt(0).toUpperCase() + eng.journey.slice(1)}` : '';
    const videoSrc = videoRegistry[ag.id]?.videoUrl ?? null;

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title={`${ag.name} | ${eng.name} Engine | GTM-360`}
                description={`${ag.name} — ${ag.role}. Takes ${ag.take}. Gives ${ag.give}. Part of the ${eng.name} engine (${eng.what}). GTM-360's evidence-first specialist agents.`}
                canonical={`https://gtm-360.com/agents/${eng.id}/${ag.id}`}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": `${ag.name} — GTM-360`,
                        "description": `${ag.role}. Takes ${ag.take}; gives ${ag.give}. Part of the ${eng.name} engine.`,
                        "provider": { "@type": "Organization", "@id": "https://gtm-360.com/#organization" },
                        "serviceType": `${eng.name} Engine · ${ag.role}`,
                        "url": `https://gtm-360.com/agents/${eng.id}/${ag.id}`,
                        "areaServed": "Worldwide",
                    })}
                </script>
            </Helmet>

            {/* BREADCRUMB */}
            <section className="pt-28 pb-2 bg-white">
                <div className="container max-w-4xl">
                    <nav className="text-xs text-slate-400 mb-4" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-indigo-600">GTM-360</Link>
                        <span className="mx-1.5">/</span>
                        <Link to="/agents" className="hover:text-indigo-600">Agents</Link>
                        <span className="mx-1.5">/</span>
                        <Link to="/agents" className="hover:text-indigo-600">{eng.name}</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">{ag.name}</span>
                    </nav>
                </div>
            </section>

            {/* HERO — text left, story video right */}
            <section className="pb-14 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        {/* Left: outcome-first standard description */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: eng.color }}>
                                {eng.name} Engine{journeyLabel} · {ag.role}
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                                {ag.name}
                            </h1>

                            <div className="space-y-3 text-lg text-slate-500 leading-relaxed">
                                <p><span className="font-semibold text-slate-800">What it does:</span> {ag.role.toLowerCase()} — {eng.what.toLowerCase()}</p>
                                <p><span className="font-semibold text-slate-800">What you get:</span> {ag.give}.</p>
                                <p><span className="font-semibold text-slate-800">What it needs:</span> {ag.take}.</p>
                                <p><span className="font-semibold text-slate-800">How it stays honest:</span> every claim is grounded in your data and the evidence gathered — measured, not guessed.</p>
                            </div>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <a href={surface} target="_blank" rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                                    Try it →
                                </a>
                                <Link to="/engine"
                                    className="inline-flex items-center justify-center bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                                    See the {eng.name} engine →
                                </Link>
                            </div>
                            {AGENT_GUIDES[ag.id] ? (
                                <p className="mt-5 text-sm text-slate-500">
                                    New to this? <Link to={`/agents/${eng.id}/${ag.id}/guide`} className="text-indigo-600 font-semibold hover:underline">Read the plain-English guide →</Link> — how to read the output and the terms it uses.
                                </p>
                            ) : null}
                        </div>

                        {/* Right: the story video (appears when the agent's video ships) */}
                        {videoSrc ? (
                            <div className="w-full">
                                <AgentVideo src={videoSrc} label={`How ${ag.name} works`} />
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

            {/* THE CONTRACT — takes / gives */}
            <section className="py-14 bg-slate-50 border-y border-slate-100">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Takes</p>
                            <p className="text-slate-700 font-medium">{ag.take}</p>
                        </div>
                        <div className="bg-white border border-slate-200 rounded-xl p-6">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Gives</p>
                            <p className="text-slate-700 font-medium">{ag.give}</p>
                        </div>
                    </div>

                    <div className="mt-6 bg-white border border-slate-200 rounded-xl p-6">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">The handoff</p>
                        <p className="text-slate-700 text-sm">{eng.handoff}</p>
                    </div>
                </div>
            </section>

            {/* THE ENGINE — context */}
            <section className="py-14 bg-white">
                <div className="container max-w-4xl">
                    <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: eng.color }}>{eng.name}</p>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">Part of the {eng.name} engine</h2>
                    <p className="text-slate-500 max-w-2xl mb-6">{eng.claim}</p>
                    <div className="flex flex-wrap gap-2">
                        {eng.agents.map((a) => (
                            <Link
                                key={a.id}
                                to={`/agents/${eng.id}/${a.id}`}
                                className={`text-xs px-3 py-1.5 rounded border transition-all ${a.id === ag.id ? 'text-white border-transparent' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'}`}
                                style={a.id === ag.id ? { background: eng.color } : undefined}
                            >
                                {a.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">See it work before you talk to us.</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Try {ag.name} on a sample workspace and judge the output yourself. If that's the
                        standard you want on your own data, that's the conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href={surface} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-slate-900 px-10 py-4 rounded font-bold hover:bg-slate-100 transition-all">
                            Try {ag.name} →
                        </a>
                        <Link to="/start-here"
                            className="inline-flex items-center justify-center bg-transparent text-slate-300 border border-slate-600 px-10 py-4 rounded font-medium hover:border-slate-400 transition-all">
                            Start with a conversation →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AgentPage;