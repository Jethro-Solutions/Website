
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeSpotlightProps {
  className?: string;
}

const ThreeSpotlight = ({ className }: ThreeSpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const spotlightRef = useRef<THREE.SpotLight | null>(null);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Initialize camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Initialize renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add a plane for the spotlight to hit
    const planeGeometry = new THREE.PlaneGeometry(15, 15);
    const planeMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.0, // Invisible plane
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.z = -1;
    scene.add(plane);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x111111, 0.2);
    scene.add(ambientLight);

    // Add spotlight
    const spotlight = new THREE.SpotLight(0x3b82f6, 2, 10, Math.PI / 4, 0.5, 1);
    spotlight.position.set(0, 0, 5);
    spotlight.target.position.set(0, 0, -1);
    scene.add(spotlight);
    scene.add(spotlight.target);
    spotlightRef.current = spotlight;

    // Handle window resize
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;
      
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse coordinates
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      if (!spotlightRef.current || !sceneRef.current || !cameraRef.current || !rendererRef.current) return;

      // Move spotlight towards mouse position (with easing)
      const targetX = mousePosition.current.x * 3;
      const targetY = mousePosition.current.y * 3;
      
      spotlightRef.current.position.x += (targetX - spotlightRef.current.position.x) * 0.05;
      spotlightRef.current.position.y += (targetY - spotlightRef.current.position.y) * 0.05;
      
      spotlightRef.current.target.position.x = spotlightRef.current.position.x * 0.5;
      spotlightRef.current.target.position.y = spotlightRef.current.position.y * 0.5;
      spotlightRef.current.target.position.z = -1;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      frameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className={`absolute inset-0 z-0 ${className || ''}`} />;
};

export default ThreeSpotlight;
