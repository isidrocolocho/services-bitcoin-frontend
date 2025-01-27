import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-celeste-aqua">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img 
              src="/images/Logo.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className="text-azul-navy font-bold hover:text-cyan-600"
          >
            Inicio
          </Link>
          <Link 
            to="/somos" 
            className="text-azul-navy font-bold hover:text-cyan-600"
          >
            ¿Quiénes somos?
          </Link>
          <Link 
            to="/servicios" 
            className="text-azul-navy font-bold hover:text-cyan-600"
          >
            Servicios
          </Link>
        </nav>

        {/* Botones */}
        <div className="hidden md:flex space-x-4">
          <Link 
            to="/registro" 
            className="border border-gray-500 bg-white px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Registrarse
          </Link>
          <Link 
            to="/login" 
            className="bg-verde-musgo text-white px-4 py-2 rounded-md hover:bg-[#154d25]"
          >
            Iniciar Sesión
          </Link>
        </div>

        {/* Icono del menú móvil */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-[#00214d] text-2xl"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {isOpen && (
        <div className="md:hidden bg-[#89DEE2] px-6 py-4 space-y-4">
          <Link 
            to="/" 
            className="block text-[#00214d] font-bold hover:text-cyan-600"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link 
            to="/somos" 
            className="block text-[#00214d] font-bold hover:text-cyan-600"
            onClick={() => setIsOpen(false)}
          >
            ¿Quiénes somos?
          </Link>
          <Link 
            to="/servicios" 
            className="block text-[#00214d] font-bold hover:text-cyan-600"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/registro" 
              className="border border-gray-500 bg-white px-4 py-2 rounded-md text-center hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Registrarse
            </Link>
            <Link 
              to="/login" 
              className="bg-verde-musgo text-white px-4 py-2 rounded-md text-center hover:bg-[#154d25] !important"
              onClick={() => setIsOpen(false)}
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
