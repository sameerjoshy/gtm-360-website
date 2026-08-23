import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="md:col-span-2">
                        <img src={logo} alt="GTM-360" className="h-10 mb-4 opacity-80 hover:opacity-100 transition-all" />
                        <p className="text-slate-500 text-sm max-w-xs leading-relaxed mb-4">
                            Your GTM partner at the growth plateau. We find what's actually in the way — and fix it.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/sameer-joshi1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
                        >
                            LinkedIn →
                        </a>
                    </div>

                    {/* Work */}
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Work</p>
                        <div className="space-y-3">
                            <Link to="/agents" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">The Operator's Desk</Link>
                            <a href="https://hq.gtm-360.com" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Run it on a sample workspace →</a>
                            <Link to="/start-here" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Start Here</Link>
                            <Link to="/gtm-consulting" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">GTM Consulting</Link>
                            <Link to="/b2b-sales-consulting" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">B2B Sales Consulting</Link>
                            <Link to="/series-b-gtm-strategy" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Series B GTM</Link>
                            <Link to="/how-we-work" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">How We Work</Link>
                            <Link to="/problems" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Problems We Solve</Link>
                            <Link to="/insights" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Insights</Link>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">The System</p>
                        <div className="space-y-3">
                            <a href="https://okr.gtm-360.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Plan — OKRs & strategy</a>
                            <a href="https://brain.gtm-360.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Brain — AI execution cockpit</a>
                            <a href="https://agents.gtm-360.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Agents — specialist swarm</a>
                            <a href="https://hq.gtm-360.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Run it on a sample workspace →</a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Company</p>
                        <div className="space-y-3">
                            <Link to="/about" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">About</Link>
                            <Link to="/resources/gtm-diagnostic-checklist" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">GTM Diagnostic Checklist</Link>
                            <Link to="/contact" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Contact</Link>
                            <Link to="/privacy" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Privacy</Link>
                            <Link to="/terms" className="block text-sm text-slate-500 hover:text-slate-900 transition-colors">Terms</Link>
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
