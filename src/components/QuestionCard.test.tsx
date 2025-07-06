import React from "react";
import { render, screen } from "@testing-library/react";
import { QuestionCardComponent } from "./QuestionCard";

test("render QuestionCardComponent", () => {
  render(
    <QuestionCardComponent
      question={{
        category: "sports",
        type: "multiple",
        difficulty: "easy",
        question: "question 1",
        correct_answer: "ans4",
        incorrect_answers: ["ans1", "ans2", "ans3"],
      }}
      questionNo={1}
      onAnswer={() => {}}
    />
  );
  expect(screen.getByText("ans1")).toBeInTheDocument();
});
