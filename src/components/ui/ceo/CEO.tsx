import { Helmet } from 'react-helmet-async';

export type Props = {
  title: string;
  description: string;
  type?: 'article' | 'blog' | 'portfolio' | 'documentation';
};

export const CEO = ({ title, description, type = 'article' }: Props) => {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />

      {/* Facebook tags */}
      <meta property='og:type' content={type} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
    </Helmet>
  );
};
