import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase.init";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
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
            } else {
                console.log('No user is signed in');
            }
        });

        return () => {
            unsubscribe();
        }
    }
    , [])


    const userInfo = {
        user,
        createUser,
        logInUser,
        signOutUser,
    }

    return (
        <AuthContext value={userInfo}>
            { children }
        </AuthContext>
    );
};

export default AuthProvider;