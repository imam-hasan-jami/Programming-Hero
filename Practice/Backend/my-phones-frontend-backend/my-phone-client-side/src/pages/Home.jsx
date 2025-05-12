import React from 'react';
import { Link, Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/phones">Phones</Link>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Home;