'use client';

import React from 'react';
import IconAnimationDemo from '@/components/demos/IconAnimationDemo';

export default function IconAnimationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto">
        <h1 className="text-5xl font-serif text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          Icon Animation System
        </h1>
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-300">
          A comprehensive system for animating interactive icons using Framer Motion, React Spring, and GSAP
        </p>
        
        <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
          <IconAnimationDemo />
        </div>
      </div>
    </div>
  );
} 