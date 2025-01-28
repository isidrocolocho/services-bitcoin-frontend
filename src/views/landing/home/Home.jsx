import React from "react";
import Testimonios from "./Testimonios"; // Import the testimonials component if it's in the same directory
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Welcome Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Bitcoin Education
        </h1>
        <p className="text-lg text-gray-500 mb-8">
          Learn more about Bitcoin through our interactions and resources.
        </p>
        <Link
          to="/quiz"
          className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Start Now
        </Link>
      </div>

      {/* 4 Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Card 1: Learn */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Learn Bitcoin!</h2>
          <p className="text-lg mb-4 text-gray-600">
            Take the interactive quiz to learn everything about Bitcoin, from basic to advanced concepts.
          </p>
          <Link
            to="/quiz"
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Start Quiz
          </Link>
        </div>

        {/* Card 2: Earn */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Earn Knowledge!</h2>
          <p className="text-lg mb-4 text-gray-600">
            Complete the quiz and track your progress on the dashboard.
          </p>
          <Link
            to="/dashboard"
            className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
          >
            Go to Dashboard
          </Link>
        </div>

        {/* Card 3: Our Services */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Services</h2>
          <p className="text-lg mb-4 text-gray-600">
            Discover the services we offer related to Bitcoin and cryptocurrencies.
          </p>
          <Link
            to="/servicios"
            className="bg-yellow-600 text-white py-2 px-4 rounded-full hover:bg-yellow-700 transition duration-300"
          >
            View Services
          </Link>
        </div>

        {/* Card 4: You're an Expert! */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">You're an Expert!</h2>
          <p className="text-lg mb-4 text-gray-600">
            If you already know a lot about Bitcoin, here’s advanced information and more resources.
          </p>
          <Link
            to="/advanced"
            className="bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Go to Expert Page
          </Link>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 py-16 bg-gradient-to-r from-teal-400 to-blue-500 mb-16 rounded-xl shadow-xl">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-20 pt-6 items-center md:items-start h-full">
          <h2 className="text-4xl font-extrabold text-white text-center md:text-left mb-4">
            Benefits that make the difference.
          </h2>
          <p className="mt-4 text-white leading-relaxed text-center md:text-left">
            Discover how our system simplifies your experience and offers exclusive features.
          </p>
          <p className="mt-8 md:mt-12">
            <button
              type="button"
              className="py-4 px-12 bg-[#0F3715] hover:bg-[#5E8F34] rounded-full text-white shadow-lg transition duration-300"
            >
              Get Started Now
            </button>
          </p>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
          <div className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/DiseñoBeneficios.png"
              alt="Doctors Collage"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonios />
    </div>
  );
};

export default Home;
