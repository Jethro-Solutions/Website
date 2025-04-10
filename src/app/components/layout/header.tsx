"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  return (
    <header className="py-4 px-4 md:px-8 lg:px-12 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image 
              src="/logos/file.svg" 
              alt="Jethro Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <Image 
              src="/logos/file (1).svg" 
              alt="Jethro Secondary Logo" 
              width={30} 
              height={30} 
              className="mr-2"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold">Jethro</span>
              <span className="font-mono text-sm">Solutions</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} pathname={pathname} />
          ))}
          <button className="px-4 py-2 bg-soft-tan text-soft-black font-mono text-sm rounded-md hover:bg-opacity-80 transition-all dark:bg-[#333333] dark:text-soft-white dark:hover:bg-opacity-90">
            Request Demo
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col justify-center items-center w-10 h-10"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out",
                isMenuOpen && "translate-y-1 rotate-45"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground my-1.5 transition-opacity duration-300 ease-in-out",
                isMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-foreground transition-transform duration-300 ease-in-out",
                isMenuOpen && "-translate-y-1 -rotate-45"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden pt-4 pb-6 px-4"
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-2 font-mono text-sm",
                  pathname === item.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="py-2 px-4 bg-soft-tan text-soft-black font-mono text-sm rounded-md hover:bg-opacity-80 transition-all self-start mt-2 dark:bg-[#333333] dark:text-soft-white dark:hover:bg-opacity-90">
              Request Demo
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

// NavLink component for desktop navigation
function NavLink({ item, pathname }: { item: NavItem; pathname: string }) {
  return (
    <Link
      href={item.href}
      className={cn(
        "relative font-mono text-sm py-1",
        pathname === item.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {item.label}
      {pathname === item.href && (
        <motion.span
          layoutId="navigation-underline"
          className="absolute left-0 right-0 bottom-0 h-0.5 bg-foreground"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
} 