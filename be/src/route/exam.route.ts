import { Router } from "express";
import { ExamTodoController } from "../controller/exam.controller";

const examRoute = Router();

examRoute.get("/", ExamTodoController.getExam);
examRoute.post("/", ExamTodoController.createExam);

export default examRoute;
