import { Gltf } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Object3D, Object3DEventMap } from 'three';

export const Scene = () => {
  return (
    <>
      <ambientLight intensity={1} />

      <pointLight intensity={100} position={[0, 0, 0]} />
    </>
  );
};
