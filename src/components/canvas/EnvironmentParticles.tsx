import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';

export default function EnvironmentParticles() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
       groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Distant stars */}
      <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      
      {/* Floating digital dust */}
      <Sparkles count={500} scale={15} size={2} speed={0.4} opacity={0.2} color="#00bfff" />
      <Sparkles count={300} scale={20} size={1} speed={0.2} opacity={0.1} color="#8a2be2" />
    </group>
  );
}
