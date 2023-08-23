import React from "react";
import PropTypes from "prop-types";

const PlanetCard = (props) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 className="card-title">{props.name} </h5>
          <p className="card-text">population: {props.population}</p>
          <p className="card-text">terrain: {props.terrain}</p>
          <p className="card-text">climate: {props.climate}</p>
          <a href="#" class="btn btn-primary">
            learn more
          </a>
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
