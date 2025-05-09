import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './ui/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle navigation link clicks for smooth scrolling to page sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    
    // If we're on the FirstAdvisor page and clicking a link that points to the homepage sections
    if (window.location.pathname === '/first-advisor' && href && href.startsWith('/#')) {
      e.preventDefault();
      window.location.href = href; // Navigate to the home page with the anchor
      return;
    }
    
    // Only handle links that start with # or have a hash in the same page
    if (href && (href.startsWith('#') || (href.startsWith('/') && href.includes('#')))) {
      e.preventDefault();
      
      // Extract the id from the href
      const id = href.includes('#') ? href.split('#')[1] : href.substring(1);
      
      // Find the element to scroll to
      const element = document.getElementById(id);
      
      // If element exists, scroll to it smoothly
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        
        // Close mobile menu if it's open
        if (isOpen) {
          setIsOpen(false);
        }
      }
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-jethro-cream/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-jethro-cream/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="group flex items-center gap-2">
          <img 
            src="/logos/icon black.svg" 
            alt="Jethro Solutions Icon" 
            className="h-8 w-8 transition-opacity duration-300 group-hover:opacity-80" 
          />
          <Logo variant="full" className="transition-opacity duration-300 group-hover:opacity-80" />
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Services', 'Our Approach'].map((item) => (
            <a 
              key={item}
              href={item === 'Our Approach' ? '/#approach' : `/#${item.toLowerCase().replace(' ', '-')}`}
              className="relative font-medium text-jethro-black hover:text-jethro-blue transition-colors duration-200 
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-jethro-blue 
                after:transition-all after:duration-300 hover:after:w-full"
              onClick={handleNavClick}
            >
              {item}
            </a>
          ))}
          <a 
            href="/first-advisor" 
            className="relative font-medium text-jethro-black hover:text-jethro-blue transition-colors duration-200 
              after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-jethro-blue 
              after:transition-all after:duration-300 hover:after:w-full"
          >
            First Advisor
          </a>
          <a 
            href="#contact" 
            className="btn-primary transform hover:scale-105 transition-transform duration-200"
            onClick={handleNavClick}
          >
            Get in Touch
          </a>
        </nav>
        
        <button 
          className="md:hidden text-jethro-black hover:text-jethro-blue transition-colors duration-200 p-1 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } bg-jethro-cream shadow-inner border-t border-jethro-black/10`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {['Services', 'Our Approach'].map((item) => (
            <a 
              key={item}
              href={item === 'Our Approach' ? '/#approach' : `/#${item.toLowerCase().replace(' ', '-')}`}
              className="font-medium text-jethro-black hover:text-jethro-blue transition-colors duration-200 py-2"
              onClick={(e) => {
                handleNavClick(e);
                toggleMenu();
              }}
            >
              {item}
            </a>
          ))}
          <a 
            href="/first-advisor" 
            className="font-medium text-jethro-black hover:text-jethro-blue transition-colors duration-200 py-2"
            onClick={toggleMenu}
          >
            First Advisor
          </a>
          <a 
            href="#contact" 
            className="btn-primary w-full text-center transition-all duration-200"
            onClick={(e) => {
              handleNavClick(e);
              toggleMenu();
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
