import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AGENT_PORTAL_URL, KNOWLEDGE_URL } from './Header';
import { track } from '../lib/analytics';

const SUBSTACK_URL = "https://gtm360.substack.com/?r=65ta79&utm_campaign=pub-share-checklist";

const challenges = [
    { to: "/problems/stalled-growth", label: "Stalled growth" },
    { to: "/problems/pipeline-conversion", label: "Pipeline that won't convert" },
    { to: "/problems/forecast-volatility", label: "Forecast volatility" },
];

const offerings = [
    { to: "/services/gtm-operating-model", label: "GTM Operating Model" },
    { to: "/services/pipeline-quality", label: "Pipeline Quality" },
    { to: "/services/forecasting-governance", label: "Forecasting & Governance" },
    { to: "/services/gtm-signals-and-ai", label: "GTM Signals & AI" },
];

const learn = [
    { to: "/insights", label: "Insights" },
    { to: "/wiki", label: "Knowledge Base" },
    { to: "/wiki/playbooks", label: "Playbooks" },
    { to: "/wiki/glossary", label: "Glossary" },
    { to: SUBSTACK_URL, label: "Essays", external: true },
];

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                {/* CTA band — the two entries */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 mb-12 border-b border-slate-100">
                    <p className="text-lg font-semibold text-slate-900 max-w-md">
                        Run the agents yourself, or read how it all works.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Link to={KNOWLEDGE_URL}
                            onClick={() => track('cta_click', { label: 'Knowledge', location: 'footer' })}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all text-center">
                            Knowledge
                        </Link>
                        <a href={AGENT_PORTAL_URL}
                            onClick={() => track('cta_click', { label: 'Agent Portal', location: 'footer' })}
                            className="bg-slate-900 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-700 transition-all text-center">
                            Agent Portal
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <img src={logo} alt="GTM-360" className="h-10 mb-4 opacity-80 hover:opacity-100 transition-all" />
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            Your GTM partner at the growth plateau. We find what's actually in the way — and fix it.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/sameer-joshi1/" target="_blank" rel="noopener noreferrer"
                                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">LinkedIn →</a>
                            <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer"
                                className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Substack →</a>
                        </div>
                    </div>

                    {/* Challenges */}
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Challenges</p>
                        <div className="space-y-3">
                            {challenges.map((l) => (
                                <Link key={l.to} to={l.to} className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">{l.label}</Link>
                            ))}
                        </div>
                    </div>

                    {/* Offerings */}
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Offerings</p>
                        <div className="space-y-3">
                            {offerings.map((l) => (
                                <Link key={l.to} to={l.to} className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">{l.label}</Link>
                            ))}
                            <Link to="/how-we-work" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">How we operate</Link>
                        </div>
                    </div>

                    {/* Learn + Company */}
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Learn</p>
                        <div className="space-y-3 mb-8">
                            {learn.map((l) => (
                                l.external
                                    ? <a key={l.to} href={l.to} target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">{l.label}</a>
                                    : <Link key={l.to} to={l.to} className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">{l.label}</Link>
                            ))}
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Company</p>
                        <div className="space-y-3">
                            <Link to="/about" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">About</Link>
                            <Link to="/contact" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Talk to us</Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-xs">
                        © {new Date().getFullYear()} GTM-360. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
