import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
const ModalEditProduct = (props) => {

    const dataInit = {
        nombre: "",
        descripcion: "",
        precio: 0
    }

    const [data, setdata] = useState(dataInit);

    // const apiUrl = 'http://localhost/products/api.php';
    const apiUrl = process.env.REACT_APP_API_URL;
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const getProduct = async () =>{
        const response = await axios.get(`${apiUrl}/productos/${props.id}`, config)
        //console.log(response);
        setdata({
            nombre: response.data.nombre,
            descripcion: response.data.descripcion,
            precio: response.data.precio
        })
    }


    const handelChange = (e) =>{
        //Actualizando el valor segun propiedad y valor que proviene del input
        setdata({...data, [e.target.name]: e.target.value});
    }

    const handelSubmit = async (e) =>{
        e.preventDefault();
        console.log(data);
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Este producto se actualizara si confirmas esta accion",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, Actualizar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.put(`${apiUrl}/productos/${props.id}`, data, config)
                .then(response =>{
                    Swal.fire({
                        title: "Producto actualizado exitosamente!",
                        icon: "success",
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            //console.log(response);
                        }
                    });
                })
                .catch(err =>{
                    console.log(err);
                })
                props.setShowModal(false);
                props.getAllProducts();
            }
        });
    }

    useEffect(()=>{
        getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-1/2 my-6 mx-auto">
                    {/* Contenido */}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/* Cabecera */}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                            <h3 className="text-2xl font-bold text-gray-700">
                                Editar Producto
                            </h3>
                            <button
                                className="text-gray-400 hover:text-gray-600 text-2xl font-semibold"
                                onClick={() => props.setShowModal(false)}
                            >
                                ×
                            </button>
                        </div>
                        {/* Cuerpo */}
                        <div className="p-6">
                            <form onSubmit={handelSubmit} className="space-y-4">
                                <div className="flex space-x-4">
                                    <div className="w-1/2">
                                        <label htmlFor="nombre" className="block text-sm text-gray-600">Nombre</label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={data.nombre}
                                            onChange={handelChange}
                                            placeholder="Ingresar el nombre del producto"
                                            required
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm text-gray-700 py-2 px-3 outline-none transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                    <div className="w-1/2">
                                        <label htmlFor="precio" className="block text-sm text-gray-600">Precio</label>
                                        <input
                                            type="number"
                                            id="precio"
                                            name="precio"
                                            value={data.precio}
                                            onChange={handelChange}
                                            placeholder="00.00"
                                            required
                                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-sm text-gray-700 py-2 px-3 outline-none transition-colors duration-200 ease-in-out"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm text-gray-600">Descripción</label>
                                    <textarea
                                        id="descripcion"
                                        name="descripcion"
                                        value={data.descripcion}
                                        onChange={handelChange}
                                        required
                                        placeholder="Escribe una descripción detallada"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-28 text-sm text-gray-700 py-2 px-3 resize-none outline-none transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-indigo-500 text-white py-2 px-6 rounded hover:bg-indigo-600 focus:outline-none text-sm"
                                    >
                                        Actualizar Producto
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Fondo negro */}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        
    )
}

export default ModalEditProduct;