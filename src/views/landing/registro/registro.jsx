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
                    backgroundImage: "url('/images/Diseño_Login.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "left center",
                }}
            ></div>
            {/* Sección del formulario */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F1EEE7] pt-38">
                <div className="w-full max-w-md px-8">
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombres">
                                Names
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="nombres"
                                type="text"
                                placeholder="Enter your name."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidos">
                                Last name
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="apellidos"
                                type="text"
                                placeholder="Enter your last name."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                                User
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="usuario"
                                type="text"
                                placeholder="Enter your username."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                                Email
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="correo"
                                type="email"
                                placeholder="Enter your email."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
                                Password
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="contraseña"
                                type="password"
                                placeholder="Enter your password."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmarContraseña">
                            Confirm password.
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="confirmarContraseña"
                                type="password"
                                placeholder="Confirm password."
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoRegistro">
                            Type of registration.
                            </label>
                            <select
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="tipoRegistro"
                                value={tipoRegistro}
                                onChange={handleTipoRegistroChange}
                            >
                                <option value="Paciente">User</option>
                                <option value="Doctor">Bussiness</option>
                            </select>
                        </div>
                        {tipoRegistro === "Doctor" && (
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroJunta">
                                    Id
                                </label>
                                <input
                                    className="w-full border-b-2 border-green-700 focus:outline-none focus:border-green-800"
                                    id="numeroJunta"
                                    type="text"
                                    placeholder="Ingrese su número de junta"
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-2 px-4 rounded-md hover:from-green-600 hover:to-green-800"
                        >
                            Sign Up
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                        <Link to="/login" className="text-green-500 hover:underline">
                            LogIn.
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
