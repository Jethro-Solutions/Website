import gsap from 'gsap';
import { MutableRefObject } from 'react';

/**
 * Creates a fade-in animation for an element
 */
export function fadeIn(
  element: HTMLElement | null,
  duration: number = 0.5,
  delay: number = 0,
  from: number = 0,
  to: number = 1,
  onComplete?: () => void
) {
  if (!element) return;
  
  return gsap.fromTo(
    element,
    { opacity: from },
    { 
      opacity: to,
      duration,
      delay,
      ease: 'power2.out',
      onComplete
    }
  );
}

/**
 * Creates a slide-in animation for an element
 */
export function slideIn(
  element: HTMLElement | null,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom',
  duration: number = 0.7,
  delay: number = 0,
  distance: number = 50,
  onComplete?: () => void
) {
  if (!element) return;
  
  const directionProps = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    top: { x: 0, y: -distance },
    bottom: { x: 0, y: distance }
  };
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      ...directionProps[direction]
    },
    {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      onComplete
    }
  );
}

/**
 * Creates a staggered animation for a group of elements
 */
export function staggerElements(
  elements: HTMLElement[] | NodeListOf<Element> | null,
  animationType: 'fade' | 'slide' = 'fade',
  staggerAmount: number = 0.1,
  duration: number = 0.5,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom',
  distance: number = 30
) {
  if (!elements || elements.length === 0) return;
  
  const timeline = gsap.timeline();
  
  switch (animationType) {
    case 'fade':
      timeline.fromTo(
        elements,
        { opacity: 0 },
        {
          opacity: 1,
          duration,
          stagger: staggerAmount,
          ease: 'power2.out'
        }
      );
      break;
      
    case 'slide':
      const directionProps = {
        left: { x: -distance, y: 0 },
        right: { x: distance, y: 0 },
        top: { x: 0, y: -distance },
        bottom: { x: 0, y: distance }
      };
      
      timeline.fromTo(
        elements,
        {
          opacity: 0,
          ...directionProps[direction]
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          stagger: staggerAmount,
          ease: 'power3.out'
        }
      );
      break;
  }
  
  return timeline;
}

/**
 * Creates a reveal animation that unveils content
 */
export function revealContent(
  container: HTMLElement | null,
  content: HTMLElement | null,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left',
  duration: number = 1.2,
  delay: number = 0
) {
  if (!container || !content) return;
  
  // Set initial states
  gsap.set(container, { overflow: 'hidden' });
  
  const directionProps = {
    left: { x: '-101%', y: 0 },
    right: { x: '101%', y: 0 },
    top: { x: 0, y: '-101%' },
    bottom: { x: 0, y: '101%' }
  };
  
  const timeline = gsap.timeline({ delay });
  
  // Slide content into view
  timeline.fromTo(
    content,
    directionProps[direction],
    {
      x: 0,
      y: 0,
      duration,
      ease: 'power3.inOut'
    }
  );
  
  return timeline;
}

/**
 * Creates a typing text animation
 */
export function typeText(
  element: HTMLElement | null,
  text: string,
  speed: number = 40,
  delay: number = 0,
  onComplete?: () => void
) {
  if (!element) return;
  
  // Clear the element first
  element.textContent = '';
  
  const timeline = gsap.timeline({ delay });
  let currentText = '';
  
  // Create a tween for each character
  for (let i = 0; i < text.length; i++) {
    timeline.add(() => {
      currentText += text[i];
      element.textContent = currentText;
    }, i * (speed / 1000));
  }
  
  if (onComplete) {
    timeline.call(onComplete);
  }
  
  return timeline;
}

/**
 * Creates a scroll-triggered animation
 * Note: Requires ScrollTrigger plugin
 */
export function createScrollTrigger(
  element: HTMLElement | null,
  animation: (element: HTMLElement) => gsap.core.Tween | gsap.core.Timeline,
  triggerPosition: string = 'top 80%',
  endPosition?: string
) {
  if (!element || !gsap.plugins || !('ScrollTrigger' in gsap.plugins)) {
    console.warn('ScrollTrigger plugin not available');
    return;
  }
  
  const ScrollTrigger = gsap.plugins.ScrollTrigger;
  
  const tween = animation(element);
  
  return ScrollTrigger.create({
    trigger: element,
    start: triggerPosition,
    end: endPosition || 'bottom 20%',
    animation: tween,
    toggleActions: 'play none none reverse'
  });
}

