import { useState } from "react";
import { useNavigate } from  "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
const CreateProduct = () => {

    const navigate = useNavigate();

    //const apiUrl = 'http://localhost/products/api.php';
    const apiUrl = process.env.REACT_APP_API_URL;
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const dataInit = {
        name: "",
        description: "",
        price: 0,
    }

    const [data, setdata] = useState(dataInit);

    const handelChange = (e) =>{
        //Actualizando el valor segun propiedad y valor que proviene del input
        setdata({...data, [e.target.name]: e.target.value});
    }

    const handelSubmit = async (e) =>{
        e.preventDefault();
        console.log(data);
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Este producto se creara si confirmas esta accion",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, Crear"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.post(`${apiUrl}/productos`, data, config)
                .then(response =>{
                    Swal.fire({
                        title: "Producto Creado exitosamente!",
                        icon: "success",
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            //console.log(response);
                            navigate('/');
                        }
                    });
                })
                .catch(err =>{
                    console.log(err);
                })
            }
        });
       
    }

    return (
        <section className="text-gray-600 body-font bg-gray-50 py-16">
            <div className="container px-5 mx-auto">
                {/* Título */}
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-800">Registrar Producto</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
                        Complete los campos para añadir un nuevo producto al catálogo.
                    </p>
                </div>
        
                {/* Formulario */}
                <form onSubmit={handelSubmit} className="lg:w-1/2 md:w-2/3 mx-auto bg-white p-8 rounded-lg shadow-md">
                    <div className="flex flex-wrap -m-2">
                        {/* Nombre */}
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Nombre del producto
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-4 transition-colors duration-200 ease-in-out"
                                    placeholder="Nombre del producto"
                                    onChange={handelChange}
                                    required
                                />
                            </div>
                        </div>
        
                        {/* Precio */}
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                                    Precio
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-4 transition-colors duration-200 ease-in-out"
                                    placeholder="Ejemplo: 150.00"
                                    onChange={handelChange}
                                    required
                                />
                            </div>
                        </div>
        
                        {/* Descripción */}
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Descripción
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none py-2 px-4 h-32 resize-none transition-colors duration-200 ease-in-out"
                                    placeholder="Agregue una descripción del producto"
                                    onChange={handelChange}
                                    required
                                ></textarea>
                            </div>
                        </div>
        
                        {/* Botón */}
                        <div className="p-2 w-full">
                            <button
                                type="submit"
                                className="w-full bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition duration-200"
                            >
                                Registrar Producto
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    
    );
};

export default CreateProduct;
