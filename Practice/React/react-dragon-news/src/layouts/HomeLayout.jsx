import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-5'>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto my-5'>
                    <Navbar />
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-5 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <LeftAside />
                </aside>
                <section className='col-span-6'>
                    <Outlet />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;