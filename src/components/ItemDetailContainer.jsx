import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../mock/asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    // Capturamos el ID de la URL (definido en App.jsx como /item/:itemId)
    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        // Llamamos a la función que busca POR ID
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]);

    return (

        <div className="min-h-screen bg-gray-900 flex justify-center items-start py-20 px-4">
            {loading ? (
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mt-20"></div>
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );

};

export default ItemDetailContainer;