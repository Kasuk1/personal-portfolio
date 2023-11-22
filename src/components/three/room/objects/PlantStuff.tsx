import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const PlantStuff = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <group name='Plant Stuff' position={[109.04, -120.87, 136.02]}>
      <motion.group
        name='Plant Type 1'
        position={[0, 0.18, 0]}
        scale={0.53}
        initial='hidden'
        animate={{
          scale: 0.53,
        }}
        transition={{
          delay: 2,
        }}
        variants={variants}
      >
        <group name='Group1' position={[0, 11.35, 0]}>
          <mesh
            name='Cube 7'
            geometry={nodes['Cube 7'].geometry}
            material={materials['Plant Leaf']}
            castShadow
            receiveShadow
            position={[16.28, -14.11, -0.36]}
            rotation={[-1.57, 0.08, -1.63]}
            scale={1}
          />
          <mesh
            name='Cube 11'
            geometry={nodes['Cube 11'].geometry}
            material={materials['Plant Leaf']}
            castShadow
            receiveShadow
            position={[7.58, -28.59, 14.32]}
            rotation={[-1.43, 0.05, -2.83]}
            scale={1}
          />
          <mesh
            name='Cube 10'
            geometry={nodes['Cube 10'].geometry}
            material={materials['Plant Leaf']}
            castShadow
            receiveShadow
            position={[-7.71, -31.08, 10.05]}
            rotation={[-Math.PI / 2, 0, 2.3]}
            scale={1}
          />
          <mesh
            name='Cube 8'
            geometry={nodes['Cube 8'].geometry}
            material={materials['Plant Leaf']}
            castShadow
            receiveShadow
            position={[-6.85, -26.05, -11.07]}
            rotation={[-1.74, -0.15, 0.74]}
            scale={1}
          />
          <mesh
            name='Cube 61'
            geometry={nodes['Cube 61'].geometry}
            material={materials['Plant Leaf']}
            castShadow
            receiveShadow
            position={[3.21, -15.52, -12.77]}
            rotation={[-1.62, 0.06, 0]}
            scale={1}
          />
        </group>
        <mesh
          name='Ellipse'
          geometry={nodes.Ellipse.geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[2.29, -18.38, 0.25]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cylinder6'
          geometry={nodes.Cylinder6.geometry}
          material={materials.Wood}
          castShadow
          receiveShadow
          position={[2.29, -37.67, 0.23]}
        />
      </motion.group>
    </group>
  );
};
