import React from 'react';
import { cn } from '@/lib/utils';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  options: { value: string; label: string }[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, helperText, options, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="relative">
          <select
            className={cn(
              "w-full bg-background-lighter border rounded-md px-4 py-2.5 text-text appearance-none outline-none transition-standard",
              "focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error ? "border-primary-red focus:border-primary-red focus:ring-primary-red/20" : "border-background-300",
              className
            )}
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-text-subtle"
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
          </div>
        </div>
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

Select.displayName = 'Select';

export { Select }; 