import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase.init";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        setLoading(false);
        setUser(null);
        return signOut(auth);
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('User is signed in:', currentUser);
    //     } else {
    //         console.log('No user is signed in');
    //     }
    // })

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log('User is signed in:', currentUser);
                setUser(currentUser);
                setLoading(false);
            } else {
                console.log('No user is signed in');
                setLoading(false);
            }
        });

        return () => {
            unsubscribe();
        }
    }
    , [])


    const userInfo = {
        user,
        loading,
        createUser,
        logInUser,
        googleSignIn,
        signOutUser,
    }

    return (
        <AuthContext value={userInfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;