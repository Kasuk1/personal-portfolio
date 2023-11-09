import { useEffect, useRef } from 'react';
import { Mesh, Group } from 'three';
import { Sphere, useAnimations, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { motion } from 'framer-motion-3d';

type GLTFResult = GLTF & {
  nodes: {
    Object_50: THREE.Mesh;
    Object_52: THREE.Mesh;
    Object_8: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    Object_12: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_14: THREE.SkinnedMesh;
    Object_15: THREE.SkinnedMesh;
    Object_16: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    Object_18: THREE.SkinnedMesh;
    Object_19: THREE.SkinnedMesh;
    Object_20: THREE.SkinnedMesh;
    Object_21: THREE.SkinnedMesh;
    Object_22: THREE.SkinnedMesh;
    Object_23: THREE.SkinnedMesh;
    Object_24: THREE.SkinnedMesh;
    GLTF_created_0_rootJoint: THREE.Bone;
  };
  materials: {
    Spacesuit: THREE.MeshStandardMaterial;
    Visor: THREE.MeshStandardMaterial;
  };
};

type ActionName = 'Space Salsa';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<
    | JSX.IntrinsicElements['mesh']
    | JSX.IntrinsicElements['skinnedMesh']
    | JSX.IntrinsicElements['bone']
  >
>;

export const Astronaut = (props: any) => {
  const group = useRef<Group>();
  const sphereRef = useRef<Mesh>(null);
  const { nodes, materials, animations } = useGLTF(
    'assets/three/astronaut/outhere_space_buddy.glb'
  ) as GLTFResult;

  const { actions, names } = useAnimations(animations, group);

  //const { actions, names } = useAnimations(animations, group);

  //useFrame(() => group.current?.rotateY(0.01));
  /* useFrame(() => {
    boxRef.current?.rotateX(0.02);
    boxRef.current?.rotateY(0.02);
  }); */

  useEffect(() => {
    actions[names[0]]?.reset().fadeIn(0.5).play().setDuration(45);
  }, [actions]);
  /* 
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.pointer.x / 15, state.pointer.y / 5, 6],
      0.1,
      delta
    );
  }); */

  return (
    <>
      <ambientLight intensity={0.8} args={['#fff']} />
      <directionalLight
        intensity={0.5}
        castShadow
        position={[-1, 1.3, 0]}
        shadow-mapSize-height={512}
        shadow-mapSize-width={512}
      />

      {/* <pointLight
        intensity={100}
        position={[6, 10, 10]}
        castShadow={true}
        receiveShadow={true}
        visible={false}
      /> */}
      {/*  <Box
        ref={boxRef}
        castShadow
        receiveShadow
        position={[1.5, 0.45, -1.5]}
        rotation={[0, -0.8, 0]}
        args={[1.5, 1.5, 1.5]}
      >
        <meshStandardMaterial attach='material' color='white' />
      </Box> */}
      <Sphere
        ref={sphereRef}
        receiveShadow
        rotation={[0, 0, 0]}
        position={[4, -6.5, -0.5]}
        args={[3.5]}
      >
        <meshStandardMaterial attach='material' color='#1D2636' />
      </Sphere>
      <group ref={group} {...props} dispose={null}>
        <group name='Sketchfab_Scene'>
          <motion.group
            name='Sketchfab_model'
            rotation={[-Math.PI / 2, 0, -1.7]}
            position={[2.5, -3, 0]}
            scale={0.05}
          >
            <group name='root'>
              <group name='GLTF_SceneRootNode' rotation={[Math.PI / 2, 0.5, 0]}>
                <group name='_29'>
                  <group name='Rig_28'>
                    <group name='GLTF_created_0'>
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <group name='Spaceman_0' />
                      <skinnedMesh
                        name='Object_8'
                        geometry={nodes.Object_8.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_8.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_9'
                        geometry={nodes.Object_9.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_9.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_10'
                        geometry={nodes.Object_10.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_10.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_11'
                        geometry={nodes.Object_11.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_11.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_12'
                        geometry={nodes.Object_12.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_12.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_13'
                        geometry={nodes.Object_13.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_13.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_14'
                        geometry={nodes.Object_14.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_14.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_15'
                        geometry={nodes.Object_15.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_15.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_16'
                        geometry={nodes.Object_16.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_16.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_17'
                        geometry={nodes.Object_17.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_17.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_18'
                        geometry={nodes.Object_18.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_18.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_19'
                        geometry={nodes.Object_19.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_19.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_20'
                        geometry={nodes.Object_20.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_20.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_21'
                        geometry={nodes.Object_21.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_21.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_22'
                        geometry={nodes.Object_22.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_22.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_23'
                        geometry={nodes.Object_23.geometry}
                        material={materials.Visor}
                        skeleton={nodes.Object_23.skeleton}
                        receiveShadow
                        castShadow
                      />
                      <skinnedMesh
                        name='Object_24'
                        geometry={nodes.Object_24.geometry}
                        material={materials.Spacesuit}
                        skeleton={nodes.Object_24.skeleton}
                        receiveShadow
                        castShadow
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </motion.group>
        </group>
      </group>

      {/* <Plane
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        args={[3, 3]}
      >
        <meshStandardMaterial attach='material' color='#f0f0f0' />
      </Plane> */}
    </>
  );
};
