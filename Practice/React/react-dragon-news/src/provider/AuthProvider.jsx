import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const authData = {
        user,
        setUser,
        createUser,
    };

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;