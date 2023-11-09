import { Gltf } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';

export const SpaceBoy = () => {
  const spaceBoyRef = useRef<Mesh>(null);

  useFrame(() => spaceBoyRef.current?.rotateY(0.003));

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 15, state.pointer.y / 5, 0],
      0.1,
      delta
    );
  });

  return (
    <>
      <ambientLight intensity={0.8} args={['#fff']} />
      <directionalLight
        intensity={500}
        castShadow
        position={[0, 20, 30]}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      <Gltf
        ref={spaceBoyRef}
        src='assets/three/spaceBoy/space_boi.glb'
        position={[0, 0, -15]}
        rotation={[0.6, 3.13, 0]}
        scale={0.4}
        castShadow
        receiveShadow
        visible
      />
    </>
  );
};
