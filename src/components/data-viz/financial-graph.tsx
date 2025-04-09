'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Generate simulated financial data
function generateFinancialData(numPoints = 50, volatility = 0.2): [number, number, number][] {
  const points: [number, number, number][] = [];
  let value = 100; // Starting value
  
  for (let i = 0; i < numPoints; i++) {
    // Random walk with trend
    const change = (Math.random() - 0.5) * volatility * value;
    value += change;
    value = Math.max(10, value); // Ensure we don't go below 10
    points.push([i / 10, value / 100, 0]); // Scale for visualization
  }
  
  return points;
}

interface Graph3DProps {
  data: [number, number, number][];
  color?: string;
  animated?: boolean;
}

function Graph3D({ data, color = '#E8E0D5', animated = true }: Graph3DProps) {
  const lineRef = useRef<THREE.Group>(null);
  const [displayData, setDisplayData] = useState<[number, number, number][]>(() => data.length >= 2 ? data.slice(0, 2) : []);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  // Animate the line drawing effect when component mounts
  useEffect(() => {
    if (animated && !animationComplete) {
      let currentLength = 2;
      const interval = setInterval(() => {
        if (currentLength <= data.length) {
          setDisplayData(data.slice(0, currentLength));
          currentLength += 1;
        } else {
          clearInterval(interval);
          setAnimationComplete(true);
        }
      }, 50);
      
      return () => clearInterval(interval);
    } else if (!animated) {
      setDisplayData(data);
      setAnimationComplete(true);
    }
  }, [data, animated, animationComplete]);
  
  // Gentle floating animation
  useFrame((state) => {
    if (lineRef.current && animationComplete) {
      lineRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });
  
  return (
    <group ref={lineRef}>
      {/* Graph line */}
      <Line
        points={displayData}
        color={color}
        lineWidth={2}
      />
      
      {/* Axes */}
      <Line 
        points={[[0, 0, 0], [5, 0, 0]]} 
        color="white" 
        opacity={0.5} 
        transparent 
      />
      <Line 
        points={[[0, 0, 0], [0, 1, 0]]} 
        color="white" 
        opacity={0.5} 
        transparent 
      />
      
      {/* Labels */}
      <Text
        position={[5.2, 0, 0]}
        fontSize={0.2}
        color="white"
      >
        time
      </Text>
      
      <Text
        position={[0, 1.2, 0]}
        fontSize={0.2}
        color="white"
      >
        value
      </Text>
    </group>
  );
}

interface FinancialGraphProps {
  volatility?: number;
  dataPoints?: number;
  color?: string;
  animated?: boolean;
  className?: string;
}

export default function FinancialGraph({
  volatility = 0.2,
  dataPoints = 50,
  color = '#E8E0D5',
  animated = true,
  className = 'w-full h-[40vh]'
}: FinancialGraphProps) {
  // Generate data once when component mounts
  const data = useMemo(() => generateFinancialData(dataPoints, volatility), 
    [dataPoints, volatility]);
  
  return (
    <motion.div 
      className={`${className} bg-soft-black rounded-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Graph3D data={data} color={color} animated={animated} />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </motion.div>
  );
} 