import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews />
                </section>
                <nav></nav>
            </header>
            <main>
                <aside></aside>
                <section></section>
                <aside></aside>
            </main>
        </div>
    );
};

export default HomeLayout;