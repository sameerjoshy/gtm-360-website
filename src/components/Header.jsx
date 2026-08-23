import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { to: "/agents", label: "The Crew" },
    { to: "/problems", label: "Problems We Solve" },
    { to: "/how-we-work", label: "How We Work" },
    { to: "/insights", label: "Insights" },
    { to: "/about", label: "About" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'}`}>
            <div className="container flex justify-between items-center h-20">

                <div className="flex items-center gap-10">
                    <Link to="/">
                        <img src={logo} alt="GTM-360"
                            className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-16' : 'h-16 md:h-20'}`} />
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link key={link.to} to={link.to}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.to ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="hidden md:flex items-center gap-5">
                    <div className="flex items-center gap-1.5 border border-slate-200 rounded-full px-2 py-1">
                        {[
                            { name: "Compass", url: "https://okr.gtm-360.com" },
                            { name: "Cockpit", url: "https://brain.gtm-360.com" },
                            { name: "Crew", url: "https://agents.gtm-360.com" },
                        ].map((p) => (
                            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                                className="text-xs text-slate-400 hover:text-slate-900 transition-colors font-medium px-2">
                                {p.name}
                            </a>
                        ))}
                    </div>
                    <Link to="/start-here"
                        className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-slate-700 transition-all">
                        Talk to us
                    </Link>
                </div>

                <button className="md:hidden text-slate-700 p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col">
                    {navLinks.map(link => (
                        <Link key={link.to} to={link.to}
                            className={`py-4 text-base font-medium border-b border-slate-50 ${location.pathname === link.to ? 'text-slate-900' : 'text-slate-600'}`}>
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-6 flex flex-col gap-3">
                        <a href="https://okr.gtm-360.com" className="text-base font-medium text-slate-400 py-2">Compass</a>
                        <a href="https://brain.gtm-360.com" className="text-base font-medium text-slate-400 py-2">Cockpit</a>
                        <a href="https://agents.gtm-360.com" className="text-base font-medium text-slate-400 py-2">Crew</a>
                        <Link to="/start-here" className="bg-slate-900 text-white text-center py-3.5 rounded font-bold">Start diagnostic →</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
