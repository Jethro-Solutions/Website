'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light mt-16 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-serif font-bold gradient-text">Jethro</span>
                <span className="text-xl font-serif text-text ml-1">Solutions</span>
              </Link>
            </div>
            <p className="text-text-muted mb-4 text-sm max-w-xs">
              Innovative solutions at the intersection of technology and finance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-muted hover:text-primary-blue transition-standard">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-text-muted hover:text-primary-blue transition-standard">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-text font-serif font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-muted hover:text-text transition-standard">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-text-muted hover:text-text transition-standard">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-muted hover:text-text transition-standard">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-text-muted hover:text-text transition-standard">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-muted hover:text-text transition-standard">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-text font-serif font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-text-muted">info@jethrosolutions.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary-blue mt-0.5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-text-muted">(123) 456-7890</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter & Theme Toggle */}
          <div>
            <h3 className="text-text font-serif font-semibold mb-4">Settings</h3>
            <div className="flex items-center space-x-3 mb-6">
              <ThemeToggle variant="switch" />
              <span className="text-text-muted text-sm">Toggle Theme</span>
            </div>
            
            <h3 className="text-text font-serif font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-background-lighter border border-background-300 rounded-md px-4 py-2 text-sm text-text placeholder-text-subtle focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue"
                />
              </div>
              <button 
                type="submit" 
                className="w-full gradient-bg text-white rounded-md px-4 py-2 text-sm font-medium transition-standard hover:shadow-lg hover:shadow-primary-blue/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-background-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              &copy; {currentYear} Jethro Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-text-muted hover:text-text text-sm transition-standard">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-muted hover:text-text text-sm transition-standard">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 