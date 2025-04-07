/**
 * Color utilities for the Jethro Solutions website
 * Provides functions for generating gradients and managing color schemes
 */

import { generateNoiseSVG } from './textureUtils';

// Define the core brand colors as constants for easy access
export const COLORS = {
  // Primary colors
  primary: {
    blue: {
      DEFAULT: '#0F2D5F',
      light: '#1A4DA6',
      dark: '#091C3E',
    },
    orange: {
      DEFAULT: '#F15A24',
      light: '#FF7D4C',
      dark: '#D44111',
    },
    red: {
      DEFAULT: '#D02A2A',
      light: '#F45151',
      dark: '#B01B1B',
    },
  },
  // Secondary colors
  secondary: {
    teal: {
      DEFAULT: '#1AB0B0',
      light: '#34D0D0',
      dark: '#128888',
    },
    green: {
      DEFAULT: '#27A844',
      light: '#3ECB60',
      dark: '#1D7F32',
    },
  },
  // Background colors
  background: {
    DEFAULT: '#000000',
    light: '#121212',
    lighter: '#202020',
  },
  // Text colors
  text: {
    DEFAULT: '#FFFFFF', 
    muted: '#CCCCCC',
    subtle: '#999999',
  },
};

/**
 * Generates a CSS linear gradient string using the brand colors
 * 
 * @param direction - The direction of the gradient in degrees or a keyword
 * @param colorStops - Array of color stops with color and optional position
 * @returns CSS gradient string
 */
export function linearGradient(
  direction: string = '135deg',
  colorStops: Array<{ color: string; position?: string }> = [
    { color: COLORS.primary.blue.DEFAULT, position: '0%' },
    { color: COLORS.primary.orange.DEFAULT, position: '50%' },
    { color: COLORS.primary.red.DEFAULT, position: '100%' },
  ]
): string {
  const stops = colorStops
    .map(({ color, position }) => (position ? `${color} ${position}` : color))
    .join(', ');
  
  return `linear-gradient(${direction}, ${stops})`;
}

/**
 * Generates a CSS radial gradient string using the brand colors
 * 
 * @param shape - The shape of the gradient ('circle' or 'ellipse')
 * @param position - The position of the gradient center
 * @param colorStops - Array of color stops with color and optional position
 * @returns CSS gradient string
 */
export function radialGradient(
  shape: 'circle' | 'ellipse' = 'circle',
  position: string = 'center',
  colorStops: Array<{ color: string; position?: string }> = [
    { color: COLORS.primary.blue.DEFAULT, position: '0%' },
    { color: COLORS.primary.orange.DEFAULT, position: '60%' },
    { color: COLORS.primary.red.DEFAULT, position: '100%' },
  ]
): string {
  const stops = colorStops
    .map(({ color, position }) => (position ? `${color} ${position}` : color))
    .join(', ');
  
  return `radial-gradient(${shape} at ${position}, ${stops})`;
}

/**
 * Generates a CSS conic gradient string
 * 
 * @param angle - The starting angle of the gradient
 * @param position - The position of the gradient center
 * @param colorStops - Array of color stops with color and optional position
 * @returns CSS gradient string
 */
export function conicGradient(
  angle: string = '0deg',
  position: string = 'center',
  colorStops: Array<{ color: string; position?: string }> = [
    { color: COLORS.primary.blue.DEFAULT, position: '0%' },
    { color: COLORS.primary.orange.DEFAULT, position: '50%' },
    { color: COLORS.primary.red.DEFAULT, position: '100%' },
  ]
): string {
  const stops = colorStops
    .map(({ color, position }) => (position ? `${color} ${position}` : color))
    .join(', ');
  
  return `conic-gradient(from ${angle} at ${position}, ${stops})`;
}

/**
 * Creates a glass-like blurred background with brand colors
 * 
 * @param opacity - Background opacity
 * @param blur - Blur amount in pixels
 * @param baseColor - Base color for the background
 * @returns CSS styles object
 */
