"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

/**
 * AnimatedGridPatternProps: Configuration options for the 3D animated grid
 * 
 * @property width - Width of each grid cell in pixels
 * @property height - Height of each grid cell in pixels
 * @property x - X offset for the grid pattern
 * @property y - Y offset for the grid pattern
 * @property strokeDasharray - Pattern for dashed grid lines
 * @property numSquares - Number of animated highlights to show
 * @property maxOpacity - Maximum opacity of the highlighted squares
 * @property duration - Duration of each animation cycle in seconds
 * @property repeatDelay - Delay between animation repeats
 * @property perspective - CSS perspective value controlling 3D depth
 * @property rotateX - X-axis rotation angle (pitch)
 * @property rotateY - Y-axis rotation angle (yaw)
 * @property vignetteStrength - Intensity of the edge darkening effect (0-1)
 */
interface AnimatedGridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: any;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  perspective?: number;
  rotateX?: number;
  rotateY?: number;
  vignetteStrength?: number;
  backgroundColor?: string;
  gridColor?: string;
  highlightColor?: string;
  scale?: number;
}

export function AnimatedGridPattern({
  // Grid cell dimensions and positioning
  width = 45,
  height = 45,
  x = -1,
  y = -1,
  strokeDasharray = 0.5,
  
  // Animation configuration
  numSquares = 150,
  maxOpacity = 0.25,
  
  duration = 2,
  repeatDelay = .25,
  
  // 3D effect configuration
  perspective = 2000,
  rotateX = -22, // Looking down at the grid at a 60-degree angle
  rotateY = -20,  // No horizontal tilt
  scale = 1.8,  // Scale factor to ensure coverage
  
  // Visual styling
  vignetteStrength = .9,
  backgroundColor = "202020", // Very dark background for contrast
  gridColor = "#1a1a1a", // Subtle grid lines
  highlightColor = "#151da3", // Subtle highlight squares
  
  className,
  ...props
}: AnimatedGridPatternProps) {
  // Generate unique IDs for SVG elements
  const id = useId();
  const vignetteId = useId();
  
  // Reference to measure container dimensions
  const containerRef = useRef(null);
  
  // State management
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [squares, setSquares] = useState(() => generateSquares(numSquares));

  /**
   * Calculate a random position within the container dimensions
   * Returns [x, y] coordinates in grid cell units
   */
  function getPos() {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ];
  }

  /**
   * Create an array of initial square positions and properties
   * Each square has a unique ID, position, and z-depth
   */
  function generateSquares(count: number) {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      pos: getPos(),
      z: Math.random() * 50, // Random z-depth for 3D parallax effect
    }));
  }

  /**
   * Update a single square's position when its animation completes
   * This creates the effect of squares appearing in different locations
   */
  const updateSquarePosition = (id: number) => {
    setSquares((currentSquares) =>
      currentSquares.map((sq) =>
        sq.id === id
          ? {
              ...sq,
              pos: getPos(),
              z: Math.random() * 50, // New random z-depth
            }
          : sq,
      ),
    );
  };

  /**
   * Initialize squares when container dimensions are available
   * This ensures random positions are properly calculated
   */
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions, numSquares]);

  /**
   * Track container size changes using ResizeObserver
   * Updates dimensions state when the component resizes
   */
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <div 
      className={cn(
        "absolute inset-0 w-full h-full overflow-hidden",
        className
      )}
      style={{ 
        perspective: `${perspective}px`, // 3D perspective for depth
        backgroundColor, // Apply custom background color
      }}
    >
      {/* Main SVG container with fixed 3D rotation */}
      <motion.svg
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        style={{ 
          transformStyle: "preserve-3d", // Enable 3D transformations
          minWidth: "100%",
          minHeight: "100%",
          overflow: "visible",
        }}
        initial={{ rotateX, rotateY, scale }}
        animate={{ rotateX, rotateY, scale }}
        {...props}
      >
        <defs>
          {/* Grid pattern definition */}
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
            x={x}
            y={y}
          >
            {/* Single grid cell path drawing lines */}
            <path
              d={`M.5 ${height}V.5H${width}`}
              fill="none"
              stroke={gridColor} // Apply custom grid line color
              strokeWidth="0.5"
              strokeDasharray={strokeDasharray}
            />
          </pattern>
          
          {/* Vignette effect definition */}
          <radialGradient id={vignetteId} cx="70%" cy="80%" r="45%" fx="80%" fy="80%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" /> {/* Center (transparent) */}
            <stop offset="75%" stopColor="rgba(0,0,0,0.3)" /> {/* Mid-radius */}
            <stop offset="100%" stopColor={`rgba(0,0,0,${vignetteStrength})`} /> {/* Edge (darkest) */}
          </radialGradient>
        </defs>
        
        {/* Background rect filled with the base color */}
        <rect width="120%" height="120%" x="-10%" y="-10%" fill={backgroundColor} />
        
        {/* Grid pattern overlay */}
        <rect width="120%" height="120%" x="-10%" y="-10%" fill={`url(#${id})`} />
        
        {/* Container for the animated highlight squares */}
        <svg x={x} y={y} className="overflow-visible" width="120%" height="120%">
          {/* Map each square to an animated rectangle */}
          {squares.map(({ pos: [x, y], id, z }, index) => (
            <motion.rect
              initial={{ opacity: 0 }}
              animate={{ opacity: maxOpacity }}
              transition={{
                duration,
                repeat: Infinity,
                delay: index * 0.15,
                repeatType: "reverse",
                repeatDelay: Math.random() * repeatDelay,
              }}
              onAnimationComplete={() => updateSquarePosition(id)}
              key={`${x}-${y}-${index}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
              fill={highlightColor}
              strokeWidth="0"
              style={{ 
                transformStyle: "preserve-3d",
                transform: `translateZ(${z}px)`
              }}
            />
          ))}
        </svg>
        
        {/* Vignette overlay to darken edges */}
        <rect width="100%" height="100%" x="-10%" y="-10%" fill={`url(#${vignetteId})`} />
      </motion.svg>
    </div>
  );
}

export default AnimatedGridPattern;
