import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Servicios() {
    return (
        <div>
<section
  className="py-16 px-6 md:px-20 flex items-center justify-center min-h-[90vh]"
  style={{
    backgroundImage: `linear-gradient(rgba(144, 238, 144, 0.7), rgba(144, 238, 144, 0.7)), url(/images/labs.jpg)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}

  
>
  {/* Contenedor de texto */}
  <div className="max-w-lg pb-28 text-center">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
 Services Designed for Your Comfort and Well-being.
  </h1>
  <p className="text-lg md:text-xl text-black mt-4 text-justify">
    Discover a wide range of services crafted to simplify your daily life. From offering your own services to hiring what you need, all in one place. What sets us apart is our integration with Bitcoin: pay securely through Lightning wallets and enjoy exclusive benefits that only SatoshiLabs can offer.
  </p>
  {/* Botones */}
  <div className="flex flex-wrap gap-4 mt-6 justify-center">
    <button className="bg-[#0F3715] text-white py-2 px-6 rounded-md shadow-md hover:bg-[#5E8F34]">
      Why Choose Us?
    </button>
    <button className="border-2 border-[#CCBB8E] bg-[#CCBB8E] text-gray-900 py-2 px-6 rounded-md shadow-md hover:bg-[#CCBB8E] hover:text-white">
      How Do I Hire a Service?
    </button>
  </div>
</div>

</section>




          
            <section className="grid grid-cols-4 gap-8 px-8 py-12 bg-[#F2F2F2]">
              {/* Título a la izquierda */}
              <div className="col-span-4 md:col-span-2 row-span-2 flex items-center">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight pl-4">
                Why Choose Us?
                </h2>
              </div>

              {/* Subtítulo a la derecha */}
              <div className="col-span-4 md:col-span-2 row-span-2 flex items-center justify-end">
                <p className="text-lg text-gray-600 text-right pr-4">

                  Discover What Makes Our Platform Unique and Reliable
                </p>
              </div>

              {/* Elemento 1 */}
              <div className="col-span-4 md:col-span-1 flex items-center">
                <div className="space-y-4 pl-4">
                  <h3 className="text-2xl md:text-3xl font-semibold">Personalized Search</h3>
                  <p className="text-gray-500">Find Services Tailored to Your Needs.</p>
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
                  <h3 className="text-2xl md:text-3xl font-semibold">Simplified Management</h3>
                  <p className="text-gray-500">
                  Modify, cancel, or confirm your acquired service with just a few clicks.
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
                  <h3 className="text-2xl md:text-3xl font-semibold">Total Accessibility</h3>
                  <p className="text-gray-500">
                  Search and manage your service from any device.
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

            <section className="bg-[#5E8F34] text-white py-10 px-5">
              <div className="max-w-5xl mx-auto text-center">
                {/* Título y descripción */}
                <div className="max-w-4xl mx-auto text-left px-6">
                  <h2 className="text-5xl font-bold mb-6">How Do I Acquire a Service?</h2>
                  <p className="mb-12 text-lg">
                  Follow these simple steps and schedule your next service in minutes.
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
                          Create an account or sign in with your credentials in minutes. It's the first step to enjoy all our services.
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
                        Use advanced search to find services based on your needs, such as location or availability. Everything at your fingertips, quickly and easily.
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

                      Select the ideal time for your service based on your preferences from our interactive calendar, tailored to your routine. 
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
                        Review the details and confirm your acquired service. You will receive a notification with all the necessary information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Botón de llamada a la acción */}
                <button className="mt-12 bg-[#5E8F34] text-white font-bold py-3 px-8 rounded-xl border-2 border-white hover:bg-white hover:text-[#0F3715] hover:border-[#0F3715] transition-colors duration-300">
                  <Link to="/registro" className="block w-full h-full text-center">
                    Regístrate
                  </Link>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-green-500 text-white py-16 px-5 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get started today!
        </motion.h2>
        <motion.p
          className="mb-8 text-lg max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Join our community and transform your Bitcoin knowledge into rewards and new opportunities.
        </motion.p>
        <motion.button
          className="bg-white text-teal-700 font-bold py-3 px-8 rounded-xl border-2 border-white hover:bg-teal-700 hover:text-white transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link to="/registro">Sign up</Link>
        </motion.button>
      </section>
    </div>
  );
}
