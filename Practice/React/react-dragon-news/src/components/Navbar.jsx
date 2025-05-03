import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png";

const Navbar = () => {
    return (
      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex gap-5 text-accent">
          <NavLink to="/" className="px-4 py-2 rounded-md">Home</NavLink>
          <NavLink to="/about" className="px-4 py-2 rounded-md">About</NavLink>
          <NavLink to="/career" className="px-4 py-2 rounded-md">Career</NavLink>
        </div>
        <div className="flex gap-5">
          <img src={user} alt="" />
          <button className="btn btn-primary px-10">Login</button>
        </div>
      </div>
    );
};

export default Navbar;