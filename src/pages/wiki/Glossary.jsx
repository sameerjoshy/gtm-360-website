import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { glossaryTerms, engineStages } from '../../data/glossary';

/** /wiki/glossary — the terms, grouped by engine stage. */

const Glossary = () => {
    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Glossary — the terms operators use | GTM-360 Knowledge Base"
                description="The GTM-360 glossary — the terms of go-to-market, defined the way operators use them, not the way vendors do."
                canonical="https://gtm-360.com/wiki/glossary"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "DefinedTermSet",
                    "name": "GTM-360 Glossary",
                    "url": "https://gtm-360.com/wiki/glossary",
                    "hasDefinedTerm": glossaryTerms.map((t) => ({
                        "@type": "DefinedTerm",
                        "name": t.title,
                        "description": t.shortDefinition,
                    })),
                })}</script>
            </Helmet>

            <section className="pt-32 pb-12 bg-white">
                <div className="container max-w-4xl">
                    <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
                        <Link to="/wiki" className="hover:text-indigo-600">Knowledge Base</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">Glossary</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900 leading-[1.1]">Glossary</h1>
                    <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed">
                        {glossaryTerms.length} terms, defined the way operators use them — not the way vendors do.
                    </p>
                </div>
            </section>

            <section className="pb-20 bg-white">
                <div className="container max-w-4xl">
                    {engineStages.map((stage) => {
                        const terms = glossaryTerms.filter((t) => t.stage === stage.id || t.stage === stage.title);
                        if (!terms.length) return null;
                        return (
                            <div key={stage.id} className="mb-14">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">{stage.title}</h2>
                                <div className="space-y-5">
                                    {terms.map((t) => (
                                        <div key={t.slug} className="border border-slate-200 rounded-xl p-6">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{t.shortDefinition}</p>
                                            {t.fullDefinition && t.fullDefinition !== t.shortDefinition ? (
                                                <p className="text-slate-500 text-sm leading-relaxed mt-3">{t.fullDefinition}</p>
                                            ) : null}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Any terms without a matching stage */}
                    {(() => {
                        const known = new Set(engineStages.flatMap((s) => [s.id, s.title]));
                        const rest = glossaryTerms.filter((t) => !known.has(t.stage));
                        if (!rest.length) return null;
                        return (
                            <div className="mb-14">
                                <h2 className="text-2xl font-bold text-slate-900 mb-6">More terms</h2>
                                <div className="space-y-5">
                                    {rest.map((t) => (
                                        <div key={t.slug} className="border border-slate-200 rounded-xl p-6">
                                            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{t.shortDefinition}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })()}
                </div>
            </section>
        </div>
    );
};

export default Glossary;
