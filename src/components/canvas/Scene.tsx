import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Noise, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

import AICore from './AICore';
import EnvironmentParticles from './EnvironmentParticles';

export default function Scene() {
  const scroll = useScroll();
  const cameraGroup = useRef<THREE.Group>(null);
  const coreGroup = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!scroll) return;
    
    // scroll.offset goes from 0 (top) to 1 (bottom)
    const offset = scroll.offset;
    
    // Cinematic camera movement based on scroll
    if (cameraGroup.current) {
       // Move camera down and slightly forward
       cameraGroup.current.position.y = THREE.MathUtils.lerp(cameraGroup.current.position.y, -offset * 15, 0.1);
       cameraGroup.current.position.z = THREE.MathUtils.lerp(cameraGroup.current.position.z, 5 - (offset * 2), 0.1);
    }

    // Parallax the core slightly
    if (coreGroup.current) {
        coreGroup.current.position.y = THREE.MathUtils.lerp(coreGroup.current.position.y, offset * 5, 0.1);
        coreGroup.current.rotation.y = offset * Math.PI * 2;
    }
  });

  return (
    <>
      <color attach="background" args={['#010103']} />
      
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} color="#00bfff" />
      <directionalLight position={[-10, -10, -10]} intensity={2} color="#8a2be2" />
      
      <group ref={cameraGroup}>
         <EnvironmentParticles />
      </group>

      <group ref={coreGroup}>
         <AICore />
      </group>

      <EffectComposer multisampling={4}>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} opacity={1} />
        <ChromaticAberration blendFunction={BlendFunction.NORMAL} offset={new THREE.Vector2(0.001, 0.001)} />
        <Noise opacity={0.03} blendFunction={BlendFunction.OVERLAY} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
      </EffectComposer>
    </>
  )
}
