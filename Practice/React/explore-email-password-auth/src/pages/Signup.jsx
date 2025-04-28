import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';

const Signup = () => {
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        setSuccess(false);
        setErrorMsg("");

        // validate and password
        // const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        // if (!passwordRegExp.test(password)) {
        //     setErrorMsg("Password must be more than 8 characters, including number, lowercase letter, uppercase letter");
        //     return;
        // }

        // create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                setSuccess(true);
            })
            .catch((error) => {
                console.log(error);
                setErrorMsg(error.message);
            });
    }

    return (
        <div>
            <h1 className="text-center text-5xl mt-20 font-extrabold">
                Sign Up
            </h1>

            <form onSubmit={handleSignup} className="flex flex-col items-center justify-center gap-4 mt-10 w-80 mx-auto">
                {/* email field */}
                <div className="w-full">
                    <div>
                        <label className="input validator join-item">
                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <rect
                                        width="20"
                                        height="16"
                                        x="2"
                                        y="4"
                                        rx="2"
                                    ></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </g>
                            </svg>
                            <input
                                type="email"
                                name="email"
                                placeholder="mail@site.com"
                                required
                            />
                        </label>
                        <div className="validator-hint hidden">
                            Enter valid email address
                        </div>
                    </div>
                </div>

                {/* password field */}
                <div className='w-full'>
                    <label className="input validator">
                        <svg
                            className="h-[1em] opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                                <circle
                                    cx="16.5"
                                    cy="7.5"
                                    r=".5"
                                    fill="currentColor"
                                ></circle>
                            </g>
                        </svg>
                        <input
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                    </label>
                    <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br />
                        At least one number <br />
                        At least one lowercase letter <br />
                        At least one uppercase letter
                    </p>
                </div>

                {/* submit button */}
                <input className='btn btn-primary w-full' type="submit" value="Submit" />
            </form>
            {
                success && <p className='text-green-500 text-center font-semibold mt-5'>User has created successfully.</p>
            }
            {
                errorMsg && <p className='text-red-500 text-center font-semibold mt-5'>{errorMsg}</p>
            }
        </div>
    );
};

export default Signup;