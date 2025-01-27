import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalEditProduct from "../components/ModalEditarProduct";
import CatalogoList from "../components/CatologoList";
import Swal from 'sweetalert2';
import ListProduct from "../components/ListProduct";

const Catalog = () => {

    const [dataProducts, setDataProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(0);

    //const apiUrl = 'http://localhost/products/api.php';
    const apiUrl = process.env.REACT_APP_API_URL;
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }



    const getAllProducts = async () => {
        const res = await axios.get(`${apiUrl}/productos`, config);
        console.log(res);

        setDataProducts(res.data);
    }

    

    const openModalEdit = (id) => {
        setId(id);
        setShowModal(true);
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: "¿Esta seguro?",
            text: "Este producto se eliminara de manera permanente",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, borrarlo"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${apiUrl}/productos/${id}`, config)
                    .then(response => {
                        console.log(response);
                        Swal.fire({
                            title: "Eliminado",
                            text: "El producto ha sido eliminado",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error(err);
                    })
                getAllProducts();
            }
        });
    }

    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [activeIndex, setActiveIndex] = useState(1);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <section className="bg-white">
                <div className="p-4">
                    <Link to={'/create-product'}>
                        <button className="flex justify-items-end mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Registrar Producto
                        </button>
                    </Link>
                </div>
                <div className="mx-auto mt-8">
                    {/* Acordeón 1 */}
                    <div className="border rounded-md mb-4">
                        <button
                            className="w-full  px-4 py-2 bg-indigo-500 text-white text-center font-semibold rounded-t-md hover:bg-indigo-600"
                            onClick={() => toggleAccordion(1)}
                        >
                            Catalogo de productos
                        </button>
                        {activeIndex === 1 && (
                            <div className="px-4 py-2 bg-gray-100 text-gray-700">
                                <CatalogoList dataProducts={dataProducts} openModalEdit={openModalEdit} deleteProduct={deleteProduct}/>
                            </div>
                        )}
                    </div>

                    {/* Acordeón 2 */}
                    <div className="border rounded-md">
                        <button
                            className="w-full  px-4 py-2 bg-indigo-500 text-white text-center font-semibold rounded-t-md hover:bg-indigo-600"
                            onClick={() => toggleAccordion(2)}
                        >
                            Listado de Producto
                        </button>
                        {activeIndex === 2 && (
                            <div className="px-4 py-2 bg-gray-100 text-gray-700">
                                <ListProduct dataProducts={dataProducts} openModalEdit={openModalEdit} deleteProduct={deleteProduct}/>
                            </div>
                        )}
                    </div>
                </div>
                

                {showModal && <ModalEditProduct setShowModal={setShowModal} id={id} getAllProducts={getAllProducts} />}
            
            </section>


        </>
    )
}

export default Catalog;