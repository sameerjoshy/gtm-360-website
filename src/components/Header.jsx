import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { to: "/start-here", label: "Start Here" },
    { to: "/how-we-work", label: "How We Work" },
    { to: "/problems", label: "Problems We Solve" },
    { to: "/agents", label: "Intelligence Layer", badge: true },
    { to: "/insights", label: "Insights" },
    { to: "/about", label: "About" },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white py-2'}`}>
            <div className="container flex justify-between items-center h-20">

                {/* Logo + Desktop Nav */}
                <div className="flex items-center gap-10">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            alt="GTM-360"
                            className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-14'}`}
                        />
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                                    location.pathname === link.to
                                        ? 'text-slate-900'
                                        : 'text-slate-500 hover:text-slate-900'
                                }`}
                            >
                                {link.label}
                                {link.badge && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://app.gtm-360.com"
                        className="text-sm font-medium text-slate-400 hover:text-slate-700 transition-colors"
                    >
                        Login
                    </a>
                    <Link
                        to="/start-here"
                        className="bg-slate-900 text-white px-5 py-2.5 rounded text-sm font-bold hover:bg-slate-700 transition-all shadow-sm"
                    >
                        Start Here
                    </Link>
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden text-slate-700 p-1"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav — matches desktop exactly */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`py-3 text-base font-medium flex items-center gap-2 border-b border-slate-50 ${
                                location.pathname === link.to ? 'text-slate-900' : 'text-slate-600'
                            }`}
                        >
                            {link.label}
                            {link.badge && (
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            )}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-3">
                        <a
                            href="https://app.gtm-360.com"
                            className="text-base font-medium text-slate-400 py-2"
                        >
                            Login
                        </a>
                        <Link
                            to="/start-here"
                            className="bg-slate-900 text-white text-center py-3 rounded font-bold"
                        >
                            Start Here
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
