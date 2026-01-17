import React from 'react'
import CartWidget from './CartWidget'

const  NavBar = () => {
    return (
        <nav>

            {/* {Nombre de la tienda} */}
            <h2>Titan Store - Ecommerce</h2>

            {/* {Categorias} */}
            <div>

                <button>LIQUIDACIÓN</button>
                <button>SUPLEMENTOS</button>
                <button>COMBOS</button>
                <button>MAYORISTAS</button>

            </div>

            {/* {Componente hijo} */}
            <CartWidget/>

        </nav>
    )
}

export default NavBar
