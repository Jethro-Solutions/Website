'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { 
  fadeVariants, 
  slideVariants, 
  scaleVariants,
  buttonGradientAnimation,
  cardHoverAnimation,
  useAnimateOnScroll,
  useCountUp,
  useTypewriter,
  buttonHoverSpring,
  fadeIn
} from '@/lib/animations';

const AnimationExample = () => {
  // State for hover effects
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  
  // Scroll-triggered animation
  const [sectionRef, inView] = useAnimateOnScroll<HTMLDivElement>();
  
  // Counter animation
  const count = useCountUp(0, 100, 3, 0.5);
  
  // Typewriter effect
  const { displayText, isTyping } = useTypewriter(
    "Welcome to Jethro Solutions - where technology meets innovation.",
    50,
    1
  );
  
  // Button hover animation with react-spring
  const springButtonProps = useSpring(buttonHoverSpring(isHovered));
  
  // Element ref for GSAP animations
  const gsapElementRef = useRef<HTMLDivElement>(null);
  
  // Apply GSAP animation when component mounts
  useState(() => {
    if (gsapElementRef.current) {
      fadeIn(gsapElementRef.current, 1, 0.5, 0, 1);
    }
  });
  
  return (
    <div className="space-y-12 p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif mb-8 text-center">
        Animation Examples
      </h1>
      
      {/* Framer Motion fade animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Fade Animation</h2>
        <motion.div 
          className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm"
          variants={fadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="text-gray-800">
            This content fades in using Framer Motion variants.
          </p>
        </motion.div>
      </section>
      
      {/* Framer Motion slide animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Slide Animation</h2>
        <motion.div 
          className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm"
          variants={slideVariants('up', 50)}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="text-gray-800">
            This content slides in from below using customizable direction.
          </p>
        </motion.div>
      </section>
      
      {/* Framer Motion scale animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Scale Animation</h2>
        <motion.div 
          className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm"
          variants={scaleVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="text-gray-800">
            This content scales in with a spring effect.
          </p>
        </motion.div>
      </section>
      
      {/* Button hover animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Button Hover Animation</h2>
        <motion.button
          className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500"
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          variants={buttonGradientAnimation}
        >
          Hover Me
        </motion.button>
      </section>
      
      {/* Card hover animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Card Hover Animation</h2>
        <motion.div 
          className="p-6 bg-white rounded-lg border border-gray-100"
          initial="rest"
          whileHover="hover"
          variants={cardHoverAnimation}
        >
          <h3 className="text-xl font-semibold mb-2">Hover this card</h3>
          <p className="text-gray-600">
            This card lifts up and changes shadow on hover.
          </p>
        </motion.div>
      </section>
      
      {/* Scroll-triggered animation */}
      <section ref={sectionRef} className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Scroll Animation</h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-800">
              This content animates when scrolled into view.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Counter animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Counter Animation</h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm text-center">
          <span className="text-5xl font-bold text-blue-600">{count}%</span>
          <p className="text-gray-600 mt-2">Customer satisfaction rate</p>
        </div>
      </section>
      
      {/* Typewriter effect */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">Typewriter Effect</h2>
        <div className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
          <p className="text-gray-800">
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </section>
      
      {/* React Spring button */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">React Spring Button</h2>
        <animated.button
          className="px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-teal-400"
          style={{
            transform: springButtonProps.scale.to(s => `scale(${s})`),
            backgroundPosition: springButtonProps.backgroundPosition
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          React Spring Button
        </animated.button>
      </section>
      
      {/* GSAP animation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-serif text-teal-700">GSAP Animation</h2>
        <div 
          ref={gsapElementRef}
          className="p-6 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm opacity-0"
        >
          <p className="text-gray-800">
            This element is animated with GSAP's fadeIn utility.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AnimationExample; 