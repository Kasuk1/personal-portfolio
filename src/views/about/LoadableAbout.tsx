import Loadable from 'react-loadable';

export const LoadableAbout = Loadable({
  loader: () => import('./About').then((m) => m.About),
  loading: () => <></>,
});
