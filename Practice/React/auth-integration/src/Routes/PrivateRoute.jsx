import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext);
    
    if (!user) {
        return <Navigate to="/login" />
    }

    return children;
};

export default PrivateRoute;