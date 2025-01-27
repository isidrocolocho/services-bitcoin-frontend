import React from "react";

const Testimonios = () => {
  const testimonios = [
    {
      nombre: "Fá",
      usuario: "@victorfatami",
      mensaje: "¡Increíble plataforma! Reservar citas médicas nunca fue tan fácil.",
      foto: "/images/mario.jpeg", // Imagen del testimonio
    },
    {
      nombre: "Teffy Billion Dollars",
      usuario: "@Jegc_tola",
      mensaje:
        "Lo que más me gusta es poder ver las calificaciones de los médicos antes de hacer una cita.",
      foto: "/images/jessica.jpeg", // Imagen del testimonio
    },
    {
      nombre: "Json_",
      usuario: "@JasonSteve",
      mensaje:
        "Una experiencia intuitiva y rápida para encontrar al médico ideal.",
      foto: "/images/luis.jpeg", // Imagen del testimonio
    },
    {
      nombre: "Folasade Daini",
      usuario: "@folasade_daini",
      mensaje:
        "Me encanta la opción de gestionar todas mis citas en un solo lugar. Muy conveniente.",
      foto: "/images/mario.jpeg", // Imagen del testimonio
    },
    {
      nombre: "THEE AWAZI",
      usuario: "@THEAWAZI",
      mensaje: "La interfaz es súper amigable y me ahorra mucho tiempo. ¡Perfecta!",
      foto: "/images/jessica.jpeg", // Imagen del testimonio
    },
    {
      nombre: "Temz👑",
      usuario: "@TheRealTemz",
      mensaje:
        "Sistema confiable y fácil de usar para gestionar citas médicas sin complicaciones.",
      foto: "/images/luis.jpeg", // Imagen del testimonio
    },
    {
      nombre: "Wine",
      usuario: "@RedWhinee",
      mensaje:
        "El proceso de reserva es tan sencillo y eficiente, realmente lo recomiendo.",
      foto: "/images/mario.jpeg", // Imagen del testimonio
    },
    {
      nombre: "Scheherazade",
      usuario: "@_chilsom",
      mensaje:
        "El proceso de reserva es tan sencillo y eficiente, realmente lo recomiendo.",
      foto: "/images/jessica.jpeg", // Imagen del testimonio
    },
  ];

  return (
    <div className="bg-verde-musgo p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-6 text-center">
          Opiniones de nuestros usuarios
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonio.foto} // Usamos la foto del testimonio
                  alt={testimonio.nombre}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-gray-800 font-semibold">{testimonio.nombre}</h3>
                  <p className="text-gray-500 text-sm">{testimonio.usuario}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{testimonio.mensaje}</p>
              <div className="text-blue-500">
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonios;
