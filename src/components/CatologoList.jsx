import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const CatalogoList = (props) => {
    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {props.dataProducts.length > 0
                    ? props.dataProducts.map((item, key) => {
                        return <div className="p-4 md:w-1/3" key={key}>
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.id}, {item.precio}</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.nombre}</h1>
                                    <p className="leading-relaxed mb-3">{item.descripcion}</p>
                                    <div className="flex items-center flex-wrap ">
                                        <button onClick={() => props.openModalEdit(item.id)} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                                            Editar producto
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                        <button onClick={() => { props.deleteProduct(item.id) }} className="text-gray-400 inline-flex items-center leading-none text-sm">
                                            Eliminar
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                    : <div className='w-full text-center border bg-black text-white'>No hay productos registrados.</div>
                }
            </div>
        </div>
    )
}

export default CatalogoList;