import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ logedin, setLogedin }) => {
  const logout = () => {
    localStorage.removeItem("user");
    setLogedin(null);
  };
  return (
    <nav>
      <h1>FeadMeApp</h1>
      <ul>
        {logedin && <button onClick={logout}>logout</button>}
        {logedin && (
          <li>
            <NavLink to="/seach"> Recepies </NavLink>
          </li>
        )}
        {logedin && (
          <li>
            <NavLink to="/"> Home </NavLink>
          </li>
        )}
        {logedin && (
          <li>
            <NavLink to="/favorites"> Favorites </NavLink>
          </li>
        )}
        {logedin && (
          <li>
            <NavLink to="/todo"> Shoppinglist </NavLink>
          </li>
        )}
        {logedin && (
          <li>
            <NavLink to="/calendar"> Calendar </NavLink>
          </li>
        )}
        {!logedin && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {}
      </ul>
    </nav>
  );
};

export default Navbar;
