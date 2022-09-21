import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbr navbar-brand" href="#">
        Go to the Moon
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/demo">
              <a className="nav-link" href="#">
                Gallery
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Other
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/demo">
              About Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
