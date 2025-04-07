'use client';

import { ReactNode, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
  transitionType?: keyof typeof pageTransitionVariants;
  scrollToTop?: boolean;
}

// Page transition variants with multiple options
export const pageTransitionVariants = {
  // Fade transition (default)
  fade: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  },
  
  // Slide and fade transition
  slide: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  },
  
  // Scale and fade transition
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      scale: 1.05,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  },
  
  // Blur transition with fade
  blur: {
    initial: { opacity: 0, filter: 'blur(10px)' },
    animate: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }
    },
    exit: { 
      opacity: 0, 
      filter: 'blur(5px)',
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  },
  
  // Staggered children transition (for pages with multiple components)
  stagger: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    }
  }
};

// Child item variant for staggered animations
export const staggerItemVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }
  },
  exit: { 
    opacity: 0, 
    y: 10,
    transition: { 
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

const PageTransition = ({ 
  children, 
  transitionType = 'fade',
  scrollToTop = true 
}: PageTransitionProps) => {
  const pathname = usePathname();
  
  // Optionally scroll to top on page change
  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, [pathname, scrollToTop]);
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitionVariants[transitionType]}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition; 