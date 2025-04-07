'use client';

import React from 'react';
import { 
  linearGradient, 
  radialGradient, 
  conicGradient, 
  glassEffect, 
  blurredGradient, 
  meshGradient, 
  frostGlass, 
  animatedGradient, 
  noiseTexture, 
  blurredSpotlight,
  COLORS
} from '@/lib/colors';
import { noiseOverlay, grainTexture, dotPattern } from '@/lib/textureUtils';
import { cn } from '@/lib/utils';

interface EffectCardProps {
  title: string;
  description: string;
  style: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}

const EffectCard: React.FC<EffectCardProps> = ({ title, description, style, className, children }) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col justify-end p-6 rounded-xl w-full h-60 overflow-hidden shadow-lg",
        className
      )}
      style={style}
    >
      <div className="relative z-10">
        <h3 className="font-serif text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-text-muted text-sm">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default function GradientBlurDemo() {
  // Apply the gradient animation keyframes in component
  React.useEffect(() => {
    // Add the keyframes to the document if they don't already exist
    if (!document.getElementById('gradient-animation-keyframes')) {
      const style = document.createElement('style');
      style.id = 'gradient-animation-keyframes';
      style.innerHTML = `
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="container mx-auto py-12">
      <h1 className="font-serif text-4xl font-bold mb-8 text-center">Gradient & Blur Effects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Linear Gradient */}
        <EffectCard
          title="Linear Gradient"
          description="Standard linear gradient from blue to orange"
          style={{ background: linearGradient('135deg') }}
        />
        
        {/* Radial Gradient */}
        <EffectCard
          title="Radial Gradient"
          description="Radial gradient with brand colors"
          style={{ background: radialGradient('circle', 'center') }}
        />
        
        {/* Conic Gradient */}
        <EffectCard
          title="Conic Gradient"
          description="Conic gradient starting from top"
          style={{ background: conicGradient('0deg', 'center') }}
        />
        
        {/* Glass Effect */}
        <EffectCard
          title="Glass Effect"
          description="Semi-transparent glass-like background"
          style={{ 
            ...glassEffect(0.2, 8) as React.CSSProperties,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23202020'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Blurred Gradient */}
        <EffectCard
          title="Blurred Gradient"
          description="Gradient with blurred overlay effect"
          style={blurredGradient() as React.CSSProperties}
        />
        
        {/* Mesh Gradient */}
        <EffectCard
          title="Mesh Gradient"
          description="Complex gradient with multiple radial points"
          style={{ background: meshGradient() }}
        />
        
        {/* Frost Glass */}
        <EffectCard
          title="Frost Glass"
          description="Frosted glass effect with brightness adjustment"
          style={{ 
            ...frostGlass() as React.CSSProperties,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100' height='100' fill='%23121212'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Animated Gradient */}
        <EffectCard
          title="Animated Gradient"
          description="Gradient with animation effect"
          style={{ 
            background: linearGradient('135deg', [
              { color: COLORS.primary.blue.DEFAULT, position: '0%' },
              { color: COLORS.primary.orange.DEFAULT, position: '50%' },
              { color: COLORS.secondary.teal.DEFAULT, position: '100%' },
            ]),
            ...animatedGradient() as React.CSSProperties
          }}
        />
        
        {/* Noise Texture */}
        <EffectCard
          title="Noise Texture"
          description="Gradient with noise texture overlay"
          style={{ 
            background: linearGradient('135deg'),
            ...noiseTexture() as React.CSSProperties
          }}
        />
        
        {/* Blurred Spotlight */}
        <EffectCard
          title="Blurred Spotlight"
          description="Background with blurred spotlight effect"
          className="bg-background-DEFAULT"
          style={{ position: 'relative' }}
        >
          <div style={blurredSpotlight([30, 30], 60) as React.CSSProperties} />
        </EffectCard>
        
        {/* Noise Overlay */}
        <EffectCard
          title="Noise Overlay"
          description="Background with procedural noise overlay"
          style={{ 
            background: radialGradient('circle', 'center'),
            ...noiseOverlay(0.1, 'overlay') as React.CSSProperties
          }}
        />
        
        {/* Grain Texture */}
        <EffectCard
          title="Grain Texture"
          description="Background with grain texture effect"
          style={{ 
            background: linearGradient('to right'),
            ...grainTexture(0.15, 250) as React.CSSProperties
          }}
        />
        
        {/* Dot Pattern */}
        <EffectCard
          title="Dot Pattern"
          description="Background with subtle dot pattern"
          className="bg-background-DEFAULT"
          style={dotPattern(20, 1, '#ffffff', 0.2) as React.CSSProperties}
        />
      </div>
    </div>
  );
} 