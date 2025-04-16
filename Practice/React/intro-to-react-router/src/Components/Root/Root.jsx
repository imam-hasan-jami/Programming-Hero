import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router';
import SideBar from '../SideBar/SideBar';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header />
            <div className='flex items-center gap-10'>
                <SideBar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;