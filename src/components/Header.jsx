import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white py-2'}`}>
            <div className="container flex justify-between items-center h-20">
                {/* Left Group: Logo + Desktop Nav */}
                <div className="flex items-center gap-12">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="GTM 360" className={`transition-all duration-300 ${isScrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'}`} />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/start-here" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            Start Here
                        </Link>
                        <Link to="/how-we-work" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            How We Work
                        </Link>
                        <Link to="/insights" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            Insights
                        </Link>
                        <a href="https://agents.gtm-360.com" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors flex items-center gap-1.5">
                            Agents
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: 'pulse 2s infinite' }} />
                        </a>
                        <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            About
                        </Link>
                        <Link to="/contact" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            Contact
                        </Link>
                    </nav>
                </div>

                {/* Right Group: CTA */}
                <div className="hidden md:flex items-center space-x-6">
                    <a href="https://app.gtm-360.com" className="text-sm font-medium text-slate-500 hover:text-indigo-600">
                        Login
                    </a>
                    <Link
                        to="/start-here"
                        className="btn bg-[var(--color-primary)] text-white px-6 py-2.5 rounded shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm font-bold"
                    >
                        Start Here
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 flex flex-col space-y-4">
                    <Link to="/services" className="text-lg font-medium text-slate-700">How We Help</Link>
                    <Link to="/planning-cycle" className="text-lg font-medium text-slate-700">The Planning Cycle</Link>
                    <a href="https://agents.gtm-360.com" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-slate-700 flex items-center gap-2">
                        Agents
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: 'pulse 2s infinite' }} />
                    </a>
                    <Link to="/insights" className="text-lg font-medium text-slate-700">Insights</Link>

                    <div className="border-t border-gray-100 pt-4 mt-2 flex flex-col gap-4">
                        <a href="https://app.gtm-360.com" className="text-lg font-medium text-slate-500">Login</a>
                        <Link to="/start-here" className="btn bg-[var(--color-primary)] text-white text-center py-3 rounded">Start Here</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
