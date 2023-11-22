import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const MonitorUltraWide = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Monitor Ultrawide'
      position={[150.69, 20.01, -34.14]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 2.5,
      }}
      variants={variants}
    >
      <mesh
        name='Rectangle 52'
        geometry={nodes['Rectangle 52'].geometry}
        material={materials['Monitor Black']}
        castShadow
        receiveShadow
        position={[-3.39, 7.76, 0.16]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        name='Cube 612'
        geometry={nodes['Cube 612'].geometry}
        material={materials['Monitor Black']}
        castShadow
        receiveShadow
        position={[-5.46, 7.81, -0.02]}
        rotation={[0, -1.57, 0]}
      />
      <mesh
        name='Monitor Base'
        geometry={nodes['Monitor Base'].geometry}
        material={nodes['Monitor Base'].material}
        castShadow
        receiveShadow
        position={[-1.58, -38.94, 6.85]}
        rotation={[0, -1.57, 0]}
        scale={1.29}
      />
    </motion.group>
  );
};
