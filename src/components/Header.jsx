import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  const { theme } = useContext(ThemeContext);
  const constrat = theme === "light" ? "dark" : "light";
  return (
    //
    <nav
      className={`navbar navbar-expand-lg navbar-${theme} bg-${theme} text-${constrat}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Elmas
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/About" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
