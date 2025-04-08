'use client';

import { ReactNode, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

export function FadeInSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  once = true,
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  // Set initial and animate values based on direction
  const getInitialProps = () => {
    switch (direction) {
      case 'up':
        return { y: 40, opacity: 0 };
      case 'down':
        return { y: -40, opacity: 0 };
      case 'left':
        return { x: 40, opacity: 0 };
      case 'right':
        return { x: -40, opacity: 0 };
      default:
        return { y: 0, opacity: 0 };
    }
  };
  
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialProps()}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : getInitialProps()}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // Parallax speed factor (higher is faster)
  direction?: 'up' | 'down';
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  
  // Apply spring physics for smoother motion
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30 
  });
  
  // Translate based on scroll progress
  const y = useTransform(
    smoothProgress, 
    [0, 1], 
    [0, direction === 'up' ? -100 * speed : 100 * speed]
  );
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

interface StaggeredChildrenProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  childClassName?: string;
  once?: boolean;
  threshold?: number;
}

export function StaggeredChildren({
  children,
  className = '',
  staggerDelay = 0.1,
  childClassName = '',
  once = true,
  threshold = 0.2,
}: StaggeredChildrenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once, amount: threshold });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <motion.div
      ref={containerRef}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {Array.isArray(children) && children.map((child, index) => (
        <motion.div
          key={index}
          className={childClassName}
          variants={item}
          transition={{ 
            duration: 0.5, 
            ease: "easeOut" 
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
} 