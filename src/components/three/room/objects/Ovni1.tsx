import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Ovni1 = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='OVNI'
      position={[145.08, 27.91, 79.35]}
      rotation={[0.21, 0, 0]}
      scale={[0.48, 0.45, 0.41]}
      animate={{
        rotateY: -90,
      }}
      transition={{
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <mesh
        name='Cube 24'
        geometry={nodes['Cube 24'].geometry}
        material={materials['White Gray (Steel)']}
        castShadow
        receiveShadow
        position={[-0.02, 8.16, 0.99]}
        rotation={[1.6, 0, 0]}
        scale={1}
      />
      <mesh
        name='Cube3'
        geometry={nodes.Cube3.geometry}
        material={materials['White Gray (Steel)']}
        castShadow
        receiveShadow
        position={[0, -15.55, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};
