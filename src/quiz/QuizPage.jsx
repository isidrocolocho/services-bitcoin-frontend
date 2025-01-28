// src/pages/QuizPage.jsx
import React from "react";
import QuizComponent from "../components/Quiz/QuizComponent";

const QuizPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Quiz sobre Bitcoin</h1>
      <QuizComponent />
    </div>
  );
};

export default QuizPage;
