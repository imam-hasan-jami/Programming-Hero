import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import axios from 'axios';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
      return signOut(auth);
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);

        if (currentUser?.email) {
          const userData = { email: currentUser.email };
          axios
            .post("http://localhost:3000/jwt", userData, {
                withCredentials: true
            })
            .then((res) => {
              console.log("token after login jwt", res.data);
            //   const token = res.data.token;
            //   localStorage.setItem("access-token", token);
            })
            .catch((error) => {
              console.log(error);
            });
        }

        // console.log("User logged in:", currentUser);
      });
      return () => {
        unsubscribe();
      };
    }, []);

    const userInfo = {
        user,
        createUser,
        loginUser,
        logOut,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;