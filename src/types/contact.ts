import { SVGComponentProps } from './ui';

export type ContactDataType = {
  id: string;
  name: string;
  logo: (props: SVGComponentProps) => JSX.Element;
  data: string;
  url: string;
};
