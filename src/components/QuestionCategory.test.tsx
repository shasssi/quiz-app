import React from "react";
import { render, screen } from "@testing-library/react";
import { QuestionCategoryComponent } from "./QuestionCategory";

test("render QuestionCategoryComponent", () => {
  render(
    <QuestionCategoryComponent
      onSelect={() => {}}
      category={0}
    />
  );
  expect(screen.getByText("Select Category")).toBeInTheDocument();
});
