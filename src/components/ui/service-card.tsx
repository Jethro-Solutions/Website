"use client"

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
        "border-[#E8E0D5]/30 hover:border-[#E8E0D5] transition-all duration-300 hover:shadow-md dark:border-[#333333]/50 dark:hover:border-[#333333]",
        className
      )} 
      {...props}
    >
      <CardHeader className="gap-3">
        {icon && <div className="text-foreground w-12 h-12">{icon}</div>}
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button 
          variant="link" 
          className="p-0 font-mono text-foreground hover:text-foreground/80" 
          asChild
        >
          <Link href={ctaHref} className="flex items-center gap-2">
            {ctaText} <ArrowRight className="size-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
} 