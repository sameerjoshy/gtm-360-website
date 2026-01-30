import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { title: 'Problems', path: '/problems' },
        { title: 'Diagnostic', path: '/diagnostic' },
        { title: 'Agent Swarm', path: 'https://app.gtm-360.com' }, // External Link
        { title: 'Workbench', path: '/tools' },
        { title: 'Services', path: '/services' },
        { title: 'Insights', path: '/insights' },
        { title: 'About', path: '/about' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-white py-2'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Left Group: Logo + Desktop Nav */}
                <div className="flex items-center gap-12">
                    <Link to="/" className="flex items-center">
                        <img src={logo} alt="GTM 360" className={`transition-all duration-300 ${isScrolled ? 'h-14 md:h-20' : 'h-16 md:h-28'}`} />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            How We Help
                        </Link>
                        <Link to="/planning-cycle" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            The Planning Cycle
                        </Link>
                        <Link to="/workbench" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            Agent Workbench
                        </Link>
                        <Link to="/insights" className="text-sm font-medium text-slate-600 hover:text-[var(--color-primary)] transition-colors">
                            Insights
                        </Link>
                    </nav>
                </div>

                {/* CTA BUTTONS */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="https://app.gtm-360.com" className="text-sm font-medium text-slate-500 hover:text-indigo-600">
                        Login
                    </a>
                    <Link to="/start-here" className="btn btn-primary bg-[var(--color-primary)] text-white px-5 py-2.5 rounded hover:bg-indigo-700 transition-colors shadow-sm text-sm font-bold">
                        Start Here
                    </Link>
                </div>

                {/* MOBILE MENU BUTTON */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-indigo-600">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {link.title}
        </Link>
    )
                    ))}
<div className="pt-4">
    <Link
        to="/contact"
        className="block w-full text-center text-lg font-semibold text-white bg-[var(--color-primary)] py-4 rounded-lg shadow-md hover:bg-indigo-700 transition-[background-color]"
        onClick={() => setIsMobileMenuOpen(false)}
    >
        Book a System Audit
    </Link>
</div>
                </div >
            )}
        </header >
    );
};

export default Header;
