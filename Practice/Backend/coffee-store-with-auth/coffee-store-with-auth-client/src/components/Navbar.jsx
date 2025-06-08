import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Logout successfully.`,
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="navbar flex justify-center items-center gap-4 bg-base-300">
      <Link to="/">Home</Link>
      <Link to="/add-coffee">Add Coffee</Link>
      <Link to="/users">Users</Link>
      <Link to="/registration">Registration</Link>
      {/* <Link to='/login'>Login</Link> */}
      {user ? (
        <button
          onClick={handleLogout}
          className="btn bg-red-600 text-white px-5"
        >
          Logout
        </button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
