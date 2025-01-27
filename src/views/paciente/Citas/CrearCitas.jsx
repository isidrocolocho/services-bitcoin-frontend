export default function CrearCitas() {
    return (
      <div
        className="flex min-h-screen items-center justify-center p-4"
        style={{
          backgroundImage: "url('/images/sectionServicios.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
          <h1 className="text-2xl font-bold text-center text-teal-700 mb-6">
            Crear Cita
          </h1>
          <form className="space-y-4">
            {/* Campo: Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Ingrese su nombre completo"
                required
              />
            </div>
  
            {/* Campo: Fecha */}
            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
                Fecha de la cita
              </label>
              <input
                type="date"
                id="fecha"
                name="fecha"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
  
            {/* Campo: Hora */}
            <div>
              <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
                Hora de la cita
              </label>
              <input
                type="time"
                id="hora"
                name="hora"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>
  
            {/* Campo: Servicio */}
            <div>
              <label htmlFor="servicio" className="block text-sm font-medium text-gray-700">
                Servicio
              </label>
              <select
                id="servicio"
                name="servicio"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                required
              >
                <option value="" disabled selected>
                  Seleccione un servicio
                </option>
                <option value="dermatologia">Dermatología</option>
                <option value="cardiologia">Cardiología</option>
                <option value="nutricion">Nutrición</option>
                <option value="odontologia">Odontología</option>
              </select>
            </div>
  
            {/* Campo: Descripción (opcional) */}
            <div>
              <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">
                Descripción (opcional)
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                placeholder="Agregue detalles adicionales sobre la cita (opcional)"
              ></textarea>
            </div>
  
            {/* Botón de envío */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Crear Cita
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  