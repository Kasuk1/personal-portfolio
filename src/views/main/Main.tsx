import { Suspense, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { MotionConfig } from 'framer-motion';
import { Overlay } from 'views';
import { Scene as RoomScene } from 'components';

export const Main = () => {
  const scroll = useRef<number>(0);
  const [isRoomCavasInDom, setIsRoomCanvasInDom] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: 'spring',
        mass: 3,
        stiffness: 300,
        damping: 80,
        restDelta: 0.0001,
      }}
    >
      <Canvas id='roomCanvas' shadows flat linear>
        <Suspense fallback={null}>
          <RoomScene
            scroll={scroll}
            setIsRoomCanvasInDom={setIsRoomCanvasInDom}
          />
          {/* <Stats /> */}
        </Suspense>
      </Canvas>
      {isRoomCavasInDom && <Overlay scroll={scroll} />}
    </MotionConfig>
  );
};
