import React from "react";
import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface AnimatedSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function AnimatedSection({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}: AnimatedSectionProps) {
  // We're temporarily simplifying this component to debug the issue
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

interface StaggeredContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerDelay?: number;
}

export function StaggeredContainer({
  children,
  staggerDelay = 0.1,
  className,
  ...props
}: StaggeredContainerProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

interface StaggeredItemProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function StaggeredItem({
  children,
  className,
  ...props
}: StaggeredItemProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
} 