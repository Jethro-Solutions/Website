/**
 * Texture utilities for the Jethro Solutions website
 * Provides functions for generating textures and noise patterns
 */

/**
 * Creates an SVG noise pattern as a data URL
 * This can be used for backgrounds and texture overlays
 * 
 * @param baseOpacity - Base opacity of the noise (0-1)
 * @param density - Density of noise points (higher = more points)
 * @param variation - Variation in opacity of individual points
 * @returns SVG data URL
 */
export function generateNoiseSVG(
  baseOpacity: number = 0.2,
  density: number = 100,
  variation: number = 0.5
): string {
  // Create a 100x100 SVG
  const width = 100;
  const height = 100;
  let svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
  
  // Generate random noise points
  for (let i = 0; i < density; i++) {
    const x = Math.floor(Math.random() * width);
    const y = Math.floor(Math.random() * height);
    const size = Math.random() * 2 + 0.5; // Random size between 0.5 and 2.5
    
    // Random opacity variation
    const opacity = Math.max(0.1, Math.min(0.9, baseOpacity + (Math.random() * variation * 2 - variation)));
    
    // Add a circle with random opacity
    svgContent += `<circle cx="${x}" cy="${y}" r="${size}" fill="currentColor" fill-opacity="${opacity.toFixed(2)}" />`;
  }
  
  svgContent += '</svg>';
  
  // Convert to data URL
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`;
  return dataUrl;
}

/**
 * Creates a CSS style object for applying a noise texture overlay
 * 
 * @param opacity - Overall opacity of the noise effect
 * @param blendMode - CSS blend mode for the noise (overlay, multiply, etc.)
 * @returns CSS styles object for the noise overlay
 */
export function noiseOverlay(
  opacity: number = 0.05,
  blendMode: string = 'overlay'
): Record<string, any> {
  const noisePattern = generateNoiseSVG();
  
  return {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${noisePattern}")`,
      backgroundRepeat: 'repeat',
      opacity: opacity.toString(),
      mixBlendMode: blendMode,
      pointerEvents: 'none',
      zIndex: '1',
    }
  };
}

/**
 * Creates a grainy texture for use with gradients and backgrounds
 * 
 * @param grainOpacity - Opacity of the grain texture
 * @param grainDensity - Density of the grain effect
 * @param backgroundColor - Base background color
 * @returns CSS styles object
 */
export function grainTexture(
  grainOpacity: number = 0.1,
  grainDensity: number = 200,
  backgroundColor: string = 'transparent'
): Record<string, any> {
  const noisePattern = generateNoiseSVG(0.5, grainDensity, 0.7);
  
  return {
    position: 'relative',
    backgroundColor,
    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundImage: `url("${noisePattern}")`,
      backgroundRepeat: 'repeat',
      opacity: grainOpacity.toString(),
      mixBlendMode: 'multiply',
      pointerEvents: 'none',
      zIndex: '0',
    }
  };
}

/**
 * Creates a dot pattern overlay for texturing backgrounds
 * 
 * @param dotSpacing - Spacing between dots in pixels
 * @param dotSize - Size of dots in pixels
 * @param dotColor - Color of the dots
 * @param dotOpacity - Opacity of the dots
 * @returns CSS styles object
 */
export function dotPattern(
  dotSpacing: number = 20,
  dotSize: number = 1,
  dotColor: string = 'currentColor',
  dotOpacity: number = 0.2
): Record<string, any> {
  // Create an SVG dot pattern
  const svg = `
    <svg width="${dotSpacing}" height="${dotSpacing}" viewBox="0 0 ${dotSpacing} ${dotSpacing}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${dotSpacing/2}" cy="${dotSpacing/2}" r="${dotSize}" fill="${dotColor}" fill-opacity="${dotOpacity}" />
    </svg>
  `;
  
  const encodedSvg = encodeURIComponent(svg.trim());
  const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
  
  return {
    backgroundImage: `url("${dataUrl}")`,
    backgroundRepeat: 'repeat',
    backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
  };
} 