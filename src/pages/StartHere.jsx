import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const PORTAL_ID = '244225374';
const FORM_ID = 'b631cbcc-1f01-47f9-926c-715a4cb2cd8a';

const StartHere = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: '', email: '', company: '', role: '',
        arrRange: '$5–20M', primarySymptom: 'Pipeline but revenue is flat', message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        const msg = `Role: ${formData.role} | ARR: ${formData.arrRange} | Symptom: ${formData.primarySymptom} | Context: ${formData.message}`;
        try {
            const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fields: [
                        { name: 'firstname', value: formData.firstname },
                        { name: 'email', value: formData.email },
                        { name: 'company', value: formData.company },
                        { name: 'message', value: msg }
                    ],
                    context: {
                        pageUri: typeof window !== 'undefined' ? window.location.href : 'https://gtm-360.com/start-here',
                        pageName: 'Start Here',
                        hutk: getCookie('hubspotutk')
                    }
                })
            });
            if (res.ok) { setStatus('success'); navigate('/thank-you'); }
            else throw new Error();
        } catch { setStatus('error'); }
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            <SEO
                title="B2B GTM Diagnostic | Start Here | GTM-360"
                description="Start with a GTM diagnostic. Tell us what's happening — pipeline, forecast, growth. We'll tell you honestly whether we can help and what it would take."
                canonical="https://gtm-360.com/start-here"
            />

            {/* HERO */}
            <section className="pt-32 pb-16 bg-white border-b border-slate-100">
                <div className="container max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Tell us what's happening.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed">
                        Describe the situation — what you're seeing, what you've already tried, and what the pressure looks like. We'll come back to you with an honest view of what we'd do and whether it makes sense to talk further.
                    </p>
                </div>
            </section>

            {/* WHAT TO EXPECT */}
            <section className="py-12 bg-slate-50 border-b border-slate-100">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { n: "1", t: "You fill this in", d: "3 minutes. The more honest you are, the more useful our response will be." },
                            { n: "2", d: "We read it before responding — not a CRM auto-reply.", t: "We read it" },
                            { n: "3", t: "We have a conversation", d: "30–45 minutes with a partner. No pitch. We tell you what we think is wrong and whether we can help." }
                        ].map((s, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200">
                                <span className="text-2xl font-bold text-slate-100 block mb-2">{s.n}</span>
                                <h3 className="font-bold text-slate-900 mb-1">{s.t}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORM */}
            <section className="py-20 bg-white">
                <div className="container max-w-xl">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Your name</label>
                                <input type="text" name="firstname" required value={formData.firstname} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Work email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Company</label>
                                <input type="text" name="company" required value={formData.company} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Your role</label>
                                <input type="text" name="role" required value={formData.role} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm"
                                    placeholder="Founder / CRO / VP Sales" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Company ARR</label>
                                <select name="arrRange" value={formData.arrRange} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm bg-white">
                                    <option>Under $5M</option>
                                    <option>$5–20M</option>
                                    <option>$20–50M</option>
                                    <option>$50–100M</option>
                                    <option>$100M+</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">What's the main issue?</label>
                                <select name="primarySymptom" value={formData.primarySymptom} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm bg-white">
                                    <option>Pipeline but revenue is flat</option>
                                    <option>Win rates falling</option>
                                    <option>Forecasts unreliable</option>
                                    <option>Sales cycles getting longer</option>
                                    <option>Marketing and sales not aligned</option>
                                    <option>Expansion revenue inconsistent</option>
                                    <option>Too many tools, not enough clarity</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">What's actually happening — in your own words</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                                className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm resize-none"
                                placeholder="What are you seeing? What have you already tried? What's the board pressure? The more specific you are, the more useful our response will be." />
                        </div>

                        {status === 'error' && (
                            <p className="text-red-600 text-sm bg-red-50 p-3 rounded">
                                Something went wrong. Email us at hello@gtm-360.com
                            </p>
                        )}

                        <button type="submit" disabled={status === 'submitting'}
                            className="w-full bg-slate-900 text-white py-4 rounded font-bold hover:bg-slate-700 transition-all disabled:opacity-50">
                            {status === 'submitting' ? 'Sending...' : 'Send'}
                        </button>
                        <p className="text-xs text-slate-400 text-center">Goes directly to a partner. Not a CRM queue.</p>
                    </form>
                    <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                        <p className="text-sm text-slate-500 mb-3">Not ready to talk yet?</p>
                        <Link to="/resources/gtm-diagnostic-checklist" className="text-sm font-medium text-indigo-600 hover:underline">
                            Run the 24-point GTM Diagnostic Checklist first →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartHere;
