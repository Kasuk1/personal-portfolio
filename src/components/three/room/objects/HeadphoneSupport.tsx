import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const HeadphoneSupport = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Headphone Support (Wood)'
      position={[98.87, -9.08, 71.37]}
      rotation={[0, -0.55, 0]}
      scale={0.52}
      initial='hidden'
      animate={{
        scale: 0.52,
      }}
      transition={{
        delay: 1.5,
      }}
      variants={variants}
    >
      <mesh
        name='Cube 611'
        geometry={nodes['Cube 611'].geometry}
        material={materials.Wood}
        castShadow
        receiveShadow
        position={[0.23, 7.86, -9.69]}
        rotation={[-Math.PI / 2, 0.01, Math.PI / 2]}
        scale={[1, 1.22, 1]}
      />
      <mesh
        name='Cylinder 28'
        geometry={nodes['Cylinder 28'].geometry}
        material={materials.Wood}
        castShadow
        receiveShadow
        position={[0.59, -17.18, -12.24]}
        rotation={[0, 0, 1.56]}
      />
      <mesh
        name='Cylinder11'
        geometry={nodes.Cylinder11.geometry}
        material={materials.Wood}
        castShadow
        receiveShadow
        position={[1.06, -17.18, 11.18]}
        rotation={[0, 0, 1.56]}
      />
    </motion.group>
  );
};
