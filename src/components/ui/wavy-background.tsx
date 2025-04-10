"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: any,
    canvas: any;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLowPerfDevice, setIsLowPerfDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const frameRef = useRef(0);
  
  useEffect(() => {
    // Check for low performance devices
    const checkPerformance = () => {
      // Mobile detection
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      // Low memory detection (Chrome-specific)
      const isLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      
      setIsLowPerfDevice(isMobile || isLowMemory);
    };
    
    checkPerformance();
    
    // Set up intersection observer to only animate when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    
    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }, []);
  
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.0005;
      case "fast":
        return isLowPerfDevice ? 0.001 : 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    
    ctx = canvas.getContext("2d");
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${isLowPerfDevice ? Math.min(5, blur) : blur}px)`;
    nt = 0;
    
    const resizeHandler = () => {
      if (!canvas) return;
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${isLowPerfDevice ? Math.min(5, blur) : blur}px)`;
    };
    
    window.addEventListener('resize', resizeHandler);
    
    render();
    
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < (isLowPerfDevice ? Math.min(3, n) : n); i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || (isLowPerfDevice ? 30 : 50);
      ctx.strokeStyle = waveColors[i % waveColors.length];
      
      // Reduce calculation frequency on low-perf devices
      const step = isLowPerfDevice ? 10 : 5;
      
      for (x = 0; x < w; x += step) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    if (!ctx || !isVisible) {
      frameRef.current = requestAnimationFrame(render);
      return;
    }
    
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    
    // Throttle frame rate on low performance devices
    if (isLowPerfDevice) {
      // Skip every other frame
      if (frameRef.current % 2 === 0) {
        frameRef.current = requestAnimationFrame(render);
      } else {
        setTimeout(() => {
          frameRef.current = requestAnimationFrame(render);
        }, 16); // ~30fps instead of 60fps
      }
    } else {
      frameRef.current = requestAnimationFrame(render);
    }
  };

  useEffect(() => {
    const cleanup = init();
    return () => {
      cancelAnimationFrame(frameRef.current);
      if (cleanup) cleanup();
    };
  }, [isLowPerfDevice, isVisible]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${isLowPerfDevice ? Math.min(5, blur) : blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
