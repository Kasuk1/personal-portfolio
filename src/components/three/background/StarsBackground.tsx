import { Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

interface StarsBackgroundProps {
  /**
   * Shows stars in the skybox when enabled.
   */
  stars?: boolean;
}

export const StarsBackground = ({ stars = true }: StarsBackgroundProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 150 }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -2,
      }}
      frameloop='demand'
    >
      {stars && (
        <Stars
          count={500}
          depth={60}
          factor={2}
          radius={100}
          saturation={0}
          speed={1}
        />
      )}
    </Canvas>
  );
};
