import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import { Outlet, useNavigation } from 'react-router';
import SideBar from '../SideBar/SideBar';
import './Root.css'

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div>
            <Header />
            <div className='flex items-center gap-10'>
                <SideBar />
                {isNavigating && <span>Loading....</span>}
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;