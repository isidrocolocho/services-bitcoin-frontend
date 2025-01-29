import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faCalendarPlus,
  faHistory,
  faCalendarAlt,
  faSignOutAlt,
  faCog,
  faWallet,
  faArrowUp,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Controla la visibilidad del menú
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para saber si el usuario está logueado
  const [walletData, setWalletData] = useState({
    balance: 2.5, // Bitcoin
    received: 10,
    sent: 5,
    earned: 3,
    btcPrice: 45000, // Precio en USD por BTC
  });

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Verificar si el usuario está logueado
  useEffect(() => {
    // Aquí puedes poner la lógica de autenticación, por ejemplo:
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const transactionDetails = [
    {
      date: "2025-01-28",
      description: "Pago recibido de Juan Oscar",
      amount: "+0.1 BTC",
      sender: "Juan Oscar",
      time: "14:35:00",
    },
    {
      date: "2025-01-27",
      description: "Enviado a Usuario X",
      amount: "-0.05 BTC",
      sender: "Sistema",
      time: "10:15:00",
    },
  ];

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  // Manejar el logout
  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn"); // Eliminar el estado de login
    setIsLoggedIn(false);
    navigate("/login"); // Redirigir a la página de login
  };

  return (
    <div className="flex min-h-screen overflow-hidden" style={{ backgroundImage: "url('/images/sectionServicios.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
      {/* Menú lateral */}
      <aside className={`bg-teal-600 text-white flex flex-col justify-between py-6 transition-all duration-300 ${isMenuOpen ? "w-64" : "w-16"}`}>
        <div>
          {/* Botón para abrir/cerrar el menú */}
          <button className="text-white px-4 py-2" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>

          {/* Opciones del menú */}
          <ul className="mt-8 space-y-6">
            <li className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer" onClick={() => navigate("/catalogo")}>
              <FontAwesomeIcon icon={faBook} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Catálogo</span>}
            </li>
            <li className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer" onClick={() => navigate("/CrearTransferencia")}>
              <FontAwesomeIcon icon={faCalendarPlus} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Crear transferencia</span>}
            </li>
            <li className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer" onClick={() => navigate("/ProcesosRealizados")}>
              <FontAwesomeIcon icon={faHistory} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Historial de Procesos Realizados</span>}
            </li>
            <li className="flex items-center px-4 space-x-4 hover:bg-teal-700 cursor-pointer" onClick={() => navigate("/calendario")}>
              <FontAwesomeIcon icon={faCalendarAlt} className="text-2xl" />
              {isMenuOpen && <span className="text-lg">Calendario</span>}
            </li>
          </ul>
        </div>

        {/* Perfil y configuraciones */}
        <div className="px-4">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            {isMenuOpen && <p className="font-semibold">Juan Oscar</p>}
          </div>
          <div className="flex justify-between items-center">
            <button className="text-white" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
              {isMenuOpen && <span className="ml-2">Log Out</span>}
            </button>
            <button className="text-white flex items-center">
              <FontAwesomeIcon icon={faCog} className="text-xl" />
              {isMenuOpen && <span className="ml-2">Ajustes</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 bg-white bg-opacity-75 p-6 md:p-10 flex flex-col">
        {/* Dashboard de la wallet */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Dashboard de Wallet</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold">Sats Recibidos</h3>
              <p className="text-2xl font-bold text-green-600">{walletData.received} Sats</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold">Sats Enviados</h3>
              <p className="text-2xl font-bold text-red-600">{walletData.sent} Sats</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold">Sats Ganados</h3>
              <p className="text-2xl font-bold text-blue-600">{walletData.earned} Sats</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold">Saldo Total (BTC)</h3>
              <p className="text-2xl font-bold text-indigo-600">{walletData.balance} BTC</p>
              <p className="text-sm text-gray-600">${(walletData.balance * walletData.btcPrice).toFixed(2)}</p>
            </div>
          </div>
        </section>

        {/* Historial de transacciones */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Historial de Transacciones</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 overflow-auto">
            {/* Tu código de transacciones aquí */}
          </div>
        </section>
      </main>
    </div>
  );
}
