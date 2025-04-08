'use client';

import { useState } from 'react';
import {
  GeometricBackground,
  FloatingCubesBackground,
  WaveBackground,
  ConnectedNodes,
  SpiralParticlesBackground
} from '@/components/background';

const BACKGROUNDS = [
  {
    name: 'Geometric Shapes',
    component: GeometricBackground,
    description: 'Abstract geometric wireframe shapes with soft glow'
  },
  {
    name: 'Floating Cubes',
    component: FloatingCubesBackground,
    description: 'Floating and rotating wireframe cubes'
  },
  {
    name: 'Wave Mesh',
    component: WaveBackground,
    description: 'Animated wave-like surface with wireframe'
  },
  {
    name: 'Connected Nodes',
    component: ConnectedNodes,
    description: 'Network of connected nodes with dynamic movement'
  },
  {
    name: 'Spiral Particles',
    component: SpiralParticlesBackground,
    description: 'Particles arranged in a spiral pattern with wave motion'
  }
];

export default function BackgroundShowcase() {
  const [activeBackground, setActiveBackground] = useState(0);
  
  // Get the current component to display
  const CurrentBackground = BACKGROUNDS[activeBackground].component;

  return (
    <main className="min-h-screen bg-soft-black text-soft-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <CurrentBackground />
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-soft-black/70 backdrop-blur-md p-8 rounded-xl max-w-2xl">
          <h1 className="text-4xl font-serif mb-6 text-center">
            Abstract Backgrounds
          </h1>
          
          <p className="text-xl mb-8 text-center font-mono">
            {BACKGROUNDS[activeBackground].description}
          </p>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {BACKGROUNDS.map((bg, index) => (
              <button
                key={bg.name}
                onClick={() => setActiveBackground(index)}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeBackground === index
                    ? 'bg-soft-orange text-soft-black font-medium'
                    : 'bg-soft-black border border-soft-orange/50 hover:border-soft-orange'
                }`}
              >
                {bg.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 