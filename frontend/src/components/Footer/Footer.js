import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <aside>
      <div className="footer-div">
        <NavLink to="/about">
          <p>Contact</p>
        </NavLink>
        <NavLink to="/about">
          <p>API</p>
        </NavLink>

        <NavLink to="/about">
          {" "}
          <p>About</p>
        </NavLink>

        <NavLink to="/about">
          {" "}
          <p>Cookies</p>
        </NavLink>
        <NavLink to="/about">
          <p>&copy; 2022 Antonia Pettersson</p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Footer;
