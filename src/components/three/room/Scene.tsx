import {
  Dispatch,
  RefObject,
  SetStateAction,
  useLayoutEffect,
  useRef,
} from 'react';
import * as THREE from 'three';
import { PerspectiveCamera } from '@react-three/drei';
import { PerspectiveCamera as PCamera } from 'three';
import { Room } from './Room';
import { useLerpedMouse } from 'hooks';
import { SceneProps, useFrame, useThree } from '@react-three/fiber';

interface RoomProps {
  scroll: RefObject<number>;
  setIsRoomCanvasInDom: Dispatch<SetStateAction<boolean>>;
}

export const Scene = ({
  scroll,
  setIsRoomCanvasInDom,
  ...props
}: RoomProps) => {
  const camera = useRef<PCamera>(null);
  const roomRef = useRef<SceneProps>(null);
  const directLightRef = useRef<THREE.DirectionalLight>(null);
  const mouse = useLerpedMouse();
  const size = useThree((state) => state.size);
  const isMobile = size.width < 768;
  const cameraTargetPosition = new THREE.Vector3(0, isMobile ? 150 : -45, -70);
  const lerpedScroll = useRef(0);

  useFrame(() => {
    // lerp the scroll
    lerpedScroll.current += (scroll.current! - lerpedScroll.current) * 0.08;

    // animate the camera
    const zStart = isMobile ? 1500 : 1100;
    const zEnd = isMobile ? 200 : 150;
    const xMin = isMobile ? -600 : -800;
    const xMax = isMobile ? -200 : -350;
    const targetX = isMobile ? -50 : -300;
    const yBase = isMobile ? 1100 : 500;
    const yRange = isMobile ? 400 : 1000;
    const t = lerpedScroll.current;
    const arc = Math.sin(t * Math.PI);

    camera.current!.position.set(
      THREE.MathUtils.lerp(xMax, xMin, arc),
      arc * yRange + yBase,
      THREE.MathUtils.lerp(zStart, zEnd, t)
    );
    cameraTargetPosition.x = THREE.MathUtils.lerp(0, targetX, arc);
    camera.current!.lookAt(cameraTargetPosition);

    // rotate the model on mousehover
    //@ts-ignore
    roomRef.current!.position!.x = (1 - t) * 150;
    //@ts-ignore
    roomRef.current!.rotation!.y = mouse.current.x * Math.PI * 0.07;
  });

  useFrame(() => {
    directLightRef.current!.shadow.mapSize.width = isMobile ? 1024 : 4096;
    directLightRef.current!.shadow.mapSize.height = isMobile ? 1024 : 4096;
  });

  useLayoutEffect(() => {
    setIsRoomCanvasInDom(true);
  }, []);

  return (
    <>
      <color attach='background' args={['#FDF7ED']} />
      <group {...props} dispose={null}>
        <Room roomRef={roomRef} />

        <PerspectiveCamera
          name='Camera'
          ref={camera}
          makeDefault
          far={8000}
          near={5}
          fov={40}
          position={[0, 0, 0]}
        />
        <directionalLight
          name='Directional Light'
          ref={directLightRef}
          color='#ffffff'
          castShadow
          intensity={3.5}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-1000}
          shadow-camera-right={1000}
          shadow-camera-top={1000}
          shadow-camera-bottom={-1000}
          position={[-125, 158, -25]}
        />
        <hemisphereLight
          name='Default Ambient Light'
          intensity={1.5}
          color='#D3D3D3'
        />
      </group>
    </>
  );
};
