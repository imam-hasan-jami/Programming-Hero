import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import app from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUser = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
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
        loading,
        setLoading,
        updateUser,
    };

    return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;