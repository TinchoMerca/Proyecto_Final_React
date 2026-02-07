import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-center p-4">

            <h1 className="text-9xl font-extrabold text-orange-600 tracking-widest animate-pulse">
                404
            </h1>

            <div className="bg-orange-500 px-2 text-sm rounded rotate-12 absolute text-white font-bold">
                Error
            </div>

            <h2 className="text-3xl font-bold text-white mt-8 mb-4">
                Página no encontrada
            </h2>

            <p className="text-gray-400 mb-8 max-w-md text-lg">
                Parece que te perdiste en el gimnasio. Esta ruta no existe o el producto fue descontinuado.
            </p>

            <Link
                to="/"
                className="px-8 py-3 border border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-colors uppercase tracking-wider"
            >
                Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFound;