export type ExamRequest = {
  name: string;
  description: string;
  status: boolean;
};

export type ExamResponse = {
  id: number;
  name: string;
  description: string;
  status: boolean;
};
