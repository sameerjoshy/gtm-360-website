import React, { useState, useEffect, useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { caseStudies } from '../../data/caseStudies';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

// Canonical section definitions — drives both TOC and content render.
// Each entry maps a data key to a display label, anchor id, and optional highlight style.
const SECTION_DEFS = [
    { key: 'context',         id: 'context',        label: 'Context',                          highlight: false },
    { key: 'initialBelief',   id: 'misdiagnosis',   label: 'The Misdiagnosis',                 highlight: false },
    { key: 'whyReasonable',   id: 'why-reasonable', label: 'Why It Seemed Right',              highlight: false },
    { key: 'diagnosticReveal',id: 'diagnostic',     label: 'What the Diagnostic Revealed',     highlight: true  },
    { key: 'whatChanged',     id: 'changes',        label: 'Structural Changes',               highlight: false },
    { key: 'outcome',         id: 'outcome',        label: 'The Outcome',                      highlight: false },
    { key: 'whyMatters',      id: 'why-matters',    label: 'Why This Matters',                 highlight: false },
];

const CaseStudyPost = () => {
    const { slug } = useParams();
    const study = caseStudies[slug];
    const [activeId, setActiveId] = useState(null);
    const observerRef = useRef(null);

    // Build the sections that actually have content in this study
    const sections = SECTION_DEFS.filter(s => study?.sections?.[s.key]);

    // IntersectionObserver — tracks which section is in view
    useEffect(() => {
        if (!study) return;

        const headings = sections.map(s => document.getElementById(s.id)).filter(Boolean);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                // Pick the topmost visible entry
                const visible = entries
                    .filter(e => e.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
        );

        headings.forEach(el => observerRef.current.observe(el));
        return () => observerRef.current?.disconnect();
    }, [slug, sections.length]);

    if (!study) return <Navigate to="/insights" />;

    return (
        <div className="case-study-post bg-white min-h-screen font-sans">
            <Helmet>
                <title>{study.title} | GTM-360</title>
                <meta name="description" content={study.subtitle} />
                <link rel="canonical" href={`https://gtm-360.com${study.slug}`} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": study.title,
                        "description": study.subtitle,
                        "author": { "@type": "Organization", "name": "GTM-360" },
                        "articleSection": "Case Study"
                    })}
                </script>
            </Helmet>

            {/* HEADER */}
            <header className="pt-32 pb-16 bg-white border-b border-gray-100">
                <div className="container max-w-4xl">
                    <Link to="/insights" className="flex items-center text-gray-500 hover:text-slate-900 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Insights
                    </Link>
                    <span className="text-gray-400 font-bold tracking-widest uppercase text-xs mb-6 block">
                        Case Study /// {study.client_profile}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-[1.1]">
                        {study.title}
                    </h1>
                    <p className="text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
                        {study.subtitle}
                    </p>
                    <div className="mt-8 flex gap-6 text-sm text-slate-400">
                        <span>{study.problem_type}</span>
                        <span>·</span>
                        <span>{study.engagement_length}</span>
                    </div>
                </div>
            </header>

            {/* METRICS */}
            <section className="bg-slate-50 border-b border-gray-200 py-12">
                <div className="container max-w-4xl">
                    <h3 className="text-xs font-bold uppercase text-gray-400 mb-6 tracking-widest text-center">Before → After</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: 'Win Rate',     before: study.metrics.before.win_rate,    after: study.metrics.after.win_rate    },
                            { label: 'YoY Growth',   before: study.metrics.before.growth,      after: study.metrics.after.growth      },
                            { label: 'CAC Payback',  before: study.metrics.before.cac_payback, after: study.metrics.after.cac_payback },
                        ].map(({ label, before, after }) => (
                            <div key={label} className="bg-white p-6 rounded shadow-sm border border-gray-100 text-center">
                                <span className="block text-gray-500 text-sm mb-3 uppercase tracking-wide">{label}</span>
                                <div className="flex items-center justify-center gap-3">
                                    <span className="text-xl text-gray-400 line-through decoration-red-300">{before}</span>
                                    <span className="text-slate-400">→</span>
                                    <span className="text-2xl font-bold text-green-600">{after}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BODY */}
            <article className="py-20">
                <div className="container max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* STICKY TOC — rendered from SECTION_DEFS, filtered to present sections */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-32 space-y-8">
                                <div>
                                    <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-widest">Contents</h4>
                                    <nav className="space-y-0.5 border-l border-gray-200">
                                        {sections.map((s, i) => {
                                            const isActive = activeId === s.id;
                                            return (
                                                <a
                                                    key={s.id}
                                                    href={`#${s.id}`}
                                                    className={`
                                                        block pl-4 py-2 text-sm -ml-[1px] transition-all duration-150
                                                        ${isActive
                                                            ? 'font-bold text-slate-900 border-l-2 border-slate-900 bg-slate-50'
                                                            : 'text-gray-500 hover:text-slate-900 hover:border-l-2 hover:border-slate-300'
                                                        }
                                                    `}
                                                >
                                                    {i + 1}. {s.label}
                                                </a>
                                            );
                                        })}
                                    </nav>
                                </div>

                                <div className="p-5 bg-slate-50 rounded border border-gray-100">
                                    <h4 className="text-xs font-bold uppercase text-gray-400 mb-2">Sound familiar?</h4>
                                    <p className="text-xs text-gray-600 mb-4 leading-relaxed">See if your system has similar constraints.</p>
                                    <Link to="/start-here" className="text-xs font-bold text-slate-900 hover:underline">
                                        Start Diagnostic →
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* CONTENT — rendered from same SECTION_DEFS array */}
                        <div className="lg:col-span-8 prose prose-lg prose-slate prose-headings:font-bold max-w-none">
                            {sections.map((s, i) => (
                                <div
                                    key={s.id}
                                    id={s.id}
                                    className={`scroll-mt-32 mb-16 ${s.highlight ? 'p-8 bg-slate-50 border-l-4 border-slate-900 rounded-r-sm' : ''}`}
                                >
                                    <h3 className={`text-sm font-bold uppercase mb-4 tracking-widest flex items-center gap-2 not-prose
                                        ${s.highlight ? 'text-slate-900' : 'text-gray-400'}`}
                                    >
                                        <span className={`w-8 h-[1px] ${s.highlight ? 'bg-slate-900' : 'bg-gray-300'}`} />
                                        {i + 1}. {s.label}
                                    </h3>
                                    <div dangerouslySetInnerHTML={{ __html: study.sections[s.key] }} />
                                </div>
                            ))}

                            {/* Related links */}
                            {study.relatedLinks?.length > 0 && (
                                <div className="mt-16 pt-10 border-t border-gray-100 not-prose">
                                    <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-widest">Related Reading</h4>
                                    <div className="flex flex-col gap-3">
                                        {study.relatedLinks.map((link, idx) => (
                                            <Link
                                                key={idx}
                                                to={link.url}
                                                className="text-slate-700 hover:text-indigo-700 font-medium flex items-center gap-1 group text-sm transition-colors"
                                            >
                                                {link.text}
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="py-20 bg-slate-900 text-center">
                <div className="container max-w-2xl">
                    <h3 className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-6">
                        Where teams usually start
                    </h3>
                    <p className="text-xl text-white font-light mb-10 leading-relaxed max-w-xl mx-auto">
                        {study.cta_hook || 'When this pattern shows up, most teams begin with a short diagnostic to find the real constraint.'}
                    </p>
                    <Link to="/start-here" className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded font-bold transition-all">
                        Start with a Diagnostic →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyPost;
