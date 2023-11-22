import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Bag = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Bag'
      position={[112.3, -125.94, 62.31]}
      rotation={[0.04, 0.11, -0.15]}
      scale={[1.12, 1.12, 1.08]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 3,
      }}
      variants={variants}
    >
      <mesh
        name='Cube 6'
        geometry={nodes['Cube 6'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[-8.22, -19.46, -10.99]}
        rotation={[2.91, 0, 0.5]}
        scale={[0.85, 1, 0.29]}
      />
      <mesh
        name='Cube 5'
        geometry={nodes['Cube 5'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[8.27, -19.2, -10.65]}
        rotation={[-3.1, 0.29, -0.46]}
        scale={[0.85, 1.06, 0.29]}
      />
      <mesh
        name='Cube 4'
        geometry={nodes['Cube 4'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[4.41, 3.52, -10.17]}
        rotation={[-2.99, 0.23, -0.14]}
        scale={[0.85, 1, 0.29]}
      />
      <mesh
        name='Cube 3'
        geometry={nodes['Cube 3'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[-4.34, 3.49, -10.51]}
        rotation={[-3.01, 0.01, 0.11]}
        scale={[0.85, 1, 0.29]}
      />
      <mesh
        name='Cylinder5'
        geometry={nodes.Cylinder5.geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[-0.49, 22.75, -4.78]}
        rotation={[2.44, -1.47, -2.26]}
        scale={1}
      />
      <mesh
        name='Cube 2'
        geometry={nodes['Cube 2'].geometry}
        material={materials['Bag Main Color']}
        castShadow
        receiveShadow
        position={[0, -3.47, 2.39]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.8, 1, 1]}
      />
      <mesh
        name='Cube1'
        geometry={nodes.Cube1.geometry}
        material={materials['Bag Main Color']}
        castShadow
        receiveShadow
        position={[0, -3.56, -5.69]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.8, 1, 1]}
      />
    </motion.group>
  );
};
