import { useEffect, useRef, useState } from "react";
import { ExamRequest, ExamResponse } from "../types/exam.type";
import { createExam, getExams } from "../api/exam.api";

const Exam = () => {
  // state, props
  const [examList, setExamList] = useState<ExamResponse[]>([]);
  // ref
  const nameRef = useRef<HTMLInputElement>(null);
  const desRef = useRef<HTMLInputElement>(null);

  // function handle event
  const fetchExams = async () => {
    const exams = await getExams();
    setExamList(exams);
  };

  const onClickAdd = async () => {
    const examRequest: ExamRequest = {
      name: nameRef.current?.value || "",
      description: desRef.current?.value || "",
      status: false,
    };

    await createExam(examRequest);
    fetchExams();
  };

  // effect handle life cycle
  useEffect(() => {
    fetchExams();
  }, []);
  return (
    <div className="flex">
      <div>
        <div className="flex">
          <label htmlFor="name">Name</label>
          <input id="name" ref={nameRef} />
        </div>
        <div className="flex">
          <label htmlFor="des">Description</label>
          <input id="des" ref={desRef} />
        </div>
        <button onClick={onClickAdd}>Click</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {examList.map((exam) => {
            return (
              <tr>
                <td>{exam.name}</td>
                <td>{exam.description}</td>
                <td>
                  <input type="checkbox" checked={exam.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Exam;
