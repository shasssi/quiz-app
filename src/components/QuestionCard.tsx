import React from "react";
import { IQuestion } from "../types";

type Props = {
  question: IQuestion;
  onAnswer: (answer: string) => void;
  questionNo: number;
};

export const QuestionCardComponent = ({
  question,
  onAnswer,
  questionNo,
}: Props): React.JSX.Element => {
  const answers = [
    ...question?.incorrect_answers,
    question?.correct_answer,
  ].sort();

  return (
    <div>
      <h3 className="questionText">{`${questionNo}: ${question?.question}`}</h3>
      {answers.map((ans) => (
        <button className="questionBtn" key={ans} onClick={() => onAnswer(ans)}>
          {ans}
        </button>
      ))}
    </div>
  );
};
