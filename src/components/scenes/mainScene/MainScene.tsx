import { Suspense, lazy } from 'react';
import classes from './mainScene.module.scss';

const Spline = lazy(() => import('@splinetool/react-spline'));

export const MainScene = () => {
  return (
    <Suspense
      fallback={
        <>
          <h1>Loading Scene</h1>
        </>
      }
    >
      <Spline
        id='mainScene'
        scene='https://prod.spline.design/j8STDjRfooC5mStz/scene.splinecode'
        className={classes.mainScene}
      />
    </Suspense>
  );
};
