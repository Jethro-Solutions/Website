'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useAppState } from '@/lib/context';
import MobileNav from './MobileNav';
import { linearGradient, blurredGradient, glassEffect, COLORS } from '@/lib/colors';

// Animation variants for nav items
const navItemVariants = {
  rest: { 
    color: 'var(--text-muted)',
    scale: 1,
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  hover: { 
    color: 'var(--text)',
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeInOut' }
  }
};

// Animation variants for dropdown menu
const dropdownVariants = {
  closed: {
    opacity: 0,
    y: -10,
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1], // Custom spring-like curve
      staggerChildren: 0.07,
      delayChildren: 0.05,
      when: "beforeChildren"
    }
  }
};

// Animation variants for dropdown menu items
const dropdownItemVariants = {
  closed: { 
    opacity: 0, 
    x: -15,
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  open: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isNavOpen, setNavOpen } = useAppState();
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if we've scrolled down or up
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY > 100) {
          setIsFixed(false);
        }
      } else {
        // Scrolling up - show header
        setIsFixed(true);
      }

      // Set scrolled state for styling
      setScrolled(currentScrollY > 20);
      
      // Update last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const gradientHeaderStyle = {
    // Use a transparent background initially, then transition based on scroll
    background: scrolled 
      ? linearGradient('to right', [
          { color: 'rgba(15, 45, 95, 0.85)', position: '0%' },
          { color: 'rgba(30, 70, 130, 0.75)', position: '100%' }
        ])
      : 'transparent',
    boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
  };

  return (
    <>
      <AnimatePresence>
        <motion.header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled ? 'py-2' : 'py-5'
          } ${isFixed || !scrolled ? 'translate-y-0' : '-translate-y-full'}`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={gradientHeaderStyle}
        >
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Logo with enhanced hover effect */}
            <Link href="/" className="flex items-center group relative z-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="overflow-hidden relative"
              >
                <motion.span 
                  className="text-2xl font-serif font-bold transition-all duration-300 relative z-10" 
                >
                  <span className="gradient-text">Jethro</span>
                  <span className="text-text ml-1 group-hover:opacity-90 transition-all duration-300">Solutions</span>
                </motion.span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-primary-blue-light to-primary-orange group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            </Link>

            {/* Main Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink href="/about">About</NavLink>
              
              {/* Technology Solutions Dropdown */}
              <NavDropdown 
                title="Technology" 
                links={[
                  { href: '/tech-solutions/web-development', label: 'Web Development' },
                  { href: '/tech-solutions/app-development', label: 'App Development' },
                  { href: '/tech-solutions/software-implementation', label: 'Software Implementation' },
                  { href: '/tech-solutions/integrations', label: 'Integration Services' }
                ]} 
              />
              
              {/* Financial Solutions Dropdown */}
              <NavDropdown 
                title="Financial" 
                links={[
                  { href: '/financial-solutions/dashboards', label: 'Visualization Dashboards' },
                  { href: '/financial-solutions/predictive-modeling', label: 'Predictive Modeling' },
                  { href: '/financial-solutions/audit-automation', label: 'Audit Automation' },
                  { href: '/financial-solutions/forecasting', label: 'Forecasting Tools' }
                ]} 
              />
              
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/resources">Resources</NavLink>
            </nav>

            {/* Right side actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle variant="icon" />
              
              {/* CTA Button with enhanced hover animation */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-primary-orange rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300"></div>
                <Link 
                  href="/contact"
                  className="relative gradient-bg px-6 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/30 border border-transparent hover:border-primary-blue/10"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center space-x-4 md:hidden">
              {/* Theme Toggle - Mobile */}
              <ThemeToggle variant="icon" />
              
              {/* Mobile Menu Button with animation */}
              <motion.button 
                className="text-text relative z-50 p-1.5 rounded-full hover:bg-gray-800/30 transition-colors"
                onClick={() => setNavOpen(!isNavOpen)}
                aria-label={isNavOpen ? "Close menu" : "Open menu"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <motion.path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    animate={{ d: isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16" }}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>
      
      {/* Mobile Navigation */}
      <MobileNav />
    </>
  );
};

// Helper component for nav links with animation
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={navItemVariants}
    >
      <Link href={href} className="relative overflow-hidden py-2 group">
        {/* Display text */}
        <span className="relative z-10">{children}</span>
        
        {/* Gradient underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-300 ease-out"></span>
      </Link>
    </motion.div>
  );
};

// Dropdown menu component for navigation items with submenus
interface NavDropdownProps {
  title: string;
  links: {
    href: string;
    label: string;
  }[];
}

const NavDropdown = ({ title, links }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Animate the dropdown when state changes
  useEffect(() => {
    if (isOpen) {
      controls.start('open');
    } else {
      controls.start('closed');
    }
  }, [isOpen, controls]);
  
  return (
    <motion.div 
      ref={dropdownRef}
      className="relative"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {/* Dropdown trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative overflow-hidden py-2 flex items-center group"
        onMouseEnter={() => setIsOpen(true)}
      >
        <motion.span 
          className="relative z-10 text-text-muted group-hover:text-text transition-colors duration-200"
          variants={navItemVariants}
        >
          {title}
        </motion.span>
        
        {/* Chevron icon with rotation animation */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1 text-text-muted group-hover:text-text"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
        
        {/* Gradient underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-300 ease-out"></span>
      </button>
      
      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full mt-1 w-64 rounded-md py-2 px-3 z-50 overflow-hidden"
            initial="closed"
            animate={controls}
            exit="closed"
            variants={dropdownVariants}
            style={{
              background: linearGradient('to bottom', [
                { color: 'rgba(15, 45, 95, 0.95)', position: '0%' },
                { color: 'rgba(20, 50, 100, 0.9)', position: '100%' }
              ]),
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            {links.map((link) => (
              <motion.div
                key={link.href}
                variants={dropdownItemVariants}
                className="mb-1 last:mb-0"
              >
                <Link 
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-text-muted hover:text-text text-sm transition-all duration-200 relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-blue-light/10 to-primary-orange/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    whileHover={{
                      opacity: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                  <span className="relative z-10">{link.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header; 