'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppState } from '@/lib/context';
import { linearGradient, radialGradient, meshGradient, COLORS } from '@/lib/colors';
import { FlowingGradientButton } from '@/components/ui/FlowingGradientButton';

// Main menu animation variants
const menuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
      when: 'beforeChildren',
      staggerChildren: 0.07,
      delayChildren: 0.05
    }
  }
};

// Navigation link animation variants
const linkVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.2, 0.65, 0.3, 0.9]
    }
  }
};

// Backdrop animation variants
const backdropVariants = {
  hidden: { 
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: 'easeInOut'
    }
  },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.35,
      ease: 'easeInOut'
    }
  }
};

// Dropdown menu animation variants
const dropdownVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      when: 'afterChildren',
      staggerChildren: 0.03,
      staggerDirection: -1
    }
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
      delayChildren: 0.05,
      when: 'beforeChildren'
    }
  }
};

// Dropdown item animation variants
const dropdownItemVariants = {
  hidden: { 
    opacity: 0, 
    x: -15,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Enhanced hover animation for dropdown items
const mobileDropdownItemHoverVariants = {
  initial: {
    x: 0,
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  hover: {
    x: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    transition: { 
      duration: 0.2, 
      ease: 'easeOut' 
    }
  }
};

const MobileNav = () => {
  const { isNavOpen, setNavOpen } = useAppState();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isNavOpen && !target.closest('.mobile-menu') && !target.closest('button[aria-label="Open menu"]')) {
        setNavOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isNavOpen, setNavOpen]);
  
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset dropdown state when menu closes
      setOpenDropdown(null);
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  // Toggle dropdown menus
  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  const mobileNavStyle = {
    background: meshGradient('rgba(0, 0, 0, 0.95)', [
      {
        position: [0, 10],
        size: '40%',
        colors: ['rgba(15, 45, 95, 0.5)', 'transparent'],
        opacity: 0.5
      },
      {
        position: [100, 60],
        size: '50%',
        colors: ['rgba(241, 90, 36, 0.3)', 'transparent'],
        opacity: 0.4
      },
      {
        position: [50, 90],
        size: '30%',
        colors: ['rgba(26, 176, 176, 0.2)', 'transparent'],
        opacity: 0.3
      }
    ]),
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
  };

  return (
    <AnimatePresence>
      {isNavOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={backdropVariants}
            style={mobileNavStyle}
          >
            <motion.div
              className="mobile-menu container mx-auto px-6 pt-24 pb-10 flex flex-col h-full relative z-10"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <div className="flex justify-center mb-8">
                <Image 
                  src="/images/Jethro Logo Full Text Transparent.png"
                  alt="Jethro Solutions"
                  width={200}
                  height={60}
                  className="opacity-90"
                />
              </div>
              
              <nav className="flex flex-col space-y-4">
                <MobileNavLink href="/about">About</MobileNavLink>
                
                {/* Technology Solutions with dropdown */}
                <div className="relative">
                  <motion.div 
                    variants={linkVariants}
                    className="flex items-center justify-between"
                  >
                    <button 
                      onClick={() => toggleDropdown('tech')}
                      className="group text-left w-full text-2xl font-serif text-text py-2 border-b border-white/10 transition-standard relative overflow-hidden flex items-center justify-between"
                      aria-expanded={openDropdown === 'tech'}
                    >
                      <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue-light group-hover:to-primary-orange transition-all duration-300">
                        Technology
                      </span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-2 text-text-muted transition-all duration-300"
                        animate={{ rotate: openDropdown === 'tech' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-500 ease-out"></span>
                    </button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {openDropdown === 'tech' && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4 mt-2 overflow-hidden"
                      >
                        {/* Technology dropdown header */}
                        <motion.div 
                          variants={dropdownItemVariants}
                          className="text-xs uppercase text-text-subtle font-medium tracking-wider px-3 pb-2 mb-2 border-b border-white/5"
                        >
                          Technology Services
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/tech-solutions/web-development"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </motion.span>
                            Web Development
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/tech-solutions/app-development"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </motion.span>
                            App Development
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/tech-solutions/software-implementation"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                              </svg>
                            </motion.span>
                            Software Implementation
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/tech-solutions/integrations"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                              </svg>
                            </motion.span>
                            Integration Services
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/tech-solutions/cloud-infrastructure"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                              </svg>
                            </motion.span>
                            Cloud Infrastructure
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/tech-solutions/security-solutions"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </motion.span>
                            Security Solutions
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Financial Solutions with dropdown */}
                <div className="relative">
                  <motion.div 
                    variants={linkVariants}
                    className="flex items-center justify-between"
                  >
                    <button 
                      onClick={() => toggleDropdown('financial')}
                      className="group text-left w-full text-2xl font-serif text-text py-2 border-b border-white/10 transition-standard relative overflow-hidden flex items-center justify-between"
                      aria-expanded={openDropdown === 'financial'}
                    >
                      <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue-light group-hover:to-primary-orange transition-all duration-300">
                        Financial
                      </span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-2 text-text-muted transition-all duration-300"
                        animate={{ rotate: openDropdown === 'financial' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-500 ease-out"></span>
                    </button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {openDropdown === 'financial' && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4 mt-2 overflow-hidden"
                      >
                        {/* Financial dropdown header */}
                        <motion.div 
                          variants={dropdownItemVariants}
                          className="text-xs uppercase text-text-subtle font-medium tracking-wider px-3 pb-2 mb-2 border-b border-white/5"
                        >
                          Financial Services
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/financial-solutions/dashboards"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </motion.span>
                            Visualization Dashboards
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/financial-solutions/predictive-modeling"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </motion.span>
                            Predictive Modeling
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/financial-solutions/audit-automation"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                            </motion.span>
                            Audit Automation
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/financial-solutions/forecasting"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </motion.span>
                            Forecasting Tools
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/financial-solutions/budget-optimization"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </motion.span>
                            Budget Optimization
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/financial-solutions/risk-management"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </motion.span>
                            Risk Management
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Solutions dropdown - new section */}
                <div className="relative">
                  <motion.div 
                    variants={linkVariants}
                    className="flex items-center justify-between"
                  >
                    <button 
                      onClick={() => toggleDropdown('solutions')}
                      className="group text-left w-full text-2xl font-serif text-text py-2 border-b border-white/10 transition-standard relative overflow-hidden flex items-center justify-between"
                      aria-expanded={openDropdown === 'solutions'}
                    >
                      <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue-light group-hover:to-primary-orange transition-all duration-300">
                        Solutions
                      </span>
                      <motion.svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        className="ml-2 text-text-muted transition-all duration-300"
                        animate={{ rotate: openDropdown === 'solutions' ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </motion.svg>
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-500 ease-out"></span>
                    </button>
                  </motion.div>
                  
                  <AnimatePresence>
                    {openDropdown === 'solutions' && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={dropdownVariants}
                        className="pl-4 mt-2 overflow-hidden"
                      >
                        {/* Solutions dropdown header */}
                        <motion.div 
                          variants={dropdownItemVariants}
                          className="text-xs uppercase text-text-subtle font-medium tracking-wider px-3 pb-2 mb-2 border-b border-white/5"
                        >
                          By Category
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/solutions/industry-specific"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                              </svg>
                            </motion.span>
                            Industry Solutions
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/solutions/consulting"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                              </svg>
                            </motion.span>
                            Strategic Consulting
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/solutions/enterprise"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </motion.span>
                            Enterprise Solutions
                          </Link>
                        </motion.div>
                        
                        <motion.div 
                          variants={dropdownItemVariants}
                          whileHover="hover"
                          initial="initial"
                        >
                          <Link 
                            href="/solutions/smb"
                            className="block text-lg py-2 pl-3 pr-2 text-text-muted hover:text-white transition-all duration-200 rounded-md flex items-center"
                            onClick={() => setNavOpen(false)}
                          >
                            <motion.span className="w-5 h-5 mr-3 text-primary-blue-light">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                              </svg>
                            </motion.span>
                            Small Business
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <MobileNavLink href="/projects">Projects</MobileNavLink>
                <MobileNavLink href="/resources">Resources</MobileNavLink>
                <MobileNavLink href="/contact">Contact</MobileNavLink>
                
                {/* CTA Button */}
                <motion.div 
                  variants={linkVariants}
                  className="mt-6 flex justify-center"
                >
                  <Link href="/contact">
                    <FlowingGradientButton 
                      variant="primary" 
                      size="md" 
                      className="w-full py-3 font-medium"
                    >
                      Get Started
                    </FlowingGradientButton>
                  </Link>
                </motion.div>
              </nav>
              
              {/* Bottom section with socials or extra links */}
              <motion.div 
                variants={linkVariants}
                className="mt-auto pt-6 flex justify-center space-x-8 text-text-muted"
              >
                {/* Social media icons with enhanced hover effect */}
                <SocialIcon href="#" ariaLabel="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                </SocialIcon>
                <SocialIcon href="#" ariaLabel="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </SocialIcon>
                <SocialIcon href="#" ariaLabel="GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </SocialIcon>
              </motion.div>

              {/* Animated decorative elements */}
              <motion.div 
                className="absolute top-[20%] right-[10%] w-24 h-24 rounded-full bg-primary-blue/10 blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 0.7, 
                  scale: 1,
                  transition: { 
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-[15%] left-[5%] w-32 h-32 rounded-full bg-primary-orange/10 blur-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 0.6, 
                  scale: 1.1,
                  transition: { 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.5
                  }
                }}
              ></motion.div>
              <motion.div 
                className="absolute bottom-[40%] right-[15%] w-20 h-20 rounded-full bg-secondary-teal/10 blur-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 0.5, 
                  scale: 1.2,
                  transition: { 
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// Helper component for mobile navigation links
const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const { setNavOpen } = useAppState();
  
  return (
    <motion.div variants={linkVariants}>
      <Link 
        href={href} 
        className="group block text-2xl font-serif text-text py-2 border-b border-white/10 transition-standard relative overflow-hidden"
        onClick={() => setNavOpen(false)}
      >
        <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-blue-light group-hover:to-primary-orange transition-all duration-300">
          {children}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary-blue-light via-primary-orange to-primary-red group-hover:w-full transition-all duration-500 ease-out"></span>
      </Link>
    </motion.div>
  );
};

// Helper component for social icons with animation
const SocialIcon = ({ href, ariaLabel, children }: { href: string; ariaLabel: string; children: React.ReactNode }) => {
  return (
    <motion.a 
      href={href} 
      className="relative p-2 hover:text-white transition-all duration-300"
      aria-label={ariaLabel}
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-blue/0 to-primary-orange/0 hover:from-primary-blue/20 hover:to-primary-orange/20 transition-all duration-300"></span>
      {children}
    </motion.a>
  );
};

export default MobileNav; 