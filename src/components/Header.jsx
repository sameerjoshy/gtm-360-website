import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

/**
 * Marketing site header.
 *
 * Lean IA: four nav items, plus the two product/knowledge entries as a button
 * pair — [Agent Portal] (the product) and [Knowledge] (the wiki). "Talk to us"
 * is an in-page + footer CTA, not a nav item.
 */

const navLinks = [
    { to: "/problems", label: "Challenges" },
    { to: "/offerings", label: "Offerings" },
    { to: "/insights", label: "Insights" },
    { to: "/about", label: "About" },
];

export const AGENT_PORTAL_URL = "https://agents.gtm-360.com";
export const KNOWLEDGE_URL = "/wiki";

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
            <div className="container flex justify-between items-center h-16 lg:h-20">

                {/* Logo + primary nav */}
                <div className="flex items-center gap-8">
                    <Link to="/">
                        <img src={logo} alt="GTM-360"
                            className={`transition-all duration-300 ${isScrolled ? 'h-9 md:h-10' : 'h-10 md:h-11'}`} />
                    </Link>
                    <nav className="hidden lg:flex items-center gap-7">
                        {navLinks.map(link => (
                            <Link key={link.to} to={link.to}
                                className={`text-sm font-medium transition-colors ${location.pathname === link.to ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}`}>
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Right: the two entries */}
                <div className="hidden lg:flex items-center gap-3">
                    <Link to={KNOWLEDGE_URL}
                        className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-all">
                        Knowledge
                    </Link>
                    <a href={AGENT_PORTAL_URL}
                        className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-700 transition-all">
                        Agent Portal
                    </a>
                </div>

                {/* Mobile toggle */}
                <button className="lg:hidden text-slate-700 p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col max-h-[calc(100vh-64px)] overflow-y-auto">
                    {navLinks.map(link => (
                        <Link key={link.to} to={link.to}
                            className={`py-3.5 text-base font-medium border-b border-slate-50 ${location.pathname === link.to ? 'text-slate-900' : 'text-slate-600'}`}>
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/contact" className="py-3.5 text-base font-medium text-slate-600 border-b border-slate-50">Talk to us</Link>
                    <div className="pt-5 flex flex-col gap-3">
                        <a href={AGENT_PORTAL_URL} className="bg-slate-900 text-white text-center py-3.5 rounded-lg font-bold block">Agent Portal</a>
                        <Link to={KNOWLEDGE_URL} className="bg-blue-600 text-white text-center py-3.5 rounded-lg font-bold block">Knowledge</Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
