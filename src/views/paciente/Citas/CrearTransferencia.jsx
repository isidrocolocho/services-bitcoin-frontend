import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function CrearTransferencia() {
  const [nombre, setNombre] = useState("");
  const [wallet, setWallet] = useState("");
  const [sats, setSats] = useState("");
  const [btc, setBtc] = useState("");
  const [usd, setUsd] = useState("");
  const [qrCodeData, setQrCodeData] = useState("");

  const btcToUsdRate = 45000; // Ejemplo: 1 BTC = 45,000 USD
  const satsToBtcRate = 100000000; // 1 BTC = 100,000,000 Sats

  // Función para manejar la conversión automática entre Sats, BTC y USD
  const handleSatsChange = (e) => {
    const satsValue = e.target.value;
    setSats(satsValue);

    // Convertir Sats a BTC
    const btcValue = satsValue / satsToBtcRate;

    // Redondear a 8 decimales para evitar notación científica
    setBtc(btcValue.toFixed(8));

    // Convertir BTC a USD
    const usdValue = btcValue * btcToUsdRate;
    setUsd(usdValue.toFixed(2)); // Redondear a 2 decimales
  };

  const handleBtcChange = (e) => {
    const btcValue = e.target.value;
    setBtc(btcValue);

    // Convertir BTC a Sats
    const satsValue = btcValue * satsToBtcRate;
    setSats(satsValue);

    // Convertir BTC a USD
    const usdValue = btcValue * btcToUsdRate;
    setUsd(usdValue.toFixed(2)); // Redondear a 2 decimales
  };

  const handleUsdChange = (e) => {
    const usdValue = e.target.value;
    setUsd(usdValue);

    // Convertir USD a BTC
    const btcValue = usdValue / btcToUsdRate;
    setBtc(btcValue);

    // Convertir BTC a Sats
    const satsValue = btcValue * satsToBtcRate;
    setSats(satsValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generar el QR con los detalles de la transferencia
    const qrData = `bitcoin:${wallet}?amount=${btc}&label=${nombre}&message=Transferencia%20de%20${sats}%20Sats`;
    setQrCodeData(qrData);

    alert("Transfer successfully generated!");
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center p-4"
      style={{
        
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md md:max-w-lg">
        <h1 className="text-2xl font-bold text-center text-[#0F3715] mb-6">
        Create Transfer
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Full name
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter the recipient's name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          {/* Campo: Dirección de la wallet */}
          <div>
            <label htmlFor="wallet" className="block text-sm font-medium text-gray-700">
            Wallet address
            </label>
            <input
              type="text"
              id="wallet"
              name="wallet"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter the wallet address"
              value={wallet}
              onChange={(e) => setWallet(e.target.value)}
              required
            />
          </div>

          {/* Campo: Número de Sats */}
          <div>
            <label htmlFor="sats" className="block text-sm font-medium text-gray-700">
            Number of Sats
            </label>
            <input
              type="number"
              id="sats"
              name="sats"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter the number of Sats"
              value={sats}
              onChange={handleSatsChange}
              required
            />
          </div>

          {/* Campo: Bitcoin (BTC) */}
          <div>
            <label htmlFor="btc" className="block text-sm font-medium text-gray-700">
            Amount in Bitcoin (BTC)
            </label>
            <input
              type="number"
              id="btc"
              name="btc"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter the amount in Bitcoin"
              value={btc}
              onChange={handleBtcChange}
              required
            />
          </div>

          {/* Campo: Monto en dólares */}
          <div>
            <label htmlFor="usd" className="block text-sm font-medium text-gray-700">
            Amount in dollars (USD)
            </label>
            <input
              type="number"
              id="usd"
              name="usd"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter the amount in dollars"
              value={usd}
              onChange={handleUsdChange}
              required
            />
          </div>

          {/* Botón de envío */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-[#0F3715] text-white font-semibold rounded-lg hover:bg-[#5E8F34] focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Create Transfer
            </button>
          </div>
        </form>

        {/* Mostrar el QR de la transferencia */}
        {qrCodeData && (
          <div className="mt-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Scan the QR code to make the transfer.</h2>
            <QRCodeCanvas value={qrCodeData} size={256} />
            <p className="mt-4 text-sm text-gray-500">Scan this code with your wallet to make the transfer.</p>
          </div>
        )}
      </div>
    </div>
  );
}
