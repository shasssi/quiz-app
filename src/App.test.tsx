import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";
import * as fetchHooks from "./hooks/useFetch";

describe("App Component", () => {
  test("render Loading questions...", () => {
    render(<App />);
    expect(screen.getByText("Loading questions...")).toBeInTheDocument();
  });
  test("render", () => {
    jest.spyOn(fetchHooks, "useFetch").mockReturnValue({
      data: [],
      loading: false,
      error: null,
    });
    render(<App />);
    expect(screen.getByText("Quiz Application")).toBeInTheDocument();
  });
  test("render with list of questions", () => {
    jest.spyOn(fetchHooks, "useFetch").mockReturnValue({
      data: [
        {
          type: "multiple",
          difficulty: "medium",
          category: "Celebrities",
          question:
            "How much weight did Chris Pratt lose for his role as Star-Lord in &quot;Guardians of the Galaxy&quot;?",
          correct_answer: "60 lbs",
          incorrect_answers: ["30 lbs", "50 lbs", "70 lbs"],
        },
      ],
      loading: false,
      error: null,
    });
    render(<App />);
    expect(screen.getByText("Quiz Application")).toBeInTheDocument();
  });
});
