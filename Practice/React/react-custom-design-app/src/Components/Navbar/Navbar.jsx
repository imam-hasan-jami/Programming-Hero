import React from 'react';
import Link from './Link';

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
    return (
        <nav>

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
            <ul className='flex gap-10'>
                {
                    navigationData.map(route => <Link key={route.id} route={route} />)
                }
            </ul>
        </nav>
    );
};

export default Navbar;