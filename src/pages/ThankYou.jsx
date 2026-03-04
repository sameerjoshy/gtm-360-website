import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-white font-sans flex items-center">
            <SEO title="Thank You | GTM-360" description="We've received your message and will be in touch shortly." />
            <div className="container max-w-2xl text-center py-32">
                <span className="text-emerald-600 font-mono text-xs tracking-widest uppercase mb-4 block">Received</span>
                <h1 className="text-4xl font-bold text-slate-900 mb-6">We'll be in touch.</h1>
                <p className="text-xl text-slate-500 font-light mb-4 leading-relaxed">
                    Your submission has gone directly to a partner — not a CRM queue.
                </p>
                <p className="text-slate-400 mb-12">We typically respond within one business day.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to="/how-we-work" className="inline-flex items-center justify-center bg-slate-900 text-white px-8 py-4 rounded font-bold hover:bg-slate-700 transition-all">
                        See how we work
                    </Link>
                    <Link to="/problems" className="inline-flex items-center justify-center bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded font-medium hover:bg-slate-50 transition-all">
                        Read the problem patterns
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
