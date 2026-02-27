import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const Checkout = () => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')

    const [ordenId, setOrdenId] = useState('')

    const { cart, cartTotal, clear } = useContext(CartContext)

    const crearOrden = (e) => {
        // Evitamos que el formulario recargue la página 
        e.preventDefault()

        const orden = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email
            },

            items: cart.map(prod => ({
                id: prod.id,
                title: prod.name,
                price: prod.price,
                quantity: prod.quantity
            })),

            total: cartTotal(),

            date: new Date()
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)
            .then((docRef) => {
                setOrdenId(docRef.id)
                clear()
            })
            .catch((error) => {
                console.error("Error al crear la orden", error)
            })
    }


    if (ordenId) {
        return (
            <div className="container mx-auto p-8 max-w-md text-center py-20 shadow-lg rounded-xl bg-white mt-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">¡Gracias por tu compra!</h2>
                <p className="text-gray-600 mb-2">Tu orden ha sido generada con éxito.</p>
                <p className="text-gray-600 mb-8">El código de seguimiento es: <br />
                    <span className="font-mono font-bold text-orange-600 text-lg bg-orange-100 px-3 py-1 rounded mt-2 inline-block">
                        {ordenId}
                    </span>
                </p>

                <Link to='/' className="bg-gray-900 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-wider hover:bg-gray-800 transition-colors shadow-md inline-block">
                    Volver a la tienda
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto p-8 max-w-md">
            <h2 className="text-2xl font-bold mb-6">Finalizar Compra</h2>
            {/* onSubmit atrapa el evento cuando el usuario aprieta enter o hace clic en el botón */}
            <form onSubmit={crearOrden} className="flex flex-col gap-4">
                <input
                    type="text" placeholder="Nombre completo" required
                    value={nombre} onChange={(e) => setNombre(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="tel" placeholder="Teléfono" required
                    value={telefono} onChange={(e) => setTelefono(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="email" placeholder="Email" required
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded"
                />

                <button type="submit" className="bg-green-600 text-white font-bold py-2 rounded mt-4">
                    Generar Orden
                </button>
            </form>
        </div>
    );
};

export default Checkout;