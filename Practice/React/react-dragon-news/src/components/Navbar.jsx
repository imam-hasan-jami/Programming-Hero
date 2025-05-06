import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {
  const { user, logOut} = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout successful");
      })
      .catch((error) => {
        console.log(error);
      });
  }

    return (
      <div className="flex justify-between items-center">
        <div className="font-semibold text-green-600">{user && user.email}</div>
        <div className="flex gap-5 text-accent">
          <NavLink to="/" className="px-4 py-2 rounded-md">
            Home
          </NavLink>
          <NavLink to="/about" className="px-4 py-2 rounded-md">
            About
          </NavLink>
          <NavLink to="/career" className="px-4 py-2 rounded-md">
            Career
          </NavLink>
        </div>
        <div className="flex gap-5">
          <img src={userIcon} alt="" />
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary px-10">Logout</button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-10">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;