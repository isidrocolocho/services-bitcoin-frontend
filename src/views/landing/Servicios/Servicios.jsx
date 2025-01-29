
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
            Discover a wide range of services crafted to simplify your daily
            life. From offering your own services to hiring what you need, all
            in one place. What sets us apart is our integration with Bitcoin:
            pay securely through Lightning wallets and enjoy exclusive benefits
            that only SatoshiLabs can offer.
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
 


{/* Servicios */}
<section className="py-20 bg-[#0F3715]">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#5E8F34] mb-4">
          Our Services
          </h2>
          <p className="text-lg text-[#5E8F34]">
          Turn knowledge into action and rewards with our innovative services.
          Lessons for beginners with fundamentals and security in Bitcoin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 py-12 ">
          {/* Servicios Tarjetas */}
          {[
            {
              title: "Learn Bitcoin from scratch",
              description:
                "Lessons for beginners with fundamentals and security in Bitcoin.",
              img: "/images/AprenderBitcoin.jpg",
            },
            {
              title: "Earn sats by playing",
              description:
                "Participate in games and educational challenges to earn satoshis while you learn.",
              img: "/images/GanarSats.jpg",
            },
            {
              title: "Wallet rewards",
              description:
                "Accumulate rewards and get discounts on products and services.",
              img: "/images/WalletRecompensas.png",
            },
            {
              title: "Shop with Bitcoin",
              description:
                "Use your wallet to easily buy products, without the need for credit cards or intermediaries, and pay directly with Bitcoin quickly and securely.",
              img: "/images/ComprasConBitcoin.png",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#CCBB8E] rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl text-[#0F3715] font-bold">{service.title}</h3>
                <p className="text-[#5E8F34] mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
 
      {/* CTA Section */}
      <section className=" bg-[#CCBB8E] text-[#0F3715] py-16 px-5 text-center">
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
          Join our community and transform your Bitcoin knowledge into rewards
          and new opportunities.
        </motion.p>
        <motion.button
          className="bg-[#5E8F34] text-white font-bold py-3 px-8 rounded-xl border-2 border-[#5E8F34] hover:bg-[#0F3715] hover:text-white transition-all"
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