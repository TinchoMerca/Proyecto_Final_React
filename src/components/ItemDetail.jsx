import ItemCount from './ItemCount';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        console.log('Cantidad agregada: ', quantity);
        alert(`¡Agregaste ${quantity} unidades al carrito!`);
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">

            {/* Columna Izquierda: Imagen */}
            <div className="md:w-1/2 p-6 flex justify-center items-center bg-gray-100">
                <img src={img} alt={name} className="max-h-96 object-contain hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Columna Derecha: Información */}
            <div className="md:w-1/2 p-8 flex flex-col justify-between">
                <div>
                    <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {category}
                    </span>

                    <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-2">{name}</h1>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        {description}
                    </p>

                    <p className="text-4xl font-bold text-orange-600 mb-6">
                        ${price}
                    </p>
                </div>

                {/* Sección de compra */}
                <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-500 mb-4 font-semibold">
                        Stock disponible: <span className="text-gray-800">{stock}</span>
                    </p>

                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;