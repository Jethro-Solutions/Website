'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, ...props }, ref) => {
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
        <input
          className={cn(
            "w-full bg-background-lighter border rounded-md px-4 py-2.5 text-text placeholder:text-transparent outline-none",
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
        />
        
        {/* Animated placeholder */}
        <AnimatePresence>
          {props.placeholder && !hasValue && !isFocused && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ 
                type: 'spring', 
                stiffness: 500, 
                damping: 30 
              }}
              className="absolute left-4 top-2.5 text-text-subtle pointer-events-none"
            >
              {props.placeholder}
            </motion.span>
          )}
        </AnimatePresence>
        
        {/* Floating label effect when focused or has value */}
        <AnimatePresence>
          {props.placeholder && (isFocused || hasValue) && (
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
              {props.placeholder}
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

Input.displayName = 'Input';

export { Input }; 