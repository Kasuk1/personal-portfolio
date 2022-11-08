import Loadable from 'react-loadable';

export const LoadableSkill = Loadable({
  loader: () => import('./Skill').then((m) => m.Skill),
  loading: () => <></>,
});
