// Componente para mostrar estrellas (calificación)
const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.round(rating); // Redondeamos la calificación para mostrar solo estrellas completas

  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      stars.push(<span key={i} className="text-yellow-500">★</span>); // Estrella llena
    } else {
      stars.push(<span key={i} className="text-gray-300">★</span>); // Estrella vacía
    }
  }

  return <div>{stars}</div>;
};

const MedicosConCalificaciones = () => {
  const medicos = [
    {
      nombre: "Dr. Mario Argueta",
      especialidad: "Cardiología",
      rating: 4.5, // Calificación
      imagen: "/images/mario.jpeg",
    },
    {
      nombre: "Dra. Jessica Moran",
      especialidad: "Nutrición",
      rating: 4.0,
      imagen: "/images/jessica.jpeg",
    },
    {
      nombre: "Dr. Luis López",
      especialidad: "Dermatología",
      rating: 4.8,
      imagen: "/images/luis.jpeg",
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6">Nuestros Médicos y Calificaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {medicos.map((medico, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={medico.imagen}
              alt={medico.nombre}
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-gray-800 font-semibold">{medico.nombre}</h3>
            <p className="text-gray-500">{medico.especialidad}</p>
            <div className="mt-2">
              <StarRating rating={medico.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicosConCalificaciones;
