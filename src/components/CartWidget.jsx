import React from 'react'

const CartWidget = () => {
    return (
        <div className="flex items-center gap-1 cursor-pointer">

            <span className="text-2xl">🛒</span>
            <span className="bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                5
            </span>

        </div>
    )
}

export default CartWidget
