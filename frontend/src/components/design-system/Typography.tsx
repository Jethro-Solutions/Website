import React from 'react';
import { cn } from '@/lib/utils';

// Heading Components with Serif Font
export const H1 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn(
        "font-serif font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

export const H2 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "font-serif font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const H3 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn(
        "font-serif font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};

export const H4 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "font-serif font-semibold text-xl md:text-2xl lg:text-3xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export const H5 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h5
      className={cn(
        "font-serif font-semibold text-lg md:text-xl lg:text-2xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  );
};

export const H6 = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h6
      className={cn(
        "font-serif font-semibold text-base md:text-lg lg:text-xl tracking-tight",
        className
      )}
      {...props}
    >
      {children}
    </h6>
  );
};

// Body Text Components with Sans Font
export const Lead = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "font-sans text-xl md:text-2xl leading-relaxed text-text-muted",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const Body = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "font-sans text-base md:text-lg leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export const BodySmall = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "font-sans text-sm md:text-base leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// UI Text Components with Sans Font
export const Label = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLabelElement>) => {
  return (
    <label
      className={cn(
        "font-sans text-sm font-medium",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export const Caption = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p
      className={cn(
        "font-sans text-xs text-text-subtle",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

// Code Components with Mono Font
export const Code = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <code
      className={cn(
        "font-mono text-sm bg-background-lighter px-1.5 py-0.5 rounded",
        className
      )}
      {...props}
    >
      {children}
    </code>
  );
};

export const Pre = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => {
  return (
    <pre
      className={cn(
        "font-mono text-sm bg-background-lighter p-4 rounded-lg overflow-x-auto",
        className
      )}
      {...props}
    >
      {children}
    </pre>
  );
};

// Special Text Styles
export const GradientText = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-primary-horizontal",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}; 