export function glassEffect(
  opacity: number = 0.2,
  blur: number = 8,
  baseColor: string = COLORS.background.light
) {
  return {
    backgroundColor: `${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
  };
}

/**
 * Creates a CSS gradient overlay with specified opacity
 * 
 * @param gradient - The gradient function to use
 * @param opacity - Opacity value (0-1)
 * @returns CSS background style with opacity
 */
export function gradientOverlay(
  gradient: string = linearGradient(),
  opacity: number = 0.8
): string {
  return `linear-gradient(rgba(0,0,0,${1 - opacity}), rgba(0,0,0,${1 - opacity})), ${gradient}`;
}

/**
 * Creates a multi-layered gradient with blur effect
 * 
 * @param baseGradient - The base gradient
 * @param blurAmount - Amount of blur in pixels
 * @param opacity - Opacity of the blur layer
 * @returns CSS styles object
 */
export function blurredGradient(
  baseGradient: string = linearGradient('135deg', [
    { color: COLORS.primary.blue.DEFAULT, position: '0%' },
    { color: COLORS.primary.orange.DEFAULT, position: '100%' },
  ]),
  blurAmount: number = 30,
  opacity: number = 0.7
): Record<string, any> {
  return {
    position: 'relative',
    background: baseGradient,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: '0',
      background: baseGradient,
      filter: `blur(${blurAmount}px)`,
      opacity: opacity.toString(),
      zIndex: '-1',
    }
  };
}

/**
 * Creates a mesh gradient effect with multiple radial gradients
 * 
 * @param baseColor - The base background color
 * @param gradientPoints - Array of gradient points with position and colors
 * @returns CSS background value
 */
export function meshGradient(
  baseColor: string = COLORS.background.DEFAULT,
  gradientPoints: Array<{
    position: [number, number]; // [x%, y%]
    size: string;
    colors: [string, string];
    opacity?: number;
  }> = [
    {
      position: [20, 30],
      size: '40%',
      colors: [COLORS.primary.blue.light, 'transparent'],
      opacity: 0.7
    },
    {
      position: [70, 40],
      size: '50%',
      colors: [COLORS.primary.orange.light, 'transparent'],
      opacity: 0.6
    },
    {
      position: [40, 70], 
      size: '35%',
      colors: [COLORS.secondary.teal.light, 'transparent'],
      opacity: 0.5
    }
  ]
): string {
  // Start with the base color
  let backgroundValue = baseColor;
  
  // Add each radial gradient
  gradientPoints.forEach(({ position, size, colors, opacity = 1 }) => {
    const [x, y] = position;
    const [color1, color2] = colors;
    
    // Create a semi-transparent version of color1 if opacity < 1
    const adjustedColor = opacity < 1 
      ? `${color1}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`
      : color1;
    
    const gradient = `radial-gradient(circle ${size} at ${x}% ${y}%, ${adjustedColor}, ${color2})`;
    backgroundValue = `${gradient}, ${backgroundValue}`;
  });
  
  return backgroundValue;
}

/**
 * Creates a frosted glass effect with custom blur and brightness
 * 
 * @param blurAmount - Amount of blur in pixels
 * @param brightness - Brightness level (0-2, where 1 is normal)
 * @param opacity - Background opacity
 * @param baseColor - Base background color
 * @returns CSS styles object
 */
export function frostGlass(
  blurAmount: number = 10,
  brightness: number = 1.2,
  opacity: number = 0.2,
  baseColor: string = COLORS.background.light
): Record<string, any> {
  return {
    backgroundColor: `${baseColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`,
    backdropFilter: `blur(${blurAmount}px) brightness(${brightness})`,
    WebkitBackdropFilter: `blur(${blurAmount}px) brightness(${brightness})`,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  };
}

/**
 * Creates a CSS keyframe animation for gradient rotation
 * 
 * @param duration - Animation duration in seconds
 * @param timing - CSS timing function
 * @returns CSS animation properties object
 */
export function animatedGradient(
  duration: number = 8,
  timing: string = 'ease-in-out'
): Record<string, any> {
  return {
    backgroundSize: '400% 400%',
    animation: `gradientAnimation ${duration}s ${timing} infinite`,
  };
}

/**
 * Generates a CSS keyframe rule for gradient animation
 * This should be added to a global stylesheet or styled-components global style
 */
export const gradientAnimationKeyframes = `
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

/**
 * Creates a noise texture overlay for gradients
 * 
 * @param opacity - Opacity of the noise texture
 * @param scale - Scale of the noise (smaller = more detailed)
 * @returns CSS styles object with positioned noise texture
 */
export function noiseTexture(
  opacity: number = 0.05,
  scale: number = 100
): Record<string, any> {
  const noisePattern = generateNoiseSVG(0.3, 150, 0.6);
  
  return {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${noisePattern}")`,
      backgroundRepeat: 'repeat',
      backgroundSize: `${scale}px ${scale}px`,
      opacity: opacity.toString(),
      mixBlendMode: 'overlay',
      pointerEvents: 'none',
    }
  };
}

/**
 * Creates a blurred spotlight effect
 * 
 * @param position - Position of the spotlight [x%, y%]
 * @param size - Size of the spotlight in percentage
 * @param color - Color of the spotlight
 * @param blurAmount - Amount of blur in pixels
 * @returns CSS styles object
 */
export function blurredSpotlight(
  position: [number, number] = [50, 50],
  size: number = 40,
  color: string = COLORS.primary.blue.light,
  blurAmount: number = 70
): Record<string, any> {
  const [x, y] = position;
  
  return {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle ${size}% at ${x}% ${y}%, ${color}40, transparent)`,
    filter: `blur(${blurAmount}px)`,
    zIndex: '0',
    pointerEvents: 'none',
  };
} 