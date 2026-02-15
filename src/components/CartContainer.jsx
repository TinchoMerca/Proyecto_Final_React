import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartView from './CartView';
import EmptyCart from './EmptyCart';

const CartContainer = () => {
    // Le preguntamos a la nube si hay algo en el carrito
    const { cartQuantity } = useContext(CartContext);

    return (
        <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-20 px-4">
            {/* RENDERIZADO CONDICIONAL: Si no hay items muestro EmptyCart, sino CartView */}
            { cartQuantity() === 0 ? <EmptyCart /> : <CartView /> }
        </div>
    );
};

export default CartContainer;