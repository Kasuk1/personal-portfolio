import Loadable from 'react-loadable';

export const LoadableContact = Loadable({
  loader: () => import('./Contact').then((m) => m.Contact),
  loading: () => <></>,
});
