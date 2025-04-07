'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div className="relative flex items-start">
        <div 
          className="flex items-center h-5"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative h-4 w-4">
            <motion.div
              className="absolute inset-0 rounded pointer-events-none"
              animate={{
                boxShadow: isFocused 
                  ? error 
                    ? '0 0 0 3px rgba(239, 68, 68, 0.2)' 
                    : '0 0 0 3px rgba(59, 130, 246, 0.2)'
                  : isHovered
                    ? '0 0 0 2px rgba(59, 130, 246, 0.1)'
                    : '0 0 0 0px rgba(59, 130, 246, 0)'
              }}
              transition={{ 
                type: 'spring', 
                stiffness: 500, 
                damping: 30 
              }}
            />
            <input
              type="checkbox"
              className={cn(
                "h-4 w-4 rounded border cursor-pointer focus:outline-none focus:ring-0 appearance-none relative z-10",
                error ? "border-primary-red" : "border-background-300",
                "bg-background-lighter checked:bg-primary-blue checked:border-primary-blue",
                className
              )}
              ref={ref}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              {...props}
            />
            
            {/* Checkmark icon */}
            {props.checked && (
              <motion.svg
                className="absolute top-0 left-0 h-4 w-4 text-white pointer-events-none z-20"
                viewBox="0 0 24 24"
                fill="none"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 500, 
                  damping: 30 
                }}
              >
                <motion.path
                  d="M5 13l4 4L19 7"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 400, 
                    damping: 40,
                    delay: 0.1
                  }}
                />
              </motion.svg>
            )}
          </div>
        </div>
        <motion.div 
          className="ml-2 text-sm"
          animate={{
            x: isFocused || isHovered ? 2 : 0
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 30
          }}
        >
          {label && (
            <label
              htmlFor={props.id}
              className={cn(
                "font-medium cursor-pointer",
                error ? "text-primary-red" : "text-text"
              )}
            >
              {label}
            </label>
          )}
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
        </motion.div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox }; 