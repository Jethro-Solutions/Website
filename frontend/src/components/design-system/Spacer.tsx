import React from 'react';
import { cn } from '@/lib/utils';

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

export interface SpacerProps {
  /**
   * The amount of space to apply
   */
  size?: SpacerSize;
  /**
   * Whether the spacer is horizontal (width) or vertical (height)
   */
  axis?: 'horizontal' | 'vertical';
  /**
   * Optional additional classes
   */
  className?: string;
}

/**
 * Spacer component that adds consistent vertical or horizontal space.
 * Use this component to add white space between elements without using margins.
 */
export const Spacer = ({
  size = 'md',
  axis = 'vertical',
  className,
  ...props
}: SpacerProps) => {
  const spacingMap: Record<SpacerSize, string> = {
    'xs': 'var(--space-xs)',
    'sm': 'var(--space-sm)',
    'md': 'var(--space-md)',
    'lg': 'var(--space-lg)',
    'xl': 'var(--space-xl)',
    '2xl': 'var(--space-2xl)',
    '3xl': 'var(--space-3xl)',
    '4xl': 'var(--space-4xl)',
    '5xl': 'var(--space-5xl)',
    '6xl': 'var(--space-6xl)',
    '7xl': 'var(--space-7xl)',
    '8xl': 'var(--space-8xl)',
    '9xl': 'var(--space-9xl)',
  };

  const styles = {
    width: axis === 'horizontal' ? spacingMap[size] : undefined,
    height: axis === 'vertical' ? spacingMap[size] : undefined,
  };

  return <div className={cn('flex-shrink-0', className)} style={styles} {...props} />;
};

/**
 * Stack component that adds consistent vertical spacing between children
 */
export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The space between children
   */
  space?: SpacerSize;
  /**
   * Optional additional classes
   */
  className?: string;
}

/**
 * Stack component that adds consistent vertical spacing between children.
 * Useful for layout sections where multiple elements need consistent spacing.
 */
export const Stack = ({
  space = 'md',
  className,
  children,
  ...props
}: StackProps) => {
  // Map our sizes to Tailwind's space-y classes
  const spaceClasses: Record<SpacerSize, string> = {
    'xs': 'space-y-xs',
    'sm': 'space-y-sm',
    'md': 'space-y-md',
    'lg': 'space-y-lg',
    'xl': 'space-y-xl',
    '2xl': 'space-y-2xl',
    '3xl': 'space-y-3xl',
    '4xl': 'space-y-4xl',
    '5xl': 'space-y-5xl',
    '6xl': 'space-y-6xl',
    '7xl': 'space-y-7xl',
    '8xl': 'space-y-8xl',
    '9xl': 'space-y-9xl',
  };

  return (
    <div className={cn(spaceClasses[space], className)} {...props}>
      {children}
    </div>
  );
};

/**
 * HStack component that adds consistent horizontal spacing between children.
 * Useful for creating horizontally aligned elements with consistent spacing.
 */
export interface HStackProps extends StackProps {
  /**
   * Alignment of items along the cross axis
   */
  align?: 'start' | 'center' | 'end' | 'stretch';
  /**
   * Distribution of items along the main axis
   */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /**
   * Whether the stack should wrap if it runs out of space
   */
  wrap?: boolean;
}

