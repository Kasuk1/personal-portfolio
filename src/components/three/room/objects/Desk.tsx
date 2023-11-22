import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Desk = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Desk'
      position={[108.2, -87.34, -32.89]}
      rotation={[0, 0.01, 0]}
      scale={[0.94, 0.94, 1.04]}
      initial={{ x: 30 }}
      animate={{ x: 108.2 }}
      transition={{
        delay: 1.5,
      }}
    >
      <mesh
        name='Table'
        geometry={nodes.Table.geometry}
        material={materials.Wood}
        castShadow
        receiveShadow
        position={[0, 59.36, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1}
      />
      <group
        name='Desk Leg Instance'
        position={[55.16, -5.49, 111.57]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[1.32, 1, 1.08]}
      >
        <mesh
          name='Sphere 3'
          geometry={nodes['Sphere 3'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.7, -63.19, 103.63]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Sphere 31'
          geometry={nodes['Sphere 31'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.79, -63.19, 1.88]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cube6'
          geometry={nodes.Cube6.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.73, -61.29, 52.73]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cube7'
          geometry={nodes.Cube7.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.71, -58.31, 51.6]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cube8'
          geometry={nodes.Cube8.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.81, 3.98, 51.62]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group
        name='Desk Leg'
        position={[58.34, -5.49, -114.63]}
        rotation={[Math.PI, -1.56, Math.PI]}
        scale={[1.32, 1, 1.08]}
      >
        <mesh
          name='Sphere 32'
          geometry={nodes['Sphere 32'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.7, -63.19, 103.63]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Sphere 33'
          geometry={nodes['Sphere 33'].geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.79, -63.19, 1.88]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cube9'
          geometry={nodes.Cube9.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.73, -61.29, 52.73]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cube10'
          geometry={nodes.Cube10.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.71, -58.31, 51.6]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          name='Cube11'
          geometry={nodes.Cube11.geometry}
          material={materials['White Gray Steel Darker']}
          castShadow
          receiveShadow
          position={[1.81, 3.98, 51.62]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </motion.group>
  );
};
