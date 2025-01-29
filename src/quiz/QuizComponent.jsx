// src/components/Quiz/QuizComponent.jsx
import React, { useState, useEffect } from "react";

// Simulación de los módulos y preguntas
const modules = {
  1: { content: "Bitcoin es una moneda digital que permite transacciones sin intermediarios. Fue creado por Satoshi Nakamoto." },
  // Agrega más módulos si es necesario
};

const questions = {
  beginner: [
    { question: "¿Quién creó Bitcoin?", options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee", "Elon Musk"], correctAnswer: "Satoshi Nakamoto" },
    { question: "¿Qué es una criptomoneda?", options: ["Dinero digital", "Una inversión tradicional", "Una tarjeta de crédito", "Un sistema bancario",], correctAnswer: "Dinero digital" },
    { question: "¿Cómo se llama la unidad más pequeña de Bitcoin?", options: ["Satoshi", "Ether", "Ripple", "Litecoin"], correctAnswer: "Satoshi" },
    { question: "¿Qué es un blockchain?", options: ["Un registro descentralizado", "Una red social", "Una criptomoneda", "Una billetera digital"], correctAnswer: "Un registro descentralizado" },
    { question: "¿Cuántos Bitcoins existen en total?", options: ["21 millones", "100 millones", "50 millones", "1 millón"], correctAnswer: "21 millones" }
  ]
};


const QuizComponent = () => {
  const [moduleContent, setModuleContent] = useState(null);
  const [question, setQuestion] = useState(null);
  const [userLevel, setUserLevel] = useState("beginner"); // 'beginner' o 'advanced'
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    loadModule(1); // Cargar el módulo 1
    loadQuestion();
  }, []);

  const loadModule = (moduleId) => {
    setModuleContent(modules[moduleId]);
  };

  const loadQuestion = () => {
    const levelQuestions = questions[userLevel];
    const randomQuestion = levelQuestions[Math.floor(Math.random() * levelQuestions.length)];
    setQuestion(randomQuestion);
  };

  const handleAnswer = (selectedAnswer) => {
    setFeedback(selectedAnswer === question.correctAnswer ? "¡Correcto!" : "Incorrecto.");
    loadQuestion(); // Cargar nueva pregunta
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Módulo: Introducción al Bitcoin</h1>
      <p>{moduleContent?.content}</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">{question?.question}</h2>
        <div className="space-y-4 mt-4">
          {question?.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)} className="w-full bg-gray-200 p-3 rounded-lg text-left">
              {option}
            </button>
          ))}
        </div>
      </div>

      {feedback && <div className="mt-6 p-4 bg-green-200 rounded"><p>{feedback}</p></div>}
    </div>
  );
};

export default QuizComponent;
