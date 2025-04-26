import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <ul className="bg-gray-200 p-5 text-center">
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#176AE5] text-white p-2 rounded-lg"
                            : "p-2 mr-5"
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-[#176AE5] text-white p-2 rounded-lg"
                            : "p-2 ml-5"
                    }
                    to="/login"
                >
                    Login
                </NavLink>
            </ul>
        </nav>
    );
};

export default Header;