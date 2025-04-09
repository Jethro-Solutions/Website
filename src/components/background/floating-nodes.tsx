'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingNodes({ color = '#FF8040', particleCount = 6000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate particles in a grid formation
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    
    // Create a uniform grid layout
    const gridSize = Math.ceil(Math.sqrt(particleCount));
    
    let i = 0;
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        if (i < particleCount) {
          // Position in a flat grid (y=0)
          positions[i * 3] = (x / gridSize) * 4 - 2;     // x from -2 to 2
          positions[i * 3 + 1] = 0;                      // y starts at 0 (flat plane)
          positions[i * 3 + 2] = (z / gridSize) * 4 - 2; // z from -2 to 2
          i++;
        }
      }
    }
    
    return positions;
  }, [particleCount]);
  
  // Animation loop
  useFrame((state) => {
    if (pointsRef.current) {
      // Use a slow time factor for gentle waves
      const time = state.clock.getElapsedTime() * 0.2;
      
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      
      // Loop cycle parameters
      const loopDuration = 12; // seconds for a full loop
      const loopProgress = (time % loopDuration) / loopDuration;
      const loopAngle = loopProgress * Math.PI * 2;
      
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const originalX = particles[i3];
        const originalZ = particles[i3 + 2];
        
        // Create wave patterns for y-position (height)
        const frequency1 = 0.8;
        const frequency2 = 0.5;
        const frequency3 = 0.3;  // Lower frequency for longer waves
        const amplitude = 0.3;
        
        // Complex wave pattern combining three frequencies
        const wave1 = Math.sin(loopAngle + originalX * frequency1 + originalZ * frequency2) * amplitude;
        const wave2 = Math.cos(loopAngle * 0.7 + originalZ * frequency1 + originalX * frequency2) * amplitude * 0.5;
        
        // Third wave pattern
        const wave3 = Math.sin(loopAngle * 0.4 + (originalX * originalZ) * frequency3) * amplitude * 0.4;
        
        // Apply height variation with three waves
        positions[i3 + 1] = wave1 + wave2 + wave3;
        
        // Keep original x and z positions for grid structure
        positions[i3] = originalX;
        positions[i3 + 2] = originalZ;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial
        transparent
        color={color}
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

interface FloatingNodesBackgroundProps {
  color?: string;
  className?: string;
}

export default function FloatingNodesBackground({
  color = '#FF8040', // Orange dots
  className = ''
}: FloatingNodesBackgroundProps) {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-[-1] bg-black ${className}`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1.0} />
        <FloatingNodes color={color} particleCount={6000} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.01} // Very slow rotation
        />
      </Canvas>
    </div>
  );
} 