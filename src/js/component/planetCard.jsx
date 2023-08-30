import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PlanetCard = (props) => {
  let { userId } = useParams();
  const { store, actions } = useContext(Context);
  return (
    <>
      <div class="card" style={{ width: "20rem" }}>
        <img
          src={store.imageThree + props.id + ".jpg"}
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 className="card-title">{props.name} </h5>
          <p className="card-text">population: {props.population}</p>
          <p className="card-text">terrain: {props.terrain}</p>
          <p className="card-text">climate: {props.climate}</p>
          <a
            class="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          />
          <div class="d-flex justify-content-between">
            <Link to={`/description/` + props.id}>
              <button
                type="button"
                onClick={() => {
                  actions.fetchSinglePlanet(props.id);
                }}
                class="btn btn-primary"
              >
                Learn more!
              </button>
            </Link>

            <button
              type="button"
              onClick={() => actions.addFavorite(props.name)}
              class="btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-heart"
                viewBox="0 0 16 16"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
PlanetCard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
};
export default PlanetCard;
