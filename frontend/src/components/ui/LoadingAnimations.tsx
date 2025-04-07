import React from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { COLORS, linearGradient, conicGradient, radialGradient } from '@/lib/colors';
import { staggerContainer } from '@/lib/animations/utils';

type LoadingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type LoadingVariant = 'primary' | 'secondary' | 'white';

// Base interface for all loading components
interface BaseLoadingProps {
  size?: LoadingSize;
  variant?: LoadingVariant;
  className?: string;
  text?: string;
  showText?: boolean;
}

// Size mapping for dimensions
const sizeMap = {
  xs: 'h-4 w-4',
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

// Text size mapping
const textSizeMap = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

// Colors based on variant
const getColorsByVariant = (variant: LoadingVariant) => {
  switch (variant) {
    case 'primary':
      return {
        from: COLORS.primary.blue.DEFAULT,
        via: COLORS.primary.orange.DEFAULT,
        to: COLORS.primary.red.DEFAULT,
      };
    case 'secondary':
      return {
        from: COLORS.secondary.teal.DEFAULT,
        via: COLORS.secondary.teal.light,
        to: COLORS.secondary.green.DEFAULT,
      };
    case 'white':
      return {
        from: '#FFFFFF',
        via: '#CCCCCC',
        to: '#FFFFFF',
      };
  }
};

// Text fade animation
const textFadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.3 }
  }
};

/**
 * GradientSpinner - A loading spinner with gradient stroke that animates rotation
 */
export function GradientSpinner({
  size = 'md',
  variant = 'primary',
  className,
  text,
  showText = false,
}: BaseLoadingProps) {
  const colors = getColorsByVariant(variant);
  
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <motion.div 
        className={cn(sizeMap[size], 'relative')}
        style={{
          background: conicGradient('0deg', 'center', [
            { color: colors.from, position: '0%' },
            { color: colors.via, position: '50%' },
            { color: colors.to, position: '100%' },
          ]),
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: 'linear',
        }}
      >
        <div className={cn('absolute inset-1 bg-background rounded-full')} />
      </motion.div>
      
      {showText && text && (
        <motion.p 
          className={cn(textSizeMap[size], 'text-text-muted font-mono')}
          variants={textFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

/**
 * PulsingDots - A set of pulsing dots with gradient colors
 */
export function PulsingDots({
  size = 'md',
  variant = 'primary',
  className,
  text,
  showText = false,
}: BaseLoadingProps) {
  const colors = getColorsByVariant(variant);
  const dotSize = size === 'xs' ? 'h-1 w-1' : 
                 size === 'sm' ? 'h-2 w-2' : 
                 size === 'md' ? 'h-3 w-3' : 
                 size === 'lg' ? 'h-4 w-4' : 'h-5 w-5';
  
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };
  
  const dotVariants: Variants = {
    hidden: {
      scale: 0.5,
      opacity: 0.3,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }
  };
  
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <motion.div 
        className="flex gap-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {[colors.from, colors.via, colors.to].map((color, i) => (
          <motion.div
            key={i}
            className={cn(dotSize, 'rounded-full')}
            style={{ background: color }}
            variants={dotVariants}
          />
        ))}
      </motion.div>
      
      {showText && text && (
        <motion.p 
          className={cn(textSizeMap[size], 'text-text-muted font-mono')}
          variants={textFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

/**
 * GradientBar - A progress bar with animated gradient filling
 */
export function GradientBar({
  size = 'md',
  variant = 'primary',
  className,
  text,
  showText = false,
}: BaseLoadingProps) {
  const colors = getColorsByVariant(variant);
  const height = size === 'xs' ? 'h-1' : 
                size === 'sm' ? 'h-1.5' : 
                size === 'md' ? 'h-2' : 
                size === 'lg' ? 'h-3' : 'h-4';
  const width = size === 'xs' ? 'w-16' : 
               size === 'sm' ? 'w-24' : 
               size === 'md' ? 'w-32' : 
               size === 'lg' ? 'w-40' : 'w-48';
  
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <div className={cn(width, height, 'rounded-full bg-background-lighter overflow-hidden')}>
        <motion.div
          className={cn(height, 'rounded-full')}
          style={{
            background: linearGradient('to right', [
              { color: colors.from, position: '0%' },
              { color: colors.via, position: '50%' },
              { color: colors.to, position: '100%' },
            ]),
            backgroundSize: '200% 100%',
          }}
          animate={{
            width: ['0%', '100%'],
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            width: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
              repeatDelay: 0.5,
            },
            backgroundPosition: {
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'mirror',
            },
          }}
        />
      </div>
      
      {showText && text && (
        <motion.p 
          className={cn(textSizeMap[size], 'text-text-muted font-mono')}
          variants={textFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

/**
 * BlurPulse - A pulsing blurred circle with gradient
 */
export function BlurPulse({
  size = 'md',
  variant = 'primary',
  className,
  text,
  showText = false,
}: BaseLoadingProps) {
  const colors = getColorsByVariant(variant);
  
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2', className)}>
      <div className={cn('relative', sizeMap[size])}>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: radialGradient('circle', 'center', [
              { color: colors.via, position: '0%' },
              { color: 'transparent', position: '70%' },
            ]),
            filter: 'blur(8px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: radialGradient('circle', 'center', [
              { color: colors.from, position: '0%' },
              { color: 'transparent', position: '100%' },
            ]),
          }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [1, 0.6, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        />
      </div>
      
      {showText && text && (
        <motion.p 
          className={cn(textSizeMap[size], 'text-text-muted font-mono')}
          variants={textFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}

/**
 * GradientSkeleton - A gradient-based skeleton loading component
 */
export function GradientSkeleton({
  className,
  variant = 'primary',
}: {
  className?: string;
  variant?: LoadingVariant;
}) {
  const colors = getColorsByVariant(variant);
  
  return (
    <div 
      className={cn('rounded-md overflow-hidden relative', className)}
      style={{ background: COLORS.background.lighter }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: linearGradient('to right', [
            { color: 'transparent', position: '0%' },
            { color: colors.via + '40', position: '50%' },
            { color: 'transparent', position: '100%' },
          ]),
        }}
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}

/**
 * LoadingOverlay - A full screen loading overlay with branded animations
 */
export function LoadingOverlay({
  message = 'Loading...',
  variant = 'primary',
}: {
  message?: string;
  variant?: LoadingVariant;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-DEFAULT/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex flex-col items-center gap-4"
        variants={staggerContainer(0.2)}
        initial="hidden"
        animate="visible"
      >
        <GradientSpinner size="lg" variant={variant} />
        <motion.p 
          className="text-text-DEFAULT font-mono text-lg"
          variants={textFadeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {message}
        </motion.p>
      </motion.div>
    </motion.div>
  );
} 