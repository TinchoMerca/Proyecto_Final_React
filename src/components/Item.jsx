import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price }) => {
    return (

        <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center p-4 border border-gray-100">

            <div className="w-full h-48 overflow-hidden mb-4">
                <img src={img} alt={name} className="w-full h-full object-contain" />
            </div>

            <h4 className="text-lg font-bold text-gray-800 text-center mb-2">{name}</h4>

            <p className="text-xl font-bold text-orange-600 mb-4">${price}</p>

            <Link
                to={`/item/${id}`}
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-500 transition-colors w-full text-center"
            >
                Ver detalle
            </Link>
        </article>

    );
};
export default Item;