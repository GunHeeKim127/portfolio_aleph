export type Strength = {
  number: string;
  title: string;
  keyword: string;
  situation: string;
  action: string;
  result: string;
  evidence: string;
};

export type Project = {
  number: string;
  period: string;
  title: string;
  description: string;
  stack: string[];
  result: string;
};

export type BugFix = {
  number: string;
  before: string;
  after: string;
};