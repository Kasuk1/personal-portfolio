import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Ovni2 = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='OVNI 2'
      position={[105.94, -15.96, 134.56]}
      rotation={[-0.09, 0, 0]}
      scale={[0.48, 0.45, 0.41]}
      animate={{
        rotateY: 90,
      }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <mesh
        name='Cube 23'
        geometry={nodes['Cube 23'].geometry}
        material={materials['White Gray Steel Darker']}
        castShadow
        receiveShadow
        position={[-0.02, 8.16, 0.99]}
        rotation={[1.6, 0, 0]}
        scale={1}
      />
      <mesh
        name='Cube2'
        geometry={nodes.Cube2.geometry}
        material={materials['White Gray Steel Darker']}
        castShadow
        receiveShadow
        position={[0, -15.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};
