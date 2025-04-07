import React from 'react';
import { cn } from '@/lib/utils';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Container max width at different breakpoints */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  /** Container padding at different breakpoints */
  padding?: {
    xs?: keyof typeof paddingSizes;
    sm?: keyof typeof paddingSizes;
    md?: keyof typeof paddingSizes;
    lg?: keyof typeof paddingSizes;
    xl?: keyof typeof paddingSizes;
    '2xl'?: keyof typeof paddingSizes;
  };
  /** Whether the container should be centered */
  centered?: boolean;
  /** Apply gutter padding on both sides */
  withGutter?: boolean;
};

const maxWidthClasses = {
  'xs': 'max-w-screen-xs',
  'sm': 'max-w-screen-sm',
  'md': 'max-w-screen-md',
  'lg': 'max-w-screen-lg',
  'xl': 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  'full': 'max-w-full',
  'none': '',
};

const paddingSizes = {
  'none': 'p-0',
  'xs': 'p-xs',
  'sm': 'p-sm',
  'md': 'p-md',
  'lg': 'p-lg',
  'xl': 'p-xl',
  '2xl': 'p-2xl',
  '3xl': 'p-3xl',
  '4xl': 'p-4xl',
};

const getContainerClasses = (
  maxWidth?: ContainerProps['maxWidth'],
  padding?: ContainerProps['padding'],
  centered?: boolean,
  withGutter?: boolean,
) => {
  const classes: string[] = [];

  // Max width
  if (maxWidth && maxWidth !== 'none') {
    classes.push(maxWidthClasses[maxWidth]);
  }

  // Padding
  if (padding) {
    if (padding.xs) classes.push(paddingSizes[padding.xs]);
    if (padding.sm) classes.push(`sm:${paddingSizes[padding.sm]}`);
    if (padding.md) classes.push(`md:${paddingSizes[padding.md]}`);
    if (padding.lg) classes.push(`lg:${paddingSizes[padding.lg]}`);
    if (padding.xl) classes.push(`xl:${paddingSizes[padding.xl]}`);
    if (padding['2xl']) classes.push(`2xl:${paddingSizes[padding['2xl']]}`);
  }

  // For horizontal gutters only, apply responsive padding
  if (withGutter) {
    classes.push('px-md md:px-lg lg:px-xl xl:px-2xl');
  }

  // Centered
  if (centered) {
    classes.push('mx-auto');
  }

  return cn(classes);
};

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = 'xl',
  padding,
  centered = true,
  withGutter = true,
}) => {
  const containerClasses = getContainerClasses(maxWidth, padding, centered, withGutter);

  return (
    <div className={cn(containerClasses, className)}>
      {children}
    </div>
  );
}; 