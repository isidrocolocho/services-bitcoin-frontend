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
            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F1EEE7]">
                <div className="w-full max-w-md mx-auto px-6 sm:px-8">
                    <h1 className="text-2xl font-bold text-center mb-6">LogIn</h1>
                    <form>
                        <div className="mb-4">
                            <label className=" block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-900 focus:outline-none focus:border-green-800"
                                id="username"
                                type="text"
                                placeholder="Enter your username."
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full border-b-2 bg-[#F1EEE7] border-green-800 focus:outline-none focus:border-green-800"
                                id="password"
                                type="password"
                                placeholder="Enter your password."
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-green-700 to-green-800 text-white py-2 px-4 rounded-md hover:from-green-600 hover:to-green-800"
                        >
                            LogIn
                        </button>
                    </form>
                    <p className="text-center text-sm text-gray-600 mt-4">
                    Don't have an account ?{" "}
                        <Link to="/registro" className="text-green-800 hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

