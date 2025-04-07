import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { StatCardProps } from './types';

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  icon,
  trend,
  trendLabel,
  format,
  config,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLDivElement>(null);
  
  // For number counter animation
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, Math.round);
  
  // Format the value if needed
  const formatValue = (val: number | string): string => {
    if (typeof format === 'function') {
      return format(val);
    }
    
    if (typeof val === 'number') {
      if (format === 'currency') {
        return new Intl.NumberFormat('en-US', { 
          style: 'currency', 
          currency: 'USD',
          maximumFractionDigits: 0
        }).format(val);
      }
      
      if (format === 'percentage') {
        return `${val}%`;
      }
      
      if (format === 'compact') {
        return new Intl.NumberFormat('en-US', { 
          notation: 'compact',
          compactDisplay: 'short' 
        }).format(val);
      }
      
      // Default number formatting
      return new Intl.NumberFormat('en-US').format(val);
    }
    
    return String(val);
  };
  
  // Animation for numeric values
  useEffect(() => {
    if (typeof value === 'number' && valueRef.current) {
      gsap.to(count, {
        duration: config?.animation?.duration || 1.2,
        value: value,
        ease: 'power2.out',
        onUpdate: () => {
          if (valueRef.current) {
            valueRef.current.textContent = formatValue(count.get());
          }
        },
        onComplete: config?.animation?.onComplete
      });
    }
  }, [value, count, config?.animation]);
  
  // Card appearance animation
  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0, 
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, []);
  
  // Determine trend direction styling
  const getTrendClasses = () => {
    if (!trend) return '';
    
    return trend > 0 
      ? 'text-green-500' 
      : trend < 0 
        ? 'text-red-500' 
        : 'text-gray-400';
  };
  
  const getTrendIcon = () => {
    if (!trend) return null;
    
    return trend > 0 
      ? '↑' 
      : trend < 0 
        ? '↓' 
        : '→';
  };

  return (
    <motion.div
      ref={cardRef}
      className={`stat-card bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-5 shadow-xl ${className}`}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
      }}
      style={{
        height: config?.height || 'auto',
        width: config?.width || '100%',
      }}
    >
      <div className="flex flex-col gap-2">
        {/* Icon (if provided) */}
        {icon && (
          <div className="mb-2 text-indigo-400">
            {icon}
          </div>
        )}
        
        {/* Value */}
        <div 
          ref={valueRef}
          className="text-4xl font-serif font-bold text-white mb-1"
        >
          {formatValue(value)}
        </div>
        
        {/* Label */}
        <div className="text-gray-400 text-sm font-mono">
          {label}
        </div>
        
        {/* Trend (if provided) */}
        {trend !== undefined && (
          <div className={`flex items-center gap-1 mt-2 ${getTrendClasses()}`}>
            <span>{getTrendIcon()}</span>
            <span className="font-mono text-sm">{Math.abs(trend)}%</span>
            {trendLabel && (
              <span className="text-xs text-gray-400 ml-1">
                {trendLabel}
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-700 rounded-b-lg"></div>
    </motion.div>
  );
}; 