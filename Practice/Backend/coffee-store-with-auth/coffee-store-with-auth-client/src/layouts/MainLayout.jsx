import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div>

            <header>
                <nav>
                    <Navbar />
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
            
        </div>
    );
};

export default MainLayout;