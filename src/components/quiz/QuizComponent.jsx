import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const modules = {
  1: {
    title: `
      <h1 class='text-5xl font-extrabold text-center text-[#BF8D30] drop-shadow-lg'>
        🚀 Introduction to Bitcoin 🚀
      </h1>
    `,
    content: `
      <div className="space-y-6 p-8 bg-gradient-to-br from-[#0F3715] to-[#5E8F34] text-[#F2F2F2] rounded-lg shadow-2xl border border-[#BF8D30]">
        <p className="text-lg font-medium">Bitcoin is a <span class='font-bold text-[#BF8D30]'>decentralized digital currency</span> that allows transactions without intermediaries. It was created by 
          <span class='font-extrabold text-[#F2F2F2] bg-[#BF8D30] px-2 py-1 rounded'>Satoshi Nakamoto</span> in 2009. It uses a revolutionary technology called 
          <span class='font-bold text-[#5E8F34] underline'>blockchain</span> to ensure security, transparency, and decentralization.</p>
        
        <div className="flex justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" 
            alt="Bitcoin logo" 
            className="w-40 animate-bounce" />
        </div>
        
        <p className="text-lg font-medium">Bitcoin is often referred to as 
          <span class='font-extrabold text-[#CCBB8F] bg-[#5E8F34] px-2 py-1 rounded'">digital gold</span> due to its limited supply of 21 million coins. Unlike traditional currencies, 
          Bitcoin operates on a decentralized network maintained by thousands of miners and nodes worldwide, ensuring that no single entity can control it.</p>
        
        <h2 className="text-3xl font-bold text-[#BF8D30] mt-6">✨ Key Features of Bitcoin ✨</h2>
        <ul className="list-disc list-inside text-lg font-medium space-y-2">
          <li><span class='text-[#F2F2F2] font-bold'>Decentralization:</span> No government or central bank controls Bitcoin.</li>
          <li><span class='text-[#F2F2F2] font-bold'>Transparency:</span> All transactions are recorded on a public ledger.</li>
          <li><span class='text-[#F2F2F2] font-bold'>Security:</span> Transactions are secured through cryptographic algorithms.</li>
          <li><span class='text-[#F2F2F2] font-bold'>Scarcity:</span> Only 21 million Bitcoins will ever exist.</li>
        </ul>
      </div>
    `
  }
};

const questions = [
  { question: "Who created Bitcoin?", options: ["Satoshi Nakamoto", "Vitalik Buterin", "Charlie Lee", "Elon Musk"], correct: "Satoshi Nakamoto" },
  { question: "What is a cryptocurrency?", options: ["Digital money", "A traditional investment", "A credit card", "A banking system"], correct: "Digital money" },
  { question: "What is the smallest unit of Bitcoin called?", options: ["Satoshi", "Ether", "Ripple", "Litecoin"], correct: "Satoshi" },
  { question: "What is a blockchain?", options: ["A decentralized ledger", "A social network", "A cryptocurrency", "A digital wallet"], correct: "A decentralized ledger" },
  { question: "How many Bitcoins exist in total?", options: ["21 million", "100 million", "50 million", "1 million"], correct: "21 million" }
];

const QuizComponent = () => {
  const [step, setStep] = useState("lesson");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); 

  const handleExit = () => {
    navigate("/home"); // Redirige al home dentro de landing/home
  };

  const handleAnswer = (answer) => {
    if (answer === questions[questionIndex].correct) {
      setFeedback("✅ Correct!");
      setScore(score + 10);
    } else {
      setFeedback("❌ Incorrect.");
    }
  };

  const handleNext = () => {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setFeedback("");
    } else {
      setStep("completed");
    }
  };

  return (
    <div className="p-6 space-y-6 text-lg bg-gradient-to-r from-[#0F3715] to-[#5E8F34] min-h-screen flex flex-col items-center justify-center text-white">
      {step === "lesson" && (
        <div>
          <div dangerouslySetInnerHTML={{ __html: modules[1].title + modules[1].content }} />
          <button onClick={() => setStep("quiz")} className="mt-6 p-4 bg-[#BF8D30] text-black font-bold rounded-full w-full shadow-lg hover:bg-[#5E8F34] transition duration-300">
            🎯 Continue to Quiz
          </button>
        </div>
      )}
      {step === "quiz" && (
        <div className="p-6 bg-[#CCBB8F] text-black rounded-lg shadow-lg w-3/4">
          <h2 className="text-2xl font-bold">{questions[questionIndex].question}</h2>
          <div className="mt-4 space-y-2">
            {questions[questionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className="w-full p-3 bg-[#BF8D30] text-black font-medium rounded-lg hover:bg-[#5E8F34]">
                {option}
              </button>
            ))}
          </div>
          {feedback && <p className="mt-4 font-bold">{feedback}</p>}
          <button onClick={handleNext} className="mt-6 p-3 bg-[#BF8D30] text-black font-bold rounded-full w-full shadow-lg hover:bg-[#5E8F34] transition duration-300">
            Next
          </button>
        </div>
      )}
      {step === "completed" && (
        <div className="p-6 bg-[#BF8D30] text-black text-center rounded-lg shadow-lg w-3/4">
          <h2 className="text-2xl font-bold">🎉 Congratulations! 🎉</h2>
          <p>You have completed the quiz and earned {score} Satoshis! 🏆</p>
          <p className="mt-4 italic">Keep learning and exploring the world of Bitcoin! 🚀</p>
          <button onClick={handleExit} className="mt-6 px-6 py-3 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105">
  🔙 Exit & Return Home
</button>

        </div>
      )}
    </div>
  );
};

export default QuizComponent;