import React from 'react';
import { cn } from '@/lib/utils';

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

export function FormField({
  label,
  htmlFor,
  required,
  error,
  helperText,
  className,
  children,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {label && (
        <label
          htmlFor={htmlFor}
          className={cn(
            "block text-sm font-medium mb-1",
            error ? "text-primary-red" : "text-text"
          )}
        >
          {label} {required && <span className="text-primary-red">*</span>}
        </label>
      )}
      {children}
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
  );
} 