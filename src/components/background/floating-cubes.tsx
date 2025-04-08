'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCubes({ color = '#F5A47C' }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create multiple floating cubes
  const cubes = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: 0.2 + Math.random() * 0.4,
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);
  
  // Animation loop
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
      
      // Animate individual cubes
      groupRef.current.children.forEach((child, i) => {
        const time = state.clock.elapsedTime;
        const cube = cubes[i];
        // Make cubes float up and down
        child.position.y = cube.position[1] + Math.sin(time * cube.speed + cube.offset) * 0.5;
        // Rotate cubes
        child.rotation.x += delta * cube.speed;
        child.rotation.z += delta * cube.speed * 0.5;
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
          scale={cube.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={color} 
            wireframe={true}
            transparent
            opacity={0.7}
            emissive={color}
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

interface FloatingCubesBackgroundProps {
  color?: string;
  className?: string;
}

export default function FloatingCubesBackground({
  color = '#F5A47C',
  className = 'w-full h-screen'
}: FloatingCubesBackgroundProps) {
  return (
    <div className={`${className} bg-soft-black`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <FloatingCubes color={color} />
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