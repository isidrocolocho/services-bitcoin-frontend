import React from "react";

// Componente del perfil de usuario
const PerfilUsuario = () => {
  // Información de ejemplo de un usuario
  const usuario = {
    nombre: "Juan Oscar",
    especialidad: "Cardiología", // Solo si es un médico
    descripcion:
      "Médico especializado en el tratamiento de enfermedades cardíacas. Me apasiona ayudar a mis pacientes a mejorar su salud y calidad de vida.",
    imagen: "/images/luis.jpeg", // Ruta de la imagen de perfil
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Imagen de perfil */}
        <div className="flex items-center space-x-6">
          <img
            src={usuario.imagen}
            alt={usuario.nombre}
            className="rounded-full w-32 h-32 object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">{usuario.nombre}</h1>
            <p className="text-gray-500 text-lg">{usuario.especialidad}</p>
          </div>
        </div>

        {/* Descripción del perfil */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sobre mí</h2>
          <p className="text-gray-700 mt-2">{usuario.descripcion}</p>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 flex justify-end space-x-4">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow-md hover:bg-teal-700 transition duration-300">
            Editar perfil
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300">
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilUsuario;
