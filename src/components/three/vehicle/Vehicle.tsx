import { Gltf } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

export const Vehicle = () => {
  const vehicleRef = useRef<Mesh>(null);

  useFrame(() => vehicleRef.current?.rotateX(0.005));
  useFrame(() => vehicleRef.current?.rotateY(0.005));

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 15, state.pointer.y / 5, 15],
      0.1,
      delta
    );
  });

  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
    },
  };

  return (
    <motion.group initial='hidden' animate='visible' variants={variants}>
      <Gltf
        ref={vehicleRef}
        src='src/assets/three/vehicle/scene.gltf'
        rotation={[-0.3, -0.9, 0]}
      />
    </motion.group>
  );
};
