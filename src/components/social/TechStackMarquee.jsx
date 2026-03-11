import React from 'react';

// Clean inline SVG logos — all monochrome, currentColor, 50×35 viewBox
// Tools sourced from onegtmlab.com "Powered by" + GTM stack we work with
const tools = [
    {
        name: "Clay",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <rect x="8" y="8" width="14" height="19" rx="3" stroke="currentColor" strokeWidth="2"/>
                <rect x="28" y="8" width="14" height="19" rx="3" stroke="currentColor" strokeWidth="2"/>
                <rect x="13" y="13" width="4" height="4" rx="1" fill="currentColor"/>
                <rect x="33" y="13" width="4" height="4" rx="1" fill="currentColor"/>
                <rect x="13" y="20" width="4" height="3" rx="1" fill="currentColor"/>
                <rect x="33" y="20" width="4" height="3" rx="1" fill="currentColor"/>
            </svg>
        )
    },
    {
        name: "HubSpot",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <circle cx="33" cy="11" r="4" fill="currentColor"/>
                <circle cx="33" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M33 18v5M26 23h14M20 23c0-3.3-2.7-6-6-6s-6 2.7-6 6 2.7 6 6 6 6-2.7 6-6zM20 23h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        name: "Salesforce",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M20.8 6.4C22.6 4.5 25.1 3.4 27.8 3.4c3.6 0 6.8 2 8.5 4.9.7-.3 1.5-.5 2.3-.5 3.3 0 6 2.7 6 6 0 .4 0 .8-.1 1.1C46.4 16 48 18.3 48 21c0 3.9-3.2 7-7.1 7H10.4C6.9 28 4 25.1 4 21.6c0-3 2-5.6 4.8-6.3-.1-.5-.2-1-.2-1.5 0-4.1 3.3-7.4 7.4-7.4 1.9 0 3.6.7 4.8 1.9z" stroke="currentColor" strokeWidth="2"/>
            </svg>
        )
    },
    {
        name: "Apollo",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M25 5L41 30H9L25 5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M17 23h16M19.5 17h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        name: "Outreach",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M8 17.5C8 12.25 12.25 8 17.5 8h15C37.75 8 42 12.25 42 17.5S37.75 27 32.5 27h-15C12.25 27 8 22.75 8 17.5z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 17.5h18M28 12.5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        name: "Smartlead",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <rect x="7" y="9" width="36" height="17" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M7 14l18 9 18-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        name: "Gong",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <circle cx="25" cy="17.5" r="11" stroke="currentColor" strokeWidth="2"/>
                <path d="M18 17.5c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="25" cy="17.5" r="3" fill="currentColor"/>
            </svg>
        )
    },
    {
        name: "n8n",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <circle cx="11" cy="17.5" r="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="39" cy="17.5" r="5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="25" cy="9" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 17.5h18M15 14l9-4M35 14l-9-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        name: "Relevance AI",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M10 27V8h12c4.4 0 8 3.6 8 8s-3.6 8-8 8H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M26 24l8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="38" cy="10" r="3" fill="currentColor"/>
            </svg>
        )
    },
    {
        name: "6sense",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M34 11c-2-2.5-5-4-8.5-4C19 7 13 12.5 13 19.5c0 2 .5 3.8 1.4 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M20 27c1.5.6 3.2 1 5 1 7.2 0 13-5.8 13-13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="25" cy="17.5" r="4" fill="currentColor"/>
            </svg>
        )
    },
    {
        name: "Salesloft",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <circle cx="25" cy="13" r="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M11 29c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        name: "LinkedIn",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <rect x="7" y="7" width="36" height="21" rx="3" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 15v8M15 13v.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="15" cy="13" r="1" fill="currentColor"/>
                <path d="M21 23v-4c0-1.7 1.3-3 3-3s3 1.3 3 3v4M21 18v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        name: "Trigify",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M25 6v23M15 11l10-5 10 5M10 17l15 7 15-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        )
    },
    {
        name: "ZoomInfo",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M26 22l9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16 16h8M20 12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        )
    },
    {
        name: "Clari",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <path d="M35 13c-2-3-5.5-5-9.5-5C18.6 8 13 13.6 13 20.5c0 2.2.6 4.3 1.7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M21 29c1.3.5 2.8.8 4.5.8 7.5 0 13.5-6 13.5-13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="25.5" cy="20" r="4.5" fill="currentColor"/>
            </svg>
        )
    },
    {
        name: "Figma",
        icon: (
            <svg viewBox="0 0 50 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <rect x="17" y="4" width="10" height="10" rx="5" stroke="currentColor" strokeWidth="2"/>
                <rect x="17" y="14" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <rect x="17" y="24" width="10" height="7" rx="3.5" stroke="currentColor" strokeWidth="2"/>
                <rect x="27" y="4" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="32" cy="19" r="5" stroke="currentColor" strokeWidth="2"/>
            </svg>
        )
    },
];

// Triple for seamless infinite scroll
const marqueeItems = [...tools, ...tools, ...tools];

const TechStackMarquee = () => (
    <section className="py-10 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-7">
            Powered by the best GTM tools
        </p>
        <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-10 animate-marquee-tools">
                {marqueeItems.map((tool, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 flex items-center gap-2.5 text-slate-400 hover:text-slate-700 transition-colors duration-300"
                    >
                        {tool.icon}
                        <span className="text-sm font-semibold tracking-tight whitespace-nowrap">{tool.name}</span>
                    </div>
                ))}
            </div>
        </div>
        <style>{`
            @keyframes marquee-tools {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333%); }
            }
            .animate-marquee-tools {
                animation: marquee-tools 45s linear infinite;
                will-change: transform;
            }
            .animate-marquee-tools:hover {
                animation-play-state: paused;
            }
        `}</style>
    </section>
);

export default TechStackMarquee;
