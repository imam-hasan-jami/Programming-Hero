import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='navbar flex justify-center items-center gap-4 bg-base-300'>
            <Link to='/'>Home</Link>
            <Link to='/add-coffee'>Add Coffee</Link>
        </div>
    );
};

export default Navbar;