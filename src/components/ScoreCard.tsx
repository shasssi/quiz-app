import React from "react";
import { IQuestion, scoreSummary } from "../types";

type Props = {
  score: number;
  total: number;
  scoreSummary: scoreSummary[];
};

export const ScoreCardComponent = ({
  score,
  total,
  scoreSummary,
}: Props): React.JSX.Element => {
  return (
    <div>
      <h2 className="scoreText">
        Your Score: {score}/{total}
      </h2>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {scoreSummary.map((item: scoreSummary) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className={item.status ? "correct" : "incorrect"}>{item.status ? "Correct" : "Incorrect"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
