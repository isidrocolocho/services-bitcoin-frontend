import React from "react";

const CatalogoMedico = () => {
  const servicios = [
    {
      nombre: "Dermatología",
      descripcion: "Especialistas en la salud de la piel, cabello y uñas.",
      imagen: "/images/dermatologia.jpg",
    },
    {
      nombre: "Cardiología",
      descripcion: "Atención especializada para problemas del corazón y sistema circulatorio.",
      imagen: "/images/cardiologia.jpeg",
    },
    {
      nombre: "Odontología",
      descripcion: "Cuidado dental completo, desde limpiezas hasta tratamientos avanzados.",
      imagen: "/images/odontologia.jpeg",
    },
    {
      nombre: "Nutrición",
      descripcion: "Asesoramiento y planes nutricionales personalizados para una vida saludable.",
      imagen: "/images/nutricion.jpeg",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Catálogo Médico</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{servicio.nombre}</h3>
            <p className="text-gray-600 mt-2">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogoMedico;
