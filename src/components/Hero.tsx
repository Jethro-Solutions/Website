"use client";

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import AnimatedWordCycle from "./AnimatedWordCycle";

// Main Hero component that displays the landing page hero section
const Hero = () => {
  // State to handle loading animation
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Words for the animated word cycle
  const businessWords = ["Businesses", "Visionaries", "Innovators", "Startups", "Entrepreneurs"];

  // Effect to add a slight delay before showing content
  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <LampContainer>
      {/* Main content container with fade-in animation */}
      <div className={`container-custom relative z-20 text-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* "New" badge pill */}
        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-border bg-muted/20 backdrop-blur-sm">
          <span className="text-xs font-medium text-muted-foreground mr-2">New</span>
          <span className="text-xs">Advanced Analytics Platform</span>
          <ArrowRight className="h-3 w-3 ml-2 text-primary" />
        </div>
        
        {/* Animated main heading with gradient text */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="font-playfair text-h1 md:text-7xl lg:text-6xl font-bold leading-tight mb-10 max-w-[1200%] mx-auto bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent"
        >
          Delivering Leading Technologies for <span className="text-gradient">Forward-Thinking</span> <AnimatedWordCycle words={businessWords} className="text-white" />
        </motion.h1>
        
        {/* Subheading description text */}
        <p className="text-body md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Jethro Solutions provides cutting-edge business intelligence tools and services 
          designed to optimize operations and drive growth for modern companies.
        </p>
        
        {/* Call-to-action buttons container */}
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Button size="default" className="w-full sm:w-60 font-ibm-plex-serif">
            Contact Sales
          </Button>
          <Button size="default" className="w-full sm:w-60 ml-[-20em] font-ibm-plex-serif">
            How It Works
          </Button>
        </div>
      </div>
    </LampContainer>
  );
};

export default Hero;

// LampContainer component that creates the animated gradient lamp effect
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-start pt-0 overflow-hidden bg-black w-full rounded-md z",
        className
      )}
    >
      {/* Main lamp effect container */}
      <div className="relative flex w-full flex-1 scale-y-120 items-center justify-center isolate z-0 ">
        {/* Left gradient cone effect */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[50rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Gradient masks for smooth blending */}
          <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right gradient cone effect */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[50rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          {/* Gradient masks for smooth blending */}
          <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Background effects and blurs */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        
        {/* Cyan glow effects */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        
        {/* Horizontal line effect */}
        <motion.div
          initial={{ width: "5rem" }}
          whileInView={{ width: "50rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[50rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        {/* Top dark overlay */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>

      {/* Content container positioned over the lamp effect */}
      <div className="relative z-50 flex -translate-y-96 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};