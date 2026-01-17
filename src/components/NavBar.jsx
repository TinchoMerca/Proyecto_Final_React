import React from 'react'
import CartWidget from './CartWidget'

const  NavBar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">

            {/* {Nombre de la tienda} */}
            <h2 className="text-xl font-bold">Titan Store - Ecommerce</h2>

            {/* {Categorias} */}
            <div className="flex gap-4">

                <button className="hover:text-blue-400 cursor-pointer">LIQUIDACIÓN</button>
                <button className="hover:text-blue-400 cursor-pointer">SUPLEMENTOS</button>
                <button className="hover:text-blue-400 cursor-pointer">COMBOS</button>
                <button className="hover:text-blue-400 cursor-pointer">MAYORISTAS</button>

            </div>

            {/* {Componente hijo} */}
            <CartWidget/>

        </nav>
    )
}

export default NavBar
