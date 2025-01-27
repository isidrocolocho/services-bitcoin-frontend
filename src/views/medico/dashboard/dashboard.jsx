import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faCalendarPlus,
  faHistory,
  faCalendarAlt,
  faSignOutAlt,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

export default function Login() {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Controla la visibilidad del menú
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className="flex min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/images/sectionServicios.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Menú lateral */}
      <aside
        className={`bg-teal-600 text-white flex flex-col justify-between py-6 transition-all duration-300 ${
          isMenuOpen ? "w-64" : "w-16"
        }`}
      >
        <div>
          {/* Botón para abrir/cerrar el menú */}
          <button
            className="text-white px-4 py-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>

          {/* Opciones del menú */}
          <ul className="mt-8 space-y-6">
            <li
              className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer"
              onClick={() => navigate("/catalogo")}
            >
              <FontAwesomeIcon icon={faBook} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Catálogo</span>}
            </li>
            <li
              className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer"
              onClick={() => navigate("/crear-citas")}
            >
              <FontAwesomeIcon icon={faCalendarPlus} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Crear cita</span>}
            </li>
            <li
              className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer"
              onClick={() => navigate("/citas-anteriores")}
            >
              <FontAwesomeIcon icon={faHistory} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Citas Anteriores</span>}
            </li>
            <li
              className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer"
              onClick={() => navigate("/calendario")}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Calendario</span>}
            </li>
          </ul>
        </div>

        {/* Perfil y configuraciones */}
        <div className="px-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            {isMenuOpen && <p className="font-semibold">Juan Oscar</p>}
          </div>
          <div className="flex justify-between">
            <button className="text-white">
              <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
            </button>
            <button className="text-white">
              <FontAwesomeIcon icon={faCog} className="text-xl" />
            </button>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className={`flex-1 bg-white bg-opacity-75 p-6 md:p-10 flex flex-col`}>
        {/* Sección de servicios */}
        <section className="flex-grow mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <img
                src="/images/dermatologia.jpg"
                alt="Dermatología"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full h-48 object-cover"
              />
              <p className="font-medium">Dermatología</p>
            </div>
            <div className="text-center">
              <img
                src="/images/cardiologia.jpeg"
                alt="Cardiología"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full h-48 object-cover"
              />
              <p className="font-medium">Cardiología</p>
            </div>
            <div className="text-center">
              <img
                src="/images/nutricion.jpeg"
                alt="Nutrición"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full h-48 object-cover"
              />
              <p className="font-medium">Nutrición</p>
            </div>
            <div className="text-center">
              <img
                src="/images/odontologia.jpeg"
                alt="Odontología"
                className="rounded-lg mx-auto mb-2 shadow-lg w-full h-48 object-cover"
              />
              <p className="font-medium">Odontología</p>
            </div>
          </div>
        </section>

        {/* Sección de equipo */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Nuestro equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img
                src="/images/mario.jpeg"
                alt="Dr. Mario Argueta"
                className="rounded-full mx-auto mb-2 shadow-lg w-32 h-32 object-cover"
              />
              <p className="font-medium">Dr. Mario Argueta</p>
              <p className="text-sm">Especialista en cardiología</p>
            </div>
            <div className="text-center">
              <img
                src="/images/jessica.jpeg"
                alt="Dra. Jessica Moran"
                className="rounded-full mx-auto mb-2 shadow-lg w-32 h-32 object-cover"
              />
              <p className="font-medium">Dra. Jessica Moran</p>
              <p className="text-sm">Especialista en nutrición</p>
            </div>
            <div className="text-center">
              <img
                src="/images/luis.jpeg"
                alt="Dr. Luis López"
                className="rounded-full mx-auto mb-2 shadow-lg w-32 h-32 object-cover"
              />
              <p className="font-medium">Dr. Luis López</p>
              <p className="text-sm">Especialista en dermatología</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
