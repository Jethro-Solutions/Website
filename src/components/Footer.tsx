import React from 'react';
import { Logo } from './ui/Logo';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jethro-black py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-8 rounded-full bg-jethro-cream p-4">
            <Logo variant="full" color="dark" useFullImage={true} className="h-20 w-20" />
          </div>
          
          <nav className="mb-8 flex flex-wrap justify-center gap-6 text-jethro-cream/70">
            <a href="#services" className="hover:text-jethro-cream transition-colors">Services</a>
            <a href="#approach" className="hover:text-jethro-cream transition-colors">Our Approach</a>
            <a href="#testimonials" className="hover:text-jethro-cream transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-jethro-cream transition-colors">Contact Us</a>
          </nav>
          
          <div className="mb-8 flex space-x-4">
            <Button variant="outline" size="icon" className="rounded-full bg-jethro-blue/20 text-jethro-cream border-jethro-blue/30 hover:bg-jethro-blue/30 hover:text-jethro-cream">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-jethro-blue/20 text-jethro-cream border-jethro-blue/30 hover:bg-jethro-blue/30 hover:text-jethro-cream">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-jethro-blue/20 text-jethro-cream border-jethro-blue/30 hover:bg-jethro-blue/30 hover:text-jethro-cream">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-jethro-blue/20 text-jethro-cream border-jethro-blue/30 hover:bg-jethro-blue/30 hover:text-jethro-cream">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full bg-jethro-blue/20 text-jethro-cream border-jethro-blue/30 hover:bg-jethro-blue/30 hover:text-jethro-cream">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </div>
          
          <div className="mb-8 w-full max-w-md">
            <form className="flex space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">Email</Label>
                <Input 
                  id="email" 
                  placeholder="Enter your email" 
                  type="email" 
                  className="rounded-full border-jethro-blue/30 bg-jethro-black text-jethro-cream" 
                />
              </div>
              <Button 
                type="submit" 
                className="rounded-full bg-jethro-blue hover:bg-jethro-blue/90 text-jethro-cream"
              >
                Subscribe
              </Button>
            </form>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-jethro-cream/50">
              &copy; {new Date().getFullYear()} Jethro Solutions. All rights reserved.
            </p>
            <p className="mt-2 text-xs text-jethro-cream/30">
              Wisdom-driven technology stewardship for optimal implementation and resource management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
