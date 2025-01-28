import React from "react";
<<<<<<< HEAD
=======
import Testimonios from "./Testimonios"; // Importa el componente de testimonios si está en el mismo directorio
import { Link } from "react-router-dom";
>>>>>>> 42be47891c5d9eda84e752eb6491510272f0072a

const Home = () => {
  return (
<<<<<<< HEAD
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
      </div>
      <div className="video-content space-y-2 z-10">
        <div class="text-center lg:text-left lg:w-1/2">
          <h1 class="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Main title of your landing page
          </h1>
          <p class="text-xl lg:text-2xl mt-6 font-light">
            Free landing page template to promote your business startup and
            generate leads for the offered services
=======
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
>>>>>>> 42be47891c5d9eda84e752eb6491510272f0072a
          </p>
          <p class="mt-8 md:mt-12">
            <button
              type="button"
              class="py-4 px-12 bg-[#0F3715] hover:bg-[#5E8F34] rounded text-white">
              Get Started
            </button>
          </p>
          <p class="mt-4 text-gray-600">Sed fermentum felis ut cursu</p>
        </div>
      </div>
      <style jsx>{`
        .video-docker video {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

<<<<<<< HEAD
        .video-docker::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }
      `}</style>
    </section>
=======
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
>>>>>>> 42be47891c5d9eda84e752eb6491510272f0072a
  );
};

export default Home;
