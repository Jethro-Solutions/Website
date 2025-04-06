import { SpringValue, animated, config } from 'react-spring';

/**
 * Reusable config presets for React Spring animations
 */
export const springPresets = {
  // Quick, snappy transitions
  snappy: {
    tension: 400,
    friction: 30,
    precision: 0.001
  },
  
  // Gentle, natural transitions
  gentle: {
    tension: 170,
    friction: 26
  },
  
  // Slow, elegant transitions
  elegant: {
    tension: 120,
    friction: 14
  },
  
  // Wobbly, playful effect
  wobbly: {
    tension: 180,
    friction: 12
  },
  
  // No wobble, just smooth motion
  smooth: {
    tension: 280,
    friction: 60
  },
  
  // Very slow, heavy movement
  heavy: {
    tension: 100,
    friction: 50
  },
  
  // For gradient backgrounds
  gradientFlow: {
    tension: 45,
    friction: 30
  },
  
  // For micro-interactions on buttons
  buttonHover: {
    tension: 300,
    friction: 20
  }
};

/**
 * Creates spring configuration for a tooltip animation
 */
export function tooltipSpring(isVisible: boolean) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.85)',
    config: springPresets.snappy
  };
}

/**
 * Creates spring configuration for card hover animation
 */
export function cardHoverSpring(isHovered: boolean) {
  return {
    transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
    boxShadow: isHovered 
      ? '0px 10px 20px rgba(0, 0, 0, 0.15)' 
      : '0px 4px 10px rgba(0, 0, 0, 0.1)',
    config: springPresets.gentle
  };
}

/**
 * Creates spring configuration for button hover animation
 */
export function buttonHoverSpring(isHovered: boolean) {
  return {
    scale: isHovered ? 1.05 : 1,
    backgroundPosition: isHovered ? '100% 50%' : '0% 50%',
    config: {
      tension: 300,
      friction: isHovered ? 15 : 25
    }
  };
}

/**
 * Creates spring configuration for menu item hover
 */
export function menuItemSpring(isHovered: boolean) {
  return {
    color: isHovered ? 'rgba(59, 130, 246, 1)' : 'rgba(75, 85, 99, 1)',
    transform: isHovered ? 'translateX(4px)' : 'translateX(0px)',
    config: springPresets.snappy
  };
}

/**
 * Creates spring configuration for page transitions
 */
export function pageTransitionSpring(isVisible: boolean) {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? 'translateY(0px)' 
      : 'translateY(20px)',
    config: {
      tension: 280,
      friction: 60,
      precision: 0.001
    }
  };
}

/**
 * Creates a spring configuration for parallax scrolling
 */
export function parallaxSpring(scrollY: number, speed: number = 0.15) {
  return {
    transform: `translateY(${scrollY * speed}px)`,
    config: springPresets.smooth
  };
}

/**
 * Creates trail animation config for list items
 */
export function trailSpring(items: any[], open: boolean) {
  return {
    opacity: open ? 1 : 0,
    transform: open ? 'translateY(0px)' : 'translateY(20px)',
    trail: 25, // Delay per item in ms
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: springPresets.gentle
  };
}

/**
 * Creates a modal animation config
 */
export function modalSpring(isOpen: boolean) {
  return {
    overlay: {
      opacity: isOpen ? 1 : 0,
      config: { ...config.stiff }
    },
    content: {
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? 'translateY(0px) scale(1)' : 'translateY(40px) scale(0.95)',
      config: { 
        tension: 210, 
        friction: isOpen ? 20 : 35 
      }
    }
  };
}

/**
 * Creates a carousel slide animation config
 */
export function carouselSlideSpring(offset: number) {
  return {
    transform: `translateX(${offset}%)`,
    config: {
      tension: 180,
      friction: 30
    }
  };
}

/**
 * Creates a number counter animation config
 */
export function counterSpring(value: number) {
  return {
    number: value,
    from: { number: 0 },
    config: {
      tension: 150,
      friction: 30,
      precision: 0.1
    }
  };
}

/**
 * Animated number component props for use with react-spring
 */
export type AnimatedNumberProps = {
  value: SpringValue<number>;
  formatFn?: (n: number) => string;
};

/**
 * Creates a radial progress animation config
 */
export function progressSpring(percent: number) {
  return {
    value: percent,
    from: { value: 0 },
    config: springPresets.gentle
  };
}

/**
 * Creates a font weight animation config for text emphasis
 */
export function fontWeightSpring(isEmphasized: boolean) {
  const initialWeight = 400;
  const emphasizedWeight = 600;
  
  return {
    fontWeight: isEmphasized ? emphasizedWeight : initialWeight,
    config: springPresets.snappy
  };
}

/**
 * Creates a spring configuration for text gradient animations
 */
export function textGradientSpring(isActive: boolean) {
  return {
    backgroundPosition: isActive ? '100% 50%' : '0% 50%',
    config: {
      tension: 120,
      friction: 40
    }
  };
}

/**
 * Creates a spring configuration for scroll-linked fade effects
 */
export function scrollFadeSpring(scrollProgress: number) {
  return {
    opacity: scrollProgress,
    config: {
      tension: 280,
      friction: 60
    }
  };
} 