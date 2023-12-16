export type TopicType = {
  _id: string;
  name: string | null;
  videoLink: string;
};
export type SubjectType = {
  _id: string;
  name: string | null;
  description: string | null;
  topics: TopicType[];
};
export type CourseType = {
  _id: string;
  name: string | null;
  subjects: SubjectType[];
};
