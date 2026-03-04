import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
        const detailedMessage = `[START HERE]\nRole: ${formData.role}\nARR: ${formData.arrRange}\nSymptom: ${formData.primarySymptom}\nContext: ${formData.message}`.trim();
        try {
            const res = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fields: [
                        { name: 'firstname', value: formData.firstname },
                        { name: 'email', value: formData.email },
                        { name: 'company', value: formData.company },
                        { name: 'message', value: detailedMessage }
                    ],
                    context: { pageUri: typeof window !== 'undefined' ? window.location.href : 'https://gtm-360.com/start-here', pageName: 'Start Here', hutk: getCookie('hubspotutk') }
                })
            });
            if (res.ok) { setStatus('success'); navigate('/thank-you'); }
            else throw new Error();
        } catch { setStatus('error'); }
    };

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
            <SEO
                title="Start Here | GTM-360"
                description="If growth feels harder than it should, the system is the reason. Start with a diagnostic — 10 to 14 days, no commitment to what comes next."
            />

            {/* HERO */}
            <section className="pt-32 pb-20 bg-white border-b border-slate-100">
                <div className="container max-w-3xl text-center">
                    <span className="text-indigo-600 font-mono text-xs tracking-widest uppercase mb-4 block">Where to Begin</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Tell us what's not working.
                    </h1>
                    <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
                        We'll ask the right questions, find the real constraint, and tell you honestly what it will take to fix it. No commitment to what comes next.
                    </p>
                </div>
            </section>

            {/* WHAT HAPPENS */}
            <section className="py-16 bg-slate-50 border-b border-slate-100">
                <div className="container max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                            { step: "01", title: "You share context", desc: "Fill in the form below. Tell us what's not working and what you've already tried." },
                            { step: "02", title: "We have a conversation", desc: "A direct conversation with a partner. 30–45 minutes. No qualification layer, no sales pitch." },
                            { step: "03", title: "You get clarity", desc: "We tell you what we think the real constraint is and what it will take to fix it. If we can't help, we'll say so." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200">
                                <span className="text-3xl font-bold text-slate-100 block mb-3">{item.step}</span>
                                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORM */}
            <section className="py-20 bg-white">
                <div className="container max-w-2xl">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">Tell us what's happening</h2>
                    <p className="text-slate-400 text-sm text-center mb-10">Takes 3 minutes. We read every submission before responding.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                                <input type="text" name="firstname" required value={formData.firstname} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" placeholder="Your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Work Email</label>
                                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" placeholder="you@company.com" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Company</label>
                                <input type="text" name="company" required value={formData.company} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" placeholder="Company name" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Your Role</label>
                                <input type="text" name="role" required value={formData.role} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm" placeholder="Founder / CRO / VP Sales" />
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
                                <label className="block text-sm font-bold text-slate-700 mb-1">Primary Symptom</label>
                                <select name="primarySymptom" value={formData.primarySymptom} onChange={handleChange}
                                    className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm bg-white">
                                    <option>Pipeline but revenue is flat</option>
                                    <option>Win rates falling</option>
                                    <option>Forecasts unreliable</option>
                                    <option>Sales cycles getting longer</option>
                                    <option>Marketing and sales misaligned</option>
                                    <option>Expansion revenue inconsistent</option>
                                    <option>Tool overload, no clarity</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1">What's actually happening — in your words</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows={5}
                                className="w-full border border-slate-200 p-3 rounded focus:border-slate-500 outline-none text-sm resize-none"
                                placeholder="Describe the situation. What have you already tried? What's the board pressure? The more honest you are here, the more useful the conversation will be." />
                        </div>

                        {status === 'error' && (
                            <p className="text-red-600 text-sm bg-red-50 p-3 rounded">
                                Something went wrong. Email us directly at hello@gtm-360.com
                            </p>
                        )}

                        <button type="submit" disabled={status === 'submitting'}
                            className="w-full bg-slate-900 text-white py-4 rounded font-bold hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'submitting' ? 'Sending...' : 'Start the conversation'}
                        </button>
                        <p className="text-xs text-slate-400 text-center">No SDR. No qualification layer. Your submission goes directly to a partner.</p>
                    </form>
                </div>
            </section>

            {/* NOT READY TO SUBMIT */}
            <section className="py-16 bg-slate-50 border-t border-slate-100">
                <div className="container max-w-4xl text-center">
                    <p className="text-slate-500 mb-8 text-sm">Not ready to submit yet? Start here instead.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/problems" className="text-sm font-bold text-slate-700 hover:underline">See the patterns we fix →</Link>
                        <Link to="/how-we-work" className="text-sm font-bold text-slate-700 hover:underline">See how we work →</Link>
                        <Link to="/diagnostic" className="text-sm font-bold text-slate-700 hover:underline">Read about the diagnostic →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StartHere;
