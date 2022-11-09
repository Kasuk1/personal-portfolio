import Loadable from 'react-loadable';

export const LoadableSkillContentDesign = Loadable({
  loader: () =>
    import('./SkillContentDesign').then((m) => m.SkillContentDesign),
  loading: () => <></>,
});

export const LoadableSkillContentFrontend = Loadable({
  loader: () =>
    import('./SkillContentFrontend').then((m) => m.SkillContentFrontend),
  loading: () => <></>,
});

export const LoadableSkillContentBackend = Loadable({
  loader: () =>
    import('./SkillContentBackend').then((m) => m.SkillContentBackend),
  loading: () => <></>,
});
