import React from 'react';
import { cn } from '@/lib/utils';

export type GridProps = {
  children: React.ReactNode;
  className?: string;
  /** Number of columns in the grid at different breakpoints */
  cols?: {
    xs?: number; // <640px (mobile)
    sm?: number; // ≥640px (tablet)
    md?: number; // ≥768px (small laptop)
    lg?: number; // ≥1024px (desktop)
    xl?: number; // ≥1280px (large desktop)
    '2xl'?: number; // ≥1536px (extra large desktop)
  };
  /** Gap between grid items at different breakpoints */
  gap?: {
    xs?: keyof typeof gapSizes; // <640px (mobile)
    sm?: keyof typeof gapSizes; // ≥640px (tablet)
    md?: keyof typeof gapSizes; // ≥768px (small laptop)
    lg?: keyof typeof gapSizes; // ≥1024px (desktop)
    xl?: keyof typeof gapSizes; // ≥1280px (large desktop)
    '2xl'?: keyof typeof gapSizes; // ≥1536px (extra large desktop)
  };
  /** Whether the grid should have equal-height rows */
  equalHeight?: boolean;
  /** Automatically fit as many items as possible into the grid based on min-width */
  autoFit?: boolean;
  /** Minimum width of each column when using autoFit */
  minColWidth?: string;
};

const gapSizes = {
  'xs': 'gap-xs',
  'sm': 'gap-sm',
  'md': 'gap-md',
  'lg': 'gap-lg',
  'xl': 'gap-xl',
  '2xl': 'gap-2xl',
  '3xl': 'gap-3xl',
};

const gridCols: Record<number, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  7: 'grid-cols-7',
  8: 'grid-cols-8',
  9: 'grid-cols-9',
  10: 'grid-cols-10',
  11: 'grid-cols-11',
  12: 'grid-cols-12',
};

const getResponsiveClasses = (
  cols?: GridProps['cols'],
  gap?: GridProps['gap'],
  autoFit?: boolean,
  minColWidth?: string,
) => {
  const classes: string[] = [];

  // Handle auto-fit
  if (autoFit && minColWidth) {
    return `grid grid-cols-[repeat(auto-fit,minmax(${minColWidth},1fr))]`;
  }
  
  // Default to 1 column on mobile if nothing specified
  if (!cols?.xs) {
    classes.push(gridCols[1]);
  }

  // Add column classes
  if (cols) {
    if (cols.xs) classes.push(gridCols[cols.xs]);
    if (cols.sm) classes.push(`sm:${gridCols[cols.sm]}`);
    if (cols.md) classes.push(`md:${gridCols[cols.md]}`);
    if (cols.lg) classes.push(`lg:${gridCols[cols.lg]}`);
    if (cols.xl) classes.push(`xl:${gridCols[cols.xl]}`);
    if (cols['2xl']) classes.push(`2xl:${gridCols[cols['2xl']]}`);
  }

  // Add gap classes
  if (gap) {
    if (gap.xs) classes.push(gapSizes[gap.xs]);
    if (gap.sm) classes.push(`sm:${gapSizes[gap.sm]}`);
    if (gap.md) classes.push(`md:${gapSizes[gap.md]}`);
    if (gap.lg) classes.push(`lg:${gapSizes[gap.lg]}`);
    if (gap.xl) classes.push(`xl:${gapSizes[gap.xl]}`);
    if (gap['2xl']) classes.push(`2xl:${gapSizes[gap['2xl']]}`);
  } else {
    // Default gap if none provided
    classes.push(gapSizes.md);
  }

  return cn('grid', classes);
};

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols,
  gap,
  equalHeight = false,
  autoFit = false,
  minColWidth = '250px',
}) => {
  const gridClasses = getResponsiveClasses(cols, gap, autoFit, minColWidth);
  
  return (
    <div className={cn(
      gridClasses,
      equalHeight && 'grid-flow-row auto-rows-fr',
      className
    )}>
      {children}
    </div>
  );
};

export type GridItemProps = {
  children: React.ReactNode;
  className?: string;
  /** Column span at different breakpoints */
  span?: {
    xs?: number; // <640px (mobile)
    sm?: number; // ≥640px (tablet)
    md?: number; // ≥768px (small laptop)
    lg?: number; // ≥1024px (desktop)
    xl?: number; // ≥1280px (large desktop)
    '2xl'?: number; // ≥1536px (extra large desktop)
  };
  /** Column start position at different breakpoints */
  start?: {
    xs?: number; // <640px (mobile)
    sm?: number; // ≥640px (tablet)
    md?: number; // ≥768px (small laptop)
    lg?: number; // ≥1024px (desktop)
    xl?: number; // ≥1280px (large desktop)
    '2xl'?: number; // ≥1536px (extra large desktop)
  };
  /** Row span at different breakpoints */
  rowSpan?: {
    xs?: number; // <640px (mobile)
    sm?: number; // ≥640px (tablet)
    md?: number; // ≥768px (small laptop)
    lg?: number; // ≥1024px (desktop)
    xl?: number; // ≥1280px (large desktop)
    '2xl'?: number; // ≥1536px (extra large desktop)
  };
};

const getGridItemClasses = (span?: GridItemProps['span'], start?: GridItemProps['start'], rowSpan?: GridItemProps['rowSpan']) => {
  const classes: string[] = [];

  // Column span
  if (span) {
    if (span.xs) classes.push(`col-span-${span.xs}`);
    if (span.sm) classes.push(`sm:col-span-${span.sm}`);
    if (span.md) classes.push(`md:col-span-${span.md}`);
    if (span.lg) classes.push(`lg:col-span-${span.lg}`);
    if (span.xl) classes.push(`xl:col-span-${span.xl}`);
    if (span['2xl']) classes.push(`2xl:col-span-${span['2xl']}`);
  }

  // Column start
  if (start) {
    if (start.xs) classes.push(`col-start-${start.xs}`);
    if (start.sm) classes.push(`sm:col-start-${start.sm}`);
    if (start.md) classes.push(`md:col-start-${start.md}`);
    if (start.lg) classes.push(`lg:col-start-${start.lg}`);
    if (start.xl) classes.push(`xl:col-start-${start.xl}`);
    if (start['2xl']) classes.push(`2xl:col-start-${start['2xl']}`);
  }

  // Row span
  if (rowSpan) {
    if (rowSpan.xs) classes.push(`row-span-${rowSpan.xs}`);
    if (rowSpan.sm) classes.push(`sm:row-span-${rowSpan.sm}`);
    if (rowSpan.md) classes.push(`md:row-span-${rowSpan.md}`);
    if (rowSpan.lg) classes.push(`lg:row-span-${rowSpan.lg}`);
    if (rowSpan.xl) classes.push(`xl:row-span-${rowSpan.xl}`);
    if (rowSpan['2xl']) classes.push(`2xl:row-span-${rowSpan['2xl']}`);
  }

  return cn(classes);
};

export const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  span,
  start,
  rowSpan,
}) => {
  const itemClasses = getGridItemClasses(span, start, rowSpan);
  
  return (
    <div className={cn(itemClasses, className)}>
      {children}
    </div>
  );
}; 