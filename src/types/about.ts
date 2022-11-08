export type AboutDataSectionFieldType = {
  entityName?: string;
  date?: string;
  position?: string;
  functions?: string[];
};

export type AboutDataSectionType = {
  titleName: string;
  description?: string;
  fields: AboutDataSectionFieldType[];
};

export type AboutDataType = {
  ownerName: string;
  career: string;
  introduction: string;
  experience: AboutDataSectionType;
  education: AboutDataSectionType;
  technologies: AboutDataSectionType;
  languages: AboutDataSectionType;
};
