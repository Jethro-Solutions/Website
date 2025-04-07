'use client';

import { useState, useEffect, useRef, RefObject } from 'react';
import { useSpring } from 'react-spring';
import gsap from 'gsap';
import { useInView } from 'framer-motion';

/**
 * Hook for triggering animations when elements come into view
 */
export function useAnimateOnScroll<T extends HTMLElement>(
  threshold: number = 0.2
): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { 
    once: false,
    amount: threshold 
  });
  
  return [ref, inView];
}

/**
 * Hook for creating numbers that animate from one value to another
 */
export function useCountUp(
  start: number = 0,
  end: number = 100,
  duration: number = 2,
  delay: number = 0
) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (delay > 0) {
      timeout = setTimeout(() => {
        const animation = gsap.to(countRef, {
          current: end,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            setCount(Math.round(countRef.current));
          }
        });
        
        return () => {
          animation.kill();
        };
      }, delay * 1000);
    } else {
      const animation = gsap.to(countRef, {
        current: end,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          setCount(Math.round(countRef.current));
        }
      });
      
      return () => {
        animation.kill();
      };
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [end, duration, delay]);
  
  return count;
}

/**
 * Hook for scroll-linked animations
 */
export function useScrollAnimation<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      
      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the element is in view
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
      const elementHeight = rect.height;
      
      // Calculate progress (0 to 1)
      const progress = Math.max(0, Math.min(1, visibleHeight / elementHeight));
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return { elementRef, scrollProgress };
}

/**
 * Hook for parallax scrolling effects
 */
export function useParallax(
  speed: number = 0.5,
  direction: 'vertical' | 'horizontal' = 'vertical'
) {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollPosition = window.scrollY;
      const elementTop = ref.current.getBoundingClientRect().top + scrollPosition;
      const relativeScroll = scrollPosition - elementTop;
      
      setOffset(relativeScroll * speed);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);
  
  const style = direction === 'vertical' 
    ? { transform: `translateY(${offset}px)` } 
    : { transform: `translateX(${offset}px)` };
  
  return { ref, style };
}

/**
 * Hook for creating text typing animation
 */
export function useTypewriter(
  text: string,
  speed: number = 50,
  startDelay: number = 0
) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDone, setIsDone] = useState(false);
  
  useEffect(() => {
    setDisplayText('');
    setIsDone(false);
    
    let timeout: ReturnType<typeof setTimeout>;
    if (startDelay > 0) {
      timeout = setTimeout(() => {
        startTyping();
      }, startDelay);
    } else {
      startTyping();
    }
    
    function startTyping() {
      setIsTyping(true);
      let currentIndex = 0;
      
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          setIsDone(true);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [text, speed, startDelay]);
  
  return { displayText, isTyping, isDone };
}

/**
 * Hook for gradient button animations using react-spring
 */
export function useGradientButtonAnimation(isHovered: boolean = false) {
  const springProps = useSpring({
    from: { backgroundPosition: '0% 50%' },
    to: { 
      backgroundPosition: isHovered ? '100% 50%' : '0% 50%',
      scale: isHovered ? 1.02 : 1
    },
    config: { tension: 300, friction: 20 }
  });
  
  return springProps;
}

/**
 * Hook for smooth scroll animations to anchor points
 */
export function useSmoothScroll() {
  const scrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element,
        offsetY: 50
      },
      ease: 'power3.inOut'
    });
  };
  
  return scrollTo;
}

/**
 * Hook for staggered animations of list items
 */
export function useStaggeredAnimation(itemCount: number, staggerDelay: number = 0.1) {
  return Array.from({ length: itemCount }).map((_, i) => ({
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * staggerDelay,
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  }));
}

/**
 * Hook for implementing randomized floating motion (for particles, etc.)
 */
export function useFloatingAnimation(
  baseX: number = 0,
  baseY: number = 0,
  rangeX: number = 10,
  rangeY: number = 10,
  duration: number = 3
) {
  const [position, setPosition] = useState({ x: baseX, y: baseY });
  
  useEffect(() => {
    const animate = () => {
      const newX = baseX + (Math.random() * 2 - 1) * rangeX;
      const newY = baseY + (Math.random() * 2 - 1) * rangeY;
      
      gsap.to(position, {
        x: newX,
        y: newY,
        duration,
        ease: 'sine.inOut',
        onUpdate: () => setPosition({ ...position }),
        onComplete: animate
      });
    };
    
    animate();
    
    return () => {
      gsap.killTweensOf(position);
    };
  }, [baseX, baseY, rangeX, rangeY, duration]);
  
  return position;
} 