import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <h2>Mental Health Tracker</h2>
      <div>
        <Link to="/emotions" className="nav__link nav__emotions-link">
          Emotions
        </Link>
        <Link to="/add" className="nav__link nav__register-emotions-link">
          Register your mood
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
