import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <NavLink className="navbar-brand" to="/">
        Rahmat
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavbarToggle}
        aria-label="Toggle navigation"
      >
        <span className="fa fa-bars"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/"
              onClick={handleNavbarToggle}
            >
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/resume"
              onClick={handleNavbarToggle}
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/portfolio"
              onClick={handleNavbarToggle}
            >
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/blog"
              onClick={handleNavbarToggle}
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/contact"
              onClick={handleNavbarToggle}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
