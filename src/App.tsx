// App

// Importing Helpers
import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

// Importing Styles
import { GlobalStyle, Wrapper } from "./App.styles";

// Importing Types
import { QuestionState, Difficulty } from "./API";

// Importing Components
import QuestionCard from "./components/QuestionCard";

// Total Questions Const
const TOTAL_QUESTIONS = 15;

// Answer Object Type
export type AnswerObject = {
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
  const [selectedAnswers, setSelectedAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // Function to start quiz
  const startTrivia = async () => {
    // Resetting Vars
    setLoading(true);
    setGameOver(false);

    // Getting Data
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.MEDIUM
    );

    // Resetting Vars
    setQuestions(newQuestions);
    setScore(0);
    setSelectedAnswers([]);
    setQuestionNumber(0);

    setLoading(false);
  };

  // Function to check answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User Answer
      const answer = e.currentTarget.value;

      // Check answer against correct answer
      const correct = questions[questionNumber].correct_answer === answer;

      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);

      // Save answer in the array for selected answers
      const answerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };

      setSelectedAnswers((prev) => [...prev, answerObject]);
    }
  };

  // Function to show next question
  const nextQuestion = () => {
    // Move on to next question, if not the last question
    const nextQuestion = questionNumber + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  };

  // Return
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="App">
          <h1>Movie Quiz</h1>
          {gameOver || selectedAnswers.length === TOTAL_QUESTIONS ? (
            <button className="start" onClick={startTrivia}>
              Start Quiz
            </button>
          ) : null}

          {!gameOver ? <p className="score">Score: {score}</p> : null}

          {loading && <p>Loading Questions...</p>}

          {!loading && !gameOver && (
            <QuestionCard
              questionNumber={questionNumber + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[questionNumber].question}
              answers={questions[questionNumber].answers}
              selectedAnswer={
                selectedAnswers ? selectedAnswers[questionNumber] : undefined
              }
              callback={checkAnswer}
            />
          )}

          {!gameOver &&
          !loading &&
          selectedAnswers.length === questionNumber + 1 &&
          questionNumber !== TOTAL_QUESTIONS - 1 ? (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          ) : null}
        </div>
      </Wrapper>
    </>
  );
};

// Default Export
export default App;
