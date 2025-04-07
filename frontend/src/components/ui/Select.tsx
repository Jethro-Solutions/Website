'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, helperText, options, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = !!props.value && props.value !== '';

    return (
      <div className="relative w-full">
        <motion.div
          className="absolute inset-0 rounded-md pointer-events-none border-2 border-transparent"
          animate={{
            borderColor: isFocused 
              ? error ? 'rgb(239, 68, 68)' : 'rgb(59, 130, 246)' 
              : 'transparent',
            boxShadow: isFocused
              ? error 
                ? '0 0 0 3px rgba(239, 68, 68, 0.2)' 
                : '0 0 0 3px rgba(59, 130, 246, 0.2)'
              : '0 0 0 0px rgba(59, 130, 246, 0)'
          }}
          transition={{ 
            type: 'spring', 
            stiffness: 500, 
            damping: 30 
          }}
        />
        <div className="relative">
          <select
            className={cn(
              "w-full bg-background-lighter border rounded-md px-4 py-2.5 text-text appearance-none outline-none",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error ? "border-primary-red" : "border-background-300",
              className
            )}
            ref={ref}
            onFocus={(e) => {
              setIsFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              props.onBlur?.(e);
            }}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Animated Dropdown Icon */}
          <motion.div 
            className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
            animate={{ 
              rotate: isFocused ? 180 : 0,
              color: isFocused 
                ? error ? 'rgb(239, 68, 68)' : 'rgb(59, 130, 246)' 
                : 'rgb(156, 163, 175)'
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25
            }}
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>
        </div>
        
        {/* Floating label effect when focused or has value */}
        <AnimatePresence>
          {placeholder && (isFocused || hasValue) && (
            <motion.span
              initial={{ opacity: 0, y: 8, scale: 1 }}
              animate={{ opacity: 1, y: -24, scale: 0.85 }}
              exit={{ opacity: 0, y: 8, scale: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 400, 
                damping: 30 
              }}
              className="absolute left-4 text-xs font-medium text-primary-blue pointer-events-none origin-left"
            >
              {placeholder}
            </motion.span>
          )}
        </AnimatePresence>
        
        {helperText && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className={cn(
              "mt-1 text-xs overflow-hidden",
              error ? "text-primary-red" : "text-text-subtle"
            )}
          >
            {helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Select }; 