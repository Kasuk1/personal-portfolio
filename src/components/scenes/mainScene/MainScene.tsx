import { Suspense, lazy } from 'react';
import classes from './mainScene.module.scss';

const Spline = lazy(() => import('@splinetool/react-spline'));

export const MainScene = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            backgroundColor: '#000101',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 100,
          }}
        >
          <h1>Loading Scene</h1>
        </div>
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
