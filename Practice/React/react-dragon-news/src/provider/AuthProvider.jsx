import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);

    const authData = {
        user,
        setUser,
        createUser,
        loginUser,
        logOut,
    };

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;