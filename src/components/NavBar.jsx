import { NavLink, Link } from 'react-router-dom';
import CartWidget from '../components/CartWidget';

const NavBar = () => {
    return (

        <nav className="flex justify-between items-center bg-gray-900 text-white p-6 shadow-lg">

            <Link to='/' className="text-2xl font-bold tracking-wider text-orange-500 hover:text-orange-400 transition-colors">
                MuscleStore 💪
            </Link>

            <div className="flex gap-8 font-medium">
                <NavLink
                    to={'/category/proteinas'}
                    className={({ isActive }) => isActive ? 'text-orange-400 border-b-2 border-orange-400' : 'hover:text-gray-300 transition-colors'}
                >
                    Proteínas
                </NavLink>

                <NavLink
                    to={'/category/creatinas'}
                    className={({ isActive }) => isActive ? 'text-orange-400 border-b-2 border-orange-400' : 'hover:text-gray-300 transition-colors'}
                >
                    Creatinas
                </NavLink>

                <NavLink
                    to={'/category/preentrenos'}
                    className={({ isActive }) => isActive ? 'text-orange-400 border-b-2 border-orange-400' : 'hover:text-gray-300 transition-colors'}
                >
                    Pre-Workouts
                </NavLink>
            </div>

            <CartWidget />
        </nav>
    );
};

export default NavBar;