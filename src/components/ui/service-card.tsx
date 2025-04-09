import React from "react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  ctaText?: string;
  ctaHref?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  ctaText = "Learn more",
  ctaHref = "#",
  className,
  ...props
}: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-300 hover:shadow-md dark:border-primary-accent/30 dark:hover:border-primary-accent/60",
        className
      )} 
      {...props}
    >
      <CardHeader className="gap-3">
        {icon && <div className="text-secondary-accent w-12 h-12">{icon}</div>}
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          variant="link" 
          className="p-0 font-mono text-primary-accent hover:text-primary-accent/80" 
          asChild
        >
          <a href={ctaHref} className="flex items-center gap-2">
            {ctaText} <ArrowRight className="size-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
} 