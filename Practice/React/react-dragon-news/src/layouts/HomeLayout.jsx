import React from 'react';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header />
                <section></section>
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