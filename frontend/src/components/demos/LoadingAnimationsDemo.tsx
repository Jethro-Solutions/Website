'use client';

import React, { useState } from 'react';
import { 
  GradientSpinner, 
  PulsingDots, 
  GradientBar, 
  BlurPulse, 
  GradientSkeleton 
} from '@/components/ui/LoadingAnimations';

export function LoadingAnimationsDemo() {
  const [variant, setVariant] = useState<'primary' | 'secondary' | 'white'>('primary');
  
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 bg-background-DEFAULT text-text-DEFAULT">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif">Loading State Animations</h2>
        <p className="text-text-muted">Branded loading animations with gradient elements</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button 
          onClick={() => setVariant('primary')}
          className={`px-4 py-2 rounded-md ${variant === 'primary' ? 'bg-primary-blue text-white' : 'bg-background-lighter text-text-muted'}`}
        >
          Primary
        </button>
        <button 
          onClick={() => setVariant('secondary')}
          className={`px-4 py-2 rounded-md ${variant === 'secondary' ? 'bg-secondary-teal text-white' : 'bg-background-lighter text-text-muted'}`}
        >
          Secondary
        </button>
        <button 
          onClick={() => setVariant('white')}
          className={`px-4 py-2 rounded-md ${variant === 'white' ? 'bg-text-DEFAULT text-background-DEFAULT' : 'bg-background-lighter text-text-muted'}`}
        >
          White
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gradient Spinner */}
        <div className="p-6 rounded-xl bg-background-lighter flex flex-col items-center gap-6">
          <h3 className="text-xl font-serif">Gradient Spinner</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <GradientSpinner size="sm" variant={variant} text="Loading..." showText={true} />
            <GradientSpinner size="md" variant={variant} />
            <GradientSpinner size="lg" variant={variant} />
          </div>
          <p className="text-center text-text-muted text-sm">
            Rotating gradient spinner with customizable sizing
          </p>
        </div>
        
        {/* Pulsing Dots */}
        <div className="p-6 rounded-xl bg-background-lighter flex flex-col items-center gap-6">
          <h3 className="text-xl font-serif">Pulsing Dots</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <PulsingDots size="sm" variant={variant} text="Processing..." showText={true} />
            <PulsingDots size="md" variant={variant} />
            <PulsingDots size="lg" variant={variant} />
          </div>
          <p className="text-center text-text-muted text-sm">
            Animated dots with brand colors and staggered animation
          </p>
        </div>
        
        {/* Gradient Bar */}
        <div className="p-6 rounded-xl bg-background-lighter flex flex-col items-center gap-6">
          <h3 className="text-xl font-serif">Gradient Bar</h3>
          <div className="flex flex-col items-center gap-8">
            <GradientBar size="sm" variant={variant} text="Uploading..." showText={true} />
            <GradientBar size="md" variant={variant} />
            <GradientBar size="lg" variant={variant} />
          </div>
          <p className="text-center text-text-muted text-sm">
            Progress bar with animated gradient fill effect
          </p>
        </div>
        
        {/* Blur Pulse */}
        <div className="p-6 rounded-xl bg-background-lighter flex flex-col items-center gap-6">
          <h3 className="text-xl font-serif">Blur Pulse</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <BlurPulse size="sm" variant={variant} text="Connecting..." showText={true} />
            <BlurPulse size="md" variant={variant} />
            <BlurPulse size="lg" variant={variant} />
          </div>
          <p className="text-center text-text-muted text-sm">
            Pulsing radial gradient with blur effect for subtle loading states
          </p>
        </div>
        
        {/* Gradient Skeleton */}
        <div className="p-6 rounded-xl bg-background-lighter flex flex-col items-center gap-6">
          <h3 className="text-xl font-serif">Gradient Skeleton</h3>
          <div className="w-full space-y-4">
            <GradientSkeleton className="h-8 w-full" variant={variant} />
            <GradientSkeleton className="h-6 w-3/4 mx-auto" variant={variant} />
            <GradientSkeleton className="h-24 w-full" variant={variant} />
            <GradientSkeleton className="h-8 w-1/2 mx-auto" variant={variant} />
          </div>
          <p className="text-center text-text-muted text-sm">
            Content skeleton loaders with animated gradient effect
          </p>
        </div>
        
        {/* Button Loading States */}
        <div className="p-6 rounded-xl bg-background-lighter flex flex-col items-center gap-6">
          <h3 className="text-xl font-serif">Button Loading States</h3>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-primary-blue text-white font-medium">
              <GradientSpinner size="xs" variant="white" />
              <span>Loading...</span>
            </button>
            
            <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md bg-secondary-teal text-white font-medium">
              <PulsingDots size="xs" variant="white" />
              <span>Processing...</span>
            </button>
            
            <button className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-md border border-text-muted text-text-DEFAULT font-medium">
              <BlurPulse size="xs" variant={variant} />
              <span>Submitting...</span>
            </button>
          </div>
          <p className="text-center text-text-muted text-sm">
            Loading state animations integrated with buttons
          </p>
        </div>
      </div>
      
      <div className="mt-10 flex justify-center">
        <button 
          className="px-6 py-3 rounded-lg bg-background-lighter text-text-muted hover:text-text-DEFAULT transition-colors"
          onClick={() => {
            const overlay = document.getElementById('loading-overlay');
            if (overlay) {
              overlay.style.display = 'flex';
              setTimeout(() => {
                overlay.style.display = 'none';
              }, 3000);
            }
          }}
        >
          Show Loading Overlay (3s)
        </button>
      </div>
      
      {/* Loading overlay (hidden by default) */}
      <div 
        id="loading-overlay" 
        className="fixed inset-0 z-50 hidden items-center justify-center bg-background-DEFAULT/80 backdrop-blur-sm"
      >
        <div className="flex flex-col items-center gap-4">
          <GradientSpinner size="lg" variant={variant} />
          <p className="text-text-DEFAULT font-mono text-lg">
            Loading content...
          </p>
        </div>
      </div>
    </div>
  );
} 