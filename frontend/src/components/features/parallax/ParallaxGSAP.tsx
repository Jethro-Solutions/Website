'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { createParallax } from '@/lib/animations';

export interface ParallaxGSAPProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  /* Use GSAP pinning for more advanced effects */
  pin?: boolean;
  /* Apply a staggered parallax effect to child elements */
  stagger?: boolean;
  /* Stagger amount (in seconds) between elements */
  staggerAmount?: number;
}

/**
 * Advanced parallax component using GSAP's ScrollTrigger
 * Provides more control and animation possibilities than Framer Motion version
 */
const ParallaxGSAP = ({
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  pin = false,
  stagger = false,
  staggerAmount = 0.1,
}: ParallaxGSAPProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenArray = React.Children.toArray(children);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // If stagger is true, apply parallax to each child element with staggered timing
    if (stagger && containerRef.current.children.length > 0) {
      Array.from(containerRef.current.children).forEach((child, index) => {
        setTimeout(() => {
          createParallax(child as HTMLElement, speed, direction);
        }, index * staggerAmount * 1000);
      });
    } else {
      // Apply parallax to the container
      createParallax(containerRef.current, speed, direction);
    }
    
    // Additional ScrollTrigger setup for pinning if enabled
    if (pin && typeof window !== 'undefined') {
      // This would be implemented with GSAP's ScrollTrigger pinning
      const gsap = require('gsap');
      const ScrollTrigger = require('gsap/ScrollTrigger').default;
      
      gsap.registerPlugin(ScrollTrigger);
      
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
      });
    }
    
    // Cleanup function
    return () => {
      if (typeof window !== 'undefined' && pin) {
        // Kill all ScrollTrigger instances associated with this component
        const ScrollTrigger = require('gsap/ScrollTrigger').default;
        ScrollTrigger.getAll().forEach((trigger: any) => {
          if (trigger.vars.trigger === containerRef.current) {
            trigger.kill();
          }
        });
      }
    };
  }, [speed, direction, pin, stagger, staggerAmount]);
  
  return (
    <div 
      ref={containerRef}
      className={className}
    >
      {children}
    </div>
  );
};

export default ParallaxGSAP; 