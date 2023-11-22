import { Common3dObjProps } from 'types/r3f';

export const Walls = ({ nodes, materials }: Common3dObjProps) => {
  return (
    <group name='Walls'>
      <mesh
        name='Rectangle 32'
        geometry={nodes['Rectangle 32'].geometry}
        material={materials.Wall}
        castShadow
        receiveShadow
        position={[0, -177.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        name='Rectangle 29'
        geometry={nodes['Rectangle 29'].geometry}
        material={materials.Wall}
        castShadow
        receiveShadow
        position={[200, 2.5, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        name='Rectangle2'
        geometry={nodes.Rectangle2.geometry}
        material={materials.Wall}
        castShadow
        receiveShadow
        position={[0, 2.5, -200]}
      />
    </group>
  );
};
