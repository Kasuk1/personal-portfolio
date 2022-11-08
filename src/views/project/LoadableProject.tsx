import Loadable from 'react-loadable';

export const LoadableProject = Loadable({
  loader: () => import('./Project').then((m) => m.Project),
  loading: () => <></>,
});
