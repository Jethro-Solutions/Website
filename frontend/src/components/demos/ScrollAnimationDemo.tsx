import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import {
  useScrollBaseAnimation,
  useFramerScrollAnimation,
  useScrollStaggerAnimation,
  useScrollParallax,
  useStickyScroll,
  useScrollSequence
} from '@/lib/animations/scroll';

const ScrollAnimationDemo = () => {
  // Basic scroll animation with GSAP
  const fadeRef = useScrollBaseAnimation<HTMLDivElement>({
    effect: 'fade',
    duration: 1,
  });

  const slideUpRef = useScrollBaseAnimation<HTMLDivElement>({
    effect: 'slide-up',
    duration: 0.8,
  });

  const scaleRef = useScrollBaseAnimation<HTMLDivElement>({
    effect: 'scale',
    duration: 0.9,
    scrollTrigger: {
      start: 'top 70%',
    }
  });

  // Framer Motion scroll animation
  const { ref: framerRef, progress, smoothProgress } = useFramerScrollAnimation<HTMLDivElement>();

  // Staggered animations for grid items
  const getStaggeredRef = useScrollStaggerAnimation<HTMLDivElement>(
    { effect: 'slide-up', duration: 0.6 },
    0.1
  );

  // Parallax effect
  const { ref: parallaxRef, transform: parallaxY } = useScrollParallax<HTMLDivElement>(0.3);
  
  // Sticky scroll section
  const { ref: stickyRef, progress: stickyProgress } = useStickyScroll<HTMLDivElement>({
    start: 'top top',
    end: 'bottom -100%', // Adjust based on how long you want the section to stay sticky
  });

  // Sequence animation with steps
  const { ref: sequenceRef, activeStep } = useScrollSequence<HTMLDivElement>(4);

  // Array of colors for the sequence steps
  const sequenceColors = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'];

  // Grid items for staggered animation
  const gridItems = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="py-10 space-y-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center">
          Scroll Animation Framework
        </h2>

        {/* Basic fade-in animation */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Fade-in Animation</h3>
          <div 
            ref={fadeRef} 
            className="bg-gradient-to-r from-blue-500 to-teal-400 p-8 rounded-lg shadow-lg"
          >
            <p className="text-white text-xl">
              This element fades in when scrolled into view
            </p>
          </div>
        </section>

        {/* Slide up animation */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Slide-up Animation</h3>
          <div 
            ref={slideUpRef} 
            className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg shadow-lg"
          >
            <p className="text-white text-xl">
              This element slides up when scrolled into view
            </p>
          </div>
        </section>

        {/* Scale animation */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Scale Animation</h3>
          <div 
            ref={scaleRef} 
            className="bg-gradient-to-r from-amber-500 to-orange-600 p-8 rounded-lg shadow-lg"
          >
            <p className="text-white text-xl">
              This element scales in when scrolled into view
            </p>
          </div>
        </section>

        {/* Framer Motion progress-based animation */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Progress-based Animation</h3>
          <div 
            ref={framerRef}
            className="h-64 bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500"
              style={{ scaleX: smoothProgress, originX: 0 }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.p 
                className="text-white text-2xl font-bold"
                style={{ opacity: smoothProgress }}
              >
                {Math.round(progress * 100)}% Visible
              </motion.p>
            </div>
          </div>
        </section>

        {/* Staggered grid animation */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Staggered Grid Animation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gridItems.map((item, index) => (
              <div 
                key={index}
                ref={getStaggeredRef(index)}
                className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-md flex items-center justify-center"
              >
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Parallax effect */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Parallax Effect</h3>
          <div className="h-96 bg-gray-100 rounded-lg shadow-lg overflow-hidden relative">
            <motion.div 
              ref={parallaxRef}
              className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500"
              style={{ y: parallaxY }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">Parallax Background</p>
            </div>
          </div>
        </section>

        {/* Sticky scroll section */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Sticky Scroll Section</h3>
          <div 
            ref={stickyRef}
            className="h-screen bg-gray-900 rounded-lg shadow-xl overflow-hidden flex items-center justify-center"
          >
            <div className="text-center">
              <h4 className="text-white text-3xl font-bold mb-4">
                Scroll Progress: {Math.round(stickyProgress * 100)}%
              </h4>
              <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-teal-400"
                  style={{ width: `${stickyProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sequence animation */}
        <section className="mb-32">
          <h3 className="text-2xl font-serif mb-6">Sequence Animation</h3>
          <div 
            ref={sequenceRef}
            className="h-96 bg-gray-100 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-full flex flex-col">
              {[0, 1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className="flex-1 flex items-center justify-center transition-opacity duration-500"
                  style={{ 
                    backgroundColor: sequenceColors[step],
                    opacity: activeStep === step ? 1 : 0.1
                  }}
                >
                  <p className="text-white text-2xl font-bold">
                    {activeStep >= step ? '✓ ' : ''} 
                    Step {step + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScrollAnimationDemo; 