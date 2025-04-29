import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
            <div className="justify-center mt-6">
                <p>Don't have an account? <Link className='text-blue-500 underline' to="/signup">Sign Up</Link> now!</p>
            </div>
        </div>
    );
};

export default Login;