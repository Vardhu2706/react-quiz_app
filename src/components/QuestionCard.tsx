// Question Card Component

// Imports
import React from "react";

import { AnswerObject } from "../App";

// Prop Types
type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

// Functional Component
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  selectedAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button
            disabled={selectedAnswer ? true : false}
            onClick={callback}
            value={answer}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

// Default Export
export default QuestionCard;
