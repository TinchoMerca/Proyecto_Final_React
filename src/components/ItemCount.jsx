import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="flex flex-col items-center w-full">
            
            {/* Controles: - 1 + */}
            <div className="flex items-center justify-between bg-gray-100 rounded-lg p-2 w-32 mb-4">
                <button 
                    className="text-gray-600 hover:text-orange-600 font-bold text-xl w-8 h-8 flex items-center justify-center transition-colors disabled:opacity-30"
                    onClick={decrement}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                
                <span className="text-xl font-bold text-gray-900">{quantity}</span>
                
                <button 
                    className="text-gray-600 hover:text-orange-600 font-bold text-xl w-8 h-8 flex items-center justify-center transition-colors disabled:opacity-30"
                    onClick={increment}
                    disabled={quantity >= stock}
                >
                    +
                </button>
            </div>

            <button 
                className="w-full bg-orange-600 text-white font-bold py-3 px-6 rounded-lg uppercase tracking-wider hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
                onClick={() => onAdd(quantity)}
                disabled={!stock}
            >
                {stock ? 'Agregar al Carrito' : 'Sin Stock'}
            </button>
        </div>
    )
}

export default ItemCount