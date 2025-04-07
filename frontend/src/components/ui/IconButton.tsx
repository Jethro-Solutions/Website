'use client';

import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { iconHoverScaleVariants, iconColorTransitionVariants } from '@/lib/animations';

export interface IconButtonProps {
  /** The icon to display */
  icon: ReactNode;
  /** Optional text to display next to the icon */
  label?: string;
  /** Callback function when button is clicked */
  onClick?: () => void;
  /** Optional CSS class names */
  className?: string;
  /** Animation type to apply */
  animationType?: 'scale' | 'color' | 'both' | 'none';
  /** Custom hover color (when using color animation) */
  hoverColor?: string;
  /** Whether the button is in active state */
  isActive?: boolean;
  /** Whether to show the active state */
  showActiveState?: boolean;
  /** Custom active color */
  activeColor?: string;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** CSS classes for the icon */
  iconClassName?: string;
  /** CSS classes for the label */
  labelClassName?: string;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

/**
 * IconButton component with interactive animations
 * 
 * Utilizes the icon animation system for consistent interactive behaviors
 * across the application
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  label,
  onClick,
  className = '',
  animationType = 'scale',
  hoverColor = '#3B82F6',
  isActive = false,
  showActiveState = false,
  activeColor = '#3B82F6',
  disabled = false,
  iconClassName = '',
  labelClassName = '',
  ariaLabel,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Determine the current color based on active state
  const currentColor = (showActiveState && isActive) ? activeColor : undefined;
  
  // Set up animation variants based on the animation type
  const getAnimationVariants = () => {
    switch(animationType) {
      case 'scale':
        return iconHoverScaleVariants;
      case 'color':
        return iconColorTransitionVariants(currentColor, hoverColor);
      case 'both':
        return {
          ...iconHoverScaleVariants,
          ...iconColorTransitionVariants(currentColor, hoverColor),
        };
      case 'none':
      default:
        return {};
    }
  };

  return (
    <motion.button
      className={`inline-flex items-center justify-center ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial="initial"
      whileHover={disabled ? undefined : "hover"}
      whileTap={disabled ? undefined : "tap"}
      variants={getAnimationVariants()}
      aria-label={ariaLabel || label}
      disabled={disabled}
      style={{ color: currentColor }}
    >
      <span className={`flex items-center justify-center ${iconClassName}`}>
        {icon}
      </span>
      {label && (
        <span className={`ml-2 ${labelClassName}`}>
          {label}
        </span>
      )}
    </motion.button>
  );
};

export default IconButton; 