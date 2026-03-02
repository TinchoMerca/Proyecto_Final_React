import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

    const totalQuantity = cartQuantity()

    return (
        <Link to='/cart' className="flex items-center text-white hover:text-orange-500 transition-colors relative">

            <span style={{ fontSize: '24px', marginRight: '5px' }}>🛒</span>

            {totalQuantity > 0 && (<span style={{
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 8px',
                fontSize: '12px',
                fontWeight: 'bold'
            }}>
                {totalQuantity}
            </span>)}

        </Link>
    )
}

export default CartWidget
