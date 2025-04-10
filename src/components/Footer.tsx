
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted/5 py-16 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="font-bold text-xl text-gradient">JETHRO</span>
              <span className="font-medium text-muted-foreground">Solutions</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-md mb-6">
              Jethro Solutions provides cutting-edge business intelligence tools and services
              designed to optimize operations and drive growth for modern enterprises.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'Facebook', 'GitHub'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-default"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {['About', 'Team', 'Careers', 'Press', 'News'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-default"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Documentation', 'Case Studies', 'Support', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-default"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Jethro Solutions. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-default">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-default">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-default">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
