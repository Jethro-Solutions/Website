'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container-custom flex items-center justify-between py-4 px-6">
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

        {/* CTA Button */}
        <Link 
          href="/contact"
          className="hidden md:flex gradient-bg px-6 py-2 rounded-full text-white text-sm font-medium transition-standard hover:shadow-lg hover:shadow-primary-blue/20"
        >
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-text">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header; 