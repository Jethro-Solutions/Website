'use client';

import { ReactNode, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface HoverCard3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
  glareIntensity?: number;
  rotationFactor?: number;
  bgColor?: string;
  borderColor?: string;
}

// 3D hover card with tilt effect
export function HoverCard3D({
  children,
  className = '',
  depth = 10,
  glareIntensity = 0.2,
  rotationFactor = 15,
  bgColor = 'bg-soft-black',
  borderColor = 'border-soft-tan/20',
}: HoverCard3DProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Add spring physics for smoother motion
  const springConfig = { damping: 30, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotationFactor, -rotationFactor]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotationFactor, rotationFactor]), springConfig);
  
  // Reference for the card container
  const ref = useRef<HTMLDivElement>(null);
  
  // State for glare positioning
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  
  // Handle mouse move on card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    
    // Calculate the position relative to the card (0 to 1)
    const normalizedX = (e.clientX - rect.left) / rect.width;
    const normalizedY = (e.clientY - rect.top) / rect.height;
    
    // Update motion values
    x.set(normalizedX - 0.5);  // Center at 0
    y.set(normalizedY - 0.5);  // Center at 0
    
    // Update glare position
    setGlarePosition({ x: normalizedX * 100, y: normalizedY * 100 });
  };
  
  // Reset on mouse leave
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${bgColor} ${className} border ${borderColor} rounded-xl perspective-1000`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glare effect */}
      {glareIntensity > 0 && (
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, 
              rgba(255, 255, 255, ${glareIntensity}), 
              transparent 40%)`,
          }}
        />
      )}
      
      {/* Main content with 3D depth */}
      <div 
        className="relative"
        style={{ transform: `translateZ(${depth}px)` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  radius?: number;
  onClick?: () => void;
}

// Button with magnetic pull effect
export function MagneticButton({
  children,
  className = '',
  strength = 40,
  radius = 150,
  onClick,
}: MagneticButtonProps) {
  // Motion values for the button position
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Add spring for smoother movement
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  // Reference for the button container
  const ref = useRef<HTMLButtonElement>(null);
  
  // Handle mouse move near the button
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from mouse to center of button
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    // Apply magnetic effect only when mouse is within radius
    if (distance < radius) {
      // Calculate pull strength based on distance (closer = stronger)
      const pull = 1 - distance / radius;
      
      // Apply pull to position
      x.set(distanceX * pull * (strength / 10));
      y.set(distanceY * pull * (strength / 10));
    } else {
      // Reset position when mouse is far away
      x.set(0);
      y.set(0);
    }
  };
  
  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <div 
      className="relative" 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.button
        ref={ref}
        className={`relative ${className}`}
        onClick={onClick}
        style={{
          x: springX,
          y: springY,
        }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.button>
    </div>
  );
}

interface GlowBorderProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hoverScale?: number;
}

// Element with animated glowing border on hover
export function GlowBorder({
  children,
  className = '',
  glowColor = 'rgba(255, 140, 0, 0.9)',
  hoverScale = 1.03,
}: GlowBorderProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`relative rounded-xl ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3 }}
    >
      {/* Glow border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none z-0"
        initial={{ 
          boxShadow: `0 0 10px 2px ${glowColor.replace(/,[^,]+$/, ',0.3)')}`
        }}
        animate={{ 
          boxShadow: isHovered 
            ? `0 0 30px 8px ${glowColor}, 0 0 0 2px ${glowColor}`
            : `0 0 10px 2px ${glowColor.replace(/,[^,]+$/, ',0.3)')}`
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
} 