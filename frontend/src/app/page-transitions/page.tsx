'use client';

import { useState } from 'react';
import { Container } from '@/components/layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PageTransitionItem } from '@/components/layout';
import { pageTransitionVariants } from '@/lib/animations/utils';

export default function PageTransitionsDemo() {
  const [selectedTransition, setSelectedTransition] = useState<keyof typeof pageTransitionVariants>('fade');
  
  const transitions: Array<{ type: keyof typeof pageTransitionVariants, label: string }> = [
    { type: 'fade', label: 'Fade' },
    { type: 'slide', label: 'Slide' },
    { type: 'scale', label: 'Scale' },
    { type: 'blur', label: 'Blur' },
    { type: 'stagger', label: 'Stagger' },
  ];

  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif mb-8 text-center">Page Transition System</h1>
        
        <div className="mb-10">
          <h2 className="text-2xl font-serif mb-4">Transition Types</h2>
          <p className="mb-6">
            Select a transition type to preview it in the container below. In a real application, 
            you would set a default transition in the PageTransition component.
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {transitions.map((transition) => (
              <button
                key={transition.type}
                onClick={() => setSelectedTransition(transition.type)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedTransition === transition.type
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                }`}
              >
                {transition.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-serif mb-4">Preview</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden bg-white p-6 h-96 flex items-center justify-center relative">
            <div className="absolute top-4 right-4 text-sm bg-gray-100 px-3 py-1 rounded-full">
              Selected: <span className="font-semibold">{selectedTransition}</span>
            </div>
            
            {/* Preview container */}
            <motion.div
              key={selectedTransition}
              className="w-full max-w-lg"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransitionVariants[selectedTransition]}
            >
              {selectedTransition === 'stagger' ? (
                <div className="space-y-4">
                  <PageTransitionItem>
                    <h3 className="text-2xl font-serif">Staggered Transition</h3>
                  </PageTransitionItem>
                  
                  <PageTransitionItem delay={0.1}>
                    <p className="text-gray-600">
                      This content appears with a staggered delay. Each child element animates sequentially.
                    </p>
                  </PageTransitionItem>
                  
                  <PageTransitionItem delay={0.2}>
                    <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-4 rounded-lg">
                      <p className="text-gray-700">
                        These items appear one after another, creating a flowing effect as the page loads.
                      </p>
                    </div>
                  </PageTransitionItem>
                  
                  <PageTransitionItem delay={0.3}>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md">
                      Call to Action
                    </button>
                  </PageTransitionItem>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif">{selectedTransition.charAt(0).toUpperCase() + selectedTransition.slice(1)} Transition</h3>
                  <p className="text-gray-600">
                    This transition uses the {selectedTransition} animation when navigating between pages.
                  </p>
                  <div className="bg-gradient-to-r from-blue-500/10 to-teal-500/10 p-4 rounded-lg">
                    <p className="text-gray-700">
                      The entire page content transitions together. This is perfect for smooth navigation experiences.
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md">
                    Call to Action
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-serif mb-4">Implementation</h2>
          <p className="mb-4">
            The page transition system is implemented in the following components:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><code className="bg-gray-100 px-2 py-1 rounded">PageTransition.tsx</code> - Main wrapper component</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">PageTransitionItem.tsx</code> - For staggered items</li>
            <li><code className="bg-gray-100 px-2 py-1 rounded">MainLayout.tsx</code> - Where transitions are applied</li>
          </ul>
          <p>
            Change the transition type by modifying the <code className="bg-gray-100 px-2 py-1 rounded">transitionType</code> value
            in the PageTransition component.
          </p>
        </div>
        
        <div className="text-center">
          <Link href="/" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md hover:from-blue-700 hover:to-teal-600 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    </Container>
  );
} 