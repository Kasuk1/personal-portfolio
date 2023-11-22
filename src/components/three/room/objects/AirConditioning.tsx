import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const AirConditioning = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Air Conditioning'
      position={[-84.41, 144.44, -166.13]}
      scale={[0.96, 1, 1]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.5,
      }}
      variants={variants}
    >
      <group
        name='Group'
        position={[-1.95, 6.03, 6.73]}
        rotation={[0.04, 0, 0]}
        scale={[1, 0.89, 0.66]}
      >
        <mesh
          name='Text'
          geometry={nodes.Text.geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[-50.95, -10.15, 0.29]}
        />
        <mesh
          name='Rectangle 5'
          geometry={nodes['Rectangle 5'].geometry}
          material={materials['Air Conditioning 2']}
          castShadow
          receiveShadow
          position={[0, 0, -0.54]}
        />
      </group>
      <mesh
        name='Rectangle 6'
        geometry={nodes['Rectangle 6'].geometry}
        material={materials['Air Conditioning 2']}
        castShadow
        receiveShadow
        position={[-1.74, -12.26, 1.65]}
        rotation={[-0.59, 0, 0]}
        scale={[1.06, 0.67, 0.87]}
      />
      <mesh
        name='Cube'
        geometry={nodes.Cube.geometry}
        material={materials['Air Conditioning']}
        castShadow
        receiveShadow
        position={[-1.25, 2.1, -9.09]}
        scale={[1.03, 1, 1]}
      />
    </motion.group>
  );
};
