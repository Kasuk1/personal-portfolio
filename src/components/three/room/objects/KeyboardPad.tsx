import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const KeyboardPad = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.mesh
      name='Pad Keyboard'
      geometry={nodes['Pad Keyboard'].geometry}
      material={materials.Rug}
      castShadow
      receiveShadow
      position={[80.75, -19.35, -27.95]}
      rotation={[-Math.PI / 2, 0, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.5,
      }}
      variants={variants}
    />
  );
};
