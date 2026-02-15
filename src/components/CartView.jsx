import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
    const { cart, removeItem, clear, cartTotal } = useContext(CartContext);

    return (
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">Tu Carrito</h2>

            <div className="flex flex-col gap-4 mb-6">
                {cart.map(prod => (
                    <div key={prod.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-4">
                            <img src={prod.img} alt={prod.name} className="w-20 h-20 object-contain" />
                            <div>
                                <h3 className="font-bold text-lg text-gray-800">{prod.name}</h3>
                                <p className="text-gray-500">Cantidad: {prod.quantity}</p>
                                <p className="text-orange-600 font-bold">Precio unitario: ${prod.price}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <p className="font-bold text-xl text-gray-900">Subtotal: ${prod.price * prod.quantity}</p>
                            <button onClick={() => removeItem(prod.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors font-bold">
                                X
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-8 bg-gray-100 p-4 rounded-lg">
                <button
                    onClick={clear}
                    className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg uppercase tracking-wider hover:bg-red-700 transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    Vaciar carrito
                </button>
                <div className="text-right">
                    <p className="text-gray-600 mb-1">Total a pagar:</p>
                    <p className="text-4xl font-extrabold text-orange-600">${cartTotal()}</p>
                </div>
            </div>

            <div className="mt-6 flex justify-end">
                {/* Por ahora no hace nada, en la unidad final lo conectaremos a Firebase para el Checkout */}
                <button className="bg-green-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-green-700 transition-colors shadow-lg">
                    Finalizar Compra
                </button>
            </div>
        </div>
    );
};

export default CartView;