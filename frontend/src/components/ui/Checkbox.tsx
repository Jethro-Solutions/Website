import React from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, helperText, ...props }, ref) => {
    return (
      <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
            type="checkbox"
            className={cn(
              "h-4 w-4 rounded border cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-blue/20 transition-standard",
              error ? "border-primary-red" : "border-background-300",
              "bg-background-lighter text-primary-blue",
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        <div className="ml-2 text-sm">
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
            <p
              className={cn(
                "mt-1 text-xs",
                error ? "text-primary-red" : "text-text-subtle"
              )}
            >
              {helperText}
            </p>
          )}
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox }; 