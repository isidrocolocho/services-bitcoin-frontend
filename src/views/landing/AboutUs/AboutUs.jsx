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


      <section className="bg-white min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      {/* Texto */}
      <div className="mb-8 max-w-2xl">
        <h2 className="text-3xl font-medium-500 text-black mb-4 font-poppins">
          Meet Our Team of <span className="text-[#0F3715] bold ">Developers</span>
        </h2>
        <p className="text-gray-700 text-lg">

        A team committed to creating innovative solutions to transform <br/> the way services are offered and hired, driving Bitcoin adoption.  
        </p>
      </div>

      {/* Tarjetas */}
      <div className="flex justify-center gap-6 w-full px-6">
        {/* Card 1 */}
        <div className="w-1/5 h-96 rounded-xl justify-center items-start overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://www.linkedin.com/in/isidro-colocho-72b0a3bb/?originalSubdomain=sv", "_blank")}>          
          <img src="/images/Isidr.jpeg" alt="Isidro" className="w-full h-full object-cover" />
        </div>

        {/* Card 2 */}
        <div className="w-1/5 h-96 rounded-xl bg-verde-aqua flex justify-center items-start overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://www.linkedin.com/in/noelia-g%C3%B3mez-mata-aa3354293/", "_blank")}>          
          <img src="/images/noe.jpeg" alt="Noelia" className="w-full h-full object-cover" />
        </div>

        {/* Card 3 */}
        <div className="w-1/5 h-96 rounded-xl bg-verde-musgo flex justify-center items-end overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open("")}>          
          <img src="/images/Ho.jpg" alt="Gabriel" className="w-full h-full object-cover" />
        </div>

        {/* Card 4 */}
        <div className="w-1/5 h-96 rounded-xl bg-azul-celeste flex justify-center items-end overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://www.linkedin.com/in/dania-merari-urias-viscarra-768aa5289/", "_blank")}>          
          <img src="/images/Dania.jpeg" alt="Karla" className="w-full h-full object-cover" />
        </div>

        {/* Card 5 */}
        <div className="w-1/5 h-96 rounded-xl bg-rojo-claro flex justify-center items-end overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.open("https://www.linkedin.com/in/paoladeras/", "_blank")}>          
          <img src="/images/Paola.jpeg" alt="Nuevo Integrante" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
    </div>
  )
}