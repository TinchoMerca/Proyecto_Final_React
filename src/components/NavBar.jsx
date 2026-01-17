import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 bg-slate-900 text-gray-100 shadow-lg sticky top-0 z-50">

            {/* {Nombre de la tienda} */}
            <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                    Titan Store - Ecommerce
                </h2>
            </div>

            {/* {Categorias} */}
            <div className="hidden md:flex gap-8 font-medium">

                <button className="hover:text-cyan-400 transition-colors duration-300">LIQUIDACIÓN</button>
                <button className="hover:text-cyan-400 transition-colors duration-300">SUPLEMENTOS</button>
                <button className="hover:text-cyan-400 transition-colors duration-300">COMBOS</button>
                <button className="hover:text-cyan-400 transition-colors duration-300">MAYORISTAS</button>

            </div>

            {/* {Componente hijo} */}
            <CartWidget />

        </nav>
    )
}

export default NavBar
