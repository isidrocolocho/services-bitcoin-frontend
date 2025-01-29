import React from "react";
<<<<<<< HEAD
import Testimonios from "./Testimonios"; // Importa el componente de testimonios si está en el mismo directorio
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Parte de Danita chula*/}
      <div>Parte de Danita chula</div>

      {/* Benefits Section */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 py-16 bg-gradient-to-r from-teal-400 to-blue-500 mb-16 rounded-xl shadow-xl">
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
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonios />
    </div>
=======

const Home = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="/images/vidBg.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      </div>
      <div className="video-content space-y-2 z-10">
      <div class="relative px-6 lg:px-8 dark:bg-gray-800">
    <div class="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
            <div>
                <h1 class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl dark:text-gray-100">
                    SatoshiLab
                </h1>
                <p class="mt-6 text-lg leading-8 text-white sm:text-center dark:text-gray-200">
                    
SatoshiLab is your all-in-one platform to explore the world of Bitcoin. Access up-to-date information, seamlessly connect with your wallet, and discover innovative Bitcoin-related services. Explore, connect, and unlock the power of Bitcoin in one place.
                </p>
                <div class="mt-8 flex gap-x-4 sm:justify-center">
                    <a href="#"
                        class="inline-block rounded-lg bg-[#BF8D30] px-4 py-1.5 text-base font-semibold leading-7 text-black shadow-sm ring-1 ring-black hover:bg-indigo-700 hover:ring-indigo-700">
                        Get started
                        <span aria-hidden="true" class="text-black"> →</span>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
    </section>
>>>>>>> origin/Dania
  );
};

export default Home;
