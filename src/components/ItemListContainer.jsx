import React from 'react'

const ItemListContainer = ({ mensaje }) => {
    return (

        <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-xl text-center max-w-md">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                    ¡Hola! 👋
                </h2>
                <p className="text-lg text-gray-600">
                    {mensaje}
                </p>
            </div>
        </div>

    )
}

export default ItemListContainer
