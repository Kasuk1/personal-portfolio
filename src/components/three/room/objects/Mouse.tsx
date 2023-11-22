import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Mouse = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Mouse'
      position={[79.75, -15.81, 24.86]}
      rotation={[0, -0.13, -0.01]}
      scale={0.67}
      initial='hidden'
      animate={{ scale: 0.67 }}
      transition={{
        delay: 1.8,
      }}
      variants={variants}
    >
      <mesh
        name='Rectangle 71'
        geometry={nodes['Rectangle 71'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[0.64, 1.17, 0.07]}
        rotation={[-Math.PI / 2, 0.04, 0]}
        scale={1}
      />
      <mesh
        name='Rectangle 62'
        geometry={nodes['Rectangle 62'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[2.48, 1.04, 0.07]}
        rotation={[-Math.PI / 2, 0.13, 0]}
        scale={1}
      />
      <mesh
        name='Cube 25'
        geometry={nodes['Cube 25'].geometry}
        material={materials['Bag Color 2']}
        castShadow
        receiveShadow
        position={[5.82, 1.23, -0.05]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Cube4'
        geometry={nodes.Cube4.geometry}
        material={materials['White Gray Steel 2']}
        castShadow
        receiveShadow
        position={[0.64, -1.33, -0.84]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};
