import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const { logInUser, googleSignIn } = use(AuthContext);
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

    const handleSignInWithGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(location?.state || "/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center mt-20">
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
                            name="email"
                        />
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password"
                            name="password"
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                </div>
            </div>
            <button onClick={handleSignInWithGoogle} className="btn bg-white text-black border-[#e5e5e5] mt-5">
                <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                        ></path>
                        <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                        ></path>
                        <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                        ></path>
                        <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                        ></path>
                    </g>
                </svg>
                Login with Google
            </button>
            <div className="justify-center mt-6">
                <p>
                    Don't have an account?{" "}
                    <Link className="text-blue-500 underline" to="/signup">
                        Sign Up
                    </Link>{" "}
                    now!
                </p>
            </div>
        </div>
    );
};

export default Login;