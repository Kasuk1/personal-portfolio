import useSpline from '@splinetool/r3f-spline';
import { motion } from 'framer-motion-3d';
import { SceneProps } from '@react-three/fiber';
import {
  AirConditioning,
  Bag,
  Desk,
  EmbodyChair,
  ExtraStuff,
  GymStuff,
  HeadphoneSupport,
  Keyboard,
  KeyboardPad,
  KeyboardSupport,
  Laptop,
  MonitorUltraWide,
  Mouse,
  Ovni1,
  Ovni2,
  Phone,
  PlantStuff,
  Poster,
  Rug,
  Sennheiser,
  TV,
  Walls,
} from './objects';
import { roomSceneUrl, variants } from 'const';

interface RoomObjectsProps {
  roomRef: React.RefObject<SceneProps>;
}

export const Room = ({ roomRef }: RoomObjectsProps) => {
  const { nodes, materials } = useSpline(roomSceneUrl);

  return (
    <motion.scene
      name='Scene'
      ref={roomRef}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      initial='hidden'
      animate='visible'
      transition={{
        delay: 1.2,
      }}
      variants={variants}
    >
      <TV nodes={nodes} materials={materials} />
      <GymStuff nodes={nodes} materials={materials} />
      <AirConditioning nodes={nodes} materials={materials} />
      <Bag nodes={nodes} materials={materials} />
      <PlantStuff nodes={nodes} materials={materials} />
      <ExtraStuff nodes={nodes} materials={materials} />
      <Poster nodes={nodes} materials={materials} />
      <EmbodyChair materials={materials} nodes={nodes} />
      <Ovni2 materials={materials} nodes={nodes} />
      <Ovni1 materials={materials} nodes={nodes} />
      <Sennheiser materials={materials} nodes={nodes} />
      <HeadphoneSupport materials={materials} nodes={nodes} />
      <KeyboardSupport materials={materials} nodes={nodes} />
      <Mouse materials={materials} nodes={nodes} />
      <Keyboard materials={materials} nodes={nodes} />
      <KeyboardPad materials={materials} nodes={nodes} />
      <Phone materials={materials} nodes={nodes} />
      <MonitorUltraWide materials={materials} nodes={nodes} />
      <Laptop materials={materials} nodes={nodes} />
      <Desk materials={materials} nodes={nodes} />
      <Rug materials={materials} nodes={nodes} />
      <Walls materials={materials} nodes={nodes} />
    </motion.scene>
  );
};
