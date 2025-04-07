import { Variants } from 'framer-motion';
import { useSpring } from 'react-spring';
import { gsap } from 'gsap';

// ============ Framer Motion Icon Animations ============

/**
 * Rotate icon animation variants
 * @param degrees - Amount of rotation in degrees (default: 180)
 * @param duration - Animation duration in seconds (default: 0.3)
 */
export const rotateIconVariants = (degrees = 180, duration = 0.3): Variants => ({
  initial: { rotate: 0 },
  animate: { 
    rotate: degrees,
    transition: { duration, ease: 'easeInOut' }
  }
});

/**
 * Pulse animation for attention-grabbing icons
 */
export const pulseIconVariants: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.1, 1],
    transition: { 
      duration: 1.5, 
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
      times: [0, 0.5, 1]
    }
  }
};

/**
 * Bounce animation for playful icon interactions
 */
export const bounceIconVariants: Variants = {
  initial: { y: 0 },
  animate: { 
    y: [0, -8, 0],
    transition: { 
      duration: 0.6, 
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
      repeatDelay: 0.5
    }
  }
};

/**
 * Tada animation for celebration/success icons
 */
export const tadaIconVariants: Variants = {
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.1, 0.9, 1.1, 0.9, 1.1, 1],
    rotate: [0, -3, 3, -3, 3, -3, 0],
    transition: {
      duration: 1.5,
      repeat: 2,
      repeatType: 'loop',
      repeatDelay: 1,
      ease: 'easeInOut'
    }
  }
};

/**
 * Morph stroke animation - useful for toggles (hamburger to X, etc)
 */
export const morphIconPathVariants = {
  initial: (path: string) => ({ d: path }),
  animate: (newPath: string) => ({
    d: newPath,
    transition: { duration: 0.3, ease: 'easeInOut' }
  })
};

/**
 * Notification dot animation for alerts
 */
export const notificationDotVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: 'spring',
      stiffness: 500,
      damping: 25
    }
  },
  exit: { 
    scale: 0, 
    opacity: 0, 
    transition: { duration: 0.2 } 
  }
};

/**
 * Hover scale animation for interactive icons
 */
export const iconHoverScaleVariants: Variants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.2, 
    transition: { duration: 0.2 } 
  },
  tap: { 
    scale: 0.9, 
    transition: { duration: 0.1 } 
  }
};

/**
 * Icon color shift animation
 */
export const iconColorTransitionVariants = (
  initialColor: string = 'currentColor', 
  hoverColor: string = '#3B82F6'
): Variants => ({
  initial: { fill: initialColor, color: initialColor },
  hover: { 
    fill: hoverColor, 
    color: hoverColor, 
    transition: { duration: 0.2 } 
  }
});

// ============ React Spring Icon Hooks ============

/**
 * Hook for rotating icon with React Spring
 */
export const useRotateIconSpring = (isActive: boolean, degrees = 180) => {
  return useSpring({
    transform: isActive ? `rotate(${degrees}deg)` : 'rotate(0deg)',
    config: { tension: 300, friction: 20 }
  });
};

/**
 * Hook for icon scale/pop animation with React Spring
 */
export const useIconPopSpring = (isHovered: boolean) => {
  return useSpring({
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });
};

/**
 * Hook for icon hover color animation with React Spring
 */
export const useIconColorSpring = (
  isActive: boolean, 
  initialColor: string = 'currentColor',
  activeColor: string = '#3B82F6'
) => {
  return useSpring({
    color: isActive ? activeColor : initialColor,
    fill: isActive ? activeColor : initialColor,
    config: { duration: 200 }
  });
};

// ============ GSAP Icon Animation Functions ============

/**
 * Spin an icon with GSAP
 */
export const spinIcon = (
  element: HTMLElement | SVGElement, 
  duration: number = 0.5, 
  rotation: number = 360, 
  repeat: number = 0
) => {
  return gsap.to(element, {
    rotation,
    duration,
    repeat,
    ease: 'power2.inOut'
  });
};

/**
 * Create staggered animation for multiple icons
 */
export const staggerIcons = (
  elements: HTMLElement[] | SVGElement[] | NodeListOf<Element>, 
  animationProps: gsap.TweenVars,
  staggerAmount: number = 0.1
) => {
  return gsap.to(elements, {
    ...animationProps,
    stagger: staggerAmount,
    ease: 'power2.out'
  });
};

/**
 * Draw SVG path animation
 */
export const drawSvgIcon = (
  pathElement: SVGPathElement, 
  duration: number = 1.5, 
  delay: number = 0
) => {
  gsap.set(pathElement, { 
    strokeDasharray: pathElement.getTotalLength(), 
    strokeDashoffset: pathElement.getTotalLength() 
  });
  
  return gsap.to(pathElement, {
    strokeDashoffset: 0,
    duration,
    delay,
    ease: 'power2.inOut'
  });
};

/**
 * Morph between two SVG paths using GSAP
 */
export const morphSvgPath = (
  pathElement: SVGPathElement,
  newPath: string,
  duration: number = 0.5
) => {
  return gsap.to(pathElement, {
    attr: { d: newPath },
    duration,
    ease: 'power2.inOut'
  });
}; 