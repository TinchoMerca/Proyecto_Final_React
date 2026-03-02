import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartView from './CartView'
import EmptyCart from './EmptyCart'

const CartContainer = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-20 px-4">
            { cartQuantity() === 0 ? <EmptyCart /> : <CartView /> }
        </div>
    )
}

export default CartContainer