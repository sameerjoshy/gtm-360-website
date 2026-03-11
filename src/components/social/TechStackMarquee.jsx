import React from 'react';

// Real SVG logos for GTM tools — clean monochrome versions
const tools = [
    {
        name: "Salesforce",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.8 4.4C22.6 2.5 25.1 1.4 27.8 1.4c3.6 0 6.8 2 8.5 4.9.7-.3 1.5-.5 2.3-.5 3.3 0 6 2.7 6 6 0 .4 0 .8-.1 1.1C46.4 14 48 16.3 48 19c0 3.9-3.2 7-7.1 7H10.4C6.9 26 4 23.1 4 19.6c0-3 2-5.6 4.8-6.3-.1-.5-.2-1-.2-1.5 0-4.1 3.3-7.4 7.4-7.4 1.9 0 3.6.7 4.8 1.9z" stroke="currentColor" stroke-width="2" fill="none"/></svg>`
    },
    {
        name: "HubSpot",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="33" cy="11" r="4" fill="currentColor"/><circle cx="33" cy="11" r="7" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M33 18v5M26 23h14M20 23c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6zM20 23h7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
        name: "Clay",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="14" height="19" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><rect x="28" y="8" width="14" height="19" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><rect x="13" y="13" width="4" height="4" rx="1" fill="currentColor"/><rect x="33" y="13" width="4" height="4" rx="1" fill="currentColor"/><rect x="13" y="20" width="4" height="3" rx="1" fill="currentColor"/><rect x="33" y="20" width="4" height="3" rx="1" fill="currentColor"/></svg>`
    },
    {
        name: "Outreach",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17.5C8 12.25 12.25 8 17.5 8h15C37.75 8 42 12.25 42 17.5S37.75 27 32.5 27h-15C12.25 27 8 22.75 8 17.5z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M17 17.5h16M27 13l6 4.5-6 4.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        name: "Gong",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="17.5" r="11" stroke="currentColor" stroke-width="2" fill="none"/><path d="M18 17.5c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="17.5" r="3" fill="currentColor"/></svg>`
    },
    {
        name: "Apollo",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 6L40 29H10L25 6z" stroke="currentColor" stroke-width="2" fill="none" stroke-linejoin="round"/><path d="M18 22h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20.5 17h9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
        name: "6sense",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M33 8v8h-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 27c2-3 8-5 15-5s13 2 15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
        name: "Salesloft",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c0-5 5-9 13-9s13 4 13 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><circle cx="25" cy="11" r="5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 27h34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/></svg>`
    },
    {
        name: "LinkedIn",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="8" width="34" height="19" rx="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M15 15v8M15 13v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 23v-5c0-1.7 1.3-3 3-3s3 1.3 3 3v5M20 18v5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="15" cy="13" r="1" fill="currentColor"/></svg>`
    },
    {
        name: "Slack",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="7" width="36" height="21" rx="4" stroke="currentColor" stroke-width="2" fill="none"/><path d="M17 18h16M17 14h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="35" cy="14" r="2" fill="currentColor"/><path d="M17 22h6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
        name: "n8n",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="17.5" r="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="37" cy="17.5" r="5" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="25" cy="10" r="5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M18 17.5h14M16.5 14l7-3.5M33.5 14l-7-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
        name: "Smartlead",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12l17 9 17-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><rect x="8" y="10" width="34" height="15" rx="3" stroke="currentColor" stroke-width="2" fill="none"/></svg>`
    },
    {
        name: "Zoom Info",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="15" r="7" stroke="currentColor" stroke-width="2" fill="none"/><path d="M20 10v5l3 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M27 19l8 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`
    },
    {
        name: "Lusha",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 27V8M15 8h14c3.3 0 6 2.7 6 6s-2.7 6-6 6H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
    },
    {
        name: "Clari",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34 12c-2-2.5-5-4-8.5-4C19 8 13 13.5 13 20.5c0 2 .5 3.8 1.4 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M20 27c1.5.6 3.2 1 5 1 7.2 0 13-5.8 13-13" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="17.5" r="4" fill="currentColor"/></svg>`
    },
    {
        name: "Chorus",
        svg: `<svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 17.5c0-8.3 6.7-15 15-15s15 6.7 15 15-6.7 15-15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M16 17.5c0-5 4-9 9-9s9 4 9 9-4 9-9 9" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="25" cy="17.5" r="3.5" fill="currentColor"/></svg>`
    },
];

// Duplicate for infinite scroll
const marqueeItems = [...tools, ...tools];

const TechStackMarquee = () => (
    <section className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="container max-w-7xl mb-6">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
                Tools we work with
            </p>
        </div>
        <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            <div className="flex gap-10 animate-marquee-tools whitespace-nowrap">
                {marqueeItems.map((tool, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 flex items-center gap-2.5 text-slate-400 hover:text-slate-700 transition-colors duration-300 group"
                    >
                        <span
                            className="w-10 h-7 flex items-center justify-center"
                            dangerouslySetInnerHTML={{ __html: tool.svg }}
                        />
                        <span className="text-sm font-semibold tracking-tight">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
        <style>{`
            @keyframes marquee-tools {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee-tools {
                animation: marquee-tools 40s linear infinite;
            }
            .animate-marquee-tools:hover {
                animation-play-state: paused;
            }
        `}</style>
    </section>
);

export default TechStackMarquee;
