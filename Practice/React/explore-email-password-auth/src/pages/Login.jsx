import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../firebase.init';
import { Link } from 'react-router';

const Login = () => {
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const emailRef = useRef();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        setSuccess(false);
        setErrorMsg("");

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                // check if email is verified
                if (!result.user.emailVerified) {
                    alert("Please verify your email before logging in.");
                } else {
                    setSuccess(true);
                }
            })
            .catch(error => {
                console.log(error);
                setErrorMsg(error.message);
            })
    }

    const handleForgotPassword = () => {
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        setErrorMsg("");

        // send password reset email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email sent. Please check your inbox.");
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg(error.message);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            ref={emailRef}
                            className="input"
                            placeholder="Email"
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input"
                            placeholder="Password"
                        />
                        <div onClick={handleForgotPassword}>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-primary mt-4">Login</button>
                    </form>
                    <p>Don't have an account? <Link className='text-blue-500 underline mt-5' to="/signup">Sign Up</Link> now!</p>
                    {
                        success && (
                            <div className="alert alert-success shadow-lg mt-4">
                                <div>
                                    <span>Login successful!</span>
                                </div>
                            </div>
                        )
                    }
                    {
                        errorMsg && (
                            <div className="alert alert-error shadow-lg mt-4">
                                <div>
                                    <span>{errorMsg}</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;