export type ProjectReferenceType = {
  id: number;
  name: string;
  url: string;
  logo: 'web' | 'github' | 'figma';
};

export type ProjectImageType = {
  id: number;
  src: string;
  alt: string;
};

export type ProjectDataType = {
  id: string;
  name: string;
  tags: string[];
  technologies: { [key: string]: string[] };
  references: ProjectReferenceType[];
  images?: ProjectImageType[];
  status: string;
};
