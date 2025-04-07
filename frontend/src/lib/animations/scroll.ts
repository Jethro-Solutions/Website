'use client';

import { useRef, useEffect, MutableRefObject, useState, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useInView, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

// Ensure ScrollTrigger is registered
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Types for scroll animation
 */
export type ScrollAnimationEffect = 
  | 'fade' 
  | 'slide-up' 
  | 'slide-down' 
  | 'slide-left' 
  | 'slide-right'
  | 'scale' 
  | 'blur' 
  | 'parallax'
  | 'rotate'
  | 'custom';

export type ScrollTriggerPoints = {
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
  pin?: boolean;
  anticipatePin?: number;
  pinSpacing?: boolean;
  snap?: number | number[] | object;
};

export type ScrollAnimationConfig = {
  effect: ScrollAnimationEffect;
  duration?: number;
  ease?: string;
  from?: Record<string, any>;
  to?: Record<string, any>;
  customAnimation?: (element: HTMLElement) => gsap.core.Tween | gsap.core.Timeline;
  scrollTrigger?: ScrollTriggerPoints;
};

/**
 * Hook for creating scroll-based animation with GSAP
 * 
 * @param config Animation configuration
 * @returns ref to attach to the element
 */
export function useScrollBaseAnimation<T extends HTMLElement>(
  config: ScrollAnimationConfig
): MutableRefObject<T | null> {
  const elementRef = useRef<T>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    let animation: gsap.core.Tween | gsap.core.Timeline;
    
    // Default scroll trigger settings
    const scrollTriggerDefaults = {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      markers: false,
      scrub: false
    };
    
    // Merge default and custom scroll trigger settings
    const scrollTriggerSettings = {
      ...scrollTriggerDefaults,
      ...(config.scrollTrigger || {})
    };
    
    // Create the animation based on the effect
    switch (config.effect) {
      case 'fade':
        animation = gsap.fromTo(
          element,
          { opacity: 0, ...config.from },
          { 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'slide-up':
        animation = gsap.fromTo(
          element,
          { y: 50, opacity: 0, ...config.from },
          { 
            y: 0, 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'slide-down':
        animation = gsap.fromTo(
          element,
          { y: -50, opacity: 0, ...config.from },
          { 
            y: 0, 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'slide-left':
        animation = gsap.fromTo(
          element,
          { x: 50, opacity: 0, ...config.from },
          { 
            x: 0, 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'slide-right':
        animation = gsap.fromTo(
          element,
          { x: -50, opacity: 0, ...config.from },
          { 
            x: 0, 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'scale':
        animation = gsap.fromTo(
          element,
          { scale: 0.8, opacity: 0, ...config.from },
          { 
            scale: 1, 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power3.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'blur':
        animation = gsap.fromTo(
          element,
          { filter: 'blur(10px)', opacity: 0, ...config.from },
          { 
            filter: 'blur(0px)', 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'rotate':
        animation = gsap.fromTo(
          element,
          { rotation: config.from?.rotation || -10, opacity: 0, ...config.from },
          { 
            rotation: 0, 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
        break;
        
      case 'parallax':
        animation = gsap.fromTo(
          element,
          { y: config.from?.y || '20%', ...config.from },
          { 
            y: config.to?.y || '0%', 
            ease: config.ease || 'none',
            scrollTrigger: {
              ...scrollTriggerSettings,
              scrub: scrollTriggerSettings.scrub !== false ? scrollTriggerSettings.scrub : 0.5
            },
            ...config.to
          }
        );
        break;
        
      case 'custom':
        if (config.customAnimation) {
          animation = config.customAnimation(element);
          // Create ScrollTrigger only if animation is defined
          ScrollTrigger.create({
            ...scrollTriggerSettings,
            animation
          });
        } else {
          console.warn("Custom animation function not provided for 'custom' effect");
        }
        break;
        
      default:
        animation = gsap.fromTo(
          element,
          { opacity: 0, ...config.from },
          { 
            opacity: 1, 
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            scrollTrigger: scrollTriggerSettings,
            ...config.to
          }
        );
    }
    
    return () => {
      if (animation) {
        animation.kill();
      }
      
      // Clean up ScrollTrigger
      const st = ScrollTrigger.getById(element.id);
      if (st) st.kill();
    };
  }, [config]);
  
  return elementRef;
}

/**
 * Hook for creating Framer Motion scroll-based animations
 * Provides scroll-linked motion values for creating custom animations
 * 
 * @param options Configuration options
 * @returns Object with scroll progress and element ref
 */
export function useFramerScrollAnimation<T extends HTMLElement>(
  options: {
    threshold?: number;
    once?: boolean;
    offset?: [string | number, string | number];
  } = {}
) {
  const { threshold = 0.1, once = false, offset = ['start end', 'end start'] } = options;
  const ref = useRef<T>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);
  
  // Set up the scroll observer
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || !once) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate position relative to viewport
          const viewportTop = 0;
          const viewportBottom = windowHeight;
          
          const elementTop = rect.top;
          const elementBottom = rect.bottom;
          
          // Calculate progress (0 to 1)
          let progress;
          
          // Element fully above viewport
          if (elementBottom <= viewportTop) {
            progress = 0;
          }
          // Element fully below viewport
          else if (elementTop >= viewportBottom) {
            progress = 0;
          }
          // Element partially or fully in viewport
          else {
            const totalDistance = (elementBottom - viewportTop) - (elementTop - viewportBottom);
            const visibleDistance = Math.min(elementBottom, viewportBottom) - Math.max(elementTop, viewportTop);
            
            progress = Math.max(0, Math.min(1, visibleDistance / rect.height));
          }
          
          setScrollYProgress(progress);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10),
        rootMargin: typeof offset[0] === 'number' && typeof offset[1] === 'number'
          ? `${offset[0]}px ${offset[1]}px`
          : undefined
      }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [once, offset]);
  
  // Create a spring-animated scroll progress for smoother animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return { ref, progress: scrollYProgress, smoothProgress };
}

/**
 * Hook for staggered scroll animations of multiple elements
 * 
 * @param config Animation configuration
 * @param staggerAmount Amount of stagger between elements (in seconds)
 * @returns Function to get refs for each item
 */
export function useScrollStaggerAnimation<T extends HTMLElement>(
  config: ScrollAnimationConfig,
  staggerAmount: number = 0.1
) {
  const refs = useRef<Array<T | null>>([]);
  
  useEffect(() => {
    const elements = refs.current.filter(Boolean) as T[];
    if (elements.length === 0) return;
    
    // Default scroll trigger settings
    const scrollTriggerDefaults = {
      trigger: elements[0],
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      markers: false
    };
    
    // Merge default and custom scroll trigger settings
    const scrollTriggerSettings = {
      ...scrollTriggerDefaults,
      ...(config.scrollTrigger || {})
    };
    
    // Create animation based on effect
    let animation: gsap.core.Timeline;
    const timeline = gsap.timeline({
      scrollTrigger: scrollTriggerSettings
    });
    
    switch (config.effect) {
      case 'fade':
        animation = timeline.fromTo(
          elements,
          { opacity: 0, ...config.from },
          { 
            opacity: 1, 
            stagger: staggerAmount,
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            ...config.to
          }
        );
        break;
        
      case 'slide-up':
        animation = timeline.fromTo(
          elements,
          { y: 50, opacity: 0, ...config.from },
          { 
            y: 0, 
            opacity: 1, 
            stagger: staggerAmount,
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            ...config.to
          }
        );
        break;
        
      // Add other animation types as needed, similar to above
        
      default:
        animation = timeline.fromTo(
          elements,
          { opacity: 0, ...config.from },
          { 
            opacity: 1, 
            stagger: staggerAmount,
            duration: config.duration || 0.8,
            ease: config.ease || 'power2.out',
            ...config.to
          }
        );
    }
    
    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, [config, staggerAmount]);
  
  // Function to get ref for an item at a specific index
  const getRef = useCallback((index: number) => {
    return (el: T | null) => {
      refs.current[index] = el;
    };
  }, []);
  
  return getRef;
}

/**
 * Hook for scroll-based parallax effects
 * 
 * @param speed Speed of the parallax effect (negative values move in opposite direction)
 * @param direction Direction of the parallax effect
 * @returns Object with ref and transform style
 */
export function useScrollParallax<T extends HTMLElement>(
  speed: number = 0.3,
  direction: 'vertical' | 'horizontal' = 'vertical'
) {
  const ref = useRef<T>(null);
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = useState(0);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const updateElementTop = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
    };
    
    updateElementTop();
    window.addEventListener('resize', updateElementTop);
    
    return () => {
      window.removeEventListener('resize', updateElementTop);
    };
  }, []);
  
  // Create parallax y value based on scroll position
  const y = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + window.innerHeight],
    [speed * 100, -speed * 100]
  );
  
  // Create parallax x value for horizontal parallax
  const x = useTransform(
    scrollY,
    [elementTop - window.innerHeight, elementTop + window.innerHeight],
    [speed * 100, -speed * 100]
  );
  
  // Spring animations for smoother motion
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  
  // Return the movement value based on direction
  return { 
    ref, 
    transform: direction === 'vertical' ? springY : springX
  };
}

/**
 * Hook for scroll-based sticky sections
 * 
 * @param options Configuration options
 * @returns Object with section ref and progress value
 */
export function useStickyScroll<T extends HTMLElement>(
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  } = {}
) {
  const { start = 'top top', end = 'bottom bottom', scrub = true, markers = false } = options;
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      markers,
      scrub,
      pin: true,
      onUpdate: (self) => {
        setProgress(self.progress);
      }
    });
    
    return () => {
      scrollTrigger.kill();
    };
  }, [start, end, scrub, markers]);
  
  return { ref, progress };
}

/**
 * Hook for scroll-based sequence animations (like step-by-step reveals)
 * 
 * @param steps Number of animation steps to create
 * @param options Configuration options
 * @returns Object with container ref and current active step
 */
export function useScrollSequence<T extends HTMLElement>(
  steps: number,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    markers?: boolean;
  } = {}
) {
  const { start = 'top top', end = 'bottom bottom', scrub = true, markers = false } = options;
  const ref = useRef<T>(null);
  const [activeStep, setActiveStep] = useState(0);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start,
      end,
      markers,
      scrub,
      onUpdate: (self) => {
        // Calculate the current step based on scroll progress
        const stepProgress = Math.floor(self.progress * steps);
        setActiveStep(Math.min(stepProgress, steps - 1));
      }
    });
    
    return () => {
      scrollTrigger.kill();
    };
  }, [steps, start, end, scrub, markers]);
  
  return { ref, activeStep };
} 