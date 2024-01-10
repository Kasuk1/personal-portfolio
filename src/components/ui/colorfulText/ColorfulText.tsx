import classes from './colorfulText.module.scss';

type Props = {
  title: string;
};

export const ColorfulText = ({ title }: Props) => {
  return <div className={classes.colofurText}>{title}</div>;
};
