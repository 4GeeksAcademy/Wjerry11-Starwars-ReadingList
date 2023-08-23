import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar  mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          {" "}
          <img
            className="starWarsLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-warning">Favorites </button>
        </Link>
      </div>
    </nav>
  );
};
