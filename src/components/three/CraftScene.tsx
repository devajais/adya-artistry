'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import type { Group, Mesh } from 'three';

/**
 * A single soft, clay-like floating object. `distort` gives the surface an
 * organic, hand-shaped wobble rather than a perfect primitive.
 */
function ClayBlob({
  position,
  color,
  scale = 1,
  speed = 1,
  geometry = 'ico',
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
  geometry?: 'ico' | 'torus' | 'sphere' | 'knot';
}) {
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12 * speed;
      mesh.current.rotation.y += delta * 0.16 * speed;
    }
  });

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.6} floatIntensity={1.3}>
      <mesh ref={mesh} position={position} scale={scale} castShadow>
        {geometry === 'ico' && <icosahedronGeometry args={[1, 4]} />}
        {geometry === 'torus' && <torusGeometry args={[0.8, 0.32, 32, 96]} />}
        {geometry === 'sphere' && <sphereGeometry args={[1, 64, 64]} />}
        {geometry === 'knot' && <torusKnotGeometry args={[0.7, 0.24, 128, 24]} />}
        <MeshDistortMaterial
          color={color}
          distort={0.22}
          speed={1.1}
          roughness={0.6}
          metalness={0.05}
        />
      </mesh>
    </Float>
  );
}

/** Slow parallax: the whole group leans toward the pointer. */
function ParallaxGroup({ children }: { children: React.ReactNode }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-pointer.y * 0.2 - group.current.rotation.x) * 0.04;
  });

  return <group ref={group}>{children}</group>;
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#FFF3E4" />
      <directionalLight position={[-6, -2, -4]} intensity={0.5} color="#8A9A7B" />
      <ParallaxGroup>
        <ClayBlob position={[0.6, 0.5, 0]} color="#C25B3D" scale={1.2} geometry="sphere" speed={0.8} />
        <ClayBlob position={[-1.7, -0.8, -1]} color="#8A9A7B" scale={0.7} geometry="ico" speed={1} />
        <ClayBlob position={[1.9, -1.2, -0.5]} color="#E9DCC6" scale={0.55} geometry="sphere" speed={1.1} />
      </ParallaxGroup>
      <Environment preset="sunset" />
    </>
  );
}

export default function CraftScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: 'none' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
