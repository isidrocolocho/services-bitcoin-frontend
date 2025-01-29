import React, { useState, useEffect } from "react";
import axios from "axios";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Obtener preguntas de la API
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:5000/quiz");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching quiz questions", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setQuizFinished(true);
    }
  };

  const calculateReward = () => {
    return score * 100; // 100 sats por cada respuesta correcta
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">
        {!quizFinished ? (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              ¿Qué sabes sobre Bitcoin?
            </h1>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                <p className="text-lg font-semibold">{questions[currentQuestionIndex]?.question}</p>
                <div className="mt-4">
                  {questions[currentQuestionIndex]?.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOption(option)}
                      className={`w-full text-left p-2 mt-2 border rounded-lg ${
                        selectedOption === option ? "bg-blue-500 text-white" : "bg-gray-200"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
              <button
                onClick={handleAnswerSubmit}
                disabled={!selectedOption}
                className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4"
              >
                Siguiente
              </button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">¡Quiz Finalizado!</h2>
            <p className="text-xl">Tu puntuación es: {score} de {questions.length}</p>
            <p className="text-lg mt-4">Tu recompensa es: {calculateReward()} sats</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
