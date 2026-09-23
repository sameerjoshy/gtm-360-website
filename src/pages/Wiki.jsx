import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { AGENT_PORTAL_URL } from '../components/Header';

/**
 * /wiki — the knowledge base. One roof for the operating model (Method),
 * the agent guides, the playbooks, and the glossary.
 */

const SUBSTACK_URL = "https://gtm360.substack.com/?r=65ta79&utm_campaign=pub-share-checklist";

const tiles = [
    {
        to: "/wiki/method",
        label: "The Operating Model",
        desc: "How go-to-market actually works — 10 layers, 40+ processes, the workflows and tools behind each. The full method.",
        tag: "Method",
    },
    {
        to: "/wiki/guides",
        label: "Agent Guides",
        desc: "A plain-English guide for every specialist agent — what it produces, how to read it, and how it stays honest.",
        tag: "Reference",
    },
    {
        to: "/wiki/playbooks",
        label: "Playbooks",
        desc: "The step-by-step plays behind each fix — audit, diagnose, and rebuild, in order.",
        tag: "Playbooks",
    },
    {
        to: "/wiki/glossary",
        label: "Glossary",
        desc: "The terms, defined the way operators use them — not the way vendors do.",
        tag: "Reference",
    },
];

const Wiki = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Knowledge Base — the GTM operating model, playbooks, and guides | GTM-360"
                description="The GTM-360 knowledge base: the operating model (10 layers, 40+ processes), playbooks, a glossary, and a plain-English guide to every specialist agent."
                canonical="https://gtm-360.com/wiki"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "GTM-360 Knowledge Base",
                    "url": "https://gtm-360.com/wiki",
                    "description": "The operating model, playbooks, glossary, and agent guides.",
                })}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-36 pb-16 bg-white">
                <div className="container max-w-3xl">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">Knowledge Base</p>
                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.08]">
                        The whole method, written down.
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl font-light leading-relaxed">
                        How go-to-market actually works, the plays we run, the terms we use, and a
                        plain-English guide to every agent. Read it before you buy — or after, to check
                        the work.
                    </p>
                </div>
            </section>

            {/* TILES */}
            <section className="pb-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {tiles.map((t) => (
                            <Link key={t.to} to={t.to}
                                className="border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all block">
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">{t.tag}</span>
                                <h2 className="text-xl font-bold text-slate-900 mb-3">{t.label}</h2>
                                <p className="text-slate-500 leading-relaxed mb-4">{t.desc}</p>
                                <span className="text-sm font-bold text-blue-600">Open →</span>
                            </Link>
                        ))}
                        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer"
                            className="border border-slate-200 rounded-xl p-8 hover:shadow-md hover:border-slate-300 transition-all block bg-slate-50">
                            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 block">Essays</span>
                            <h2 className="text-xl font-bold text-slate-900 mb-3">Longer writing ↗</h2>
                            <p className="text-slate-500 leading-relaxed mb-4">
                                The essays live on Substack — where the thinking gets longer and more personal.
                            </p>
                            <span className="text-sm font-bold text-blue-600">Read on Substack →</span>
                        </a>
                    </div>

                    {/* Portal cross-link */}
                    <div className="mt-8 border border-slate-200 rounded-xl p-6 bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-sm text-slate-300">Read enough? Run the agents on your own data.</p>
                        <a href={AGENT_PORTAL_URL}
                            className="bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-100 transition-all text-center whitespace-nowrap">
                            Agent Portal →
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Wiki;
