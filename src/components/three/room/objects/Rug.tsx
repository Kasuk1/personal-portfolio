import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Rug = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.mesh
      name='Rug'
      geometry={nodes.Rug.geometry}
      material={materials['Monitor Black']}
      castShadow
      receiveShadow
      position={[32.75, -155.56, -32.76]}
      rotation={[-Math.PI / 2, 0, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2,
      }}
      variants={variants}
    />
  );
};
