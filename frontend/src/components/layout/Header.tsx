'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useAppState } from '@/lib/context';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isNavOpen, setNavOpen } = useAppState();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-standard ${
        scrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-serif font-bold gradient-text">Jethro</span>
          <span className="text-2xl font-serif text-text ml-1">Solutions</span>
        </Link>

        {/* Main Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-text-muted hover:text-text transition-standard">
            About
          </Link>
          <Link href="/tech-solutions" className="text-text-muted hover:text-text transition-standard">
            Technology
          </Link>
          <Link href="/financial-solutions" className="text-text-muted hover:text-text transition-standard">
            Financial
          </Link>
          <Link href="/projects" className="text-text-muted hover:text-text transition-standard">
            Projects
          </Link>
          <Link href="/resources" className="text-text-muted hover:text-text transition-standard">
            Resources
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle */}
          <ThemeToggle variant="icon" />
          
          {/* CTA Button */}
          <Link 
            href="/contact"
            className="gradient-bg px-6 py-2 rounded-full text-white text-sm font-medium transition-standard hover:shadow-lg hover:shadow-primary-blue/20"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Theme Toggle - Mobile */}
          <ThemeToggle variant="icon" />
          
          {/* Mobile Menu Button */}
          <button 
            className="text-text"
            onClick={() => setNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            {isNavOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 