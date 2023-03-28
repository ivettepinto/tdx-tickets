import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h1>TELUS International - TDX</h1>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">New HelpForm</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
