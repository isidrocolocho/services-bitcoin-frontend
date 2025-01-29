import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
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
        <div className="z-10 space-y-4 px-6 lg:px-8">
          <h1 className="text-5xl font-bold sm:text-center sm:text-6xl text-white">
            SatoshiLab
          </h1>
          <p className="mt-6 text-lg sm:text-center text-white">
            SatoshiLab is your all-in-one platform to explore the world of Bitcoin. Access up-to-date information, seamlessly connect with your wallet, and discover innovative Bitcoin-related services. Explore, connect, and unlock the power of Bitcoin in one place.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-[#BF8D30] px-6 py-3 text-base font-semibold text-black hover:bg-[#0F3715] transition duration-300"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* Section: Our Services */}
      <section className="py-16 px-8 bg-[#CCBB8E] rounded-lg shadow-xl">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#0F3715] mb-6">Welcome to Bitcoin Education</h1>
          <p className="text-lg text-[#5E8F34] mb-8">
            Learn more about Bitcoin with our interactive tools and resources.
          </p>
          <Link
            to="/quiz"
            className="bg-[#5E8F34] text-[#F2F2F2] py-3 px-6 rounded-full shadow-md hover:bg-[#0F3715] transition duration-300"
          >
            Start Now
          </Link>
        </div>

        {/* 4 Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {["Learn Bitcoin!", "Earn Knowledge!", "Our Services", "You're an Expert!"].map((title, index) => (
            <div
              key={index}
              className="bg-[#F2F2F2] p-6 rounded-lg border-2 border-[#BF8D30] shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-[#0F3715] mb-4">{title}</h2>
              <p className="text-lg text-[#5E8F34] mb-4">
                {index === 0
                  ? "Take the interactive quiz to master Bitcoin, from basic to advanced concepts."
                  : index === 1
                  ? "Complete the quiz and track your progress on the dashboard."
                  : index === 2
                  ? "Explore the services we offer for Bitcoin and cryptocurrency enthusiasts."
                  : "Already knowledgeable about Bitcoin? Access advanced information and resources."}
              </p>
              <Link
                to={index === 0 ? "/quiz" : index === 1 ? "/dashboard" : index === 2 ? "/Servicios" : "/advanced"}
                className="bg-[#5E8F34] text-[#F2F2F2] py-2 px-4 rounded-full hover:bg-[#0F3715] transition duration-300"
              >
                {index === 0 ? "Start Quiz" : index === 1 ? "Go to Dashboard" : index === 2 ? "View Servicios" : "Go to Expert Page"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#f2f2f2] py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#5E8F34] mb-8">Bitcoin Community Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Satoshi Lover", username: "@crypto_enthusiast", message: "Bitcoin gave me the financial freedom I always dreamed of!", photo: "/images/Perfil1.jpg" },
              { name: "HODL Queen", username: "@HodlForever", message: "Investing in Bitcoin has been the best decision of my life.", photo: "/images/Perfil2.jpg" },
              { name: "Mining King", username: "@btcminer_pro", message: "Mining Bitcoin is a challenging but thrilling experience.", photo: "/images/Perfil3.jpg" },
              { name: "Blockchain Believer", username: "@blockchain_advocate", message: "The technology behind Bitcoin is revolutionary. A true paradigm shift!", photo: "/images/Perfil4.jpg" },
              { name: "Crypto Nomad", username: "@travelwithcrypto", message: "I live traveling thanks to Bitcoin payments. It's amazing!", photo: "/images/Perfil5.jpg" },
              { name: "Sats Stacker", username: "@sats4life", message: "Saving in satoshis is the key to a strong future.", photo: "/images/Perfil6.jpg" },
              { name: "BTC Maximalist", username: "@btcmaxi", message: "No other cryptocurrency matches Bitcoin's security and adoption.", photo: "/images/Perfil7.jpg" },
              { name: "Decentralized Dreamer", username: "@decentralize", message: "Bitcoin represents freedom and financial autonomy for everyone.", photo: "/images/Perfil8.jpg" },
            ].map((testimonial, index) => (
              <div key={index} className="bg-[#CCBB8E] p-6 rounded-lg shadow-lg flex flex-col space-y-4 transition-transform duration-300 hover:scale-105">
                <div className="flex items-center space-x-4">
                  <img src={testimonial.photo} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <h3 className="text-[#0F3715] font-semibold">{testimonial.name}</h3>
                    <p className="text-[#5E8F34] text-sm">{testimonial.username}</p>
                  </div>
                </div>
                <p className="text-[#0F3715] text-sm">{testimonial.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
