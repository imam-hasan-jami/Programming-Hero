import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const { logInUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location );

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logInUser(email, password)
            .then(result => {
                console.log(result);
                navigate(location?.state || "/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold mb-5">Login Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email'
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name='password'
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