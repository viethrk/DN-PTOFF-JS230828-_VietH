import { Request, Response } from "express";
import { dbConfig } from "../config/db.config";
import { ExamTodo } from "../entity/exam.entity";

export class ExamTodoController {
  private static examTodoRepo = dbConfig.getRepository(ExamTodo);

  static getExam = async (req: Request, res: Response) => {
    const exams = await this.examTodoRepo.find();
    res.status(200).json(exams);
  };

  static createExam = async (req: Request, res: Response) => {
    const examBody = req.body;
    const examCreate = this.examTodoRepo.create(examBody);
    const examSave = await this.examTodoRepo.save(examCreate);
    res.status(201).json(examSave);
  };

  static updateExam = (req: Request, res: Response) => {};

  static deleteExam = (req: Request, res: Response) => {};
}
