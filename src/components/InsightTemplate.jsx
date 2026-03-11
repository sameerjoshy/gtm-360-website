import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LeadMagnet from './marketing/LeadMagnet';

const InsightTemplate = ({ data }) => {
    // data prop should contain: title, slug, description, category, readTime, sections (1-7), relatedService

    // Schema for Article
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "datePublished": data.publishDate || "2025-11-01",
        "dateModified": data.publishDate || "2025-11-01",
        "author": {
            "@type": "Person",
            "@id": "https://gtm-360.com/about#sameer",
            "name": "Sameer Joshi"
        },
        "publisher": {
            "@type": "Organization",
            "@id": "https://gtm-360.com/#organization",
            "name": "GTM-360"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://gtm-360.com${data.slug}`
        }
    };

    return (
        <div className="insight-post">
            <Helmet>
                <title>{data.title} | GTM Insights</title>
                <meta name="description" content={data.description} />
                <link rel="canonical" href={`https://gtm-360.com${data.slug}`} />
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white">
                <div className="container max-w-3xl">
                    <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
                        <span>{data.category}</span>
                        <span>•</span>
                        <span>{data.readTime}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-slate-900 mb-8">
                        {data.title}
                    </h1>
                    <p className="text-xl text-gray-700 leading-relaxed font-serif">
                        {data.description}
                    </p>
                    {data.keyTakeaway && (
                        <div className="mt-8 bg-indigo-50 border-l-4 border-indigo-600 rounded-r-lg p-5">
                            <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Key Takeaway</p>
                            <p className="text-slate-800 font-medium leading-relaxed">{data.keyTakeaway}</p>
                        </div>
                    )}
                </div>
            </section>

            {/* SECTIONS 1-7 (The Diagnostic Essay) */}
            <article className="pb-20">

                {/* 1. PROBLEM RECOGNITION */}
                <section className="py-12">
                    <div className="container max-w-3xl">
                        <div className="prose prose-lg prose-gray max-w-none">
                            <h3 className="text-sm font-bold uppercase text-gray-400 mb-4 tracking-widest">1. The Situation</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.problemRecognition }} />
                        </div>
                    </div>
                </section>

                {/* 2. THE COMMON (WRONG) EXPLANATION */}
                <section className="py-12 bg-gray-50 border-y border-gray-100">
                    <div className="container max-w-3xl">
                        <div className="prose prose-lg prose-gray max-w-none">
                            <h3 className="text-sm font-bold uppercase text-gray-400 mb-4 tracking-widest">2. The Usual Explanation</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.wrongExplanation }} />
                        </div>
                    </div>
                </section>

                {/* 3. WHY THAT EXPLANATION FAILS */}
                <section className="py-12">
                    <div className="container max-w-3xl">
                        <div className="prose prose-lg prose-gray max-w-none">
                            <h3 className="text-sm font-bold uppercase text-red-400 mb-4 tracking-widest">3. Why That Fails</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.whyItFails }} />
                        </div>
                    </div>
                </section>

                {/* 4. THE ACTUAL CONSTRAINT */}
                <section className="py-12">
                    <div className="container max-w-3xl">
                        <div className="bg-slate-50 p-8 border-l-4 border-slate-900">
                            <h3 className="text-sm font-bold uppercase text-slate-900 mb-4 tracking-widest">4. The Actual Constraint</h3>
                            <div className="prose prose-lg prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: data.sections.actualConstraint }} />
                        </div>
                    </div>
                </section>

                {/* 5. CONSEQUENCES OF IGNORING */}
                <section className="py-12">
                    <div className="container max-w-3xl">
                        <div className="prose prose-lg prose-gray max-w-none">
                            <h3 className="text-sm font-bold uppercase text-gray-400 mb-4 tracking-widest">5. Consequences</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.consequences }} />
                        </div>
                    </div>
                </section>

                {/* 6. WHAT MUST CHANGE */}
                <section className="py-12">
                    <div className="container max-w-3xl">
                        <div className="prose prose-lg prose-gray max-w-none">
                            <h3 className="text-sm font-bold uppercase text-green-600 mb-4 tracking-widest">6. What Must Change</h3>
                            <div dangerouslySetInnerHTML={{ __html: data.sections.whatChanges }} />
                        </div>
                    </div>
                </section>

                {/* 7. GTM-360 Perspective */}
                <section className="py-16 bg-slate-50 mt-12">
                    <div className="container max-w-3xl">
                        <h3 className="text-sm font-bold uppercase text-gray-400 mb-6 tracking-widest">7. How GTM-360 Thinks About This</h3>
                        <div className="prose prose-lg prose-indigo max-w-none" dangerouslySetInnerHTML={{ __html: data.sections.ourView }} />
                    </div>
                </section>

            </article>

            {/* 7.5 LEAD MAGNET */}
            <section className="py-12 bg-gray-50 border-t border-gray-200">
                <div className="container max-w-4xl">
                    <LeadMagnet />
                </div>
            </section>

            {/* 8. CTA (SOFT, CONSISTENT) */}
            <section className="py-24 bg-white border-t border-gray-100 text-center">
                <div className="container max-w-2xl">
                    <h2 className="text-3xl font-semibold mb-6">Where teams usually start</h2>
                    <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                        When this pattern shows up,<br />
                        most teams start with a short diagnostic<br />
                        to ensure they’re fixing the right constraint.
                    </p>
                    <Link to="/start-here" className="btn bg-slate-900 text-white hover:bg-opacity-90 px-10 py-4 text-lg">
                        Start with a Diagnostic
                    </Link>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-500">
                        <span>Related service: <Link to={data.relatedService.link} className="text-indigo-600 font-medium hover:underline">{data.relatedService.name}</Link></span>
                        {data.relatedProblem && (
                            <span>· Related pattern: <Link to={data.relatedProblem.link} className="text-indigo-600 font-medium hover:underline">{data.relatedProblem.name}</Link></span>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InsightTemplate;
