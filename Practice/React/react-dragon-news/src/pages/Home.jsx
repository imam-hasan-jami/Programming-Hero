import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            {/* Home Page */}
            <Navigate to="/category/1" />
        </div>
    );
};

export default Home;