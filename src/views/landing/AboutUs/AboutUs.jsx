import React from "react";
import 'typeface-poppins';


export default function AboutUs() {
  return (
    
    <div>
      <section 
        className="relative flex flex-col lg:flex-row items-center justify-center h-auto lg:h-screen bg-[#CCBB8E] " 
      >
        {/* Imagen izquierda */}
        <div  data-aos="zoom-in-down"className="w-full lg:w-1/4 p-4 flex justify-center bg-[#CCBB8E]">
          <img
            src="/images/us.jpg"
            alt="Doctor"
            className="w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] rounded-lg "
          />
        </div>

        <div className="w-full lg:w-2/4 p-6 text-center">
  <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-[#0F3715] poppins-medium">
    The future of payments
  </h1>
  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black poppins-medium">
    powered by Bitcoin today
  </h1>
  <br />
  <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed text-justify bold">
    At SatoshiLabs, we’re changing the way people offer and hire services. Discover professionals, manage hires easily, and pay quickly and securely with Bitcoin using Lightning Network.
    <br />
    <br />
    We believe in the decentralized economy, which is why we offer discounts and cashback when paying with sats. We connect technology and trust for a modern and accessible experience.
  </p>
</div>



        {/* Imagen derecha */}
        <div className="w-full lg:w-1/4 p-4 flex justify-center">
          <img
            src="/images/ser.jpg"
            alt="Cirugía"
            className="w-auto h-auto max-w-[200px] sm:max-w-[300px] lg:max-w-[350px] max-h-[300px] sm:max-h-[400px] lg:max-h-[450px] rounded-lg"
          />
        </div>
      </section>



      <section className="bg-[#0F3715] text-[#CCBB8E] py-12 px-4">
        <h2 className="text-center text-6xl font-bold mb-8"> Who We Are?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Visión */}
{/* Vision */}
<div className="bg-[#0F3715] p-6 rounded-3xl border-2 border-[#CCBB8E]">
  <h3 className="text-3xl font-bold mb-4">Vision</h3>
  <p className="mb-4 text-justify">
    Our vision is to be the leading platform that transforms how people engage with services and payments, fostering a decentralized economy. We aim to build an innovative, accessible community, creating a positive global impact on transactions and payments.
  </p>

</div>

{/* Mission */}
<div className="bg-[#0F3715] p-6 rounded-3xl border-2 border-[#CCBB8E]">
  <h3 className="text-3xl font-bold mb-4">Mission</h3>
  <p className="mb-4 text-justify">
    At SatoshiLabs, we're redefining how people offer and request services through a reliable and efficient platform. We provide fast, secure payments with unique benefits like cashback and discounts. Our goal is to simplify access to diverse services while ensuring a seamless, transparent, and valuable experience for all.
  </p>

</div>

{/* Values */}
<div className="bg-[#0F3715] p-6 rounded-3xl border-2 border-[#CCBB8E]">
  <h3 className="text-3xl font-bold mb-4">Values</h3>
  <p className="mb-4 text-justify">
    We're committed to innovation and providing advanced tech solutions. Security is our priority, protecting user data and transactions. We promote sustainability through responsible payments and foster a community based on trust, respect, and transparency, rewarding users with fair incentives.
  </p>

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

