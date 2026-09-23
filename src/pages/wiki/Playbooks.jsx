import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { playbooks } from '../../data/playbooks';

/** /wiki/playbooks — the playbook library. */

const Playbooks = () => {
    const categories = [...new Set(playbooks.map((p) => p.category))];

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Playbooks — the step-by-step plays | GTM-360 Knowledge Base"
                description="The GTM-360 playbook library — the audit, diagnostic, and rebuild plays behind every fix, in order."
                canonical="https://gtm-360.com/wiki/playbooks"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "GTM-360 Playbooks",
                    "url": "https://gtm-360.com/wiki/playbooks",
                    "hasPart": playbooks.map((p) => ({ "@type": "Article", "name": p.title, "url": `https://gtm-360.com/wiki/playbooks/${p.slug}` })),
                })}</script>
            </Helmet>

            <section className="pt-32 pb-12 bg-white">
                <div className="container max-w-5xl">
                    <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
                        <Link to="/wiki" className="hover:text-indigo-600">Knowledge Base</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">Playbooks</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900 leading-[1.1]">Playbooks</h1>
                    <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed">
                        The step-by-step plays behind every fix — {playbooks.length} of them, across{" "}
                        {categories.length} disciplines. Written to be run, not read.
                    </p>
                </div>
            </section>

            <section className="pb-20 bg-white">
                <div className="container max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {playbooks.map((p) => (
                            <Link key={p.slug} to={`/wiki/playbooks/${p.slug}`}
                                className="border border-slate-200 rounded-xl p-7 hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 block">{p.category}</span>
                                <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{p.title}</h2>
                                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1">{p.subtitle}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                    <span className="text-xs text-slate-400">{p.readTime} · {p.difficulty}</span>
                                    <span className="text-xs font-bold text-indigo-600">Open →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Playbooks;
