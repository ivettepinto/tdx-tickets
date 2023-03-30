import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>TELUS International - TDX</h1>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/create">New HelpForm</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
