import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <aside>
      <div className="footer-div">
        <NavLink to="/about">
          <p
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Contact
          </p>
        </NavLink>
        <NavLink to="/about">
          <p
            style={{
              writingMode: "vertical-rl",
            }}
          >
            API
          </p>
        </NavLink>

        <NavLink to="/about">
          {" "}
          <p
            style={{
              writingMode: "vertical-rl",
            }}
          >
            About
          </p>
        </NavLink>

        <NavLink to="/about">
          {" "}
          <p
            style={{
              writingMode: "vertical-rl",
            }}
          >
            Cookies
          </p>
        </NavLink>
        <NavLink to="/about">
          <p
            style={{
              writingMode: "vertical-rl",
            }}
          >
            &copy; 2022 Antonia Pettersson
          </p>
        </NavLink>
      </div>
    </aside>
  );
};

export default Footer;
