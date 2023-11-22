import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const TV = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='TV'
      position={[164.36, 101.44, -33.09]}
      rotation={[0, -1.56, 0]}
      scale={[1.11, 1, 1]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2.5,
      }}
      variants={variants}
    >
      <mesh
        name='Rectangle 3'
        geometry={nodes['Rectangle 3'].geometry}
        material={materials['Monitor Black']}
        castShadow
        receiveShadow
        position={[0, -2.15, -10.9]}
        rotation={[0.22, 0, 0]}
      />
      <mesh
        name='Rectangle 2'
        geometry={nodes['Rectangle 2'].geometry}
        material={materials['Monitor Black']}
        castShadow
        receiveShadow
        position={[0, -1.34, -13.67]}
      />
      <mesh
        name='Rectangle'
        geometry={nodes.Rectangle.geometry}
        material={materials['Monitor Black']}
        castShadow
        receiveShadow
        position={[0, 0.51, 0.83]}
        rotation={[0.2, 0, 0]}
        scale={[1.65, 1, 1]}
      />
    </motion.group>
  );
};
