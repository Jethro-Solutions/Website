'use client';

import React, { ReactNode } from 'react';
import ParallaxBase from './ParallaxBase';

export interface ParallaxLayer {
  id: string;
  content: ReactNode;
  speed: number;
  className?: string;
  zIndex?: number;
}

export interface ParallaxLayersProps {
  layers: ParallaxLayer[];
  className?: string;
  containerClassName?: string;
  disableOnMobile?: boolean;
}

/**
 * Component for creating multi-layered parallax effects with different speeds
 * Useful for creating depth in hero sections, backgrounds, etc.
 */
const ParallaxLayers = ({
  layers,
  className = '',
  containerClassName = '',
  disableOnMobile = true,
}: ParallaxLayersProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {layers.map((layer) => (
        <ParallaxBase
          key={layer.id}
          speed={layer.speed}
          containerClassName={`absolute inset-0 ${containerClassName}`}
          className={layer.className}
          disableOnMobile={disableOnMobile}
        >
          <div 
            className="w-full h-full" 
            style={{ zIndex: layer.zIndex || 'auto' }}
          >
            {layer.content}
          </div>
        </ParallaxBase>
      ))}
    </div>
  );
};

export default ParallaxLayers; 