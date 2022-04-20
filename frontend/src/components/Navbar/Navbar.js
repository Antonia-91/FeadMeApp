import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ logedin, setLogedin }) => {
  const logout = () => {
    localStorage.removeItem("user");
    setLogedin(null);
  };
  return (
    <nav className="navbar-container">
      <NavLink className="nav-links" to="/home">
        <h1 className="nav-logo">FeadMeApp</h1>
      </NavLink>

      <ul className="nav-link-holder">
        {logedin && (
          <li>
            <NavLink className="nav-links" to="/seach">
              Recipes
            </NavLink>
          </li>
        )}

        {logedin && (
          <li>
            <NavLink className="nav-links" to="/favorites">
              {" "}
              Favorites{" "}
            </NavLink>
          </li>
        )}
        {logedin && (
          <li>
            <NavLink className="nav-links" to="/todo">
              {" "}
              Shoppinglist{" "}
            </NavLink>
          </li>
        )}

        {!logedin && (
          <li>
            <NavLink className="nav-links" to="/login">
              Login
            </NavLink>
          </li>
        )}
        {logedin && (
          <NavLink className="nav-links" to="/login">
            <button onClick={logout}>logout</button>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
