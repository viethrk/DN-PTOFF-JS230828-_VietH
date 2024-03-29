import axios from "axios";
import { ExamRequest, ExamResponse } from "../types/exam.type";

const API_URL = "http://localhost:8080/api/v1/exam";

export const getExams = async (): Promise<ExamResponse[]> => {
  try {
    const respose = await axios.get(API_URL);
    return respose.data;
  } catch (err) {
    return [];
  }
};

export const createExam = async (
  exReq: ExamRequest
): Promise<ExamResponse | null> => {
  try {
    const respose = await axios.post(API_URL, exReq);
    return respose.data;
  } catch (err) {
    return null;
  }
};
