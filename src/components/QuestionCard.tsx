// Question Card Component

// Imports
import React from "react";

import { AnswerObject } from "../App";

// Styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
  <Wrapper>
    <div>
      <p className="number">
        Question: {questionNumber} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            key={answer}
            correct={selectedAnswer?.correctAnswer === answer}
            userClicked={selectedAnswer?.answer === answer}
          >
            <button
              disabled={selectedAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </div>
  </Wrapper>
);

// Default Export
export default QuestionCard;
