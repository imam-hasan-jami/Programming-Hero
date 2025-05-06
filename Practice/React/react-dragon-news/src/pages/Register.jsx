import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const photo = e.target.photo.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      console.log(name, photo, email, password);
      createUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            updateUser({displayName: name, photoURL: photo})
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photo });
              navigate("/");
            })
            .catch(error => {
              console.log(error);
              setUser(user);
            })
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name  */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />

            {/* {nameError && <p className="text-xs text-error">{nameError}</p>} */}

            {/* Photo URl  */}
            <label className="label">Photo URl </label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URl"
              required
            />

            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />

            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-center pt-5">
              Allready Have An Account ?{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
