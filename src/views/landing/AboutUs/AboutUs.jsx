import React from "react";

export default function AboutUs() {
  return (
    <div>
      <section
        className="relative flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen bg-white"
      >
        {/* Imagen izquierda */}
        <div className="w-full lg:w-1/4 p-4 flex justify-center">
          <img
            src="/images/doctor.png"
            alt="Doctor"
            className="w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] rounded-lg"
          />
        </div>

        {/* Texto centrado */}
        <div className="w-full lg:w-2/4 p-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-verde-aqua italic">
            Conectando
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Pacientes
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            Unimos tecnología y salud para transformar tu experiencia médica. Nuestra
            plataforma te permite encontrar especialistas, agendar citas fácilmente y
            gestionar tu bienestar de manera eficiente, segura y accesible desde
            cualquier lugar.
          </p>
        </div>

        {/* Imagen derecha */}
        <div className="w-full lg:w-1/4 p-4 flex justify-center">
          <img
            src="/images/Cirugia.png"
            alt="Cirugía"
            className="w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] rounded-lg"
          />
        </div>
      </section>



      <section className="bg-azul-navy text-white py-12 px-4">
        <h2 className="text-center text-6xl italic font-bold mb-8">¿Quiénes Somos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visión */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Visión</h3>
            <p className="mb-4">
              Facilitar el acceso a servicios médicos de calidad a través de una
              plataforma digital intuitiva y eficiente, conectando pacientes con
              especialistas de manera rápida, segura y accesible.
            </p>
            <img
              src="/images/DocPaciente.jpg"
              alt="Doctor and patient"
              className="w-full rounded-lg mt-4"
            />
          </div>

          {/* Misión */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Misión</h3>
            <p className="mb-4">
              Ser la solución líder en la gestión de citas médicas en línea,
              revolucionando la forma en que las personas interactúan con el
              sistema de salud, promoviendo un acceso equitativo y transformando
              la experiencia médica a nivel global.
            </p>
            <img
              src="/images/MundoTech.jpg"
              alt="Global map"
              className="w-full rounded-lg mt-4"
            />
          </div>

          {/* Valores */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Valores</h3>
            <p className="mb-4">
              Impulsamos la innovación, garantizamos accesibilidad para todos y
              promovemos la confianza con un servicio seguro y transparente.
            </p>
            <img
              src="/images/apreton.webp"
              alt="Handshake"
              className="w-full rounded-lg mt-4"
            />
          </div>
        </div>
      </section>


      <section className="bg-white min-h-screen grid grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-6 lg:grid-rows-2 lg:gap-0">
        {/* Texto */}
        <div className="row-span-1 col-span-2 flex flex-col justify-center items-center text-center lg:row-span-2 lg:col-span-2 lg:items-center lg:justify-center px-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Conoce nuestro equipo de <span className="text-verde-aqua italic">Desarrolladores</span>
          </h2>
          <p className="text-gray-700">
            Un equipo comprometido con la creación de soluciones innovadoras para transformar la experiencia médica.
          </p>
        </div>

        {/* Card 1 */}
        <div
          className="flex justify-center items-start row-start-1 col-start-1 lg:row-start-1 lg:col-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("https://www.linkedin.com/in/isidro-colocho-72b0a3bb/?originalSubdomain=sv", "_blank")}
        >
          <div className="w-40 h-80 rounded-b-[100px] bg-celeste-aqua flex justify-center items-start overflow-hidden">
            <img
              src="/images/Isidro.png"
              alt="Isidro"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="flex justify-center items-start row-start-1 col-start-2 lg:row-start-1 lg:col-start-5 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("https://www.linkedin.com/in/noelia-g%C3%B3mez-mata-aa3354293/", "_blank")}
        >
          <div className="w-40 h-80 rounded-b-[100px] bg-verde-aqua flex justify-center items-start overflow-hidden">
            <img
              src="/images/Noelia.png"
              alt="Noelia"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="flex justify-center items-end row-start-3 col-start-1 lg:row-start-2 lg:col-start-4 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("https://www.linkedin.com/in/gabriel-campos-salamanca-050579337/", "_blank")}
        >
          <div className="w-40 h-80 rounded-t-[100px] bg-verde-musgo flex justify-center items-end overflow-hidden">
            <img
              src="/images/Gabriel.png"
              alt="Gabriel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="flex justify-center items-end row-start-3 col-start-2 lg:row-start-2 lg:col-start-6 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("https://www.linkedin.com/in/karla-rosales-manzano", "_blank")}
        >
          <div className="w-40 h-80 rounded-t-[100px] bg-azul-celeste flex justify-center items-end overflow-hidden">
            <img
              src="/images/Karla.png"
              alt="Karla"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

