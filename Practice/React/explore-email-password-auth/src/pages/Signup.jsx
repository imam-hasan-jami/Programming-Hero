import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase.init';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router';

const Signup = () => {
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(email, password, terms);

        setSuccess(false);
        setErrorMsg("");

        // validate and password
        // const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        // if (!passwordRegExp.test(password)) {
        //     setErrorMsg("Password must be more than 8 characters, including number, lowercase letter, uppercase letter");
        //     return;
        // }

        // check if terms and conditions are accepted
        if (!terms) {
            setErrorMsg("You must accept the terms and conditions");
            return;
        }

        // create user with email and password
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
                // setSuccess(true);

                // send email verification
                // sendEmailVerification(result.user)
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        setSuccess(true);
                        alert("Verification email sent. Please check your inbox.");
                    })

                // update user profile
                const profile = {
                    displayName: name,
                    photoURL: photoURL,
                }

                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log("User profile updated");
                    })
                    .catch((error) => {
                        console.log(error);
                    })
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

            <form
                onSubmit={handleSignup}
                className="flex flex-col items-center justify-center gap-4 mt-10 w-80 mx-auto"
            >
                <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                />
                <input
                    type="text"
                    name="photoURL"
                    className="input"
                    placeholder="Photo URL"
                />
                {/* email field */}
                <div className="w-full">
                    <div>
                        <label className="input validator join-item">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Valid Email"
                                required
                            />
                        </label>
                        <div className="validator-hint hidden">
                            Enter valid email address
                        </div>
                    </div>
                </div>

                {/* password field */}
                <div className="w-full">
                    <label className="input validator">
                        <div className="">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                required
                                placeholder="Password"
                                minLength="8"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                            />
                            <button
                                onClick={() => setShowPassword((prev) => !prev)}
                                type="button"
                                className="btn btn-ghost"
                            >
                                {showPassword ? (
                                    <AiFillEyeInvisible />
                                ) : (
                                    <AiFillEye />
                                )}
                            </button>
                        </div>
                    </label>
                    <p className="validator-hint hidden">
                        Must be more than 8 characters, including
                        <br />
                        At least one number <br />
                        At least one lowercase letter <br />
                        At least one uppercase letter
                    </p>
                </div>

                <label className="label">
                    <input type="checkbox" name="terms" className="checkbox" />
                    Accept Terms and Conditions
                </label>

                {/* submit button */}
                <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="Sign Up"
                />
            </form>
            <p className="text-center mt-5">
                Already have an account? Please
                <Link className="text-blue-500 underline" to="/login">
                    login.
                </Link>
            </p>
            {success && (
                <p className="alert alert-success font-semibold w-80 mx-auto mt-5">
                    User has created successfully.
                </p>
            )}
            {errorMsg && (
                <div className="alert alert-error font-semibold w-80 mx-auto shadow-lg mt-4">
                    <div>
                        <span>{errorMsg}</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;