import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isLoggedIn, user, clearAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!localStorage.getItem("token")) clearAuth(); // eslint-disable-next-line
  }, [isLoggedIn]);

  const logoutHandler = () => clearAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4">
      <div className="container">
      <Link className="nav-link" to={"/"}> <h3>Online shop</h3></Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            {isLoggedIn ? (
            <>
            <li className="nav-item">
                <Link key={user._id} to={`/profile/${user._id}`}>
                 Profile
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/createproduct"}>
                Create
              </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"} onClick={logoutHandler}>
                  Logout
                </Link>
            </li>
            </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"/login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/signup"}>
                    Sign up
                  </Link>
                </li>
              </>
            )}
            <Link className="nav-link" to={"/contact"}>
                Contact
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
