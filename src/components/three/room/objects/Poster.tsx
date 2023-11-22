import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Poster = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.mesh
      name='I want to believe poster'
      geometry={nodes['I want to believe poster'].geometry}
      material={materials['I want to believe poster Material']}
      castShadow
      receiveShadow
      position={[-68.41, 40.7, -177.78]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2.5,
      }}
      variants={variants}
    />
  );
};
