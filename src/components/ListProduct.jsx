import DataTable from "react-data-table-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ListProduct = (props) => {

    const columns = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Producto',
            selector: row => row.nombre,
        },
        {
            name: 'Precio',
            selector: row => row.precio,
        },
        {
            name: 'Descripción',
            selector: row => row.descripcion,
        },
        {
            name: 'Editar',
            selector: row => <div onClick={() => { props.openModalEdit(row.id) }} className='cursor-pointer hover:text-yellow-500 bg-blue-800 text-white m-2 p-2'>Editar</div>,
        },
        {
            name: 'Eliminar',
            selector: row => <div onClick={() => { props.deleteProduct(row.id) }} className='cursor-pointer hover:text-red-500 bg-red-800 text-white m-2 p-2'><FontAwesomeIcon icon={faTrash} /></div>,
        },
    ];


    return (
        <div className='w-full p-4 m-4 bg-white rounded-lg shadow-md lg:p-6 lg:m-6'>
            <div className="flex justify-center items-center mb-6">
                <h1 className="text-gray-800 text-3xl font-bold">Listado de productos</h1>
            </div>
            <div className="mt-4 lg:mt-6">
                <DataTable
                    columns={columns}
                    data={props.dataProducts}
                    pagination
                />
            </div>
        </div>

    )
}

export default ListProduct;