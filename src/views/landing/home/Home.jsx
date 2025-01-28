import React from "react";
import Testimonios from "./Testimonios"; // Importa el componente de testimonios si está en el mismo directorio
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      {/* Sección de bienvenida */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Bienvenido a la educación sobre Bitcoin
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Aprende más sobre Bitcoin a través de nuestras interacciones y recursos.
        </p>
      </div>

      {/* Sección de las 4 tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Tarjeta 1: Aprende */}
        <div className="bg-blue-600 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">¡Aprende Bitcoin!</h2>
            <p className="text-lg mb-4">
              Realiza el quiz interactivo para conocer todo sobre Bitcoin, desde lo básico hasta lo avanzado.
            </p>
            <Link
              to="/quiz"
              className="bg-white text-blue-600 py-2 px-4 rounded-lg mt-4 inline-block hover:bg-gray-100 transition duration-300"
            >
              Iniciar Quiz
            </Link>
          </div>
        </div>

        {/* Tarjeta 2: Gana */}
        <div className="bg-green-600 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">¡Gana Conocimiento!</h2>
            <p className="text-lg mb-4">
              Completa el quiz y visualiza tu progreso en el dashboard.
            </p>
            <Link
              to="/dashboard"
              className="bg-white text-green-600 py-2 px-4 rounded-lg mt-4 inline-block hover:bg-gray-100 transition duration-300"
            >
              Ir al Dashboard
            </Link>
          </div>
        </div>

        {/* Tarjeta 3: Nuestros Servicios */}
        <div className="bg-yellow-600 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Nuestros Servicios</h2>
            <p className="text-lg mb-4">
              Conoce los servicios que ofrecemos relacionados con Bitcoin y criptomonedas.
            </p>
            <Link
              to="/servicios"
              className="bg-white text-yellow-600 py-2 px-4 rounded-lg mt-4 inline-block hover:bg-gray-100 transition duration-300"
            >
              Ver Servicios
            </Link>
          </div>
        </div>

        {/* Tarjeta 4: ¡Ya eres un Experto! */}
        <div className="bg-purple-600 text-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">¡Ya eres un Experto!</h2>
            <p className="text-lg mb-4">
              Si ya sabes mucho sobre Bitcoin, aquí tienes información avanzada y más recursos.
            </p>
            <Link
              to="/advanced"
              className="bg-white text-purple-600 py-2 px-4 rounded-lg mt-4 inline-block hover:bg-gray-100 transition duration-300"
            >
              Ir a la Página de Expertos
            </Link>
          </div>
        </div>
      </div>

      {/* Sección de Beneficios */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-8 py-16 bg-white mb-12">
        <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-20 pt-6 items-center md:items-start h-full">
          <h2 className="text-3xl md:text-4xl font-bold italic text-verde-aqua text-center md:text-left">
            Beneficios <span className="text-gray-900 not-italic">que</span> <br />
            <span className="text-gray-900 not-italic">hacen la diferencia.</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed text-center md:text-left">
            Descubre cómo nuestro sistema simplifica tu experiencia médica con características clave y ventajas exclusivas.
          </p>
          <a href="#" className="inline-block mt-6 text-teal-600 hover:underline font-medium">
            Más Información →
          </a>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
          <div className="w-full h-64 md:h-96 overflow-hidden">
            <img
              src="/images/DiseñoBeneficios.png"
              alt="Collage Doctores"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Componente de Testimonios */}
      <Testimonios />

    </div>
  );
}
