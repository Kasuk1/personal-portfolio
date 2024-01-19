import { useRef } from 'react';
import gsap from 'gsap';
import Spline, { SPEObject } from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import classes from './mainScene.module.scss';

export const MainScene = () => {
  const canvasSceneRef = useRef<HTMLCanvasElement | null>(null);
  const cubeRef = useRef<SPEObject>();
  const cameraRef = useRef<SPEObject>();
  const sphereRef = useRef<SPEObject>();

  const handleSceneLoad = (splineApp: Application) => {
    canvasSceneRef.current = splineApp.canvas;

    cubeRef.current = splineApp.findObjectById(
      '612ba4fc-2e13-452f-b27c-9cca9da18b2b'
    );
    sphereRef.current = splineApp.findObjectById(
      '00b0f245-a58a-4de5-8b2e-a985abfee135'
    );
    cameraRef.current = splineApp.findObjectById(
      'b98e4c0a-7e2b-4ca0-8959-320eb5fd7074'
    );

    if (!cubeRef.current || !cameraRef.current || !sphereRef.current) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#skill_section',
          start: 'center 700',
          end: 'bottom bottom',
          scrub: 3,
          id: 'cubeTL',
          markers: false,
        },
      })
      /* .to(cubeRef.current.rotation, { x: -Math.PI / 14, z: Math.PI / 36 }, 0) */
      .to(cubeRef.current.position, { /* x: -150 */ y: -400, z: 900 }, 0)
      .to(cubeRef.current.scale, { x: 0.9, y: 0.9, z: 0.9 }, 0);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#exp_section',
          start: 'center bottom',
          end: 'bottom bottom',
          scrub: 2,
          id: 'sphereTL',
          markers: false,
        },
      })
      .to(cameraRef.current.position, { y: -800 }, 0)
      .to(sphereRef.current.scale, { x: 1.25, y: 1.25, z: 1.25 }, 0);
  };

  return (
    <Spline
      id='mainScene'
      scene='https://prod.spline.design/j8STDjRfooC5mStz/scene.splinecode'
      className={classes.mainScene}
      onLoad={handleSceneLoad}
    />
  );
};
