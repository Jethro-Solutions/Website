
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full bg-jethro-cream/90 backdrop-blur-sm z-50 border-b border-jethro-black/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-playfair font-semibold text-jethro-black">
            Jethro<span className="text-jethro-blue">.</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="font-medium text-jethro-black hover:text-jethro-blue transition-colors">
            Services
          </a>
          <a href="#approach" className="font-medium text-jethro-black hover:text-jethro-blue transition-colors">
            Our Approach
          </a>
          <a href="#testimonials" className="font-medium text-jethro-black hover:text-jethro-blue transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </nav>
        
        <button className="md:hidden text-jethro-black" onClick={toggleMenu}>
          <span className="sr-only">Toggle menu</span>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-jethro-cream border-t border-jethro-black/10">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#services" className="font-medium text-jethro-black hover:text-jethro-blue transition-colors py-2">
              Services
            </a>
            <a href="#approach" className="font-medium text-jethro-black hover:text-jethro-blue transition-colors py-2">
              Our Approach
            </a>
            <a href="#testimonials" className="font-medium text-jethro-black hover:text-jethro-blue transition-colors py-2">
              Testimonials
            </a>
            <a href="#contact" className="btn-primary w-full text-center">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
