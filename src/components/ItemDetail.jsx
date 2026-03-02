import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = { id, name, price, img }
        addItem(item, quantity)
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">

            {/* Columna Izquierda: Imagen */}
            <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-100">
                <img src={img} alt={name} className="max-h-96 object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Columna Derecha: Información */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                    <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {category}
                    </span>

                    <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-2">{name}</h1>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {description}
                    </p>

                    <p className="text-4xl font-bold text-orange-600 mb-6">
                        ${price}
                    </p>
                </div>

                {/* Sección de compra */}
                <div className="border-t border-gray-200 pt-6">
                    {
                        quantityAdded > 0
                            ? (
                                <Link to='/cart' className="w-full block text-center bg-green-600 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
                                    Terminar mi compra
                                </Link>)
                            : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail