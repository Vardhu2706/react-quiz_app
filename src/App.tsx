// App - 39 Min - https://www.youtube.com/watch?v=F2JCjVSZlG0

// Importing Helpers
import React, { useState } from "react";
import { fetchQuizQuestions } from "./components/API";

// Importing Types
import { QuestionState, Difficulty } from "./components/API";

// Importing Components
import QuestionCard from "./components/QuestionCard";

// Total Questions Const
const TOTAL_QUESTIONS = 15;

// Answer Object Type
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

// Functional Component
const App = () => {
  // State Variables
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gaveOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));

  // Function to start quiz
  const startTrivia = async () => {};

  // Function to check answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  // Function to show next question
  const nextQuestion = () => {};

  // Return
  return (
    <div className="App">
      <h1>Gadgets Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNumber={questionNumber + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[questionNumber].question}
        answers={questions[questionNumber].answers}
        selectedAnswer={
          selectedAnswers ? selectedAnswers[questionNumber] : undefined
        }
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

// Default Export
export default App;
