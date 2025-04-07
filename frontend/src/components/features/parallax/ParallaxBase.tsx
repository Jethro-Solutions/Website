'use client';

import React, { ReactNode, useEffect, useRef } from 'react';
import { useScrollParallax } from '@/lib/animations';
import { MotionValue, motion } from 'framer-motion';

export interface ParallaxBaseProps {
  children: ReactNode;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  /* How to style the container that applies the parallax effect */
  containerClassName?: string;
  /* Whether to disable the parallax effect on mobile devices */
  disableOnMobile?: boolean;
}

/**
 * Base parallax component that creates a simple parallax scrolling effect
 * Uses Framer Motion's useScroll and useTransform for smooth performance
 */
const ParallaxBase = ({
  children,
  speed = 0.3,
  direction = 'vertical',
  className = '',
  containerClassName = '',
  disableOnMobile = true,
}: ParallaxBaseProps) => {
  const { ref, transform } = useScrollParallax<HTMLDivElement>(speed, direction);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    // Check if we're on a mobile device
    if (disableOnMobile) {
      isMobile.current = window.innerWidth < 768;
      
      const handleResize = () => {
        isMobile.current = window.innerWidth < 768;
      };
      
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [disableOnMobile]);

  return (
    <div 
      ref={wrapperRef}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div
        ref={ref}
        style={{ 
          [direction === 'vertical' ? 'y' : 'x']: isMobile.current ? 0 : transform,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxBase; 