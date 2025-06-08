import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Login successful`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Incorrect email or password!`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="flex justify-center min-h-[calc(100vh-330px)] items-center">
      <div
        className={`card w-full max-w-sm shrink-0 shadow-2xl py-5 bg-base-100`}
      >
        <h2 className={`font-semibold text-2xl text-center text-green-800`}>
          Login your account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            {/* email  */}
            <label className={`label}`}>Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              //   onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* passowrd  */}
            <label className={`label`}>Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            {/* <div>
              <Link to={`/auth/forget-password?email=${encodeURIComponent(email)}`} className="link link-hover">Forgot password?</Link>
            </div> */}

            {/* {error && (
              <p className="text-red-500 text-xs font-semibold text-center mt-3">
                {error}
              </p>
            )} */}

            <button type="submit" className="btn bg-green-800 text-white mt-4">
              Login
            </button>

            <p className={`font-semibold text-sm text-center pt-5`}>
              Don’t Have An Account?
              <Link className={`text-green-800`} to="/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
