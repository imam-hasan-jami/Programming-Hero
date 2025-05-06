import React, { use } from 'react';
import { NavLink } from 'react-router';
import userIcon from "../assets/user.png";
import { AuthContext } from '../provider/AuthContext';

const Navbar = () => {
  const { user} = use(AuthContext);
    return (
      <div className="flex justify-between items-center">
        <div className='font-semibold text-green-600'>{user && user.email}</div>
        <div className="flex gap-5 text-accent">
          <NavLink to="/" className="px-4 py-2 rounded-md">Home</NavLink>
          <NavLink to="/about" className="px-4 py-2 rounded-md">About</NavLink>
          <NavLink to="/career" className="px-4 py-2 rounded-md">Career</NavLink>
        </div>
        <div className="flex gap-5">
          <img src={userIcon} alt="" />
          <button className="btn btn-primary px-10">Login</button>
        </div>
      </div>
    );
};

export default Navbar;