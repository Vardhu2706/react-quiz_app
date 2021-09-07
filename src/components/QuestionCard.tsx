// Question Card Component

// Imports
import React from "react";

// Prop Types
type Props = {
  question: string;
  answers: string[];
  callback: any;
  selectedAnswer: any;
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
        <div>
          <button disabled={selectedAnswer ? true : false} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);

// Default Export
export default QuestionCard;
