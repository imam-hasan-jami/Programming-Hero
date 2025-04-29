import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return (
            <div className='flex justify-center items-center mt-30'>
                <span className="loading loading-bars loading-xl"></span>;
            </div>
        );
    }
    
    if (!user) {
        return <Navigate state={location?.pathname} to="/login" />;
    }

    return children;
};

export default PrivateRoute;