import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  color?: 'dark' | 'light';
  className?: string;
  useFullImage?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  color = 'dark',
  className = '',
  useFullImage = false,
}) => {
  if (useFullImage) {
    // Use the SVG files directly
    if (color === 'light') {
      return (
        <img 
          src="/logos/white updated text icon transparent.svg" 
          alt="Jethro Solutions" 
          className={`h-8 ${className}`}
        />
      );
    }
    
    return variant === 'full' ? (
      <img 
        src="/logos/text icon.svg" 
        alt="Jethro Solutions" 
        className={`h-8 ${className}`}
      />
    ) : (
      <img 
        src="/logos/icon black.svg" 
        alt="Jethro Solutions" 
        className={`h-8 w-8 ${className}`}
      />
    );
  }
  
  // Fallback to text-based logo if images don't load
  return (
    <div className={`logo ${className}`}>
      {variant === 'full' ? (
        <div className={`font-playfair font-bold text-xl ${color === 'light' ? 'text-jethro-cream' : 'text-jethro-black'}`}>
          Jethro Solutions
        </div>
      ) : (
        <div className={`font-playfair font-bold text-xl ${color === 'light' ? 'text-jethro-cream' : 'text-jethro-black'}`}>
          JS
        </div>
      )}
    </div>
  );
}; 