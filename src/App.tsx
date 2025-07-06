import React, { useState } from "react";
import { QuestionCardComponent } from "./components/QuestionCard";
import { useFetch } from "./hooks/useFetch";
import { ScoreCardComponent } from "./components/ScoreCard";
import { QuestionCategoryComponent } from "./components/QuestionCategory";
import "./App.css";
import { scoreSummary } from "./types";

export const App = (): React.JSX.Element => {
  const [category, setCategory] = useState<number>(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [scoreSummary, setScoreSummary] = useState<scoreSummary[]>([]);

  const { data: questions, error, loading } = useFetch({ category });

  const handleAnswer = (answer: string) => {
    let isAnswerCorrect: boolean = false;
    if (answer === questions[currentQ].correct_answer) {
      setScore((s) => s + 1);
      isAnswerCorrect = true;
    }
    setCurrentQ((prev) => prev + 1);
    const summary: scoreSummary = {
      id: currentQ + 1,
      status: isAnswerCorrect,
    };
    setScoreSummary((prev) => [...prev, summary]);
  };

  const reset = () => {
    setCategory(0);
    setCurrentQ(0);
    setScore(0);
  };

  if (loading) return <div>Loading questions...</div>;

  return (
    <>
      <h1>Quiz Application</h1>
      {currentQ >= questions.length ? (
        <div>
          <ScoreCardComponent score={score} total={questions.length} scoreSummary={scoreSummary} />
          <button className="playBtn" onClick={reset}>Play Again</button>
        </div>
      ) : (
        <>
          <QuestionCategoryComponent
            onSelect={(id) => setCategory(id)}
            category={category}
          />
          <QuestionCardComponent
            questionNo={currentQ + 1}
            question={questions[currentQ]}
            onAnswer={handleAnswer}
          />
        </>
      )}
    </>
  );
};
