'use client'

import React, { useState } from 'react';
import { Link } from "react-router-dom";

export default function Registro() {
    const [tipoRegistro, setTipoRegistro] = useState("Paciente");

    const handleTipoRegistroChange = (e) => {
        setTipoRegistro(e.target.value);
    };

    return (
        <section className="flex flex-col md:flex-row h-[780px]">
            {/* Imagen del lado izquierdo */}
            <div
                className="w-1/2 bg-cover bg-left"
                style={{
                    backgroundImage: "url('/images/Registro.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                }}
            ></div>
            {/* Sección del formulario */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white pt-38">
                <div className="w-full max-w-md px-8">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombres">
                                Nombres
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="nombres"
                                type="text"
                                placeholder="Ingrese sus nombres"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
                                Apellidos
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="apellidos"
                                type="text"
                                placeholder="Ingrese sus apellidos"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                                Usuario
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="usuario"
                                type="text"
                                placeholder="Ingrese su usuario"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                                Correo Electrónico
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="correo"
                                type="email"
                                placeholder="Ingrese su correo"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
                                Contraseña
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="contraseña"
                                type="password"
                                placeholder="Ingrese su contraseña"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmarContraseña">
                                Confirmar Contraseña
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="confirmarContraseña"
                                type="password"
                                placeholder="Confirme su contraseña"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoRegistro">
                                Tipo de registro
                            </label>
                            <select
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="tipoRegistro"
                                value={tipoRegistro}
                                onChange={handleTipoRegistroChange}
                            >
                                <option value="Paciente">Paciente</option>
                                <option value="Doctor">Doctor</option>
                            </select>
                        </div>
                        {tipoRegistro === "Doctor" && (
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroJunta">
                                    Número de junta
                                </label>
                                <input
                                    className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                    id="numeroJunta"
                                    type="text"
                                    placeholder="Ingrese su número de junta"
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-800"
                        >
                            Registrarse
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className="text-blue-500 hover:underline">
                            Inicia Sesión.
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
