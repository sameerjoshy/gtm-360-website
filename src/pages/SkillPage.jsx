import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { SKILL_SLUGS, getSkill } from '../data/skills';

/** /skills/:slug — a single skill. */

const markdownComponents = {
    // Inline code that names another skill becomes a link to it.
    code({ className, children, ...props }) {
        const isBlock = /language-/.test(className || '');
        const text = String(children).trim();
        if (!isBlock && SKILL_SLUGS.has(text)) {
            return (
                <Link to={`/skills/${text}`} className="text-indigo-600 hover:underline font-medium">
                    {text}
                </Link>
            );
        }
        return <code className={className} {...props}>{children}</code>;
    },
    // Open external links in a new tab.
    a({ href, children, ...props }) {
        const external = href && /^https?:\/\//.test(href);
        return <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...props}>{children}</a>;
    },
};

const SkillPage = () => {
    const { slug } = useParams();
    const s = getSkill(slug);

    if (!s) {
        return (
            <div className="pt-36 pb-24 bg-white font-sans text-slate-900 min-h-screen">
                <div className="container max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-6">Skill not found</h1>
                    <Link to="/skills" className="text-indigo-600 font-bold hover:underline">← All skills</Link>
                </div>
            </div>
        );
    }

    const readTime = `${Math.max(1, Math.round(s.words / 220))} min read`;

    return (
        <div className="font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title={`${s.name} | GTM-360 Skills`}
                description={s.description?.slice(0, 300) || s.blurb}
                canonical={`https://gtm-360.com/skills/${s.slug}`}
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": s.name,
                    "description": s.description || s.blurb,
                    "author": { "@type": "Organization", "name": "GTM-360" },
                    "publisher": { "@type": "Organization", "name": "GTM-360" },
                    "isPartOf": { "@type": "CollectionPage", "name": "GTM-360 Skills", "url": "https://gtm-360.com/skills" },
                })}</script>
            </Helmet>

            <section className="pt-32 pb-10 bg-white">
                <div className="container max-w-3xl">
                    <nav className="text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
                        <Link to="/skills" className="hover:text-indigo-600">Skills</Link>
                        <span className="mx-1.5">/</span>
                        <span className="text-slate-600 font-medium">{s.name}</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-slate-900 leading-[1.1]">{s.name}</h1>
                    <p className="text-xs text-slate-400">{s.domain.replace(/-/g, ' ')} · v{s.version} · {readTime}</p>
                </div>
            </section>

            <section className="pb-20 bg-white">
                <div className="container max-w-3xl">
                    <article
                        className="max-w-none text-slate-600 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-8 [&_h3]:mb-2 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-4 [&_li]:mb-1.5 [&_code]:bg-slate-100 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_strong]:text-slate-900 [&_a]:text-indigo-600 [&_a]:hover:underline [&_table]:w-full [&_table]:text-sm [&_table]:my-6 [&_th]:text-left [&_th]:border-b [&_th]:border-slate-200 [&_th]:py-2 [&_th]:pr-4 [&_th]:align-top [&_td]:border-b [&_td]:border-slate-100 [&_td]:py-2 [&_td]:pr-4 [&_td]:align-top [&_blockquote]:border-l-2 [&_blockquote]:border-slate-200 [&_blockquote]:pl-4 [&_blockquote]:text-slate-500 [&_hr]:my-8 [&_hr]:border-slate-100">
                        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                            {s.body}
                        </ReactMarkdown>
                    </article>

                    <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                        <Link to="/skills" className="text-sm font-bold text-indigo-600 hover:underline">← All skills</Link>
                        <Link to="/start-here" className="text-sm font-bold text-slate-900 hover:text-indigo-700">Want us to run it? Talk to us →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillPage;
