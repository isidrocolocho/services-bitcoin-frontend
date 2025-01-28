import React from "react";

export default function AboutUs() {
  return (
    <div>
      <section className="relative flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen bg-white">
        {/* Imagen izquierda */}
        <div className="w-full lg:w-1/4 p-4 flex justify-center">
          <img
            src="/images/bitcoin-logo.png" // Aquí puedes poner el logo de Bitcoin o alguna imagen representativa.
            alt="Bitcoin"
            className="w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] rounded-lg"
          />
        </div>

        {/* Texto centrado */}
        <div className="w-full lg:w-2/4 p-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-verde-aqua italic">
            Innovando con
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            Bitcoin
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            En nuestra Bitcoin Academy, fusionamos la educación con la tecnología de
            vanguardia para formar una nueva generación de expertos en criptomonedas.
            Ofrecemos conocimientos profundos y prácticos sobre Bitcoin, su funcionamiento
            y cómo aprovechar su potencial en el mundo actual.
          </p>
        </div>

        {/* Imagen derecha */}
        <div className="w-full lg:w-1/4 p-4 flex justify-center">
          <img
            src="/images/bitcoin-graph.png" // Puedes usar imágenes relacionadas con el crecimiento de Bitcoin o gráficos.
            alt="Bitcoin Graph"
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
              Ser la academia líder en educación sobre criptomonedas, con un enfoque
              especializado en Bitcoin, capacitando a los estudiantes con el conocimiento
              necesario para navegar y aprovechar las oportunidades del mundo de las
              criptomonedas de forma responsable y efectiva.
            </p>
            <img
              src="/images/bitcoin-vision.jpg" // Aquí puedes poner una imagen sobre Bitcoin o la visión de la academia.
              alt="Bitcoin Vision"
              className="w-full rounded-lg mt-4"
            />
          </div>

          {/* Misión */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Misión</h3>
            <p className="mb-4">
              Nuestra misión es educar a las personas sobre el poder de Bitcoin y las
              criptomonedas, promoviendo el acceso al conocimiento de forma inclusiva y
              ayudando a construir un futuro donde todos puedan entender y utilizar
              las monedas digitales de manera segura y eficiente.
            </p>
            <img
              src="/images/bitcoin-mission.jpg" // Imagen que represente el impacto de la misión de la academia.
              alt="Bitcoin Mission"
              className="w-full rounded-lg mt-4"
            />
          </div>

          {/* Valores */}
          <div className="bg-azul-navy p-6 rounded-3xl border-2 border-white">
            <h3 className="text-3xl font-bold mb-4">Valores</h3>
            <p className="mb-4">
              En nuestra Bitcoin Academy, promovemos la innovación, el acceso al
              conocimiento abierto y la seguridad financiera. A través de un enfoque
              ético y transparente, nos aseguramos de que todos nuestros estudiantes
              reciban la educación de calidad que necesitan para tener éxito en el mundo
              de las criptomonedas.
            </p>
            <img
              src="/images/bitcoin-values.jpg" // Aquí puedes poner una imagen que refleje los valores de la academia.
              alt="Bitcoin Values"
              className="w-full rounded-lg mt-4"
            />
          </div>
        </div>
      </section>

      <section className="bg-white min-h-screen grid grid-cols-2 gap-4 lg:grid-cols-5 lg:grid-rows-2 lg:gap-4">
        {/* Texto */}
        <div className="row-span-1 col-span-2 flex flex-col justify-center items-center text-center lg:row-span-2 lg:col-span-3 lg:items-center lg:justify-center px-6">
          <h2 className="text-2xl font-bold text-black mb-4">
            Conoce nuestro equipo de <span className="text-verde-aqua italic">Desarrolladores de Bitcoin</span>
          </h2>
          <p className="text-gray-700">
            Un equipo apasionado por el mundo de las criptomonedas, comprometido con
            la educación sobre Bitcoin y otras criptomonedas para llevar el conocimiento
            a todos los rincones del mundo.
          </p>
        </div>

        {/* Card 1 */}
        <div
          className="flex justify-center items-start row-start-1 col-start-1 lg:row-start-1 lg:col-start-1 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
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

        {/* Card 2 */}
        <div
          className="flex justify-center items-start row-start-1 col-start-2 lg:row-start-1 lg:col-start-2 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
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

        {/* Card 3 */}
        <div
          className="flex justify-center items-end row-start-2 col-start-1 lg:row-start-2 lg:col-start-3 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("https://www.linkedin.com/in/gabriel-campos-salamanca-050579337/", "_blank")}
        >
          <div className="w-40 h-80 rounded-t-[100px] bg-verde-musgo flex justify-center items-end overflow-hidden">
            <img
              src="/images/Dania.jpeg"
              alt="Gabriel"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="flex justify-center items-end row-start-2 col-start-2 lg:row-start-2 lg:col-start-4 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("https://www.linkedin.com/in/karla-rosales-manzano", "_blank")}
        >
          <div className="w-40 h-80 rounded-t-[100px] bg-azul-celeste flex justify-center items-end overflow-hidden">
            <img
              src="/images/Paola.jpeg"
              alt="Karla"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Card 5 */}
        <div
          className="flex justify-center items-end row-start-2 col-start-3 lg:row-start-2 lg:col-start-5 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden"
          onClick={() => window.open("", "_blank")}
        >
          <div className="w-40 h-80 rounded-t-[100px] bg-azul-verde flex justify-center items-end overflow-hidden">
            <img
              src="/images/jessica.jpeg"
              alt="Nueva Persona"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
