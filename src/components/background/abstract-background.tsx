'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField({ count = 5000, color = '#E8E0D5' }) {
  const points = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;  // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;  // z
    }
    return positions;
  }, [count]);

  // Animate particles
  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.05;
      points.current.rotation.y += delta * 0.01;
    }
  });

  return (
    <Points ref={points} positions={particles}>
      <PointMaterial
        transparent
        color={color}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

interface AbstractBackgroundProps {
  color?: string;
  particleCount?: number;
  className?: string;
}

export default function AbstractBackground({
  color = '#E8E0D5',
  particleCount = 5000,
  className = 'w-full h-[40vh]'
}: AbstractBackgroundProps) {
  return (
    <div className={`${className} bg-soft-black`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ParticleField count={particleCount} color={color} />
      </Canvas>
    </div>
  );
} 