import React from "react";
import { Link } from 'react-router-dom';

export default function Servicios() {
    return (
        <div>
            <section
              className="py-16 px-6 md:px-20 flex items-center justify-between min-h-[110vh]"
              style={{
                backgroundImage: "url('/images/SectionServicios.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              {/* Contenedor de texto */}
              <div className="max-w-lg pb-28">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Servicios diseñados <br /> para tu salud y comodidad.
                </h1>
                <p className="text-base md:text-lg text-gray-700 mt-4">
                  Explora una amplia gama de servicios diseñados para simplificar tu cuidado médico. Desde buscar especialistas hasta gestionar tus citas.
                </p>
                {/* Botones */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <button className="bg-teal-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-teal-600">
                    ¿Por qué elegirnos?
                  </button>
                  <button className="border-2 border-gray-800 text-gray-800 py-2 px-6 rounded-md shadow-md hover:bg-gray-800 hover:text-white">
                    ¿Cómo reservo una cita?
                  </button>
                </div>
              </div>

  {/* Imagen */}
  <div className="hidden md:block pb-28">
    <img
      src="/images/DoctoraTel.webp"
      alt="Doctora sonriente con celular"
      className="rounded-lg shadow-lg w-auto h-60 md:h-72"
    />
  </div>
</section>




          
            <section className="grid grid-cols-4 gap-8 px-8 py-12">
              {/* Título a la izquierda */}
              <div className="col-span-4 md:col-span-2 row-span-2 flex items-center">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight pl-4">
                  ¿Por qué elegirnos?
                </h2>
              </div>

              {/* Subtítulo a la derecha */}
              <div className="col-span-4 md:col-span-2 row-span-2 flex items-center justify-end">
                <p className="text-lg text-gray-600 text-right pr-4">
                  Descubre lo que hace que nuestra plataforma sea única y confiable
                </p>
              </div>

              {/* Elemento 1 */}
              <div className="col-span-4 md:col-span-1 flex items-center">
                <div className="space-y-4 pl-4">
                  <h3 className="text-2xl md:text-3xl font-semibold">Búsqueda personalizada</h3>
                  <p className="text-gray-500">Encuentra médicos según tus necesidades.</p>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 h-48">
                <img
                  src="/images/PersonaLaptop.png"
                  alt="Búsqueda personalizada"
                  className="rounded-[2rem] w-full h-full object-cover shadow-lg"
                />
              </div>

              {/* Elemento 2 */}
              <div className="col-span-4 md:col-span-1 flex items-center">
                <div className="space-y-4 pl-4">
                  <h3 className="text-2xl md:text-3xl font-semibold">Gestión simplificada</h3>
                  <p className="text-gray-500">
                    Cambia, cancela o confirma citas con unos pocos clics.
                  </p>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 h-48">
                <img
                  src="/images/Buscando.png"
                  alt="Gestión simplificada"
                  className="rounded-[2rem] w-full h-full object-cover shadow-lg"
                />
              </div>

              {/* Elemento 3 */}
              <div className="col-span-4 md:col-span-1 flex items-center">
                <div className="space-y-4 pl-4">
                  <h3 className="text-2xl md:text-3xl font-semibold">Accesibilidad total</h3>
                  <p className="text-gray-500">
                    Busca y gestiona citas desde cualquier dispositivo.
                  </p>
                </div>
              </div>
              <div className="col-span-4 md:col-span-3 h-48">
                <img
                  src="/images/Organizar.png"
                  alt="Accesibilidad total"
                  className="rounded-[2rem] w-full h-full object-cover shadow-lg"
                />
              </div>
            </section>

            <section className="bg-azul-navy text-white py-10 px-5">
              <div className="max-w-5xl mx-auto text-center">
                {/* Título y descripción */}
                <div className="max-w-4xl mx-auto text-left px-6">
                  <h2 className="text-5xl font-bold mb-6">¿Cómo reservo una cita?</h2>
                  <p className="mb-12 text-lg">
                    Sigue estos sencillos pasos y programa tu próxima consulta en minutos
                  </p>
                </div>



                {/* Contenedor de las tarjetas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Card 1 */}
                  <div className="bg-azul-navy-light text-white rounded-lg shadow-lg p-6 flex flex-col">
                    <div className="grid grid-rows-4 grid-cols-4 gap-2 flex-grow">
                      {/* Imagen: Ocupa las 3 primeras filas y las 4 columnas */}
                      <div className="row-span-3 col-span-4">
                        <img
                          src="images/CrearCuenta.jpg"
                          alt="Crear cuenta"
                          className="w-full h-auto object-cover rounded-lg"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                      {/* Número: Ocupa 1 columna de la cuarta fila */}
                      <div className="row-span-1 col-span-1 flex justify-center items-center">
                        <h3 className="text-3xl font-bold">1</h3>
                      </div>
                      {/* Texto: Ocupa 3 columnas de la cuarta fila */}
                      <div className="row-span-1 col-span-3 flex items-center">
                        <p className="text-sm md:text-base">
                          Crea una cuenta o accede con tus credenciales en minutos. Es el primer
                          paso para disfrutar de todos nuestros servicios.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-azul-navy-light text-white rounded-lg shadow-lg p-6 flex flex-col">
                    <div className="grid grid-rows-4 grid-cols-4 gap-2 flex-grow">
                      {/* Imagen */}
                      <div className="row-span-3 col-span-4">
                        <img
                          src="images/BusquedaAvanzada.jpg"
                          alt="Búsqueda avanzada"
                          className="w-full h-auto object-cover rounded-lg"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                      {/* Número */}
                      <div className="row-span-1 col-span-1 flex justify-center items-center">
                        <h3 className="text-3xl font-bold">2</h3>
                      </div>
                      {/* Texto */}
                      <div className="row-span-1 col-span-3 flex items-center">
                        <p className="text-sm md:text-base">
                          Usa la búsqueda avanzada para encontrar médicos por especialidad,
                          ubicación o disponibilidad. Todo a tu alcance de forma rápida y fácil.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-azul-navy-light text-white rounded-lg shadow-lg p-6 flex flex-col">
                    <div className="grid grid-rows-4 grid-cols-4 gap-2 flex-grow">
                      {/* Imagen */}
                      <div className="row-span-3 col-span-4">
                        <img
                          src="images/Calendario.jpg"
                          alt="Selecciona el horario"
                          className="w-full h-auto object-cover rounded-lg"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                      {/* Número */}
                      <div className="row-span-1 col-span-1 flex justify-center items-center">
                        <h3 className="text-3xl font-bold">3</h3>
                      </div>
                      {/* Texto */}
                      <div className="row-span-1 col-span-3 flex items-center">
                        <p className="text-sm md:text-base">
                          Selecciona el horario ideal desde nuestro calendario interactivo,
                          adaptado a tu rutina.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-azul-navy-light text-white rounded-lg shadow-lg p-6 flex flex-col">
                    <div className="grid grid-rows-4 grid-cols-4 gap-2 flex-grow">
                      {/* Imagen */}
                      <div className="row-span-3 col-span-4">
                        <img
                          src="images/ConfirmarDetalles.jpg"
                          alt="Confirma los detalles"
                          className="w-full h-auto object-cover rounded-lg"
                          style={{ aspectRatio: "16/9" }}
                        />
                      </div>
                      {/* Número */}
                      <div className="row-span-1 col-span-1 flex justify-center items-center">
                        <h3 className="text-3xl font-bold">4</h3>
                      </div>
                      {/* Texto */}
                      <div className="row-span-1 col-span-3 flex items-center">
                        <p className="text-sm md:text-base">
                          Revisa los detalles y confirma tu cita. Recibirás una notificación con
                          toda la información necesaria.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Botón de llamada a la acción */}
                <button className="mt-12 bg-azul-navy text-white font-bold py-3 px-8 rounded-xl border-2 border-white hover:bg-white hover:text-azul-navy hover:border-azul-navy transition-colors duration-300">
                  <Link to="/registro" className="block w-full h-full text-center">
                    Regístrate
                  </Link>
                </button>
              </div>
            </section>
        </div>
    )
}