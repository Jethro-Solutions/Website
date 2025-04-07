'use client';

import React from 'react';
import { useTheme } from '@/lib/context';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Icons for the theme toggle
const SunIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const MoonIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

export interface ThemeToggleProps {
  className?: string;
  variant?: 'icon' | 'button' | 'switch';
}

export function ThemeToggle({ 
  className,
  variant = 'icon'
}: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Icon only variant
  if (variant === 'icon') {
    return (
      <button
        onClick={toggleTheme}
        className={cn(
          "w-10 h-10 rounded-full flex items-center justify-center transition-standard",
          "hover:bg-background-lighter focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/30",
          className
        )}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {theme === 'dark' ? (
          <SunIcon />
        ) : (
          <MoonIcon />
        )}
      </button>
    );
  }

  // Button variant with text
  if (variant === 'button') {
    return (
      <Button
        onClick={toggleTheme}
        variant="ghost"
        className={className}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        <span className="flex items-center gap-2">
          {theme === 'dark' ? (
            <>
              <SunIcon />
              <span>Light Mode</span>
            </>
          ) : (
            <>
              <MoonIcon />
              <span>Dark Mode</span>
            </>
          )}
        </span>
      </Button>
    );
  }

  // Switch toggle variant
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "relative inline-flex h-6 w-12 items-center rounded-full transition-standard",
        theme === 'dark' ? 'bg-primary-blue' : 'bg-background-lighter',
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/30",
        className
      )}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className="sr-only">Toggle theme</span>
      <motion.span
        className={cn(
          "inline-block h-5 w-5 rounded-full transition-standard",
          theme === 'dark' ? 'bg-white' : 'bg-primary-blue-light',
        )}
        initial={false}
        animate={{
          translateX: theme === 'dark' ? '0.35rem' : '0.7rem',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <span 
        className={cn(
          "absolute inset-y-0 left-0 flex items-center justify-center w-6",
          theme === 'dark' ? 'text-text-subtle' : 'text-white'
        )}
      >
        <MoonIcon />
      </span>
      <span 
        className={cn(
          "absolute inset-y-0 right-0 flex items-center justify-center w-6",
          theme === 'dark' ? 'text-white' : 'text-text-subtle'
        )}
      >
        <SunIcon />
      </span>
    </button>
  );
} 