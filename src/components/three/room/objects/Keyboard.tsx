import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const Keyboard = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Keyboard'
      position={[83.85, -16.79, -23.49]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.8,
      }}
      variants={variants}
    >
      <group name='Group 2' position={[-1.44, 0.93, 13.24]}>
        <mesh
          name='Rectangle 27'
          geometry={nodes['Rectangle 27'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-5.01, -0.26, 3.27]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 25'
          geometry={nodes['Rectangle 25'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[3.8, -0.26, 3.27]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 271'
          geometry={nodes['Rectangle 271'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-5.01, -0.26, -3.27]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 251'
          geometry={nodes['Rectangle 251'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[3.8, -0.26, -3.27]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 272'
          geometry={nodes['Rectangle 272'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-5.01, -0.26, 0.07]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 28'
          geometry={nodes['Rectangle 28'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.88, -0.24, 0.07]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 252'
          geometry={nodes['Rectangle 252'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[3.8, -0.26, 0.07]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
      <group name='Group7' position={[-2.04, 0.95, 4.64]}>
        <mesh
          name='Rectangle 17'
          geometry={nodes['Rectangle 17'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.47, -0.51, 0.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 24'
          geometry={nodes['Rectangle 24'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-4.47, -0.26, 1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 22'
          geometry={nodes['Rectangle 22'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-4.47, -0.26, -1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 19'
          geometry={nodes['Rectangle 19'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.54, -0.26, -1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 23'
          geometry={nodes['Rectangle 23'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-0.01, -0.5, 1.59]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 18'
          geometry={nodes['Rectangle 18'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.42, -0.26, -1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
      <group name='Group 3' position={[-2.08, 0.94, -8.71]}>
        <mesh
          name='Rectangle 191'
          geometry={nodes['Rectangle 191'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.5, -0.25, 8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 181'
          geometry={nodes['Rectangle 181'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.46, -0.25, 8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 16'
          geometry={nodes['Rectangle 16'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.51, -0.25, 8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 192'
          geometry={nodes['Rectangle 192'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.5, -0.25, -4.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 182'
          geometry={nodes['Rectangle 182'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.46, -0.25, -4.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 15'
          geometry={nodes['Rectangle 15'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.51, -0.25, -4.79]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 193'
          geometry={nodes['Rectangle 193'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.5, -0.25, 1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 183'
          geometry={nodes['Rectangle 183'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.46, -0.25, 1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 161'
          geometry={nodes['Rectangle 161'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.51, -0.25, 1.61]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 20'
          geometry={nodes['Rectangle 20'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-4.51, -0.25, -8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 194'
          geometry={nodes['Rectangle 194'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.5, -0.25, -8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 184'
          geometry={nodes['Rectangle 184'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.46, -0.25, -8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 14'
          geometry={nodes['Rectangle 14'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.51, -0.25, -8.01]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 195'
          geometry={nodes['Rectangle 195'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.5, -0.25, 4.88]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 185'
          geometry={nodes['Rectangle 185'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.46, -0.25, 4.88]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 162'
          geometry={nodes['Rectangle 162'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.51, -0.25, 4.88]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 21'
          geometry={nodes['Rectangle 21'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-4.51, -0.5, 1.59]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 196'
          geometry={nodes['Rectangle 196'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[-1.5, -0.25, -1.52]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 186'
          geometry={nodes['Rectangle 186'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[1.46, -0.25, -1.52]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <mesh
          name='Rectangle 163'
          geometry={nodes['Rectangle 163'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[4.51, -0.25, -1.52]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
      </group>
      <mesh
        name='Table base'
        geometry={nodes['Table base'].geometry}
        material={materials['White Gray Steel 4']}
        castShadow
        receiveShadow
        position={[-1.73, -1.46, 0.19]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </motion.group>
  );
};
