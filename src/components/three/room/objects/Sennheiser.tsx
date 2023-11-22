import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Sennheiser = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Sennheiser'
      position={[99.22, 1.2, 71.35]}
      rotation={[0, -0.58, 0]}
      scale={[0.87, 0.79, 0.87]}
      initial='hidden'
      animate={{ scale: 0.87 }}
      transition={{
        delay: 1.8,
      }}
      variants={variants}
    >
      <group
        name='Headphone Speaker 2'
        position={[0, -9.24, -9.49]}
        rotation={[2.78, -0.57, 3.11]}
        scale={1}
      >
        <group
          name='Headphone Single Speaker support'
          position={[-0.66, 3.75, 1.76]}
        >
          <mesh
            name='Cube 116'
            geometry={nodes['Cube 116'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[-0.39, 4.39, 0.34]}
            rotation={[-0.14, -0.53, 1.5]}
            scale={[1.03, 1, 1]}
          />
          <mesh
            name='Cube 102'
            geometry={nodes['Cube 102'].geometry}
            material={materials.Barbell}
            castShadow
            receiveShadow
            position={[0.48, 7.44, -1.08]}
            rotation={[-1.82, 0.14, 1.06]}
            scale={1}
          />
          <mesh
            name='Cube 91'
            geometry={nodes['Cube 91'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[0.08, 4.1, -0.43]}
            rotation={[-1.67, 0.07, 1.05]}
          />
          <mesh
            name='Cube 83'
            geometry={nodes['Cube 83'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[-0.15, 0.83, -0.13]}
            rotation={[-Math.PI / 2, 0.02, 1.04]}
            scale={[0.73, 0.97, 1]}
          />
        </group>
        <mesh
          name='Cylinder 26'
          geometry={nodes['Cylinder 26'].geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[4.92, -4.36, 5.02]}
          rotation={[0, -0.58, 1.56]}
          scale={1}
        />
        <mesh
          name='Cylinder9'
          geometry={nodes.Cylinder9.geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[-6.55, -4.38, -1.49]}
          rotation={[0, -0.48, 1.56]}
          scale={1}
        />
        <group name='Headphone Single Speaker' position={[0.29, -4.28, -0.03]}>
          <mesh
            name='Cube 73'
            geometry={nodes['Cube 73'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[-0.89, 0, 1.41]}
            rotation={[0.01, -0.54, 1.56]}
            scale={[0.97, 1.06, 0.99]}
          />
          <mesh
            name='Cube 69'
            geometry={nodes['Cube 69'].geometry}
            material={materials.Rug}
            castShadow
            receiveShadow
            position={[1.04, 0, -1.64]}
            rotation={[0.01, -0.54, 1.56]}
            scale={[0.97, 1.06, 0.99]}
          />
        </group>
      </group>
      <group
        name='Headphone Speaker'
        position={[-0.13, -9.35, 9.56]}
        rotation={[0.36, 0.53, -0.02]}
        scale={1}
      >
        <group
          name='Headphone Single Speaker support1'
          position={[-0.66, 3.75, 1.76]}
        >
          <mesh
            name='Cube 117'
            geometry={nodes['Cube 117'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[-0.39, 4.39, 0.34]}
            rotation={[-0.14, -0.53, 1.5]}
            scale={[1.03, 1, 1]}
          />
          <mesh
            name='Cube 103'
            geometry={nodes['Cube 103'].geometry}
            material={materials.Barbell}
            castShadow
            receiveShadow
            position={[0.48, 7.44, -1.08]}
            rotation={[-1.82, 0.14, 1.06]}
            scale={1}
          />
          <mesh
            name='Cube 92'
            geometry={nodes['Cube 92'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[0.13, 3.95, -0.41]}
            rotation={[-1.67, 0.07, 1.05]}
          />
          <mesh
            name='Cube 84'
            geometry={nodes['Cube 84'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[-0.15, 0.77, -0.13]}
            rotation={[-Math.PI / 2, 0.02, 1.04]}
            scale={[0.73, 0.97, 1]}
          />
        </group>
        <mesh
          name='Cylinder 27'
          geometry={nodes['Cylinder 27'].geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[4.92, -4.36, 5.02]}
          rotation={[0, -0.58, 1.56]}
          scale={1}
        />
        <mesh
          name='Cylinder10'
          geometry={nodes.Cylinder10.geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[-6.55, -4.38, -1.49]}
          rotation={[0, -0.48, 1.56]}
          scale={1}
        />
        <group name='Headphone Single Speaker1' position={[0.29, -4.28, -0.03]}>
          <mesh
            name='Cube 74'
            geometry={nodes['Cube 74'].geometry}
            material={materials['Air Conditioning 2']}
            castShadow
            receiveShadow
            position={[-0.89, 0, 1.41]}
            rotation={[0.01, -0.54, 1.56]}
            scale={[0.97, 1.06, 0.99]}
          />
          <mesh
            name='Cube 610'
            geometry={nodes['Cube 610'].geometry}
            material={materials.Rug}
            castShadow
            receiveShadow
            position={[1.04, 0, -1.64]}
            rotation={[0.01, -0.54, 1.56]}
            scale={[0.97, 1.06, 0.99]}
          />
        </group>
      </group>
      <mesh
        name='Cube 121'
        geometry={nodes['Cube 121'].geometry}
        material={materials['Air Conditioning 2']}
        castShadow
        receiveShadow
        position={[0.33, 9.79, 7.92]}
        rotation={[-2.23, 0.01, 1.59]}
        scale={[1, 1, 3.29]}
      />
    </motion.group>
  );
};
