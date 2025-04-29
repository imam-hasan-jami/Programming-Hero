import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../src/firebase.init";

const Signup = () => {
    const { createUser } = use(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result);
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        createUser(email, password)
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold mb-5">Sign Up Now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
                <div className="card-body">
                    <form onSubmit={handleSignup} className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="Name"
                            name='name'
                        />
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
                        {/* <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div> */}
                        <button className="btn btn-neutral mt-4">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="justify-center mt-6">
                <p>Already have an account? <Link className='text-blue-500 underline' to="/login">Login</Link> now!</p>
            </div>
        </div>
    );
};

export default Signup;