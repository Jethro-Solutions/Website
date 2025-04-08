/**
 * Design tokens for Jethro Solutions website
 * This file contains the core design tokens used throughout the application
 */

export const colors = {
  softBlack: '#121212',
  softWhite: '#F8F8F8',
  softTan: '#E8E0D5',
  softOrange: '#F5A47C', // Adding subtle orange color
  
  // Additional colors for the UI
  primary: {
    DEFAULT: '#121212', // Using soft-black as primary
    light: '#333333',
    dark: '#000000',
  },
  secondary: {
    DEFAULT: '#E8E0D5', // Using soft-tan as secondary
    light: '#F5F0E8',
    dark: '#D6CFC2',
  },
  accent: {
    DEFAULT: '#4A6FE9', // Blue accent color
    light: '#7C96F0',
    dark: '#2E56D6',
    orange: '#F5A47C', // Adding orange as an accent option
  },
  success: '#2E7D32',
  warning: '#ED6C02',
  error: '#D32F2F',
  info: '#0288D1',
};

export const spacing = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  xxl: '3rem',    // 48px
  xxxl: '4rem',   // 64px
};

export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  xxl: '1.5rem',    // 24px
  xxxl: '2rem',     // 32px
  display1: '3rem', // 48px
  display2: '4rem', // 64px
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',  // 2px
  md: '0.25rem',   // 4px
  lg: '0.5rem',    // 8px
  xl: '1rem',      // 16px
  full: '9999px',  // Full rounded
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
};

export const transitions = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
};

export const zIndices = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modal: 1300,
  popover: 1400,
  tooltip: 1500,
}; 