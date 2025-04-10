
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import ThreeSpotlight from './ThreeSpotlight';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading delay for animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Spotlight Effect */}
      <ThreeSpotlight />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background to-background z-10"></div>
      
      {/* Static spotlight simulation for initial render and fallback */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-spotlight/10 blur-[100px] z-0" />
      
      {/* Content */}
      <div className={`container-custom relative z-20 text-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="inline-flex items-center px-4 py-2 mb-8 rounded-full border border-border bg-muted/20 backdrop-blur-sm">
          <span className="text-xs font-medium text-muted-foreground mr-2">New</span>
          <span className="text-xs">Advanced Analytics Platform</span>
          <ArrowRight className="h-3 w-3 ml-2 text-primary" />
        </div>
        
        <h1 className="text-h1 md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto">
          Transform Your Business with <span className="text-gradient">Intelligent Solutions</span>
        </h1>
        
        <p className="text-body md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Jethro Solutions provides cutting-edge business intelligence tools and services 
          designed to optimize operations and drive growth for modern enterprises.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">
            Contact Sales
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Play className="mr-2 h-4 w-4" />
            How It Works
          </Button>
        </div>
        
        <div className="mt-16 pt-4 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border">
          {['Trusted by 500+ companies', '24/7 Customer support', '99.9% Uptime guarantee', 'Enterprise-grade security'].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground flex items-start justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-[pulse_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
