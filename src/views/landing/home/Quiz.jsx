import React, { useState, useEffect } from "react";

const QuizComponent = () => {
  const [moduleContent, setModuleContent] = useState(null);
  const [question, setQuestion] = useState(null);
  const [userLevel, setUserLevel] = useState('beginner'); // 'beginner' o 'advanced'
  const [userAnswer, setUserAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Cargar el módulo al inicio
    fetchModule(1); // Cargar módulo 1
  }, []);

  const fetchModule = async (moduleId) => {
    const response = await fetch(`/api/module/${moduleId}`);
    const data = await response.json();
    setModuleContent(data);
  };

  const fetchQuestion = async () => {
    const response = await fetch(`/api/quiz/question?level=${userLevel}`);
    const data = await response.json();
    setQuestion(data);
  };

  const handleAnswer = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);
    fetchFeedback(selectedAnswer);
  };

  const fetchFeedback = async (selectedAnswer) => {
    const response = await fetch("/api/quiz/answer", {
      method: "POST",
      body: JSON.stringify({ answer: selectedAnswer }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFeedback(data.feedback);
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Módulo: Introducción al Bitcoin</h1>
        <p>{moduleContent?.content}</p>
      </div>
      
      <div className="mt-6">
        <button onClick={fetchQuestion} className="bg-blue-500 text-white p-2 rounded">Obtener Pregunta</button>
      </div>

      {question && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{question.question}</h2>
          <div className="space-y-4 mt-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-gray-200 p-3 rounded-lg text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {feedback && (
        <div className="mt-6 p-4 bg-green-200 rounded">
          <p>{feedback}</p>
        </div>
      )}
    </div>


  );
};

export default QuizComponent;
