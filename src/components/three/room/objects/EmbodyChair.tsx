import { variants } from 'const';
import { motion } from 'framer-motion-3d';
import { Common3dObjProps } from 'types/r3f';

export const EmbodyChair = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <motion.group
      name='Embody Chair'
      position={[-37.98, -53.79, -38.78]}
      rotation={[-Math.PI, 0.37, -Math.PI]}
      scale={1.73}
      initial='hidden'
      animate={{ scale: 1.73 }}
      transition={{
        delay: 3.5,
      }}
      variants={variants}
    >
      <group name='Arms' position={[-8.64, -1.21, -0.42]}>
        <group
          name='Arm 2'
          position={[-0.07, 0, -27.97]}
          rotation={[3.06, -0.06, 3.14]}
          scale={[-1, 1, 1.01]}
        >
          <mesh
            name='Cube 22'
            geometry={nodes['Cube 22'].geometry}
            material={materials['White Gray Steel 2']}
            castShadow
            receiveShadow
            position={[-6.31, 19.87, -1.06]}
            rotation={[-1.67, -0.13, 1.58]}
            scale={1}
          />
          <mesh
            name='Cube 21'
            geometry={nodes['Cube 21'].geometry}
            material={materials['White Gray Steel 3']}
            castShadow
            receiveShadow
            position={[10.24, 4.19, 3.31]}
            rotation={[-1.68, -0.12, 1.56]}
          />
          <mesh
            name='Cube 20'
            geometry={nodes['Cube 20'].geometry}
            material={materials['White Gray Steel 3']}
            castShadow
            receiveShadow
            position={[11.81, -13.84, 3.52]}
            rotation={[0.08, 0.02, 0.18]}
            scale={1}
          />
          <mesh
            name='Cube 19'
            geometry={nodes['Cube 19'].geometry}
            material={materials['White Gray Steel 3']}
            castShadow
            receiveShadow
            position={[12.4, -17.03, 1.54]}
            rotation={[-0.13, -0.02, 0.16]}
            scale={1}
          />
        </group>
        <group
          name='Arm'
          position={[0.57, -0.09, 29.42]}
          rotation={[0.05, 0.01, 0]}
          scale={[1, 1, 1.03]}
        >
          <mesh
            name='Cube 221'
            geometry={nodes['Cube 221'].geometry}
            material={materials['White Gray Steel 2']}
            castShadow
            receiveShadow
            position={[-6.31, 19.85, -1.34]}
            rotation={[-1.67, -0.13, 1.58]}
            scale={1}
          />
          <mesh
            name='Cube 211'
            geometry={nodes['Cube 211'].geometry}
            material={materials['White Gray Steel 3']}
            castShadow
            receiveShadow
            position={[10.24, 4.19, 3.31]}
            rotation={[-1.68, -0.12, 1.56]}
          />
          <mesh
            name='Cube 201'
            geometry={nodes['Cube 201'].geometry}
            material={materials['White Gray Steel 3']}
            castShadow
            receiveShadow
            position={[11.81, -13.84, 3.52]}
            rotation={[0.08, 0.02, 0.18]}
            scale={1}
          />
          <mesh
            name='Cube 191'
            geometry={nodes['Cube 191'].geometry}
            material={materials['White Gray Steel 3']}
            castShadow
            receiveShadow
            position={[12.4, -17.09, 1.1]}
            rotation={[-0.13, -0.02, 0.16]}
            scale={1}
          />
        </group>
      </group>
      <group name='Sit' position={[-14.72, -20.53, -0.33]}>
        <mesh
          name='Cylinder 5'
          geometry={nodes['Cylinder 5'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[18.62, 0.57, 15.18]}
          rotation={[-1.49, -0.07, 0]}
          scale={1}
        />
        <mesh
          name='Cylinder 41'
          geometry={nodes['Cylinder 41'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[18.1, 0.13, -15.43]}
          rotation={[-1.63, -0.07, -0.01]}
          scale={1}
        />
        <mesh
          name='Cube 18'
          geometry={nodes['Cube 18'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[12.49, -6.63, -12.81]}
          rotation={[-1.43, -0.22, 0.03]}
          scale={[1.01, 1.01, 1.11]}
        />
        <mesh
          name='Cube 17'
          geometry={nodes['Cube 17'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[12.53, -6.39, 12.64]}
          rotation={[-1.13, -0.24, 0.16]}
          scale={[0.94, 1.07, 1.13]}
        />
        <mesh
          name='Cube 16'
          geometry={nodes['Cube 16'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[11.96, -4.51, 13.07]}
          rotation={[-0.03, 0, -2.74]}
          scale={[1.01, 1.11, 1.01]}
        />
        <mesh
          name='Cube 15'
          geometry={nodes['Cube 15'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[13.29, -4.7, -12.64]}
          rotation={[3.13, 0, -0.23]}
          scale={[1.01, 1.13, 1]}
        />
        <mesh
          name='Cube 14'
          geometry={nodes['Cube 14'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[19.53, 0.74, -20.83]}
          rotation={[-Math.PI / 2, -0.02, 0.02]}
          scale={1}
        />
        <mesh
          name='Cube 13'
          geometry={nodes['Cube 13'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[19.46, 0.8, 21.45]}
          rotation={[-Math.PI / 2, -0.08, 0]}
          scale={1}
        />
        <mesh
          name='Cube 202'
          geometry={nodes['Cube 202'].geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[0.59, 12.83, 0.9]}
          rotation={[-1.57, 0.18, 0]}
          scale={[0.93, 1, 1]}
        />
        <mesh
          name='Cube 12'
          geometry={nodes['Cube 12'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[0.14, 7.83, 0.17]}
          rotation={[-1.57, 0.08, 0]}
          scale={[0.93, 1, 1]}
        />
        <mesh
          name='Cube 82'
          geometry={nodes['Cube 82'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[-14.79, 8.38, 0.1]}
          rotation={[1.02, -1.44, 2.75]}
          scale={[1.09, 1.05, 0.98]}
        />
        <mesh
          name='Cube 9'
          geometry={nodes['Cube 9'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[5.44, 7.25, -23.18]}
          rotation={[-1.08, 0, 0.02]}
          scale={[1.15, 1.23, 1.74]}
        />
        <mesh
          name='Cube 72'
          geometry={nodes['Cube 72'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[5.57, 7.61, 23.37]}
          rotation={[-2.12, -0.01, 0]}
          scale={[1.19, 1.35, 1.61]}
        />
        <mesh
          name='Cube 63'
          geometry={nodes['Cube 63'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[4.41, -0.64, -0.14]}
          rotation={[-1.57, -0.3, 0]}
          scale={[1.02, 1, 1.11]}
        />
        <mesh
          name='Cube 192'
          geometry={nodes['Cube 192'].geometry}
          material={materials['White Gray (Steel)']}
          castShadow
          receiveShadow
          position={[26.68, 9.66, 1.23]}
          rotation={[1.57, 1.42, 3.14]}
          scale={[1, 1.1, 1]}
        />
      </group>
      <group name='Back sit' position={[12.7, 22.58, -0.15]}>
        <mesh
          name='Cube 203'
          geometry={nodes['Cube 203'].geometry}
          material={materials['Air Conditioning 2']}
          castShadow
          receiveShadow
          position={[5.81, 0, -0.18]}
          rotation={[-Math.PI / 2, 0.12, 0]}
          scale={[1, 1.07, 1]}
        />
        <mesh
          name='Cube 101'
          geometry={nodes['Cube 101'].geometry}
          material={materials['White Gray Steel 4']}
          castShadow
          receiveShadow
          position={[2.94, 0.77, 0.01]}
          rotation={[-Math.PI / 2, 0.16, 0]}
          scale={[1, 1.07, 1]}
        />
      </group>
      <group name='Bottom Side' position={[-13.47, -44.96, 1.72]}>
        <group
          name='Chair Leg Instance'
          position={[0.96, -4.44, 15.92]}
          rotation={[0, 1.55, 0]}
          scale={1}
        >
          <mesh
            name='Wheel'
            geometry={nodes.Wheel.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-17.26, -5.72, 1.69]}
            rotation={[1.57, 0.05, 0]}
            scale={1}
          />
          <group name='Wheel mechanism' position={[-18.33, -3.6, 1.78]}>
            <mesh
              name='Cylinder 51'
              geometry={nodes['Cylinder 51'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0, -0.34, 0]}
            />
            <mesh
              name='Cylinder 42'
              geometry={nodes['Cylinder 42'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0.01, 0.34, 0.26]}
            />
            <mesh
              name='Cylinder 36'
              geometry={nodes['Cylinder 36'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[-0.02, 0.37, -0.22]}
            />
          </group>
          <group
            name='Group2'
            position={[0, 0, 0]}
            rotation={[0, 0, 0.03]}
            scale={1}
          >
            <mesh
              name='Cube 111'
              geometry={nodes['Cube 111'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[-17.74, -2.63, 1.83]}
              rotation={[-0.02, 0.12, 0.21]}
              scale={1}
            />
            <mesh
              name='Cube 64'
              geometry={nodes['Cube 64'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[3.15, -5.91, -0.25]}
              rotation={[0.65, -1.42, 0.65]}
              scale={1}
            />
          </group>
        </group>
        <group
          name='Chair Leg Instance1'
          position={[17.01, -4.44, 3.19]}
          rotation={[-Math.PI, 0.39, -Math.PI]}
          scale={1}
        >
          <mesh
            name='Wheel1'
            geometry={nodes.Wheel1.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-17.26, -5.72, 1.69]}
            rotation={[1.57, 0.05, 0]}
            scale={1}
          />
          <group name='Wheel mechanism1' position={[-18.33, -3.6, 1.78]}>
            <mesh
              name='Cylinder 52'
              geometry={nodes['Cylinder 52'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0, -0.34, 0]}
            />
            <mesh
              name='Cylinder 43'
              geometry={nodes['Cylinder 43'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0.01, 0.34, 0.26]}
            />
            <mesh
              name='Cylinder 37'
              geometry={nodes['Cylinder 37'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[-0.02, 0.37, -0.22]}
            />
          </group>
          <group
            name='Group3'
            position={[0, 0, 0]}
            rotation={[0, 0, 0.03]}
            scale={1}
          >
            <mesh
              name='Cube 112'
              geometry={nodes['Cube 112'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[-17.74, -2.63, 1.83]}
              rotation={[-0.02, 0.12, 0.21]}
              scale={1}
            />
            <mesh
              name='Cube 65'
              geometry={nodes['Cube 65'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[3.15, -5.91, -0.25]}
              rotation={[0.65, -1.42, 0.65]}
              scale={1}
            />
          </group>
        </group>
        <group
          name='Chair Leg Instance2'
          position={[9.97, -4.44, -15.75]}
          rotation={[Math.PI, -0.84, Math.PI]}
          scale={1}
        >
          <mesh
            name='Wheel2'
            geometry={nodes.Wheel2.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-17.26, -5.72, 1.69]}
            rotation={[1.57, 0.05, 0]}
            scale={1}
          />
          <group name='Wheel mechanism2' position={[-18.33, -3.6, 1.78]}>
            <mesh
              name='Cylinder 53'
              geometry={nodes['Cylinder 53'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0, -0.34, 0]}
            />
            <mesh
              name='Cylinder 44'
              geometry={nodes['Cylinder 44'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0.01, 0.34, 0.26]}
            />
            <mesh
              name='Cylinder 38'
              geometry={nodes['Cylinder 38'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[-0.02, 0.37, -0.22]}
            />
          </group>
          <group
            name='Group4'
            position={[0, 0, 0]}
            rotation={[0, 0, 0.03]}
            scale={1}
          >
            <mesh
              name='Cube 113'
              geometry={nodes['Cube 113'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[-17.74, -2.63, 1.83]}
              rotation={[-0.02, 0.12, 0.21]}
              scale={1}
            />
            <mesh
              name='Cube 66'
              geometry={nodes['Cube 66'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[3.15, -5.91, -0.25]}
              rotation={[0.65, -1.42, 0.65]}
              scale={1}
            />
          </group>
        </group>
        <group
          name='Chair Leg Instance3'
          position={[-9.53, -4.44, -15.75]}
          rotation={[0, -1.07, 0]}
          scale={1}
        >
          <mesh
            name='Wheel3'
            geometry={nodes.Wheel3.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-17.26, -5.72, 1.69]}
            rotation={[1.57, 0.05, 0]}
            scale={1}
          />
          <group name='Wheel mechanism3' position={[-18.33, -3.6, 1.78]}>
            <mesh
              name='Cylinder 54'
              geometry={nodes['Cylinder 54'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0, -0.34, 0]}
            />
            <mesh
              name='Cylinder 45'
              geometry={nodes['Cylinder 45'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0.01, 0.34, 0.26]}
            />
            <mesh
              name='Cylinder 39'
              geometry={nodes['Cylinder 39'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[-0.02, 0.37, -0.22]}
            />
          </group>
          <group
            name='Group5'
            position={[0, 0, 0]}
            rotation={[0, 0, 0.03]}
            scale={1}
          >
            <mesh
              name='Cube 114'
              geometry={nodes['Cube 114'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[-17.74, -2.63, 1.83]}
              rotation={[-0.02, 0.12, 0.21]}
              scale={1}
            />
            <mesh
              name='Cube 67'
              geometry={nodes['Cube 67'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[3.15, -5.91, -0.25]}
              rotation={[0.65, -1.42, 0.65]}
              scale={1}
            />
          </group>
        </group>
        <group
          name='Chair Leg'
          position={[-16.71, -4.44, 3.3]}
          rotation={[0, 0.21, 0]}
          scale={1}
        >
          <mesh
            name='Wheel4'
            geometry={nodes.Wheel4.geometry}
            material={materials['White Gray Steel Darker']}
            castShadow
            receiveShadow
            position={[-17.26, -5.72, 1.69]}
            rotation={[1.57, 0.05, 0]}
            scale={1}
          />
          <group name='Wheel mechanism4' position={[-18.33, -3.6, 1.78]}>
            <mesh
              name='Cylinder 55'
              geometry={nodes['Cylinder 55'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0, -0.34, 0]}
            />
            <mesh
              name='Cylinder 46'
              geometry={nodes['Cylinder 46'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[0.01, 0.34, 0.26]}
            />
            <mesh
              name='Cylinder 310'
              geometry={nodes['Cylinder 310'].geometry}
              material={materials['White Gray Steel Darker']}
              castShadow
              receiveShadow
              position={[-0.02, 0.37, -0.22]}
            />
          </group>
          <group
            name='Group6'
            position={[0, 0, 0]}
            rotation={[0, 0, 0.03]}
            scale={1}
          >
            <mesh
              name='Cube 115'
              geometry={nodes['Cube 115'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[-17.74, -2.63, 1.83]}
              rotation={[-0.02, 0.12, 0.21]}
              scale={1}
            />
            <mesh
              name='Cube 68'
              geometry={nodes['Cube 68'].geometry}
              material={materials['White Gray Steel 2']}
              castShadow
              receiveShadow
              position={[3.15, -5.91, -0.25]}
              rotation={[0.65, -1.42, 0.65]}
              scale={1}
            />
          </group>
        </group>
        <mesh
          name='Cylinder 25'
          geometry={nodes['Cylinder 25'].geometry}
          material={materials['White Gray Steel 3']}
          castShadow
          receiveShadow
          position={[0.05, 10.18, -1.73]}
        />
        <mesh
          name='Cylinder8'
          geometry={nodes.Cylinder8.geometry}
          material={materials['White Gray Steel 2']}
          castShadow
          receiveShadow
          position={[0.23, -0.14, -1.72]}
          scale={[1.23, 1, 1]}
        />
      </group>
    </motion.group>
  );
};
