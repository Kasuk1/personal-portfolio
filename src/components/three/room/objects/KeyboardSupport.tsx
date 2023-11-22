import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const KeyboardSupport = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.mesh
      name='Hand Keyboard Support'
      geometry={nodes['Hand Keyboard Support'].geometry}
      material={materials.Wood}
      castShadow
      receiveShadow
      position={[63.87, -16.45, -24.13]}
      rotation={[-Math.PI / 2, 0, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.8,
      }}
      variants={variants}
    />
  );
};
