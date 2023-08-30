import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar  ml-0">
      <Link to="/">
        <span className="navbar-brand px-0 ">
          {" "}
          <img
            className="starWarsLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
          />
        </span>
      </Link>
      <div className="px-5">
        <div class="dropdown">
          <button
            class="btn btn-warning dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            favorites
          </button>
          <ul class="dropdown-menu ">
            {store.favorites.map((item, index) => {
              return (
                <li>
                  <span>{item}</span>
                  <button onClick={() => actions.removeFavorite(index)}>
                    X
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
