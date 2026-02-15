import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <h2 className="text-3xl font-bold text-white mb-4">Tu carrito está vacío 😔</h2>
            <p className="text-gray-400 mb-8">¡Parece que todavía no has elegido tus suplementos!</p>
            <Link to='/' className="bg-orange-600 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-orange-700 transition-colors">
                Ir a comprar
            </Link>
        </div>
    )
}

export default EmptyCart
