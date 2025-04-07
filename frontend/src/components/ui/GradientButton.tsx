'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gradientButtonVariants = cva(
  'relative inline-flex items-center justify-center rounded-full font-medium transition-standard overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-blue/50 disabled:opacity-50 disabled:pointer-events-none group',
  {
    variants: {
      variant: {
        // Blue to orange gradient that shifts on hover
        primary: 'text-white before:absolute before:inset-0 before:bg-gradient-blue-orange before:transition-transform before:duration-500 hover:before:translate-x-[-10%] hover:before:scale-110 hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Orange to red gradient that shifts on hover
        secondary: 'text-white before:absolute before:inset-0 before:bg-gradient-orange-red before:transition-transform before:duration-500 hover:before:translate-x-[-10%] hover:before:scale-110 hover:shadow-lg hover:shadow-primary-orange/20',
        
        // Blue to teal gradient that shifts on hover
        tertiary: 'text-white before:absolute before:inset-0 before:bg-gradient-blue-teal before:transition-transform before:duration-500 hover:before:translate-x-[-10%] hover:before:scale-110 hover:shadow-lg hover:shadow-secondary-teal/20',
        
        // Gradient border with transparent background
        outline: 'border-2 border-transparent bg-background relative before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-blue-orange before:content-[""] before:-z-10 hover:before:bg-gradient-orange-red hover:before:animate-gradient-x text-white',
        
        // Text gradient that changes on hover
        text: 'bg-transparent hover:bg-transparent p-0 h-auto',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm',
        md: 'h-10 px-5 py-2 text-base',
        lg: 'h-12 px-8 py-3 text-lg',
        xl: 'h-14 px-10 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface GradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  isLoading?: boolean;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(gradientButtonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {/* Using relative position to appear above the pseudo-element */}
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

GradientButton.displayName = 'GradientButton';

// Text gradient button specific component
const GradientTextButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(
          gradientButtonVariants({ variant: 'text', size }),
          'transition-standard',
          className
        )}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        <span className="relative bg-gradient-blue-orange bg-clip-text text-transparent hover:bg-gradient-orange-red transition-colors duration-300">
          {children}
        </span>
      </button>
    );
  }
);

GradientTextButton.displayName = 'GradientTextButton';

export { GradientButton, GradientTextButton, gradientButtonVariants }; 