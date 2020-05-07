import React from "react";
import logo from "./girlscript.png";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <img id="logo" src={logo} alt="logo" />
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/team">
          <li>Team</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
