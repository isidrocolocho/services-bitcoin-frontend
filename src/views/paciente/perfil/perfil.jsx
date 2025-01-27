import React from "react";

// Componente del perfil del paciente
const PerfilPaciente = () => {
  // Información de ejemplo del paciente
  const paciente = {
    nombre: "Ana María Rodríguez",
    edad: 29,
    genero: "Femenino",
    historialMedico: [
      {
        fecha: "2024-11-15",
        especialidad: "Dermatología",
        doctor: "Dr. Luis López",
        estado: "Consulta de rutina",
      },
      {
        fecha: "2024-10-10",
        especialidad: "Cardiología",
        doctor: "Dr. Mario Argueta",
        estado: "Chequeo anual",
      },
    ],
    descripcion:
      "Soy una paciente comprometida con mi salud y bienestar. Me esfuerzo por mantenerme al día con mis chequeos médicos para prevenir cualquier complicación futura.",
    imagen: "/images/ana_maria.jpeg", // Ruta de la imagen del paciente
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Imagen de perfil */}
        <div className="flex items-center space-x-6">
          <img
            src={paciente.imagen}
            alt={paciente.nombre}
            className="rounded-full w-32 h-32 object-cover"
          />
          <div>
            <h1 className="text-3xl font-semibold text-gray-800">{paciente.nombre}</h1>
            <p className="text-gray-500 text-lg">Edad: {paciente.edad} años</p>
            <p className="text-gray-500 text-lg">Género: {paciente.genero}</p>
          </div>
        </div>

        {/* Descripción del paciente */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Sobre mí</h2>
          <p className="text-gray-700 mt-2">{paciente.descripcion}</p>
        </div>

        {/* Historial médico */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Historial Médico</h2>
          <ul className="space-y-4 mt-4">
            {paciente.historialMedico.map((consulta, index) => (
              <li key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
                <p className="text-gray-700">
                  <strong>Fecha:</strong> {consulta.fecha}
                </p>
                <p className="text-gray-700">
                  <strong>Especialidad:</strong> {consulta.especialidad}
                </p>
                <p className="text-gray-700">
                  <strong>Doctor:</strong> {consulta.doctor}
                </p>
                <p className="text-gray-700">
                  <strong>Estado:</strong> {consulta.estado}
                </p>
              </li>
            ))}
          </ul>
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

export default PerfilPaciente;
