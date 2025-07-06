import { IQuestion } from "../types";

export const fetchQuestions = async (
  category?: number
): Promise<IQuestion[]> => {
  const url = `https://opentdb.com/api.php?amount=10${
    category ? `&category=${category}` : ""
  }`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  return result?.results || [];
};
