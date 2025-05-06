import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "Guest",
        email: "Guest@gmail.com",
    })

    const authData = {
        user,
        setUser,
    };

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;