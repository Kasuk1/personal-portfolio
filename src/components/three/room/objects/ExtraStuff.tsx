import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const ExtraStuff = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Extra Stuff 1'
      position={[72.83, 87.63, -147.83]}
      rotation={[0, 1.56, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2.5,
      }}
      variants={variants}
    >
      <group
        name='Wifi'
        position={[4, 1.1, 11.16]}
        rotation={[0, 0.38, 0]}
        scale={1}
      >
        <mesh
          name='Light 4'
          geometry={nodes['Light 4'].geometry}
          material={materials['Bag Main Color']}
          castShadow
          receiveShadow
          position={[-11.16, -13.53, 6.01]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={1}
        />
        <mesh
          name='Light 3'
          geometry={nodes['Light 3'].geometry}
          material={materials['Plant Leaf']}
          castShadow
          receiveShadow
          position={[-11.16, -13.53, 9.52]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={1}
        />
        <mesh
          name='Light 2'
          geometry={nodes['Light 2'].geometry}
          material={materials['Plant Leaf']}
          castShadow
          receiveShadow
          position={[-11.16, -13.53, 13.22]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={1}
        />
        <mesh
          name='Light'
          geometry={nodes.Light.geometry}
          material={materials['Plant Leaf']}
          castShadow
          receiveShadow
          position={[-11.16, -13.53, -13.49]}
          rotation={[Math.PI, -Math.PI / 2, 0]}
          scale={1}
        />
        <mesh
          name='Cube 81'
          geometry={nodes['Cube 81'].geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[10.47, 1.72, -11.94]}
          rotation={[-1.75, 0, Math.PI / 2]}
          scale={1}
        />
        <mesh
          name='Cube 71'
          geometry={nodes['Cube 71'].geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[10.47, 1.67, 10.21]}
          rotation={[-1.48, 0, Math.PI / 2]}
          scale={1}
        />
        <mesh
          name='Cylinder 35'
          geometry={nodes['Cylinder 35'].geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[8.38, -13.1, -9.3]}
          rotation={[-Math.PI / 2, -0.04, Math.PI / 2]}
          scale={1}
        />
        <mesh
          name='Cylinder7'
          geometry={nodes.Cylinder7.geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[8.38, -13.1, 8.87]}
          rotation={[-Math.PI / 2, -0.04, Math.PI / 2]}
          scale={1}
        />
        <mesh
          name='Cube 62'
          geometry={nodes['Cube 62'].geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[-2.69, -13.82, 0]}
          rotation={[-Math.PI / 2, 0, Math.PI / 2]}
          scale={1}
        />
      </group>
      <group name='Books' position={[12.43, 2.35, -22.89]}>
        <mesh
          name='Rectangle 8'
          geometry={nodes['Rectangle 8'].geometry}
          material={materials.Barbell}
          castShadow
          receiveShadow
          position={[1.43, -0.69, 7.22]}
          rotation={[0, -0.02, 0]}
        />
        <mesh
          name='Rectangle 7'
          geometry={nodes['Rectangle 7'].geometry}
          material={materials['Plant Leaf']}
          castShadow
          receiveShadow
          position={[1.5, -0.69, 2.65]}
          rotation={[0, -0.02, 0]}
        />
        <mesh
          name='Rectangle 61'
          geometry={nodes['Rectangle 61'].geometry}
          material={materials['Bag Color 2']}
          castShadow
          receiveShadow
          position={[0.85, 0.28, -6.63]}
          rotation={[0, -0.02, 0]}
        />
        <mesh
          name='Rectangle 51'
          geometry={nodes['Rectangle 51'].geometry}
          material={materials['Dark Blue chair']}
          castShadow
          receiveShadow
          position={[1.69, -1.71, -16.03]}
          rotation={[0.09, -0.02, 0]}
          scale={1}
        />
      </group>
      <mesh
        name='Support'
        geometry={nodes.Support.geometry}
        material={materials.Wood}
        castShadow
        receiveShadow
        position={[12.2, -21.24, -5.58]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={1}
      />
    </motion.group>
  );
};
