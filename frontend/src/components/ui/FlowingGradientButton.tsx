'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const flowingGradientButtonVariants = cva(
  'relative inline-flex items-center justify-center rounded-full font-medium transition-standard overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-blue/50 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        // Blue to orange flowing gradient
        primary: 'text-white bg-gradient-blue-orange bg-[length:200%_200%] hover:animate-gradient-x hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Orange to red flowing gradient
        secondary: 'text-white bg-gradient-orange-red bg-[length:200%_200%] hover:animate-gradient-x hover:shadow-lg hover:shadow-primary-orange/20',
        
        // Circular gradient that animates on hover
        radial: 'text-white bg-gradient-radial-primary bg-[length:200%_200%] hover:animate-gradient-xy hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Conic gradient that rotates on hover
        conic: 'text-white bg-gradient-conic-primary bg-[length:200%_200%] hover:animate-gradient-xy hover:shadow-lg hover:shadow-primary-blue/20',
        
        // Subtle outline button with flowing gradient border
        outline: 'border-2 border-transparent bg-background relative before:absolute before:-z-10 before:inset-[-2px] before:rounded-full before:p-[2px] before:bg-gradient-blue-orange before:bg-[length:200%_200%] before:content-[""] hover:before:animate-gradient-x text-white',
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

export interface FlowingGradientButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof flowingGradientButtonVariants> {
  isLoading?: boolean;
}

const FlowingGradientButton = forwardRef<HTMLButtonElement, FlowingGradientButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(flowingGradientButtonVariants({ variant, size }), className)}
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
        <span className="relative z-10">{children}</span>
      </button>
    );
  }
);

FlowingGradientButton.displayName = 'FlowingGradientButton';

export { FlowingGradientButton, flowingGradientButtonVariants }; 