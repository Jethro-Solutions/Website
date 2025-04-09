"use client";

import React from "react";
import Link from "next/link";

// Footer Column interface
interface FooterColumn {
  title: string;
  links: {
    label: string;
    href: string;
    external?: boolean;
  }[];
}

// Footer columns data
const footerColumns: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/about#team" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Financial Data Analysis", href: "/services/financial-data-analysis" },
      { label: "AI Trading Solutions", href: "/services/ai-trading-solutions" },
      { label: "Risk Management", href: "/services/risk-management" },
      { label: "Custom Software", href: "/services/custom-software" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/insights" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Documentation", href: "/docs" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

// Social Media Links
const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", external: true },
  { label: "Twitter", href: "https://twitter.com", external: true },
  { label: "GitHub", href: "https://github.com", external: true },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-soft-black text-soft-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with logo and columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-serif text-2xl font-bold">Jethro</span>
              <span className="font-mono ml-1 text-sm">Solutions</span>
            </div>
            <p className="text-soft-white/80 mb-4 text-sm max-w-xs">
              Leading-edge technology solutions for forward-facing companies in the financial sector.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-soft-white/80 hover:text-soft-tan transition-colors text-sm font-mono"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className="lg:col-span-1">
              <h3 className="font-mono text-sm uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-soft-white/70 hover:text-soft-tan transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider mb-4">
                Contact Us
              </h3>
              <p className="text-soft-white/70 text-sm mb-2">123 Financial District, New York, NY 10005</p>
              <p className="text-soft-white/70 text-sm mb-2">info@jethrosolutions.com</p>
              <p className="text-soft-white/70 text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-mono text-sm uppercase tracking-wider mb-4">
                Newsletter
              </h3>
              <p className="text-soft-white/70 text-sm mb-4">
                Stay updated with our latest insights and news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-soft-tan flex-grow"
                />
                <button className="bg-soft-tan text-soft-black px-4 py-2 rounded-r-md text-sm font-mono hover:bg-opacity-90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="border-t border-white/10 pt-6 text-center md:text-left md:flex md:justify-between items-center">
          <p className="text-soft-white/60 text-xs">
            &copy; {currentYear} Jethro Solutions. All rights reserved.
          </p>
          <p className="text-soft-white/60 text-xs mt-2 md:mt-0">
            Designed and built with precision
          </p>
        </div>
      </div>
    </footer>
  );
} 