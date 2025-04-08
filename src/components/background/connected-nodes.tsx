'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line } from '@react-three/drei';
import * as THREE from 'three';

function NodeNetwork({ color = '#F5A47C', nodeCount = 25, maxConnections = 50 }) {
  const nodesRef = useRef<THREE.Group>(null);
  const connectionsRef = useRef<THREE.Group>(null);
  
  // Create nodes
  const nodes = useMemo(() => {
    return Array.from({ length: nodeCount }, () => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      velocity: [
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      ],
      connections: [] as number[],
      size: 0.05 + Math.random() * 0.1
    }));
  }, [nodeCount]);
  
  // Create connections between nodes
  const connections = useMemo(() => {
    const lines: { start: number[]; end: number[] }[] = [];
    
    // Find closest nodes and connect them
    for (let i = 0; i < nodes.length; i++) {
      const nodeA = nodes[i];
      const distances: { index: number; distance: number }[] = [];
      
      // Calculate distances to all other nodes
      for (let j = 0; j < nodes.length; j++) {
        if (i !== j) {
          const nodeB = nodes[j];
          const dx = nodeA.position[0] - nodeB.position[0];
          const dy = nodeA.position[1] - nodeB.position[1];
          const dz = nodeA.position[2] - nodeB.position[2];
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          distances.push({ index: j, distance });
        }
      }
      
      // Sort by distance and get closest nodes
      distances.sort((a, b) => a.distance - b.distance);
      const connectCount = Math.min(3, distances.length);
      
      // Create connections to closest nodes
      for (let c = 0; c < connectCount; c++) {
        const targetIndex = distances[c].index;
        
        // Check if this connection already exists
        if (!nodeA.connections.includes(targetIndex) && lines.length < maxConnections) {
          lines.push({
            start: [...nodeA.position] as number[],
            end: [...nodes[targetIndex].position] as number[]
          });
          
          nodeA.connections.push(targetIndex);
          nodes[targetIndex].connections.push(i);
        }
      }
    }
    
    return lines;
  }, [nodes, maxConnections]);
  
  // Animation loop
  useFrame((state, delta) => {
    if (nodesRef.current && connectionsRef.current) {
      // Move nodes
      nodesRef.current.children.forEach((node, i) => {
        const nodeData = nodes[i];
        
        // Update position
        for (let axis = 0; axis < 3; axis++) {
          nodeData.position[axis] += nodeData.velocity[axis];
          
          // Bounce off boundaries
          if (Math.abs(nodeData.position[axis]) > 5) {
            nodeData.velocity[axis] *= -1;
          }
        }
        
        // Update mesh position
        node.position.set(
          nodeData.position[0],
          nodeData.position[1],
          nodeData.position[2]
        );
      });
      
      // Update connections
      connectionsRef.current.children.forEach((line, i) => {
        const connection = connections[i];
        const startNode = nodes[nodes.findIndex(n => 
          n.position[0] === connection.start[0] && 
          n.position[1] === connection.start[1] && 
          n.position[2] === connection.start[2]
        )];
        
        const endNode = nodes[nodes.findIndex(n => 
          n.position[0] === connection.end[0] && 
          n.position[1] === connection.end[1] && 
          n.position[2] === connection.end[2]
        )];
        
        if (startNode && endNode) {
          // Update line positions
          const linePoints = [
            new THREE.Vector3(startNode.position[0], startNode.position[1], startNode.position[2]),
            new THREE.Vector3(endNode.position[0], endNode.position[1], endNode.position[2])
          ];
          
          (line as any).geometry.setFromPoints(linePoints);
        }
      });
      
      // Rotate entire network slowly
      nodesRef.current.rotation.y += delta * 0.05;
      connectionsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <>
      {/* Nodes */}
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <mesh 
            key={`node-${i}`} 
            position={new THREE.Vector3(...node.position as [number, number, number])}
          >
            <sphereGeometry args={[node.size, 8, 8]} />
            <meshStandardMaterial 
              color={color}
              emissive={color}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
      
      {/* Connections */}
      <group ref={connectionsRef}>
        {connections.map((connection, i) => (
          <Line
            key={`connection-${i}`}
            points={[
              new THREE.Vector3(...connection.start as [number, number, number]),
              new THREE.Vector3(...connection.end as [number, number, number])
            ]}
            color={color}
            lineWidth={1}
            transparent
            opacity={0.4}
          />
        ))}
      </group>
    </>
  );
}

interface ConnectedNodesProps {
  color?: string;
  className?: string;
}

export default function ConnectedNodes({
  color = '#F5A47C',
  className = 'w-full h-screen'
}: ConnectedNodesProps) {
  return (
    <div className={`${className} bg-soft-black`}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 15], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <NodeNetwork color={color} />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
} 