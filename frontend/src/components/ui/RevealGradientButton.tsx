'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const revealGradientButtonVariants = cva(
  'relative inline-flex items-center justify-center rounded-full font-medium transition-standard overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-blue/50 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // Reveal gradient from left
        fromLeft: 'text-white bg-background-lighter before:absolute before:inset-0 before:bg-gradient-blue-orange before:transition-transform before:duration-500 before:origin-left before:scale-x-0 hover:before:scale-x-100 hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Reveal gradient from right
        fromRight: 'text-white bg-background-lighter before:absolute before:inset-0 before:bg-gradient-blue-orange before:transition-transform before:duration-500 before:origin-right before:scale-x-0 hover:before:scale-x-100 hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Reveal gradient from bottom
        fromBottom: 'text-white bg-background-lighter before:absolute before:inset-0 before:bg-gradient-blue-orange before:transition-transform before:duration-500 before:origin-bottom before:scale-y-0 hover:before:scale-y-100 hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Reveal gradient from top
        fromTop: 'text-white bg-background-lighter before:absolute before:inset-0 before:bg-gradient-blue-orange before:transition-transform before:duration-500 before:origin-top before:scale-y-0 hover:before:scale-y-100 hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Reveal gradient from center
        fromCenter: 'text-white bg-background-lighter before:absolute before:inset-0 before:bg-gradient-blue-orange before:transition-transform before:duration-500 before:origin-center before:scale-0 hover:before:scale-100 hover:shadow-lg hover:shadow-primary-blue/20',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm',
        md: 'h-10 px-5 py-2 text-base',
        lg: 'h-12 px-8 py-3 text-lg',
        xl: 'h-14 px-10 py-4 text-xl',
      },
    },
    defaultVariants: {
      variant: 'fromLeft',
      size: 'md',
    },
  }
);

export interface RevealGradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof revealGradientButtonVariants> {
  isLoading?: boolean;
}

const RevealGradientButton = forwardRef<HTMLButtonElement, RevealGradientButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(revealGradientButtonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="relative z-10 mr-2 h-4 w-4 animate-spin"
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
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

RevealGradientButton.displayName = 'RevealGradientButton';

export { RevealGradientButton, revealGradientButtonVariants }; 