/**
 * Animates a counter from one value to another
 */
export function animateCounter(
  element: HTMLElement | null,
  startValue: number,
  endValue: number,
  duration: number = 2,
  delay: number = 0,
  prefix: string = '',
  suffix: string = '',
  useCommas: boolean = false
) {
  if (!element) return;
  
  const obj = { value: startValue };
  
  const formatNumber = (num: number) => {
    return useCommas 
      ? Math.round(num).toLocaleString()
      : Math.round(num).toString();
  };
  
  return gsap.to(obj, {
    value: endValue,
    duration,
    delay,
    ease: 'power1.inOut',
    onUpdate: () => {
      element.textContent = `${prefix}${formatNumber(obj.value)}${suffix}`;
    }
  });
}

/**
 * Creates a parallax effect on scroll
 * Note: Requires ScrollTrigger plugin
 */
export function createParallax(
  element: HTMLElement | null,
  speed: number = 0.5,
  direction: 'vertical' | 'horizontal' = 'vertical'
) {
  if (!element || !gsap.plugins || !('ScrollTrigger' in gsap.plugins)) {
    console.warn('ScrollTrigger plugin not available');
    return;
  }
  
  const ScrollTrigger = gsap.plugins.ScrollTrigger;
  const property = direction === 'vertical' ? 'y' : 'x';
  const distance = direction === 'vertical' ? '100%' : '50%';
  
  gsap.to(element, {
    [property]: distance,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      invalidateOnRefresh: true
    }
  });
}

/**
 * Animates gradient background position
 */
export function animateGradient(
  element: HTMLElement | null,
  duration: number = 5,
  repeat: boolean = true,
  yoyo: boolean = true
) {
  if (!element) return;
  
  return gsap.fromTo(
    element,
    { backgroundPosition: '0% 50%' },
    {
      backgroundPosition: '100% 50%',
      duration,
      repeat: repeat ? -1 : 0,
      yoyo,
      ease: 'sine.inOut'
    }
  );
}

/**
 * Creates a custom animation timeline for React refs
 */
export function createTimeline(
  refs: { [key: string]: MutableRefObject<HTMLElement | null> },
  sequenceConfig: {
    [key: string]: {
      animation: 'fade' | 'slide' | 'scale',
      duration?: number,
      delay?: number,
      from?: any,
      to?: any,
      direction?: 'left' | 'right' | 'top' | 'bottom'
    }
  }
) {
  const timeline = gsap.timeline();
  
  Object.entries(sequenceConfig).forEach(([refKey, config]) => {
    const element = refs[refKey]?.current;
    if (!element) return;
    
    const { animation, duration = 0.5, delay = 0, from, to, direction = 'bottom' } = config;
    
    switch (animation) {
      case 'fade':
        timeline.fromTo(
          element,
          { opacity: from?.opacity ?? 0 },
          { 
            opacity: to?.opacity ?? 1,
            duration,
            delay
          },
          delay > 0 ? '+=' + delay : '<'
        );
        break;
        
      case 'slide':
        const directionProps = {
          left: { x: -50, y: 0 },
          right: { x: 50, y: 0 },
          top: { x: 0, y: -50 },
          bottom: { x: 0, y: 50 }
        };
        
        timeline.fromTo(
          element,
          {
            opacity: from?.opacity ?? 0,
            x: from?.x ?? directionProps[direction].x,
            y: from?.y ?? directionProps[direction].y
          },
          {
            opacity: to?.opacity ?? 1,
            x: to?.x ?? 0,
            y: to?.y ?? 0,
            duration,
            ease: 'power3.out'
          },
          delay > 0 ? '+=' + delay : '<'
        );
        break;
        
      case 'scale':
        timeline.fromTo(
          element,
          {
            opacity: from?.opacity ?? 0,
            scale: from?.scale ?? 0.8
          },
          {
            opacity: to?.opacity ?? 1,
            scale: to?.scale ?? 1,
            duration,
            ease: 'back.out(1.7)'
          },
          delay > 0 ? '+=' + delay : '<'
        );
        break;
    }
  });
  
  return timeline;
} 