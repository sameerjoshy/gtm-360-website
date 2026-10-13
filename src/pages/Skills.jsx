import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SKILLS, SKILL_DOMAINS, skillsByDomain } from '../data/skills';

/**
 * /skills — the skill library. Every GTM-360 skill, grouped by domain,
 * with client-side search and domain filtering.
 */

const Skills = () => {
    const grouped = useMemo(() => skillsByDomain(), []);
    const [query, setQuery] = useState('');
    const [domain, setDomain] = useState('all');

    const readTime = (words) => `${Math.max(1, Math.round(words / 220))} min`;

    const results = useMemo(() => {
        const q = query.trim().toLowerCase();
        return SKILLS.filter((s) => {
            if (domain !== 'all' && s.domain !== domain) return false;
            if (!q) return true;
            return (
                s.name.toLowerCase().includes(q) ||
                s.slug.includes(q) ||
                (s.description || '').toLowerCase().includes(q)
            );
        });
    }, [query, domain]);

    const searching = query.trim().length > 0 || domain !== 'all';

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Skills — the GTM-360 skill library | GTM-360"
                description={`The GTM-360 skill library: ${SKILLS.length} executable go-to-market skills across ${SKILL_DOMAINS.length} domains — the procedures behind every fix.`}
                canonical="https://gtm-360.com/skills"
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "GTM-360 Skills",
                    "url": "https://gtm-360.com/skills",
                    "hasPart": SKILLS.map((s) => ({ "@type": "Article", "name": s.name, "url": `https://gtm-360.com/skills/${s.slug}` })),
                })}</script>
            </Helmet>

            <section className="pt-32 pb-10 bg-white">
                <div className="container max-w-5xl">
                    <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
                        <Link to="/" className="hover:text-indigo-600">Home</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">Skills</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900 leading-[1.1]">Skills</h1>
                    <p className="text-lg text-slate-500 max-w-2xl font-light leading-relaxed">
                        {SKILLS.length} executable skills across {SKILL_DOMAINS.length} domains — the procedures
                        behind every fix, written to be run. Each one names its inputs, its steps, its output,
                        and how it stays honest.
                    </p>
                </div>
            </section>

            <section className="pb-8 bg-white sticky top-16 lg:top-20 z-20">
                <div className="container max-w-5xl">
                    <div className="border-y border-slate-100 py-4 flex flex-col gap-4">
                        <input
                            type="search"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search skills by name or problem…"
                            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-indigo-400"
                        />
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setDomain('all')}
                                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${domain === 'all' ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-600 border-slate-200 hover:border-slate-300'}`}>
                                All ({SKILLS.length})
                            </button>
                            {SKILL_DOMAINS.map((d) => (
                                <button
                                    key={d.id}
                                    onClick={() => setDomain(d.id)}
                                    className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${domain === d.id ? 'bg-slate-900 text-white border-slate-900' : 'text-slate-600 border-slate-200 hover:border-slate-300'}`}>
                                    {d.name} ({d.count})
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20 bg-white">
                <div className="container max-w-5xl">
                    {searching ? (
                        <>
                            <p className="text-sm text-slate-400 mb-5">{results.length} result{results.length === 1 ? '' : 's'}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {results.map((s) => <Card key={s.slug} s={s} readTime={readTime} />)}
                            </div>
                        </>
                    ) : (
                        grouped.map((d) => (
                            <div key={d.id} className="mb-14">
                                <h2 className="text-2xl font-bold text-slate-900 mb-1">{d.name}</h2>
                                <p className="text-sm text-slate-400 mb-6">{d.skills.length} skills</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {d.skills.map((s) => <Card key={s.slug} s={s} readTime={readTime} />)}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>
        </div>
    );
};

const Card = ({ s, readTime }) => (
    <Link to={`/skills/${s.slug}`}
        className="border border-slate-200 rounded-xl p-6 hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
        <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{s.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">{s.blurb}</p>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400">{readTime(s.words)}</span>
            <span className="text-xs font-bold text-indigo-600">Open →</span>
        </div>
    </Link>
);

export default Skills;
