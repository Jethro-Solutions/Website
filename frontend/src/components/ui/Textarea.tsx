import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  helperText?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, helperText, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <textarea
          className={cn(
            "w-full min-h-[120px] bg-background-lighter border rounded-md px-4 py-2.5 text-text placeholder:text-text-subtle outline-none transition-standard",
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

Textarea.displayName = 'Textarea';

export { Textarea }; 