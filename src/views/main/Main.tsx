import { useRef, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { Overlay } from 'views';

export const Main = () => {
  /* const scroll = useRef<number>(0);
  const [isRoomCavasInDom, setIsRoomCanvasInDom] = useState(false); */

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
      {/* <Suspense fallback={null}>
        <Canvas id='roomCanvas' shadows flat linear>
          <Cube setIsRoomCanvasInDom={setIsRoomCanvasInDom} />
          <RoomScene
            scroll={scroll}
            setIsRoomCanvasInDom={setIsRoomCanvasInDom}
          />
          <Stats />
        </Canvas>
      </Suspense> */}
      {/* {isRoomCavasInDom ? <Overlay scroll={scroll} /> : null} */}
      {/* {isRoomCavasInDom ? <Overlay /> : null} */}
      <Overlay />
    </MotionConfig>
  );
};
