"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
  children?: React.ReactNode;
  variant?: 'default' | 'jethro';
}

const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  ({ 
    className, 
    title, 
    description, 
    icon, 
    status = "Active", 
    tags = [], 
    meta, 
    cta = "Explore →", 
    colSpan = 1, 
    hasPersistentHover = false,
    children,
    variant = 'default',
    ...props 
  }, ref) => {
    // Different variants styling
    const variantStyles = {
      default: {
        wrapper: "border border-gray-100/80 dark:border-white/10 bg-white dark:bg-black",
        icon: "bg-black/5 dark:bg-white/10 group-hover:bg-gradient-to-br",
        status: "bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 group-hover:bg-black/10 dark:group-hover:bg-white/20",
        tags: "bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20",
        gradient: "from-transparent via-gray-100/50 to-transparent dark:via-white/10",
      },
      jethro: {
        wrapper: "border border-gray-100/80 dark:border-gray-800/80 bg-white dark:bg-gray-900 shadow-sm",
        icon: "bg-gray-100 dark:bg-gray-800 group-hover:bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30",
        status: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/40",
        tags: "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700",
        gradient: "from-transparent via-blue-100/30 to-transparent dark:via-blue-800/20",
      }
    };

    const styles = variantStyles[variant];

    return (
      <div
        ref={ref}
        className={cn(
          "group relative rounded-xl overflow-hidden transition-all duration-300",
          styles.wrapper,
          "hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)]",
          "hover:-translate-y-0.5 will-change-transform",
          colSpan === 2 ? "md:col-span-2" : "md:col-span-1",
          "col-span-1",
          {
            "shadow-[0_2px_12px_rgba(0,0,0,0.03)] -translate-y-0.5": hasPersistentHover,
            "dark:shadow-[0_2px_12px_rgba(255,255,255,0.03)]": hasPersistentHover,
          },
          className
        )}
        {...props}
      >
        <div
          className={`absolute inset-0 ${
            hasPersistentHover
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          } transition-opacity duration-300`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
        </div>

        <Card className="border-0 shadow-none bg-transparent">
          <CardHeader className="px-4 py-4">
            <div className="flex items-center justify-between">
              {icon && (
                <div className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                  styles.icon
                )}>
                  {icon}
                </div>
              )}
              {status && (
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                    "transition-colors duration-300",
                    styles.status
                  )}
                >
                  {status}
                </span>
              )}
            </div>

            <div className="space-y-1 mt-3">
              <CardTitle className="text-[15px] font-medium tracking-tight flex items-center">
                {title}
                {meta && (
                  <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 font-normal">
                    {meta}
                  </span>
                )}
              </CardTitle>
              {description && (
                <CardDescription className="text-sm text-gray-600 dark:text-gray-300 leading-snug font-[425]">
                  {description}
                </CardDescription>
              )}
            </div>
          </CardHeader>

          {children && <CardContent>{children}</CardContent>}

          {(tags.length > 0 || cta) && (
            <CardFooter className="px-4 py-4 flex items-center justify-between">
              {tags.length > 0 && (
                <div className="flex items-center flex-wrap gap-2 text-xs text-gray-500 dark:text-gray-400">
                  {tags.map((tag, i) => (
                    <span
                      key={i}
                      className={cn(
                        "px-2 py-1 rounded-md backdrop-blur-sm transition-all duration-200",
                        styles.tags
                      )}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
              {cta && (
                <span className="text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {cta}
                </span>
              )}
            </CardFooter>
          )}
        </Card>

        <div
          className={cn(
            `absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br ${
              hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            } transition-opacity duration-300`,
            styles.gradient
          )}
        />
      </div>
    );
  }
);
BentoCard.displayName = "BentoCard";

interface BentoCardGridProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCardGrid = React.forwardRef<HTMLDivElement, BentoCardGridProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
BentoCardGrid.displayName = "BentoCardGrid";

export { BentoCard, BentoCardGrid };