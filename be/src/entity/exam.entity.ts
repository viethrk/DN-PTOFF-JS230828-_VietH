import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "exam_todo" })
export class ExamTodo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  status: boolean;
}
