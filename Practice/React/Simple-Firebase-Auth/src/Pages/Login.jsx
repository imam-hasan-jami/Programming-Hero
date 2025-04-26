import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../Firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        console.log("Google Sign In");
        

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("sign out completed");
                setUser(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <h1 className="text-5xl text-center mt-20">Please Login</h1>
            <div className="flex gap-5 justify-center items-center mt-10">
                {user ? (
                    <button
                        onClick={handleGoogleSignOut}
                        className="bg-blue-500 text-white px-5 py-2 rounded-lg"
                    >
                        Sign Out
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleGoogleSignIn}
                            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
                        >
                            Sign in with Google
                        </button>
                        <button
                            onClick={handleGithubSignIn}
                            className="bg-blue-500 text-white px-5 py-2 rounded-lg"
                        >
                            Sign in with Github
                        </button>
                    </>
                )}
            </div>
            {user && (
                <div className="flex flex-col justify-center items-center gap-5 mt-10">
                    <h3>{user.displayName}</h3>
                    <p>{user.email}</p>
                    <img src={user.photoURL} alt="" />
                </div>
            )}
        </div>
    );
};

export default Login;