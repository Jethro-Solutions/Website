'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import { animated } from 'react-spring';
import IconButton from '@/components/ui/IconButton';
import {
  rotateIconVariants,
  pulseIconVariants,
  bounceIconVariants,
  tadaIconVariants,
  useRotateIconSpring,
  useIconPopSpring,
  useIconColorSpring,
  spinIcon,
  drawSvgIcon,
  staggerIcons
} from '@/lib/animations';

// SVG Icons Components
const ChevronIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const DrawableLogoIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
    <path className="drawable-path" d="M20,50 A30,30 0 1,1 80,50 A30,30 0 1,1 20,50 Z" />
    <path className="drawable-path" d="M35,35 L65,65" />
    <path className="drawable-path" d="M35,65 L65,35" />
  </svg>
);

// Create animated SVG components using React Spring
const AnimatedChevron = animated(ChevronIcon);
const AnimatedSearch = animated(SearchIcon);
const AnimatedHeart = animated(HeartIcon);

/**
 * A comprehensive demonstration of the icon animation system
 * showcasing various animation techniques and interaction patterns
 */
const IconAnimationDemo = () => {
  // State for toggle animations
  const [rotated, setRotated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  
  // Refs for GSAP animations
  const spinIconRef = useRef<SVGSVGElement>(null);
  const drawableLogoRef = useRef<SVGSVGElement>(null);
  const staggeredIconsRef = useRef<HTMLDivElement>(null);
  
  // React Spring animations
  const rotateSpring = useRotateIconSpring(rotated);
  const searchPopSpring = useIconPopSpring(isSearchActive);
  const likeColorSpring = useIconColorSpring(isLiked, 'currentColor', '#f43f5e');
  
  // Framer Motion animations
  const [menuScope, menuAnimate] = useAnimate();

  // Toggle state and run GSAP spin animation
  const handleSpinClick = () => {
    if (spinIconRef.current) {
      spinIcon(spinIconRef.current);
    }
  };
  
  // Handle menu toggle with custom animation
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Animate lines to form X or menu icon
    if (!isMenuOpen) {
      menuAnimate('line:first-child', { y1: 12, y2: 12, rotate: 45, transformOrigin: 'center' }, { duration: 0.3 });
      menuAnimate('line:nth-child(2)', { opacity: 0 }, { duration: 0.1 });
      menuAnimate('line:last-child', { y1: 12, y2: 12, rotate: -45, transformOrigin: 'center' }, { duration: 0.3 });
    } else {
      menuAnimate('line:first-child', { y1: 6, y2: 6, rotate: 0 }, { duration: 0.3 });
      menuAnimate('line:nth-child(2)', { opacity: 1 }, { duration: 0.2, delay: 0.1 });
      menuAnimate('line:last-child', { y1: 18, y2: 18, rotate: 0 }, { duration: 0.3 });
    }
  };

  // Run staggered animation on icons
  const animateStaggeredIcons = () => {
    if (staggeredIconsRef.current) {
      const icons = staggeredIconsRef.current.querySelectorAll('svg');
      staggerIcons(icons, { scale: 1.2, duration: 0.3, repeat: 1, yoyo: true });
    }
  };
  
  // Run drawable icon animation on component mount
  useEffect(() => {
    if (drawableLogoRef.current) {
      const paths = drawableLogoRef.current.querySelectorAll('.drawable-path');
      paths.forEach((path, index) => {
        drawSvgIcon(path as SVGPathElement, 1.5, index * 0.5);
      });
    }
  }, []);

  return (
    <div className="space-y-12 p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif mb-8 text-center">
        Icon Animation System
      </h1>
      
      {/* Framer Motion Icon Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-teal-700">Framer Motion Icons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rotate Icon */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Rotate Animation</h3>
            <div className="flex justify-center">
              <motion.div
                variants={rotateIconVariants()}
                animate={rotated ? 'animate' : 'initial'}
                onClick={() => setRotated(!rotated)}
                className="cursor-pointer"
              >
                <ChevronIcon />
              </motion.div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to toggle rotation</p>
          </div>
          
          {/* Pulse Icon */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Pulse Animation</h3>
            <div className="flex justify-center">
              <motion.div
                variants={pulseIconVariants}
                animate="animate"
              >
                <BellIcon />
              </motion.div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Continuous pulse effect</p>
          </div>
          
          {/* Bounce Icon */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Bounce Animation</h3>
            <div className="flex justify-center">
              <motion.div
                variants={bounceIconVariants}
                animate="animate"
              >
                <SearchIcon />
              </motion.div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Continuous bounce effect</p>
          </div>
          
          {/* Tada Icon */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Tada Animation</h3>
            <div className="flex justify-center">
              <motion.div
                variants={tadaIconVariants}
                initial="initial"
                animate={isLiked ? 'animate' : 'initial'}
                onClick={() => setIsLiked(!isLiked)}
                className="cursor-pointer"
                style={{ color: isLiked ? '#f43f5e' : 'currentColor' }}
              >
                <HeartIcon />
              </motion.div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to show celebration</p>
          </div>
          
          {/* Notification Icon */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Notification Dot</h3>
            <div className="flex justify-center relative">
              <BellIcon />
              {isNotifying && (
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                />
              )}
            </div>
            <button 
              className="text-sm mt-3 px-2 py-1 bg-teal-500 text-white rounded"
              onClick={() => setIsNotifying(!isNotifying)}
            >
              Toggle Notification
            </button>
          </div>
          
          {/* Menu Transform */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Menu Transform</h3>
            <div className="flex justify-center">
              <div ref={menuScope} className="cursor-pointer" onClick={handleMenuToggle}>
                <MenuIcon />
              </div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to transform menu icon</p>
          </div>
        </div>
      </section>
      
      {/* React Spring Icon Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-teal-700">React Spring Icons</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rotate with Spring */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Spring Rotation</h3>
            <div className="flex justify-center">
              <div
                onClick={() => setRotated(!rotated)}
                className="cursor-pointer"
              >
                <div style={{ 
                  display: 'inline-block', 
                  transform: rotateSpring.transform.to(v => v) 
                }}>
                  <ChevronIcon />
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to toggle spring rotation</p>
          </div>
          
          {/* Pop/Scale with Spring */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Pop/Scale Effect</h3>
            <div className="flex justify-center">
              <div
                onMouseEnter={() => setIsSearchActive(true)}
                onMouseLeave={() => setIsSearchActive(false)}
                className="cursor-pointer"
              >
                <div style={{ 
                  display: 'inline-block', 
                  transform: searchPopSpring.transform.to(v => v) 
                }}>
                  <SearchIcon />
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Hover to see pop effect</p>
          </div>
          
          {/* Color Change with Spring */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Color Animation</h3>
            <div className="flex justify-center">
              <div
                onClick={() => setIsLiked(!isLiked)}
                className="cursor-pointer"
              >
                <div style={{ 
                  display: 'inline-block', 
                  color: likeColorSpring.color.to(v => v), 
                  fill: likeColorSpring.fill.to(v => v) 
                }}>
                  <HeartIcon />
                </div>
              </div>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to toggle color animation</p>
          </div>
        </div>
      </section>
      
      {/* GSAP Icon Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-teal-700">GSAP Icon Animations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Spin Animation */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Spin Animation</h3>
            <div className="flex justify-center">
              <svg 
                ref={spinIconRef}
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="cursor-pointer"
                onClick={handleSpinClick}
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to trigger spin animation</p>
          </div>
          
          {/* SVG Path Drawing */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">SVG Path Drawing</h3>
            <div className="flex justify-center">
              <svg 
                ref={drawableLogoRef}
                width="100" 
                height="100" 
                viewBox="0 0 100 100" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path className="drawable-path" d="M20,50 A30,30 0 1,1 80,50 A30,30 0 1,1 20,50 Z" />
                <path className="drawable-path" d="M35,35 L65,65" />
                <path className="drawable-path" d="M35,65 L65,35" />
              </svg>
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Automatic path drawing animation</p>
          </div>
          
          {/* Staggered Icon Animation */}
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Staggered Animation</h3>
            <div 
              className="flex space-x-4 justify-center" 
              ref={staggeredIconsRef}
              onClick={animateStaggeredIcons}
            >
              <SearchIcon />
              <BellIcon />
              <HeartIcon />
            </div>
            <p className="text-sm text-center mt-3 text-gray-500">Click to trigger staggered animation</p>
          </div>
        </div>
      </section>
      
      {/* Reusable Icon Button Component */}
      <section className="space-y-6">
        <h2 className="text-2xl font-serif text-teal-700">IconButton Component</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Scale Animation</h3>
            <div className="flex justify-center">
              <IconButton 
                icon={<SearchIcon />} 
                animationType="scale"
              />
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Color Animation</h3>
            <div className="flex justify-center">
              <IconButton 
                icon={<HeartIcon />} 
                animationType="color"
                hoverColor="#f43f5e"
              />
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">Both Animations</h3>
            <div className="flex justify-center">
              <IconButton 
                icon={<BellIcon />} 
                animationType="both"
                hoverColor="#eab308"
              />
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg shadow-sm">
            <h3 className="font-medium mb-3">With Label</h3>
            <div className="flex justify-center">
              <IconButton 
                icon={<MenuIcon />} 
                label="Menu"
                animationType="both"
                isActive={isMenuOpen}
                showActiveState={true}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconAnimationDemo; 