export const HStack = ({
  space = 'md',
  align = 'center',
  justify = 'start',
  wrap = false,
  className,
  children,
  ...props
}: HStackProps) => {
  // Map our sizes to Tailwind's space-x classes
  const spaceClasses: Record<SpacerSize, string> = {
    'xs': 'space-x-xs',
    'sm': 'space-x-sm',
    'md': 'space-x-md',
    'lg': 'space-x-lg',
    'xl': 'space-x-xl',
    '2xl': 'space-x-2xl',
    '3xl': 'space-x-3xl',
    '4xl': 'space-x-4xl',
    '5xl': 'space-x-5xl',
    '6xl': 'space-x-6xl',
    '7xl': 'space-x-7xl',
    '8xl': 'space-x-8xl',
    '9xl': 'space-x-9xl',
  };

  const alignmentClasses: Record<HStackProps['align'], string> = {
    'start': 'items-start',
    'center': 'items-center',
    'end': 'items-end',
    'stretch': 'items-stretch',
  };

  const justifyClasses: Record<HStackProps['justify'], string> = {
    'start': 'justify-start',
    'center': 'justify-center',
    'end': 'justify-end',
    'between': 'justify-between',
    'around': 'justify-around',
    'evenly': 'justify-evenly',
  };

  return (
    <div 
      className={cn(
        'flex', 
        spaceClasses[space],
        alignmentClasses[align],
        justifyClasses[justify],
        wrap ? 'flex-wrap' : 'flex-nowrap',
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Grid component that creates a responsive grid layout with consistent spacing
 */
export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Number of columns at different breakpoints
   */
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  /**
   * Gap between grid items
   */
  gap?: SpacerSize;
  /**
   * Optional additional classes
   */
  className?: string;
}

export const Grid = ({
  columns = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 'md',
  className,
  children,
  ...props
}: GridProps) => {
  // Map our sizes to Tailwind's gap classes
  const gapClasses: Record<SpacerSize, string> = {
    'xs': 'gap-xs',
    'sm': 'gap-sm',
    'md': 'gap-md',
    'lg': 'gap-lg',
    'xl': 'gap-xl',
    '2xl': 'gap-2xl',
    '3xl': 'gap-3xl',
    '4xl': 'gap-4xl',
    '5xl': 'gap-5xl',
    '6xl': 'gap-6xl',
    '7xl': 'gap-7xl',
    '8xl': 'gap-8xl',
    '9xl': 'gap-9xl',
  };

  // Build a string of classes
  let gridClasses = 'grid ' + gapClasses[gap];
  
  // Add responsive column classes
  if (columns.sm) gridClasses += ` grid-cols-${columns.sm}`;
  if (columns.md) gridClasses += ` md:grid-cols-${columns.md}`;
  if (columns.lg) gridClasses += ` lg:grid-cols-${columns.lg}`;
  if (columns.xl) gridClasses += ` xl:grid-cols-${columns.xl}`;

  return (
    <div className={cn(gridClasses, className)} {...props}>
      {children}
    </div>
  );
};

/**
 * Container component that centers content and applies consistent horizontal padding
 */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container
   */
  maxWidth?: 'narrow' | 'medium' | 'wide' | 'full' | 'none';
  /**
   * Optional additional classes
   */
  className?: string;
}

export const Container = ({
  maxWidth = 'medium',
  className,
  children,
  ...props
}: ContainerProps) => {
  const maxWidthClasses: Record<NonNullable<ContainerProps['maxWidth']>, string> = {
    'narrow': 'max-w-2xl',
    'medium': 'max-w-4xl',
    'wide': 'max-w-6xl',
    'full': 'max-w-7xl',
    'none': '',
  };

  return (
    <div 
      className={cn(
        'mx-auto px-4 sm:px-6 lg:px-8',
        maxWidthClasses[maxWidth],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

/**
 * Section component for consistent page sections with responsive padding
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Whether to use the full width of the screen or constrain the content
   */
  fullWidth?: boolean;
  /**
   * Maximum width of the content when not full width
   */
  contentWidth?: ContainerProps['maxWidth'];
  /**
   * Optional additional classes
   */
  className?: string;
}

export const Section = ({
  fullWidth = false,
  contentWidth = 'medium',
  className,
  children,
  ...props
}: SectionProps) => {
  return (
    <section 
      className={cn(
        'section-padding',
        className
      )} 
      {...props}
    >
      {fullWidth ? (
        children
      ) : (
        <Container maxWidth={contentWidth}>
          {children}
        </Container>
      )}
    </section>
  );
}; 