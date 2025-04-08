'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCubes({ color = '#F5A47C' }) {
  const groupRef = useRef<THREE.Group>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  
  // Create multiple floating cubes
  const cubes = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: 0.2 + Math.random() * 0.4,
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      // Reduced reveal delay for faster animation
      revealDelay: 0.05 + (i / 30) * 0.8, // Faster staggered reveal
    }));
  }, []);
  
  // Animation loop
  useFrame((state, delta) => {
    if (groupRef.current) {
      const time = state.clock.elapsedTime;
      
      // Set start time on first frame
      if (startTime === null) {
        setStartTime(time);
      }
      
      const elapsed = time - (startTime || 0);
      
      groupRef.current.rotation.y += delta * 0.05;
      
      // Animate individual cubes
      groupRef.current.children.forEach((child, i) => {
        const cube = cubes[i];
        
        // Calculate reveal progress with faster exponential easing (0.8 duration instead of 1.5)
        const revealProgress = Math.min(1, Math.pow(Math.max(0, (elapsed - cube.revealDelay) / 0.8), 2));
        
        // Make cubes float up and down
        child.position.y = cube.position[1] + Math.sin(time * cube.speed + cube.offset) * 0.5;
        // Rotate cubes
        child.rotation.x += delta * cube.speed;
        child.rotation.z += delta * cube.speed * 0.5;
        
        // Apply scale based on reveal progress for appearing effect
        child.scale.setScalar(cube.scale * revealProgress);
        
        // Apply opacity based on reveal progress
        if (child.children[0]) {
          const meshChild = child.children[0] as THREE.Mesh;
          if (meshChild.material) {
            const material = meshChild.material as THREE.MeshStandardMaterial;
            material.opacity = 0.2 + (revealProgress * 0.5);
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh 
          key={i} 
          position={new THREE.Vector3(...cube.position as [number, number, number])}
          rotation={new THREE.Euler(...cube.rotation as [number, number, number])}
          scale={0} // Start with zero scale, will animate in
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={color} 
            wireframe={true}
            transparent
            opacity={0}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

// Main hero animation component
export default function HeroAnimation() {
  return (
    <div className="w-full h-full bg-soft-black">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingCubes color="#F5A47C" />
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