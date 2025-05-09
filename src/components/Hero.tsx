"use client";
// Import necessary dependencies for the Hero component
import React from 'react';
import { ArrowRight } from 'lucide-react'; // Icon for CTA button
import { cn } from "@/lib/utils"; // Utility for conditional class names
import { motion } from "framer-motion"; // For animations
import { Icons } from "./ui/icons"; // Custom icon components
import HeroBadge from "./ui/hero-badge"; // Custom badge component
import { Button } from "./ui/button"; // UI button component
import { TiltedScroll } from "./ui/tilted-scroll"; // Custom scroll component for offerings

// Type definition for Spotlight component props
type SpotlightProps = {
  gradientFirst?: string;  // First gradient color/pattern
  gradientSecond?: string; // Second gradient color/pattern
  gradientThird?: string;  // Third gradient color/pattern
  translateY?: number;     // Vertical position adjustment
  width?: number;          // Width of the gradient element
  height?: number;         // Height of the gradient element
  smallWidth?: number;     // Width of smaller gradient elements
  duration?: number;       // Animation duration in seconds
  xOffset?: number;        // Horizontal movement distance for animation
};

/**
 * Spotlight component creates animated gradient background effect
 * Uses framer-motion for smooth animations and transitions
 */
export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 4,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
    // Main container with fade-in animation
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      {/* Left side animated gradient container */}
      <motion.div
        animate={{
          x: [0, xOffset, 0], // Horizontal movement animation
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        {/* Main large gradient element */}
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0`}
        />

        {/* First small gradient accent */}
        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />

        {/* Second small gradient accent */}
        <div
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />
      </motion.div>

      {/* Right side animated gradient container - mirrors left side */}
      <motion.div
        animate={{
          x: [0, -xOffset, 0], // Horizontal movement in opposite direction
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        {/* Main large gradient element */}
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0`}
        />

        {/* First small gradient accent */}
        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

        {/* Second small gradient accent */}
        <div
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />
      </motion.div>
    </motion.div>
  );
};

/**
 * GridBackground component creates a subtle grid pattern background
 * Using inline SVG for the repeating pattern
 */
export const GridBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    />
  );
};

// Data for service offerings displayed in the TiltedScroll component
const offeringItems = [
  { id: "1", text: "AI Agent Creation" },
  { id: "2", text: "Digital Transformation" },
  { id: "3", text: "Workflow Automation" },
  { id: "4", text: "Data Analytics" },
  { id: "5", text: "Process Optimization" },
  { id: "6", text: "Custom Solutions" },
];

/**
 * Main Hero component for the landing page
 * Combines visual elements, heading, description, CTAs and service offerings
 */
const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center section-padding bg-gray-900 relative overflow-hidden">
      {/* Background visual elements */}
      <Spotlight />
      <GridBackground />
      
      {/* Main content container */}
      <div className="container mx-auto relative z-10">
        {/* Heading section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-playfair font-semibold leading-tight text-white">
            Wisdom-Driven <br /> Technology Stewardship
          </h1>
        </div>
        
        {/* Content layout - becomes row on medium screens and larger */}
        <div className="flex flex-col md:flex-row justify-between items-start max-w-full">
          {/* Left column with main messaging and CTAs */}
          <div className="max-w-2xl">
            <div className="flex flex-col space-y-5 animate-fade-in">
              {/* Custom badge component */}
              <HeroBadge
                href="/docs"
                text="Your First Advisor"
                icon={<Icons.logo className="h-4 w-4 text-white" />}
                endIcon={<Icons.chevronRight className="h-4 w-4 text-white" />}
                variant="ghost"
                className="text-white"
              />
              
              {/* Main description text */}
              <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
                Guiding businesses toward optimal implementation with 
                forward-thinking expertise and proven methodologies.
              </p>
              
              {/* CTA buttons - stack on small screens, row on larger screens */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Primary CTA with green highlight and glow effect */}
                <Button asChild variant="default" className="bg-[#28452c] hover:bg-[#28452c]/90 border border-[#4e8253] shadow-[0_0_15px_rgba(78,130,83,0.5)] transition-all duration-300">
                  <a href="#services" className="flex items-center justify-center gap-2">
                    Explore Our Services <ArrowRight size={18} />
                  </a>
                </Button>
                
                {/* Secondary CTA with subtle styling */}
                <Button asChild variant="secondary" className="border border-gray-400 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                  <a href="#approach">
                    Our Approach
                  </a>
                </Button>
              </div>
              
              {/* Social media links */}
              <div className="flex items-center gap-4 mt-8 text-gray-400">
                <a href="https://github.com" className="hover:text-white transition-colors" aria-label="Github">
                  <Icons.github className="h-5 w-5" />
                </a>
                <a href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Twitter">
                  <Icons.twitter className="h-5 w-5" />
                </a>
                <a href="https://react.dev" className="hover:text-white transition-colors" aria-label="Built with React">
                  <Icons.react className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column with service offerings visualization */}
          {/* Hidden on mobile, shown on medium screens and larger */}
          <div className="mt-12 md:mt-0 opacity-95 hidden md:flex items-center justify-center">
            <div className="relative mt-36">
              {/* Label above the offerings list */}
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-300 bg-gray-800/80 px-4 py-1 rounded-full border border-gray-700 whitespace-nowrap z-10">
                Features
              </div>
              
              {/* Container for TiltedScroll component */}
              <div style={{ transform: 'scale(1.2)' }}>
                <TiltedScroll items={offeringItems} className="h-72 w-[320px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
