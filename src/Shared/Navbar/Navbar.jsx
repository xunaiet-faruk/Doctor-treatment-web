import { useState } from 'react';
import navicon from '../../../public/Group 2 (1).png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="bg-black opacity-40 p-4">
                <div className="max-w-screen-lg mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <img src={navicon} alt="Logo" />

                    {/* Hamburger Menu (Mobile) */}
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    {/* Nav Links (Desktop) */}
                    <div className="hidden lg:flex space-x-4 text-xl gap-14">
                        <NavLink
                            to="/messages"
                            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
                        >
                            Appoinment
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'text-red-500' : 'text-white')}
                        >
                            Login
                        </NavLink>
                    </div>
                </div>

                {/* Mobile Menu (Collapsible) */}
                <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
                    <NavLink to="/messages" className="block text-white py-2 hover:bg-blue-500">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="block text-white py-2 hover:bg-blue-500">
                        About
                    </NavLink>
                    <NavLink to="/services" className="block text-white py-2 hover:bg-blue-500">
                        Appoinment
                    </NavLink>
                    <NavLink to="/contact" className="block text-white py-2 hover:bg-blue-500">
                        Login
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;