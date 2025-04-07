'use client';

import React, { ReactNode } from 'react';
import ParallaxBase from './ParallaxBase';

export interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  bgClassName?: string;
  contentClassName?: string;
  /* Speed factor for the background parallax effect (0-1 recommended) */
  parallaxSpeed?: number;
  /* Whether the background moves faster (true) or slower (false) than scroll */
  reversed?: boolean;
  /* Whether to disable the parallax effect on mobile devices */
  disableOnMobile?: boolean;
}

/**
 * A section with parallax background effect
 * The background moves at a different speed than the content for a parallax effect
 */
const ParallaxSection = ({
  children,
  className = '',
  bgClassName = '',
  contentClassName = '',
  parallaxSpeed = 0.2,
  reversed = false,
  disableOnMobile = true,
}: ParallaxSectionProps) => {
  // Apply negative speed if reversed (background moves slower than scroll)
  const speed = reversed ? -parallaxSpeed : parallaxSpeed;
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Parallax background */}
      <ParallaxBase 
        speed={speed}
        containerClassName="absolute inset-0 w-full h-full"
        className={`w-full h-[120%] ${bgClassName}`}
        disableOnMobile={disableOnMobile}
      >
        <div className="absolute inset-0 w-full h-full">
          {/* This is where you'd put your background content */}
        </div>
      </ParallaxBase>
      
      {/* Foreground content - typically doesn't move */}
      <div className={`relative z-10 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection; 