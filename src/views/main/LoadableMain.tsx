import Loadable from 'react-loadable';

export const LoadableMain = Loadable({
  loader: () => import('./Main').then((m) => m.Main),
  loading: () => <></>,
});
