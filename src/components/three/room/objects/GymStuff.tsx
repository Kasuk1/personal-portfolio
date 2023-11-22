import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const GymStuff = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Gym Stuff'
      position={[-68.4, -41.62, -137.42]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.5,
      }}
      variants={variants}
    >
      <group
        name='Disc'
        position={[-89.55, -100.46, 18.88]}
        rotation={[0, 1.01, 0]}
        scale={1}
      >
        <mesh
          name='Cylinder 4'
          geometry={nodes['Cylinder 4'].geometry}
          material={materials['Plant Leaf']}
          castShadow
          receiveShadow
          position={[0, 0, 12.39]}
          rotation={[0.58, 0, 0]}
        />
        <mesh
          name='Cylinder 3'
          geometry={nodes['Cylinder 3'].geometry}
          material={materials['Bag Main Color']}
          castShadow
          receiveShadow
          position={[0, -4.44, -9.67]}
        />
        <mesh
          name='Cylinder 2'
          geometry={nodes['Cylinder 2'].geometry}
          material={materials.Red}
          castShadow
          receiveShadow
          position={[0, -7.6, -5.99]}
        />
        <mesh
          name='Cylinder'
          geometry={nodes.Cylinder.geometry}
          material={materials.Blue}
          castShadow
          receiveShadow
          position={[0, -10.96, -9.82]}
        />
      </group>
      <group
        name='Barbell 2'
        position={[6.74, -108.96, -35.54]}
        rotation={[1.43, Math.PI / 2, 0]}
        scale={[1, 1, 1.01]}
      >
        <mesh
          name='Cylinder 31'
          geometry={nodes['Cylinder 31'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[0, 0, 77.57]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cylinder 21'
          geometry={nodes['Cylinder 21'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[0, 0, -72.59]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cylinder1'
          geometry={nodes.Cylinder1.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.27, 1]}
        />
      </group>
      <group
        name='Barbell'
        position={[-72.84, 0.69, -18.66]}
        rotation={[1.43, 0, 0]}
        scale={[1, 1, 1.01]}
      >
        <mesh
          name='Cylinder 32'
          geometry={nodes['Cylinder 32'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[0, 0, 77.57]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cylinder 22'
          geometry={nodes['Cylinder 22'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[0, 0, -72.59]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cylinder2'
          geometry={nodes.Cylinder2.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1.27, 1]}
        />
      </group>
      <mesh
        name='Gym Ball'
        geometry={nodes['Gym Ball'].geometry}
        material={materials.Blue}
        castShadow
        receiveShadow
        position={[5.19, -78.86, -6.67]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <group name='Dumbbells' position={[-32.59, -98.32, -13.36]} scale={0.64}>
        <group
          name='Dumbbell 3'
          position={[-22.22, 0, 1.28]}
          rotation={[1.62, -0.75, 0.07]}
          scale={1}
        >
          <mesh
            name='Cylinder 23'
            geometry={nodes['Cylinder 23'].geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-1.53, 0.8, 3.25]}
            rotation={[-2.91, -1.4, -1.34]}
            scale={1}
          />
          <mesh
            name='Cylinder 33'
            geometry={nodes['Cylinder 33'].geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-2.8, 0.11, 16.43]}
            rotation={[-2.91, -1.4, -1.34]}
            scale={1}
          />
          <mesh
            name='Cylinder3'
            geometry={nodes.Cylinder3.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[2.8, -0.11, -16.43]}
            rotation={[-2.91, -1.4, -1.34]}
            scale={1}
          />
        </group>
        <group
          name='Dumbbell'
          position={[-4.2, -10.36, 2.76]}
          rotation={[0, 0.12, 0]}
        >
          <mesh
            name='Cylinder 24'
            geometry={nodes['Cylinder 24'].geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-1.53, 0.8, 3.25]}
            rotation={[-2.91, -1.4, -1.34]}
            scale={1}
          />
          <mesh
            name='Cylinder 34'
            geometry={nodes['Cylinder 34'].geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-2.8, 0.11, 16.43]}
            rotation={[-2.91, -1.4, -1.34]}
            scale={1}
          />
          <mesh
            name='Cylinder4'
            geometry={nodes.Cylinder4.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[2.8, -0.11, -16.43]}
            rotation={[-2.91, -1.4, -1.34]}
            scale={1}
          />
        </group>
      </group>
    </motion.group>
  );
};
