import React from "react";
import PropTypes from "prop-types";

const VehicleCard = (props) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 className="card-title">{props.name} </h5>
          <p className="card-text">model: {props.model}</p>
          <p className="card-text">manufacturer: {props.manufacturer}</p>
          <p className="card-text">cargo capacity: {props.cargo_capacity}</p>
          <a href="#" class="btn btn-primary">
            learn more
          </a>
        </div>
      </div>
    </>
  );
};
VehicleCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  manufacturer: PropTypes.string,
  cargo_capacity: PropTypes.string,
};
export default VehicleCard;
