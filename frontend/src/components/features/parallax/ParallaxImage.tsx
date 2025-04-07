'use client';

import React from 'react';
import Image from 'next/image';
import ParallaxBase from './ParallaxBase';

export interface ParallaxImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  speed?: number;
  direction?: 'vertical' | 'horizontal';
  className?: string;
  containerClassName?: string;
  imgClassName?: string;
  fill?: boolean;
  disableOnMobile?: boolean;
  priority?: boolean;
  quality?: number;
}

/**
 * An image component with parallax scrolling effect
 * Uses Next.js Image component with Framer Motion's parallax effect
 */
const ParallaxImage = ({
  src,
  alt,
  width,
  height,
  speed = 0.2,
  direction = 'vertical',
  className = '',
  containerClassName = '',
  imgClassName = '',
  fill = false,
  disableOnMobile = true,
  priority = false,
  quality = 90,
}: ParallaxImageProps) => {
  return (
    <ParallaxBase
      speed={speed}
      direction={direction}
      className={className}
      containerClassName={containerClassName}
      disableOnMobile={disableOnMobile}
    >
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${imgClassName}`}
          priority={priority}
          quality={quality}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imgClassName}
          priority={priority}
          quality={quality}
        />
      )}
    </ParallaxBase>
  );
};

export default ParallaxImage; 