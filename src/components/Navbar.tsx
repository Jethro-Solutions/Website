
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-default ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md py-4 shadow-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl text-gradient">JETHRO</span>
          <span className="font-medium text-muted-foreground">Solutions</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary transition-colors duration-default">
            Services
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors duration-default">
            About Us
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors duration-default">
            Projects
          </a>
          <Button variant="ghost" size="sm" className="hover:text-primary">
            Login
          </Button>
          <Button size="sm">
            Contact Sales
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container-custom py-6 flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors duration-default"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors duration-default"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#projects" 
              className="text-sm font-medium py-2 hover:text-primary transition-colors duration-default"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <Button variant="ghost" size="sm" className="justify-start hover:text-primary">
              Login
            </Button>
            <Button size="sm" className="w-full sm:w-auto">
              Contact Sales
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
