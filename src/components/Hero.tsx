"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Icons } from "./ui/icons";
import HeroBadge from "./ui/hero-badge";
import { Button } from "./ui/button";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export const Spotlight = ({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) => {
  return (
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
      <motion.div
        animate={{
          x: [0, xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0`}
        />

        <div
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 left-0 origin-top-left`}
        />

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

      <motion.div
        animate={{
          x: [0, -xOffset, 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-0 right-0 w-screen h-screen z-40 pointer-events-none"
      >
        <div
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0`}
        />

        <div
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
          className={`absolute top-0 right-0 origin-top-right`}
        />

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

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 flex items-center section-padding bg-gray-900 relative overflow-hidden">
      <Spotlight />
      <GridBackground />
      <div className="container mx-auto relative z-10">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-playfair font-semibold leading-tight text-white">
            Wisdom-Driven <br /> Technology Stewardship
          </h1>
        </div>
        
        <div className="max-w-2xl">
          <div className="flex flex-col space-y-5 animate-fade-in">
            <HeroBadge
              href="/docs"
              text="Your First Advisor"
              icon={<Icons.logo className="h-4 w-4 text-white" />}
              endIcon={<Icons.chevronRight className="h-4 w-4 text-white" />}
              variant="ghost"
              className="text-white"
            />
            <p className="text-lg md:text-xl text-gray-200 max-w-xl leading-relaxed">
              Guiding businesses toward optimal implementation with 
              forward-thinking expertise and proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild variant="default" className="bg-[#28452c] hover:bg-[#28452c]/90 border border-[#4e8253] shadow-[0_0_15px_rgba(78,130,83,0.5)] transition-all duration-300">
                <a href="#services" className="flex items-center justify-center gap-2">
                  Explore Our Services <ArrowRight size={18} />
                </a>
              </Button>
              <Button asChild variant="secondary" className="border border-gray-400 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                <a href="#approach">
                  Our Approach
                </a>
              </Button>
            </div>
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
      </div>
    </section>
  );
};

export default Hero;
