import { Variants } from 'framer-motion';

// Fade animation variants
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.3 }
  }
};

// Slide animation variants with customizable direction
export const slideVariants = (
  direction: 'up' | 'down' | 'left' | 'right' = 'up',
  distance: number = 50
): Variants => {
  const directionMap = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return {
    hidden: {
      ...directionMap[direction],
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      ...directionMap[direction],
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 300
      }
    }
  };
};

// Scale animation variants
export const scaleVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300
    }
  }
};

// Staggered children animation
export const staggerContainer = (staggerChildren = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.1
    }
  }
});

// Gradient text animation for headings
export const textGradientAnimation = {
  hidden: { 
    backgroundPosition: '0% 50%',
    opacity: 0.5,
    scale: 0.98
  },
  visible: {
    backgroundPosition: '100% 50%',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
      repeat: Infinity,
      repeatType: 'mirror'
    }
  }
};

// Button hover animation for gradient effects
export const buttonGradientAnimation = {
  rest: { 
    backgroundPosition: '0% 50%',
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  hover: { 
    backgroundPosition: '100% 50%',
    transition: { duration: 0.4, ease: 'easeIn' }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

// Card animation with lift and shadow effect
export const cardHoverAnimation = {
  rest: { 
    y: 0,
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  hover: { 
    y: -10,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.15)',
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

// Page transition animation
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// Blur-in animation
export const blurAnimation = {
  hidden: { 
    filter: 'blur(10px)',
    opacity: 0 
  },
  visible: { 
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    filter: 'blur(10px)',
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

// Animated counter function
export function animateCounterFrame(
  from: number, 
  to: number, 
  duration: number = 2, 
  callback: (value: number) => void
) {
  const startTime = performance.now();
  
  const updateCounter = (currentTime: number) => {
    const elapsedTime = (currentTime - startTime) / 1000; // convert to seconds
    const progress = Math.min(elapsedTime / duration, 1);
    
    // Use easeOutExpo for a nice counting effect
    const easedProgress = 1 - Math.pow(2, -10 * progress);
    
    const currentCount = Math.floor(from + (to - from) * easedProgress);
    callback(currentCount);
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      callback(to);
    }
  };
  
  requestAnimationFrame(updateCounter);
}

// Page transition variants with multiple options
export const pageTransitionVariants = {
  // Fade transition
  fade: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  },
  
  // Slide and fade transition
  slide: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  },
  
  // Scale and fade transition
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.05,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  },
  
  // Blur transition with fade
  blur: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      filter: 'blur(5px)',
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  },
  
  // Staggered children transition
  stagger: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  }
};

// Child item variant for staggered animations
export const staggerItemVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: { 
    opacity: 0, 
    y: 10,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }
  }
}; 