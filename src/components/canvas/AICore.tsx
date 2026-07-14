import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

export default function AICore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const ringRef3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (coreRef.current) {
      coreRef.current.rotation.x = t * 0.1;
      coreRef.current.rotation.y = t * 0.2;
    }
    if (ringRef1.current) {
       ringRef1.current.rotation.z = t * 0.15;
       ringRef1.current.rotation.x = Math.sin(t * 0.1) * 0.5;
    }
    if (ringRef2.current) {
       ringRef2.current.rotation.y = t * 0.2;
       ringRef2.current.rotation.z = Math.cos(t * 0.15) * 0.5;
    }
    if (ringRef3.current) {
       ringRef3.current.rotation.x = t * -0.1;
       ringRef3.current.rotation.y = Math.sin(t * 0.2) * 0.8;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[0, 0, -2]} scale={0.8}>
        {/* Inner Core */}
        <Icosahedron ref={coreRef} args={[2, 16]} scale={1}>
          <MeshDistortMaterial
            color="#050505"
            emissive="#00bfff"
            emissiveIntensity={0.8}
            metalness={1}
            roughness={0.1}
            distort={0.4}
            speed={2}
          />
        </Icosahedron>

        {/* Neural Rings */}
        <mesh ref={ringRef1} scale={2.8}>
          <torusGeometry args={[1, 0.008, 16, 100]} />
          <meshStandardMaterial color="#ffffff" emissive="#00bfff" emissiveIntensity={2} />
        </mesh>

         <mesh ref={ringRef2} scale={3.4} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.005, 16, 100]} />
          <meshStandardMaterial color="#ffffff" emissive="#8a2be2" emissiveIntensity={2} />
        </mesh>
        
        <mesh ref={ringRef3} scale={4} rotation={[0, Math.PI / 3, 0]}>
          <torusGeometry args={[1, 0.002, 16, 100]} />
          <meshStandardMaterial color="#ffffff" emissive="#ff007f" emissiveIntensity={1} />
        </mesh>
      </group>
    </Float>
  );
}
