'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppState } from '@/lib/context';
import { linearGradient, radialGradient, meshGradient, COLORS } from '@/lib/colors';

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
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/tech-solutions/web-development"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Web Development
                          </Link>
                        </motion.div>
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/tech-solutions/app-development"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            App Development
                          </Link>
                        </motion.div>
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/tech-solutions/software-implementation"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Software Implementation
                          </Link>
                        </motion.div>
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/tech-solutions/integrations"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Integration Services
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
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/financial-solutions/dashboards"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Visualization Dashboards
                          </Link>
                        </motion.div>
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/financial-solutions/predictive-modeling"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Predictive Modeling
                          </Link>
                        </motion.div>
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/financial-solutions/audit-automation"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Audit Automation
                          </Link>
                        </motion.div>
                        <motion.div variants={dropdownItemVariants}>
                          <Link 
                            href="/financial-solutions/forecasting"
                            className="block text-lg py-2 text-text-muted hover:text-white transition-all duration-200"
                            onClick={() => setNavOpen(false)}
                          >
                            Forecasting Tools
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <MobileNavLink href="/projects">Projects</MobileNavLink>
                <MobileNavLink href="/resources">Resources</MobileNavLink>
                
                <motion.div variants={linkVariants} className="mt-8">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-blue to-primary-orange rounded-full opacity-0 group-hover:opacity-70 blur-md transition-all duration-300"></div>
                    <Link 
                      href="/contact" 
                      className="block text-center relative gradient-bg py-3 px-6 rounded-full text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-blue/20"
                      onClick={() => setNavOpen(false)}
                    >
                      Get Started
                    </Link>
                  </motion.div>
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