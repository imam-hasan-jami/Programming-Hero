import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('User signed out');
                navigate("/login");
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    }

    const links = (
        <>
            <li>
                <NavLink className={({isActive}) => isActive ? "bg-blue-500 text-black" : ""} to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "bg-blue-500 text-black" : ""} to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "bg-blue-500 text-black" : ""} to="/signup">Signup</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "bg-blue-500 text-black" : ""} to="/dashboard">Dashboard</NavLink>
            </li>
            {
                user && <>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "bg-blue-500 text-black" : ""} to="/orders">Orders</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => isActive ? "bg-blue-500 text-black" : ""} to="/profile">Profile</NavLink>
                    </li>
                </>
            }
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className='flex items-center gap-4'>
                        <p>{user.email}</p>
                        <a onClick={handleSignOut} className="btn">
                            Sign Out
                        </a>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;