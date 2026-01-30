import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-gray-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <img src={logo} alt="GTM-360" className="h-10 mb-4 opacity-80 grayscale hover:grayscale-0 transition-all" />
                        <p className="text-slate-500 text-sm max-w-xs">
                            Revenue operating systems for companies at inflection points.
                        </p>
                    </div>

                    {/* Simple Links */}
                    <div className="flex flex-wrap gap-8 text-sm font-medium text-slate-600">
                        <Link to="/about" className="hover:text-[var(--color-primary)]">About</Link>
                        <Link to="/contact" className="hover:text-[var(--color-primary)]">Contact</Link>
                        <Link to="/privacy" className="hover:text-[var(--color-primary)]">Privacy</Link>
                        <Link to="/terms" className="hover:text-[var(--color-primary)]">Terms</Link>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] flex items-center gap-2">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 pt-8 text-center md:text-left">
                    <p className="text-slate-400 text-xs">
                        &copy; {new Date().getFullYear()} GTM-360. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
