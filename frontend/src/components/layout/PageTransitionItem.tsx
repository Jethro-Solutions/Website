import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { staggerItemVariant } from './PageTransition';

interface PageTransitionItemProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const PageTransitionItem = ({ 
  children, 
  delay = 0, 
  className = '' 
}: PageTransitionItemProps) => {
  return (
    <motion.div
      variants={staggerItemVariant}
      // Custom transition to override delay if needed
      transition={{ 
        delay,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionItem; 