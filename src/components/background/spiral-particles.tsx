'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SpiralParticles({ color = '#F5A47C', particleCount = 5000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Generate particles in a spiral formation
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const spiralArms = 3;
    const spiralRadius = 5;
    
    for (let i = 0; i < particleCount; i++) {
      const t = i / particleCount;
      const angle = 2 * Math.PI * spiralArms * t;
      const radius = spiralRadius * t;
      
      // Calculate spiral position
      positions[i * 3] = radius * Math.cos(angle);      // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2; // y (slight randomness)
      positions[i * 3 + 2] = radius * Math.sin(angle);  // z
    }
    
    return positions;
  }, [particleCount]);
  
  // Animation loop
  useFrame((state, delta) => {
    if (pointsRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Rotate the spiral
      pointsRef.current.rotation.y += delta * 0.1;
      
      // Create a wave-like motion through the spiral
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const z = positions[i3 + 2];
        
        // Calculate distance from center
        const distance = Math.sqrt(x * x + z * z);
        
        // Apply wave effect based on distance and time
        positions[i3 + 1] = Math.sin(distance - time) * 0.5;
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={pointsRef} positions={particles}>
      <PointMaterial
        transparent
        color={color}
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

interface SpiralParticlesBackgroundProps {
  color?: string;
  className?: string;
}

export default function SpiralParticlesBackground({
  color = '#F5A47C',
  className = 'w-full h-screen'
}: SpiralParticlesBackgroundProps) {
  return (
    <div className={`${className} bg-soft-black`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 3, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <SpiralParticles color={color} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
} 