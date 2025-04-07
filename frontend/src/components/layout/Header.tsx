'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { useAppState } from '@/lib/context';
import MobileNav from './MobileNav';
import { linearGradient, blurredGradient, glassEffect, COLORS } from '@/lib/colors';
import { FlowingGradientButton } from '@/components/ui/FlowingGradientButton';

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

// Enhanced hover effect for dropdown items
const dropdownItemHoverVariants = {
  rest: {
    background: 'rgba(255, 255, 255, 0)',
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  hover: {
    background: 'rgba(255, 255, 255, 0.05)',
    transition: { duration: 0.2, ease: 'easeInOut' }
  }
};

// Animation for dropdown icons like arrows and indicators
const dropdownIconVariants = {
  closed: { rotate: 0, y: 0, transition: { duration: 0.2 } },
  open: { rotate: 180, y: 2, transition: { duration: 0.3, ease: 'backOut' } }
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
                <div className="flex items-center">
                  <Image 
                    src="/images/Jethro Logo Image Transparent.png"
                    alt="Jethro Solutions Logo"
                    width={45}
                    height={45}
                    className="mr-2"
                  />
                  <Image 
                    src="/images/Logo Text Simple Transparent.png"
                    alt="Jethro Solutions"
                    width={120}
                    height={30}
                    className="relative z-10 transition-all duration-300 group-hover:opacity-90"
                  />
                </div>
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
                  { href: '/tech-solutions/web-development', label: 'Web Development', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  ) },
                  { href: '/tech-solutions/app-development', label: 'App Development', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  ) },
                  { href: '/tech-solutions/software-implementation', label: 'Software Implementation', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ) },
                  { href: '/tech-solutions/integrations', label: 'Integration Services', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  ) },
                  { href: '/tech-solutions/cloud-infrastructure', label: 'Cloud Infrastructure', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ) },
                  { href: '/tech-solutions/security-solutions', label: 'Security Solutions', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ) }
                ]} 
              />
              
              {/* Financial Solutions Dropdown */}
              <NavDropdown 
                title="Financial" 
                links={[
                  { href: '/financial-solutions/dashboards', label: 'Visualization Dashboards', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ) },
                  { href: '/financial-solutions/predictive-modeling', label: 'Predictive Modeling', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) },
                  { href: '/financial-solutions/audit-automation', label: 'Audit Automation', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  ) },
                  { href: '/financial-solutions/forecasting', label: 'Forecasting Tools', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  ) },
                  { href: '/financial-solutions/budget-optimization', label: 'Budget Optimization', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) },
                  { href: '/financial-solutions/risk-management', label: 'Risk Management', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  ) }
                ]} 
              />
              
              {/* Solutions Dropdown - Combines both areas */}
              <NavDropdown 
                title="Solutions" 
                links={[
                  { href: '/solutions/industry-specific', label: 'Industry Solutions', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ) },
                  { href: '/solutions/consulting', label: 'Strategic Consulting', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ) },
                  { href: '/solutions/enterprise', label: 'Enterprise Solutions', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ) },
                  { href: '/solutions/smb', label: 'Small Business', icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ) }
                ]} 
              />
              
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/resources">Resources</NavLink>
              
              {/* CTA Button */}
              <div className="ml-4">
                <Link href="/contact">
                  <FlowingGradientButton 
                    variant="primary" 
                    size="sm" 
                    className="font-medium"
                  >
                    Get Started
                  </FlowingGradientButton>
                </Link>
              </div>
            </nav>

            {/* Right side actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <ThemeToggle variant="icon" />
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
    icon?: React.ReactNode;
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
          variants={dropdownIconVariants}
          animate={isOpen ? 'open' : 'closed'}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
        
        {/* Gradient underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-300 ease-out"></span>
      </button>
      
      {/* Dropdown menu with enhanced animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute left-0 top-full mt-1 w-64 rounded-md py-2 px-3 z-50 overflow-hidden"
            initial="closed"
            animate={controls}
            exit="closed"
            variants={dropdownVariants}
            onMouseLeave={() => setIsOpen(false)}
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
            {/* Optional dropdown header/divider */}
            <motion.div 
              className="border-b border-white/10 mb-2 pb-1 text-xs uppercase text-text-subtle font-medium tracking-wider px-3"
              variants={dropdownItemVariants}
            >
              {title} Services
            </motion.div>
            
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                variants={dropdownItemVariants}
                custom={index}
                className="mb-1 last:mb-0"
              >
                <Link 
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-text-muted hover:text-text text-sm transition-all duration-200 relative group"
                >
                  <motion.div
                    className="absolute inset-0 rounded-md"
                    initial="rest"
                    whileHover="hover"
                    variants={dropdownItemHoverVariants}
                    style={{
                      background: linearGradient('to right', [
                        { color: 'rgba(26, 77, 166, 0.1)', position: '0%' },
                        { color: 'rgba(241, 90, 36, 0.1)', position: '100%' }
                      ])
                    }}
                  />
                  
                  {/* Left border indicator that animates on hover */}
                  <motion.div 
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-blue-light to-primary-orange rounded-full"
                    initial={{ scaleY: 0, opacity: 0 }}
                    whileHover={{ 
                      scaleY: 1, 
                      opacity: 1,
                      transition: { duration: 0.2, delay: 0.05 } 
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center">
                    {link.icon && <span className="mr-2">{link.icon}</span>}
                    {link.label}
                    
                    {/* Subtle right arrow */}
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -4, opacity: 0 }}
                      whileHover={{ 
                        x: 0, 
                        opacity: 1,
                        transition: { duration: 0.2 } 
                      }}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </span>
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