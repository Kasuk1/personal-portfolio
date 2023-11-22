import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Laptop = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Laptop'
      position={[114.09, -5.67, -125.3]}
      rotation={[0, 0.2, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2,
      }}
      variants={variants}
    >
      <mesh
        name='Rectangle 31'
        geometry={nodes['Rectangle 31'].geometry}
        material={materials['White Gray Steel 3']}
        castShadow
        receiveShadow
        position={[7.13, -12.63, -7.78]}
        rotation={[-1.56, -0.01, -0.86]}
        scale={0.76}
      />
      <mesh
        name='Rectangle 26'
        geometry={nodes['Rectangle 26'].geometry}
        material={materials['White Gray Steel 3']}
        castShadow
        receiveShadow
        position={[0.84, -12.72, -2.54]}
        rotation={[-1.56, -0.01, -0.86]}
        scale={0.76}
      />
      <mesh
        name='Rectangle 72'
        geometry={nodes['Rectangle 72'].geometry}
        material={materials.Barbell}
        castShadow
        receiveShadow
        position={[-15.36, -12.07, -9.68]}
        rotation={[-1.56, -0.01, -0.86]}
        scale={0.76}
      />
      <mesh
        name='Rectangle 63'
        geometry={nodes['Rectangle 63'].geometry}
        material={materials.Barbell}
        castShadow
        receiveShadow
        position={[-16.84, -12.07, -11.41]}
        rotation={[-1.56, -0.01, -0.86]}
        scale={0.76}
      />
      <mesh
        name='Rectangle 53'
        geometry={nodes['Rectangle 53'].geometry}
        material={materials['White Gray (Steel)']}
        castShadow
        receiveShadow
        position={[-9.7, -12.12, 1.8]}
        rotation={[-1.56, -0.01, -0.86]}
        scale={0.76}
      />
      <mesh
        name='Ellipse 21'
        geometry={nodes['Ellipse 21'].geometry}
        material={materials['White Gray Steel 2']}
        castShadow
        receiveShadow
        position={[8.83, 12.64, -9.45]}
        rotation={[0, -0.86, 0]}
        scale={0.76}
      />
      <mesh
        name='Rectangle1'
        geometry={nodes.Rectangle1.geometry}
        material={materials['White Gray (Steel)']}
        castShadow
        receiveShadow
        position={[8.92, 1.42, -9.41]}
        rotation={[0, -0.86, 0]}
        scale={0.76}
      />
      <mesh
        name='Cube 27'
        geometry={nodes['Cube 27'].geometry}
        material={materials['White Gray Steel 2']}
        castShadow
        receiveShadow
        position={[-0.9, -13.23, -0.98]}
        rotation={[0.03, -0.86, 0.02]}
        scale={0.76}
      />
      <mesh
        name='Cube5'
        geometry={nodes.Cube5.geometry}
        material={materials['White Gray Steel 2']}
        castShadow
        receiveShadow
        position={[8.8, 1.19, -9.42]}
        rotation={[-Math.PI / 2, 0, -0.86]}
        scale={0.76}
      />
    </motion.group>
  );
};
