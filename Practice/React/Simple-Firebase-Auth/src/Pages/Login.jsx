import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../Firebase/firebase.init';

const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log("Google Sign In");

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className='text-5xl text-center mt-20'>Please Login</h1>
            <div className='flex justify-center items-center mt-10'>
                <button onClick={handleGoogleSignIn} className='bg-blue-500 text-white px-5 py-2 rounded-lg'>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;