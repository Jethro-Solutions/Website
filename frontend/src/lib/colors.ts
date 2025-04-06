/**
 * Color utilities for the Jethro Solutions website
 * Provides functions for generating gradients and managing color schemes
 */

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