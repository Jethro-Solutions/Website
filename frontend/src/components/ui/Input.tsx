import React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, helperText, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          className={cn(
            "w-full bg-background-lighter border rounded-md px-4 py-2.5 text-text placeholder:text-text-subtle outline-none transition-standard",
            "focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            error ? "border-primary-red focus:border-primary-red focus:ring-primary-red/20" : "border-background-300",
            className
          )}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn(
            "mt-1 text-xs",
            error ? "text-primary-red" : "text-text-subtle"
          )}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input }; 