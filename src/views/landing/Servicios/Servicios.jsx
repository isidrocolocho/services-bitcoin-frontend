import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Servicios() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative py-16 px-6 md:px-20 flex items-center justify-between min-h-[110vh] text-white"
        style={{
          backgroundImage: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-500 to-yellow-400 z-0"></div>

        <div className="relative z-10 max-w-lg">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Connect learning <br /> with action in Bitcoin.
          </motion.h1>
          <motion.p
            className="text-lg text-gray-300 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Learn, earn, and shop with Bitcoin. Discover a world of opportunities designed for everyone.
          </motion.p>
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-yellow-500 text-black py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 transition-all">
            Why Bitcoin?
            </button>
            <button className="border-2 border-white text-white py-3 px-6 rounded-lg shadow-lg hover:bg-white hover:text-black transition-all">
            How do I start?
            </button>
          </div>
        </div>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 100, scale: 0.8 }}
          animate={{ opacity: 100, scale: 1 }}
          transition={{ duration: 3 }}
        >
          <img
            src="/images/BitcoinHero.jpeg"
            alt="Persona aprendiendo Bitcoin"
            className="rounded-lg shadow-2xl w-auto h-80"
          />
        </motion.div> 


      </section>

      {/* Servicios */}
      <section className="py-20 bg-gray-500">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-black mb-4">
          Our Services
          </h2>
          <p className="text-lg text-gray-950">
          Turn knowledge into action and rewards with our innovative services.
          Lessons for beginners with fundamentals and security in Bitcoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 py-12">
          {/* Servicios Tarjetas */}
          {[
            {
              title: "Learn Bitcoin from scratch",
              description:
                "Lessons for beginners with fundamentals and security in Bitcoin.",
              img: "/images/AprenderBitcoin.jpg",
            },
            {
              title: "Earn sats by playing",
              description:
                "Participate in games and educational challenges to earn satoshis while you learn.",
              img: "/images/GanarSats.jpg",
            },
            {
              title: "Wallet rewards",
              description:
                "Accumulate rewards and get discounts on products and services.",
              img: "/images/WalletRecompensas.png",
            },
            {
              title: "Shop with Bitcoin",
              description:
                "Use your wallet to easily buy products, without the need for credit cards or intermediaries, and pay directly with Bitcoin quickly and securely.",
              img: "/images/ComprasConBitcoin.png",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-500 text-white py-16 px-5 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get started today!
        </motion.h2>
        <motion.p
          className="mb-8 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join our community and transform your Bitcoin knowledge into rewards and new opportunities.
        </motion.p>
        <motion.button
          className="bg-white text-teal-700 font-bold py-3 px-8 rounded-xl border-2 border-white hover:bg-teal-700 hover:text-white transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/registro">Sign up</Link>
        </motion.button>
      </section>
    </div>
  );
}
