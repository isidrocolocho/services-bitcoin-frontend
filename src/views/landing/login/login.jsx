'use client'

import React, { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
import { useAuthStore } from "../../client/auth/store/auth.store";
import { useNavigate } from "react-router-dom";
import { useLoaderStore } from "../../../store/loader.store";

export default function Login() {
    const navigate = useNavigate();
    const loginUser = useAuthStore(state => state.loginUser);
    const setLoaderActive = useLoaderStore(state => state.setActive);

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const authStorage = localStorage.getItem('auth-storage');
        if (authStorage) {
            const parsedAuthStorage = JSON.parse(authStorage);
            const status = parsedAuthStorage.state?.status;
            if (status === 'authorized') {
                navigate('/gestion/perfil', { replace: true });
            }
        }
    },);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setErrors((prevErrors) => ({ ...prevErrors, [id]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.email) validationErrors.email = 'El campo Usuario es obligatorio.';
        if (!formData.password) validationErrors.password = 'El campo Contraseña es obligatorio.';

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            setLoaderActive(true);
            await loginUser(formData.email, formData.password, () => {
                navigate('/gestion/perfil', { replace: true });
            });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            setErrors({ general: 'Usuario o contraseña incorrectos.' });
        } finally {
            setLoaderActive(false);
        }
    };


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
                    {errors.general && <p className="text-red-500 text-sm text-center mb-4">{errors.general}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Usuario
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="email"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Ingrese su email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Contraseña
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Ingrese su contraseña"
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
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

