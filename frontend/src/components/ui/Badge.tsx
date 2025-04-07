import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-standard',
  {
    variants: {
      variant: {
        default: 'bg-background-lighter text-text',
        primary: 'bg-primary-blue text-white',
        secondary: 'bg-secondary-teal text-white',
        success: 'bg-secondary-green text-white',
        warning: 'bg-primary-orange text-white',
        danger: 'bg-primary-red text-white',
        outline: 'bg-transparent border border-current text-text',
        gradient: 'gradient-bg text-white',
      },
      interactive: {
        true: 'cursor-pointer hover:opacity-80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, interactive, ...props }, ref) => {
    return (
      <span
        className={cn(badgeVariants({ variant, interactive }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants }; 