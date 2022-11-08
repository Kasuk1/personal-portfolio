export type ProjectReferenceType = {
  id: number;
  name: string;
  url: string;
};

export type ProjectImageType = {
  id: number;
  src: string;
  alt: string;
};

export type ProjectDataType = {
  id: number;
  name: string;
  description: string;
  technologies: { [key: string]: string[] };
  references: ProjectReferenceType[];
  images?: ProjectImageType[];
};
