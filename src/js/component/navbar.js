import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
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
        <div class="dropdown">
          <button
            class="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            favorites
          </button>
          <ul class="dropdown-menu">
            {store.favorites.map((item, index) => {
              return (
                <li>
                  <span>{item}</span>
                  <button onClick={() => actions.removeFavorite(index)}>
                    del
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
