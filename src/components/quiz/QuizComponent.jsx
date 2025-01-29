import React, { useState, useEffect } from "react";

// Simulación de los módulos y preguntas
const modules = {
  1: { content: "Bitcoin es una moneda digital que permite transacciones sin intermediarios. Fue creado por Satoshi Nakamoto." },
  // Agrega más módulos si es necesario
};

const questions = {
  beginner: [
    { question: "¿Quién creó Bitcoin?", options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee", "Elon Musk"], correctAnswer: "Satoshi Nakamoto" },
    { question: "¿Qué es una criptomoneda?", options: ["Dinero digital", "Una inversión tradicional", "Una tarjeta de crédito", "Un sistema bancario"], correctAnswer: "Dinero digital" },
    { question: "¿Cómo se llama la unidad más pequeña de Bitcoin?", options: ["Satoshi", "Ether", "Ripple", "Litecoin"], correctAnswer: "Satoshi" },
    { question: "¿Qué es un blockchain?", options: ["Un registro descentralizado", "Una red social", "Una criptomoneda", "Una billetera digital"], correctAnswer: "Un registro descentralizado" },
    { question: "¿Cuántos Bitcoins existen en total?", options: ["21 millones", "100 millones", "50 millones", "1 millón"], correctAnswer: "21 millones" }
  ]
};

const QuizComponent = () => {
  const [moduleContent, setModuleContent] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0); // Índice de la pregunta actual
  const [userLevel, setUserLevel] = useState("beginner"); // 'beginner' o 'advanced'
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState(""); // Color para el feedback (rojo para incorrecto)
  const [sats, setSats] = useState(0); // Puntos (sats) del usuario
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    loadModule(1); // Cargar el módulo 1
  }, []);

  const loadModule = (moduleId) => {
    setModuleContent(modules[moduleId]);
  };

  const loadQuestion = () => {
    if (questionIndex < questions[userLevel].length) {
      return questions[userLevel][questionIndex];
    }
    return null;
  };

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = loadQuestion();

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setFeedback("¡Correcto!");
      setFeedbackColor("bg-green-200"); // Color verde para respuesta correcta
      setSats(sats + 10); // Sumamos 10 sats por una respuesta correcta
    } else {
      setFeedback("Incorrecto.");
      setFeedbackColor("bg-red-200"); // Color rojo para respuesta incorrecta
    }
  };

  const handleNext = () => {
    if (questionIndex < questions[userLevel].length - 1) {
      setQuestionIndex(questionIndex + 1); // Pasar a la siguiente pregunta
      setFeedback(""); // Resetear feedback
      setFeedbackColor(""); // Resetear color de feedback
    } else {
      setCompleted(true); // Ya se completaron todas las preguntas
    }
  };

  const currentQuestion = loadQuestion();

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Módulo: Introducción al Bitcoin</h1>
      <p>{moduleContent?.content}</p>

      {!completed ? (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{currentQuestion?.question}</h2>
          <div className="space-y-4 mt-4">
            {currentQuestion?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full bg-gray-200 p-3 rounded-lg text-left"
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <div className={`mt-6 p-4 rounded ${feedbackColor}`}>
              <p>{feedback}</p>
            </div>
          )}

          <button
            onClick={handleNext}
            className="mt-6 p-3 bg-blue-500 text-white rounded-full w-full"
          >
            Siguiente
          </button>
        </div>
      ) : (
        <div className="mt-6 p-4 bg-green-200 rounded">
          <h2>¡Felicidades! Has completado el cuestionario.</h2>
          <p>Has ganado {sats} sats por tus respuestas correctas.</p>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
