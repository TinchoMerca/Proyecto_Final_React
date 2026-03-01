import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loader from './Loader';

import { doc, getDoc } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.data()
                    const productAdapted = { id: snapshot.id, ...data }

                    setProduct(productAdapted)
                } else {
                    navigate('/404')
                }
            })
            .catch((error) => {
                console.error('Error trayendo el producto: ', error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [itemId]);

    return (

        <div className="min-h-screen bg-gray-900 flex justify-center items-start py-20 px-4">
            {loading
                ? <Loader loading={loading} />
                : (<ItemDetail {...product} />)
            }
        </div>
    );

};

export default ItemDetailContainer;