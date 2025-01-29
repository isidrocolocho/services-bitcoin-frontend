'use client'

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { register } from "../../client/auth/services/auth.service"

export default function Registro() {
    const [tipoRegistro, setTipoRegistro] = useState("3");
    const [formValues, setFormValues] = useState({
        nombres: '',
        apellido: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});

    const handleTipoRegistroChange = (e) => {
        setTipoRegistro(e.target.value);
        setFormValues({ ...formValues }); // Reset número de junta si cambia a 3
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues({ ...formValues, [id]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formValues.nombres.trim()) newErrors.nombres = "El campo nombres es obligatorio.";
        if (!formValues.apellido.trim()) newErrors.apellido = "El campo apellido es obligatorio.";
        if (!formValues.username.trim()) newErrors.username = "El campo usuario es obligatorio.";
        if (!formValues.email.trim()) newErrors.email = "El campo correo es obligatorio.";
        if (!/\S+@\S+\.\S+/.test(formValues.email)) newErrors.email = "El correo no es válido.";
        if (!formValues.password.trim()) newErrors.password = "La contraseña es obligatoria.";
        if (formValues.password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
        if (formValues.password !== formValues.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden.";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Datos listos para el envío
        const dataToSend = {
            ...formValues,
            tipo_registro: tipoRegistro,
        };

        try {
            const response = await register(dataToSend);
        
            // Si el backend devuelve algo como { ok: true }, lo validas aquí:
            if (!response.data.ok) {
                throw new Error(response.data.message || 'Error en el registro');
            }
        
            console.log('Registro exitoso:', response.data);
            alert('Registro exitoso');
        } catch (error) {
            console.error('Error al registrar:', error.message || error);
            alert('Hubo un error al registrar.');
        }
        
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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombres">
                                Nombres
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="nombres"
                                name="nombres"
                                type="text"
                                value={formValues.nombres}
                                onChange={handleChange}
                                placeholder="Ingrese sus nombres"
                            />
                            {errors.nombres && <p className="text-red-500 text-xs mt-1">{errors.nombres}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                                Apellidos
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="apellido"
                                name="apellido"
                                type="text"
                                value={formValues.apellido}
                                onChange={handleChange}
                                placeholder="Ingrese sus apellidos"
                            />
                             {errors.apellido && <p className="text-red-500 text-xs mt-1">{errors.apellido}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usuario">
                                Usuario
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="username"
                                name="username"
                                type="text"
                                value={formValues.username}
                                onChange={handleChange}
                                placeholder="Ingrese su Usuario"
                            />
                             {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                                Correo Electrónico
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="email"
                                name="email"
                                type="text"
                                value={formValues.email}
                                onChange={handleChange}
                                placeholder="Ingrese su correo"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contraseña">
                                Contraseña
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="password"
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                placeholder="Ingrese su contraseña"
                            />
                            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmarContraseña">
                                Confirmar Contraseña
                            </label>
                            <input
                                className="w-full border-b-2 border-blue-600 focus:outline-none focus:border-blue-800"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirme su contraseña"
                                
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
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
                                <option value="3">Cliente</option>
                                <option value="2">Empresa</option>
                            </select>
                        </div>
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
