import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import SEO from '../../components/SEO';
import { playbooks } from '../../data/playbooks';

/** /wiki/playbooks/:slug — a single playbook. */

const PlaybookPost = () => {
    const { slug } = useParams();
    const p = playbooks.find((x) => x.slug === slug);

    if (!p) {
        return (
            <div className="pt-36 pb-24 bg-white font-sans text-slate-900 min-h-screen">
                <div className="container max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-6">Playbook not found</h1>
                    <Link to="/wiki/playbooks" className="text-indigo-600 font-bold hover:underline">← All playbooks</Link>
                </div>
            </div>
        );
    }

    const body = p.content?.onePager || '';

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title={`${p.title} | GTM-360 Playbooks`}
                description={p.subtitle}
                canonical={`https://gtm-360.com/wiki/playbooks/${p.slug}`}
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": p.title,
                    "description": p.subtitle,
                    "author": { "@type": "Organization", "name": "GTM-360" },
                    "publisher": { "@type": "Organization", "name": "GTM-360" },
                })}</script>
            </Helmet>

            <section className="pt-32 pb-10 bg-white">
                <div className="container max-w-3xl">
                    <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
                        <Link to="/wiki" className="hover:text-indigo-600">Knowledge Base</Link>
                        <span className="mx-1.5">/</span>
                        <Link to="/wiki/playbooks" className="hover:text-indigo-600">Playbooks</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">{p.title}</span>
                    </nav>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3 block">{p.category}</span>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900 leading-[1.1]">{p.title}</h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed mb-4">{p.subtitle}</p>
                    <p className="text-xs text-slate-400">{p.readTime} · {p.difficulty} · {p.author}</p>
                </div>
            </section>

            <section className="pb-20 bg-white">
                <div className="container max-w-3xl">
                    <article className="prose prose-slate max-w-none [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:text-slate-600 [&_li]:mb-2"
                        dangerouslySetInnerHTML={{ __html: body }} />

                    <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                        <Link to="/wiki/playbooks" className="text-sm font-bold text-indigo-600 hover:underline">← All playbooks</Link>
                        <Link to="/start-here" className="text-sm font-bold text-slate-900 hover:text-indigo-700">Want us to run it? Talk to us →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlaybookPost;
