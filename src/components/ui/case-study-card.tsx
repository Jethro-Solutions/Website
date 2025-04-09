import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CaseStudyCardProps extends React.ComponentProps<typeof Card> {
  title: string;
  description: string;
  client: string;
  imageSrc: string;
  ctaText?: string;
  ctaHref?: string;
  tags?: string[];
}

export function CaseStudyCard({
  title,
  description,
  client,
  imageSrc,
  ctaText = "View case study",
  ctaHref = "#",
  tags = [],
  className,
  ...props
}: CaseStudyCardProps) {
  return (
    <Card 
      className={cn(
        "border-primary-accent/20 hover:border-primary-accent/50 transition-all duration-300 hover:shadow-md overflow-hidden dark:border-primary-accent/30 dark:hover:border-primary-accent/60",
        className
      )} 
      {...props}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={`${client} - ${title}`} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="text-sm font-mono text-secondary-accent">{client}</div>
        <CardTitle className="text-xl font-serif">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs font-mono bg-primary-accent/10 text-primary-accent rounded-md dark:bg-primary-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
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