'use client'

import React from 'react';
import { Link } from "react-router-dom";

export default function login() {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Imagen del lado izquierdo */}
            <div 
                className="hidden md:block md:w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/Diseño_Login.jpg')" }}
            ></div>

            {/* Sección del formulario de login */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
                <div className="w-full max-w-md mx-auto px-6 sm:px-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Iniciar Sesión</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Usuario
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="username"
                                type="text"
                                placeholder="Ingrese su usuario"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="password"
                                type="password"
                                placeholder="Ingrese su contraseña"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-800"
                        >
                            Iniciar Sesión
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                        ¿No tienes cuenta?{" "}
                        <Link to="/registro" className="text-blue-500 hover:underline">
                            Regístrate.
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

