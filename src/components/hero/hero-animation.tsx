'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function DotField() {
  const pointsRef = useRef<THREE.Points>(null);
  const colorRef = useRef<THREE.BufferAttribute | null>(null);

  // Create a grid of dots
  const { positions, colors, initialY } = useMemo(() => {
    const positions = [];
    const colors = [];
    const initialY = []; // Store initial Y positions for reference

    // Grid dimensions
    const gridSize = 100;
    const spacing = 1;

    // Create grid of points
    for (let x = -gridSize / 2; x < gridSize / 2; x += spacing) {
      for (let z = -gridSize / 2; z < gridSize / 2; z += spacing) {
        positions.push(x, 0, z);
        initialY.push(0); // Store initial Y position

        // Black color with slight variation
        const r = 0.0 + Math.random() * 0.02; // Base R for black is 0
        const g = 0.0 + Math.random() * 0.02; // Base G for black is 0
        const b = 0.0 + Math.random() * 0.02; // Base B for black is 0
        colors.push(r, g, b);
      }
    }

    return {
      positions: new Float32Array(positions),
      colors: new Float32Array(colors), // This holds the INITIAL colors
      initialY,
    };
  }, []);

  // Animation
  useFrame(({ clock }) => {
    if (!pointsRef.current) return;

    const time = clock.getElapsedTime();
    const positionArray = pointsRef.current.geometry.attributes.position.array;

    // Get or create color attribute reference
    if (!colorRef.current && pointsRef.current.geometry.attributes.color) {
      colorRef.current = pointsRef.current.geometry.attributes.color as THREE.BufferAttribute;
    }

    // This is the array buffer we modify directly for GPU update
    const currentFrameColorArray = colorRef.current?.array; 

    // Update each point's y position based on wave functions
    for (let i = 0, colorIndex = 0, initialYIndex = 0; i < positionArray.length; i += 3, colorIndex += 3, initialYIndex++) {
      const x = positionArray[i];
      const z = positionArray[i + 2];

      // Combine multiple wave functions for a sea-like effect
      const wave1 = Math.sin(x * 0.3 + time) * 1.5;
      const wave2 = Math.cos(z * 0.2 + time * 0.8) * 1.2;
      const wave3 = Math.sin(x * 0.1 + z * 0.1 + time * 1.1) * 0.8;
      const wave4 = Math.cos(x * 0.15 + z * 0.25 + time * 0.7) * 0.6;

      // Combine waves for final height
      const newY = wave1 + wave2 + wave3 + wave4;
      positionArray[i + 1] = newY;

      // Update color based on height (y-position)
      // Lower dots fade to black
      if (currentFrameColorArray) {
        // Get the INITIAL color set in useMemo for this dot
        const initialR = colors[colorIndex];
        const initialG = colors[colorIndex + 1];
        const initialB = colors[colorIndex + 2];

        // Calculate fade factor based on height
        // Higher values are brighter (closer to initial color), lower values fade to black
        const maxHeight = 4; // Maximum expected height of waves
        const minHeight = -4; // Minimum expected height of waves
        const heightRange = maxHeight - minHeight;

        // Normalize height to 0-1 range and apply curve for more dramatic effect
        const normalizedHeight = (newY - minHeight) / heightRange;
        // Increase exponent to make the fade to black more prominent
        const fadeFactor = Math.pow(Math.max(0, Math.min(1, normalizedHeight)), 2.5); // Clamp normalizedHeight and apply steeper power curve

        // Apply fade factor to the INITIAL colors (lower dots become black/darker)
        currentFrameColorArray[colorIndex] = initialR * fadeFactor; // R
        currentFrameColorArray[colorIndex + 1] = initialG * fadeFactor; // G
        currentFrameColorArray[colorIndex + 2] = initialB * fadeFactor; // B
      }
    }

    // Update geometry
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    if (colorRef.current) {
      colorRef.current.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={positions.length / 3} 
          array={positions} 
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={colors.length / 3} 
          array={colors} 
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.15} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}

export default function HeroAnimation() {
  return (
    <div className="w-full h-full bg-[#f1d2b6]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 15, 30]} fov={60} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <DotField />
      </Canvas>
    </div>
  );
} 