import React, { useState, useContext, useEffect } from "react";
import { QuizContext } from "@/Helpers/QuizContext";
import { Button } from "./ui/button";
import { Questions } from "@/Helpers/Questions";

function Quiz() {
  const { quizState, setQuizState, currScore, setCurrScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedAnswer(option);
    setShowExplanation(true);
    if (option === Questions[currQuestion].correctAnswer) {
      setCurrScore((prev) => prev + 1); // Increment score for the correct answer
    }
  };

  useEffect(() => {
    const handlePress = (e) => {
      if (selectedAnswer && showExplanation && e.key === "Enter") {
        setSelectedAnswer(null);
        setShowExplanation(false);
        setCurrQuestion((prev) => prev + 1);
      }
    };
    document.addEventListener("keypress", handlePress);

    return () => {
      document.removeEventListener("keypress", handlePress);
    };
  }, [setCurrQuestion, showExplanation, currQuestion]);

  useEffect(() => {
    if (currQuestion === Questions.length) {
      setQuizState("result");
    }
  }, [currQuestion, setQuizState]);

  const handleNextClick = () => {
    if (currQuestion < Questions.length - 1) {
      setCurrQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // End quiz
      setQuizState("result");
    }
  };

  return (
    <div className="bg-green-600 flex flex-col static p-12 w-full h-full justify-center items-center select-none">
      {currQuestion < Questions.length && (
        <>
          <div className="head flex justify-center items-center mb-4">
            <div className="score">
              <span className="flow-root">{currScore} HP</span>
            </div>
            <h1 className="text-white font-Poppins text-2xl mx-4">
              {Questions[currQuestion].question}
            </h1>
          </div>

          <div className="card bg-white w-[35rem] h-auto rounded-xl p-6 flex flex-col justify-center items-center shadow-2xl">
            <p className="text-lg mb-4 text-center">
              Question {currQuestion + 1} of {Questions.length}
            </p>

            {/* Display options */}
            {Questions[currQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full p-3 mb-3 text-left rounded-lg border ${
                  selectedAnswer === option
                    ? option === Questions[currQuestion].correctAnswer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-white hover:bg-gray-600 hover:text-white"
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={showExplanation}
              >
                {option}
              </button>
            ))}

            {/* Explanation */}
            {showExplanation && (
              <div className="text-center mt-4">
                <p className="text-sm text-gray-700">
                  {selectedAnswer === Questions[currQuestion].correctAnswer
                    ? "Correct! " + Questions[currQuestion].explanation
                    : "Incorrect! " + Questions[currQuestion].explanation}
                </p>
              </div>
            )}
          </div>

          {/* Next button */}
          <div className="relative top-6">
            {showExplanation && (
              <Button
                onClick={handleNextClick}
                onKeyDown={(e) => (e.key === "Enter" ? handleNextClick : null)}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              >
                {currQuestion < Questions.length - 1 ? "Next" : "Finish"}
              </Button>
            )}
            <Button
              onClick={() => {
                setQuizState("menu");
              }}
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 ml-4"
            >
              Quit
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
