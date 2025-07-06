import React from "react";
import { render, screen } from "@testing-library/react";
import { ScoreCardComponent } from "./ScoreCard";

test("render ScoreCardComponent", () => {
  render(
    <ScoreCardComponent
      score={2}
      total={10}
      scoreSummary={[{id:1, status: true}]}
    />
  );
  expect(screen.getByText("Your Score: 2/10")).toBeInTheDocument();
});
