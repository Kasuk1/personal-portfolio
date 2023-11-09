import { useRef } from 'react';
import { Mesh } from 'three';
import { Gltf } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';

export const Planet = () => {
  const planetRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    planetRef.current!.rotation.y -= 0.002;
    //planetRef.current!.rotation.x += 0.004;
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
        ref={planetRef}
        src='assets/three/planet/stylized_planet.glb'
        position={[0.45, 0, 0]}
        scale={0.45}
      />
    </motion.group>
  );
};
