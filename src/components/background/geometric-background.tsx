'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Geometric shape component that creates abstract shapes
function GeometricShapes({ color = '#F5A47C' }) {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create multiple geometric objects
  const geometries = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      position: [
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: 0.3 + Math.random() * 0.5,
      type: Math.floor(Math.random() * 3), // 0: Icosahedron, 1: Octahedron, 2: Tetrahedron
    }));
  }, []);
  
  // Animation loop
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.x += delta * 0.05;
      
      // Animate individual shapes
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x += delta * (0.2 + i * 0.01);
        child.rotation.y += delta * (0.1 + i * 0.01);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {geometries.map((geo, i) => {
        // Create a different shape based on the type
        let geometry;
        if (geo.type === 0) {
          geometry = <icosahedronGeometry args={[1, 0]} />;
        } else if (geo.type === 1) {
          geometry = <octahedronGeometry args={[1, 0]} />;
        } else {
          geometry = <tetrahedronGeometry args={[1, 0]} />;
        }
        
        return (
          <mesh 
            key={i} 
            position={new THREE.Vector3(...geo.position as [number, number, number])}
            rotation={new THREE.Euler(...geo.rotation as [number, number, number])}
            scale={geo.scale}
          >
            {geometry}
            <meshStandardMaterial 
              color={color} 
              wireframe={true}
              transparent
              opacity={0.7}
              emissive={color}
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

interface GeometricBackgroundProps {
  color?: string;
  className?: string;
}

export default function GeometricBackground({
  color = '#F5A47C', // Soft orange by default
  className = 'w-full h-[40vh]'
}: GeometricBackgroundProps) {
  return (
    <div className={`${className} bg-soft-black`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <GeometricShapes color={color} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
} 