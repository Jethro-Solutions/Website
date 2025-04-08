'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, MotionValue } from 'framer-motion';

// Advanced fade-in with scale effect
interface ScaleFadeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  initialScale?: number;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function ScaleFade({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  threshold = 0.2,
  initialScale = 0.95,
  staggerChildren = false,
  staggerDelay = 0.1,
}: ScaleFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  const variants = {
    hidden: { opacity: 0, scale: initialScale },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Custom easing for more natural motion
        staggerChildren: staggerChildren ? staggerDelay : 0,
      },
    },
  };
  
  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// Scroll-linked opacity animation
interface ScrollOpacityProps {
  children: React.ReactNode;
  className?: string;
  startPercentage?: number;
  endPercentage?: number;
}

export function ScrollOpacity({
  children,
  className = '',
  startPercentage = 0.2,
  endPercentage = 0.8,
}: ScrollOpacityProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const opacity = useTransform(
    scrollYProgress,
    [startPercentage, endPercentage],
    [0, 1]
  );
  
  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ opacity }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}

// Reveal text animation (character by character)
interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  once?: boolean;
  threshold?: number;
}

export function RevealText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.025,
  once = true,
  threshold = 0.1,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  
  const characters = text.split('');
  
  return (
    <motion.div
      ref={ref}
      className={`${className} overflow-hidden`}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-wrap">
        {characters.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.4,
              delay: delay + index * staggerDelay,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// 3D rotation on scroll
interface Rotate3DProps {
  children: React.ReactNode;
  className?: string;
  maxRotation?: number;
}

export function Rotate3D({
  children,
  className = '',
  maxRotation = 10,
}: Rotate3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [maxRotation, 0, -maxRotation]);
  
  return (
    <div ref={ref} className={`${className} perspective-[1000px]`}>
      <motion.div
        style={{
          rotateX,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Section with animated background
interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
  backgroundClass?: string;
  staggerChildren?: boolean;
  staggerDelay?: number;
}

export function AnimatedBackground({
  children,
  className = '',
  backgroundClass = 'bg-soft-tan/5',
  staggerChildren = false,
  staggerDelay = 0.1,
}: AnimatedBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren ? staggerDelay : 0,
        delayChildren: 0.1,
      },
    },
  };
  
  const backgroundVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.4,
        ease: 'easeOut',
      },
    },
  };
  
  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div
        className={`absolute inset-0 ${backgroundClass}`}
        variants={backgroundVariants}
      />
      <motion.div className="relative z-10" variants={contentVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
} 