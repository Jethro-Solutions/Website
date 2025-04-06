// Export all animation utilities for easy imports

// Framer Motion animation variants
export * from './utils';

// React hooks for animations
export * from './hooks';

// GSAP specific utilities
export {
  fadeIn,
  slideIn,
  staggerElements,
  revealContent,
  typeText,
  createScrollTrigger,
  createParallax,
  animateGradient,
  createTimeline,
  animateCounter as gsapAnimateCounter
} from './gsap';

// React Spring specific utilities 
export * from './spring'; 