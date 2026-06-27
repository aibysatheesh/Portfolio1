"use client";

import { useRef, useMemo, ComponentPropsWithoutRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

function ParticleSystem(props: ComponentPropsWithoutRef<typeof Points>) {
  const ref = useRef<THREE.Points>(null);
  
  // Use maath random to generate points in a sphere
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    return random.inSphere(positions, { radius: 1.5 });
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#7C3AED"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

// Simple floating shapes as placeholders for tech items
function FloatingTech() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-2, 1, -1]}>
        <mesh>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial color="#4F46E5" wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[2, -1, -2]}>
        <mesh>
          <torusKnotGeometry args={[0.2, 0.05, 100, 16]} />
          <meshStandardMaterial color="#06B6D4" wireframe />
        </mesh>
      </Float>
      <Float speed={3} rotationIntensity={0.5} floatIntensity={2.5} position={[1, 1.5, -1]}>
        <mesh>
          <icosahedronGeometry args={[0.25]} />
          <meshStandardMaterial color="#7C3AED" wireframe />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ParticleSystem />
        <FloatingTech />
      </Canvas>
    </div>
  );
}
