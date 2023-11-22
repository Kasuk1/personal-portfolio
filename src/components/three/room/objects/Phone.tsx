import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Phone = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Phone'
      position={[83.28, -17.58, -82.26]}
      rotation={[0, 0.27, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2,
      }}
      variants={variants}
    >
      <mesh
        name='Ellipse 2'
        geometry={nodes['Ellipse 2'].geometry}
        material={materials.Barbell}
        castShadow
        receiveShadow
        position={[9.14, 0.52, 0.35]}
        rotation={[-Math.PI / 2, 0, -1.58]}
        scale={[0.86, 0.86, 1.17]}
      />
      <mesh
        name='Cube 31'
        geometry={nodes['Cube 31'].geometry}
        material={materials['White Gray Steel Darker']}
        castShadow
        receiveShadow
        position={[-0.04, 0.07, -0.01]}
        rotation={[-Math.PI / 2, 0, -1.58]}
        scale={0.86}
      />
      <mesh
        name='Cube 26'
        geometry={nodes['Cube 26'].geometry}
        material={materials['White Gray Steel Darker']}
        castShadow
        receiveShadow
        position={[0, -0.07, 0]}
        rotation={[-Math.PI / 2, 0, -1.58]}
        scale={0.86}
      />
    </motion.group>
  );
};
