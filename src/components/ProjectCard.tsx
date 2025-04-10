
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  category,
  imageUrl,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card border border-border card-hover",
        className
      )}
    >
      <div className="aspect-[16/9] w-full overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-default group-hover:scale-105"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-xl font-medium">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center text-primary transition-all duration-default group-hover:translate-x-1">
          <span className="text-sm font-medium">Learn More</span>
          <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
