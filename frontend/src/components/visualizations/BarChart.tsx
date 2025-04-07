import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { BarChartProps, DataPoint } from './types';

export const BarChart: React.FC<BarChartProps> = ({
  data,
  config,
  horizontal = false,
  stacked = false,
  grouped = false,
  className = '',
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...data.map(item => item.value));
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Set animation configuration
  const animationConfig = {
    duration: 0.8,
    staggered: true,
    staggerAmount: 0.1,
    ...config?.animation
  };

  // Calculate dynamic height/width based on orientation
  const getBarStyle = (value: number) => {
    const percentage = (value / maxValue) * 100;
    
    return horizontal 
      ? { width: `${percentage}%`, height: '100%' } 
      : { height: `${percentage}%`, width: '100%' };
  };

  // Generate gradient for bars
  const getGradient = (index: number) => {
    if (!config?.gradients) return '';
    
    const baseColors = [
      'from-blue-500 to-indigo-700',
      'from-indigo-500 to-purple-700',
      'from-purple-500 to-pink-700',
      'from-pink-500 to-red-700',
      'from-red-500 to-orange-700',
      'from-orange-500 to-amber-700',
      'from-teal-500 to-green-700',
    ];
    
    return baseColors[index % baseColors.length];
  };

  // Apply GSAP animations to bars
  useEffect(() => {
    if (!chartRef.current || !barRefs.current.length) return;
    
    const bars = barRefs.current.filter(Boolean);
    gsap.set(bars, { 
      scaleY: horizontal ? 1 : 0, 
      scaleX: horizontal ? 0 : 1,
      transformOrigin: horizontal ? 'left center' : 'center bottom'
    });
    
    const animation = gsap.timeline();
    
    if (animationConfig.staggered) {
      animation.to(bars, {
        scaleY: 1,
        scaleX: 1,
        duration: animationConfig.duration,
        stagger: animationConfig.staggerAmount,
        ease: 'power2.out',
      });
    } else {
      animation.to(bars, {
        scaleY: 1,
        scaleX: 1,
        duration: animationConfig.duration,
        ease: 'power2.out',
      });
    }
    
    // Add optional callbacks
    if (animationConfig.onStart) {
      animation.eventCallback('onStart', animationConfig.onStart);
    }
    
    if (animationConfig.onComplete) {
      animation.eventCallback('onComplete', animationConfig.onComplete);
    }
    
    return () => {
      animation.kill();
    };
  }, [data, horizontal, animationConfig]);

  return (
    <div 
      ref={chartRef}
      className={`bar-chart-container ${className} w-full`}
      style={{ 
        height: config?.height || '300px',
        width: config?.width || '100%',
      }}
    >
      <div 
        className={`relative flex ${
          horizontal 
            ? 'flex-col h-full' 
            : 'flex-row items-end h-full'
        } gap-4 w-full p-4`}
      >
        {data.map((item, index) => (
          <div 
            key={item.id || index}
            className={`bar-item relative flex ${
              horizontal ? 'w-full h-8' : 'w-full h-full'
            } ${
              horizontal ? 'items-center' : 'justify-center items-end'
            }`}
          >
            <div 
              ref={(el) => { barRefs.current[index] = el; }}
              className={`bar ${
                horizontal ? 'h-full' : 'w-full'
              } bg-gradient-to-br ${getGradient(index)} rounded-sm`}
              style={getBarStyle(item.value)}
              data-value={item.value}
            />
            
            {/* Value label */}
            <div 
              className={`absolute text-xs font-mono text-white ${
                horizontal 
                  ? 'left-[calc(var(--bar-width)+10px)]' 
                  : 'top-[-20px] left-0 right-0 text-center'
              }`}
              style={{ 
                '--bar-width': `${(item.value / maxValue) * 100}%` 
              } as React.CSSProperties}
            >
              {item.value}
            </div>
            
            {/* Axis label */}
            <div 
              className={`absolute text-xs font-mono text-gray-400 ${
                horizontal 
                  ? 'left-[-5px] transform -translate-x-full' 
                  : 'bottom-[-20px] left-0 right-0 text-center'
              }`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 