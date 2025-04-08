'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function WaveMesh({ color = '#F5A47C' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);
  
  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current && geometryRef.current) {
      // Get vertices
      const time = state.clock.elapsedTime;
      const position = geometryRef.current.attributes.position;
      
      // Update each vertex position based on its x,z coordinates
      for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const z = position.getZ(i);
        
        // Create wave pattern
        const amplitude = 0.8;
        const frequency = 0.5;
        const y = amplitude * Math.sin(x * frequency + time) * 
                 Math.cos(z * frequency + time * 0.7);
        
        // Update y position
        position.setY(i, y);
      }
      
      position.needsUpdate = true;
      geometryRef.current.computeVertexNormals();
      
      // Slow rotation
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 6, 0, 0]}>
      <planeGeometry ref={geometryRef} args={[10, 10, 50, 50]} />
      <meshStandardMaterial 
        color={color}
        wireframe={true}
        side={THREE.DoubleSide}
        transparent
        opacity={0.7}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

interface WaveBackgroundProps {
  color?: string;
  className?: string;
}

export default function WaveBackground({
  color = '#F5A47C',
  className = 'w-full h-screen'
}: WaveBackgroundProps) {
  return (
    <div className={`${className} bg-soft-black`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <WaveMesh color={color} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
      </Canvas>
    </div>
  );
} 