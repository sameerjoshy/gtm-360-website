import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex items-center">
            <SEO
                title="Page not found | GTM-360"
                description="That page doesn't exist. Head back to the homepage, the operating model, or the Agent Portal."
                canonical="https://gtm-360.com/404"
            />
            <Helmet><meta name="robots" content="noindex, follow" /></Helmet>
            <div className="container max-w-2xl text-center py-32">
                <span className="text-slate-400 font-mono text-xs tracking-widest uppercase mb-4 block">404</span>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">That page moved on.</h1>
                <p className="text-xl text-slate-500 font-light mb-12 leading-relaxed">
                    The link may be old, or the page may have been folded into the operating model.
                    Here's where everything lives now.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        Home
                    </Link>
                    <Link to="/wiki/method" className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                        The operating model
                    </Link>
                    <a href="https://agents.gtm-360.com" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded font-bold hover:bg-blue-700 transition-all">
                        Agent Portal
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
