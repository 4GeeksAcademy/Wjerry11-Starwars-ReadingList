import PropTypes from "prop-types";
// import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const CharacterDescription = () => {
  const { store, actions } = useContext(Context);
  const Params = useParams();
  let personId = Params.theid;
  let data = store.people[personId - 1];
  console.log("data");

  // console.log(store.singlePeople, "data");
  return (
    <>
      <div className="container">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`}
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <h1> {data.name} </h1>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
          <div class="card-body d-flex">
            <div>
              <p className="card-text">birth_year: </p> {data.birth_year}
            </div>
            <div>
              <p className="card-text">gender: </p> {data.gender}
            </div>
            <div>
              <p className="card-text">height:</p> {data.height}{" "}
            </div>
            <div>
              {" "}
              <p className="card-text">skin_color: </p> {data.skin_color}
            </div>
            <div>
              {" "}
              <p className="card-text">eye_color: </p> {data.eye_color}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
CharacterDescription.propTypes = {
  name: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  skin_color: PropTypes.string,
  eye_color: PropTypes.string,
};
