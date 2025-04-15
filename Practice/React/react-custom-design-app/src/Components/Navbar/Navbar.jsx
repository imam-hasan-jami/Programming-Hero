import React, { useState } from 'react';
import Link from './Link';
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navigationData = [
    {
        name: "Home",
        path: "/home",
        id: 1
    },
    {
        name: "About Us",
        path: "/about-us",
        id: 2
    },
    {
        name: "Services",
        path: "/services",
        id: 3
    },
    {
        name: "Contact",
        path: "/contact",
        id: 4
    },
    {
        name: "Blog",
        path: "/blog",
        id: 5
    }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = navigationData.map(route => <Link key={route.id} route={route} />);

    return (
        <nav className='flex justify-between mx-10 mt-4 mb-4 items-center'>

            <span className='flex items-center gap-5' onClick={() => setOpen(!open)}>
                
                {
                    open ? <RxCross2 className='md:hidden' size={25} /> : <HiOutlineMenuAlt1 className='md:hidden' size={25} />
                }

                {/* showing nav urls for mobile devices */}
                <ul className={`md:hidden absolute duration-1000 bg-gray-300 ${open ? 'top-15' : '-top-60'}`}>
                    {
                        links
                    }
                </ul>

                <h3 className='font-bold text-2xl'>My Website</h3>
            </span>

            {/* fixed url 👇 */}
            {/* <ul className='flex gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul> */}
            

            {/* dynamic url fetched from navigationData 👇 */}
            {/* <ul className='flex gap-10'>
                {
                    navigationData.map(route => <li><a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* dynamic url calling from different component */}
            <ul className='md:flex hidden gap-10'>
                {
                    links
                }
            </ul>

            <button className='btn'>Sign Up</button>
        </nav>
    );
};

export default Navbar;