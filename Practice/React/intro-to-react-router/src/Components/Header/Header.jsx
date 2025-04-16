import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='mb-10'>
            <h3 className='mb-2'>This is header.</h3>

            <nav className="flex gap-4">
                {/* <a href="/">Home</a>
                <a href="/mobiles">Mobiles</a>
                <a href="/laptops">Laptops</a>
                <a href=""></a> */}

                {/* <Link to="/">Home</Link>
                <Link to="/mobiles">Mobiles</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/"></Link> */}

                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobiles">Mobiles</NavLink>
                <NavLink to="/laptops">Laptops</NavLink>
                <NavLink to="/"></NavLink>
            </nav>
        </div>
    );
};

export default Header;