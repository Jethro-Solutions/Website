import React, { ReactNode, forwardRef, RefObject } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  fadeVariants, 
  slideVariants, 
  scaleVariants, 
  blurAnimation 
} from '@/lib/animations';

export type RevealEffect = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'blur';

export interface ContentRevealProps extends Omit<MotionProps, 'initial' | 'animate' | 'exit'> {
  children: ReactNode;
  effect?: RevealEffect;
  delay?: number;
  duration?: number;
  threshold?: number;
  distance?: number;
  once?: boolean;
  className?: string;
  disabled?: boolean;
}

const ContentReveal = forwardRef<HTMLDivElement, ContentRevealProps>((props, ref) => {
  const {
    children,
    effect = 'fade',
    delay = 0,
    duration = 0.5,
    threshold = 0.1,
    distance = 50,
    once = true,
    className = '',
    disabled = false,
    ...motionProps
  } = props;

  // Use internal ref if no external ref is provided
  const internalRef = React.useRef<HTMLDivElement>(null);
  const revealRef = (ref || internalRef) as RefObject<HTMLDivElement>;
  
  // Use the useInView hook from framer-motion
  const isInView = useInView(revealRef, {
    once,
    amount: threshold,
  });

  // Get the appropriate animation variants based on the effect
  const getVariants = () => {
    switch (effect) {
      case 'fade':
        return fadeVariants;
      case 'slide-up':
        return slideVariants('up', distance);
      case 'slide-down':
        return slideVariants('down', distance);
      case 'slide-left':
        return slideVariants('left', distance);
      case 'slide-right':
        return slideVariants('right', distance);
      case 'scale':
        return scaleVariants;
      case 'blur':
        return blurAnimation;
      default:
        return fadeVariants;
    }
  };

  // If disabled, just render the children without animation
  if (disabled) {
    return <div ref={revealRef} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={revealRef}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Smooth cubic bezier curve
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
});

ContentReveal.displayName = 'ContentReveal';

export default ContentReveal; 