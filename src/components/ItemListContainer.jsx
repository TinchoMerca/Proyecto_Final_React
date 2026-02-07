import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../mock/asyncMock';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [categoryId]);

    // En src/components/ItemListContainer/ItemListContainer.jsx

    return (
        // bg-gray-900: Fondo oscuro (casi negro)
        <div className="min-h-screen bg-gray-900 py-10 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto">
                {/* Cambiamos el texto a blanco (text-white) para que se lea sobre lo oscuro */}
                <h1 className="text-4xl font-extrabold text-white text-center mb-8 uppercase tracking-wider">
                    {greeting}
                </h1>

                {categoryId && (
                    <div className="flex items-center justify-center mb-8">
                        {/* El badge naranja resalta muchísimo sobre negro */}
                        <span className="bg-orange-500 text-white text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-orange-500/50">
                            {categoryId}
                        </span>
                    </div>
                )}

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                    </div>
                ) : (
                    <ItemList products={products} />
                )}
            </div>
        </div>
    );
};

export default ItemListContainer;