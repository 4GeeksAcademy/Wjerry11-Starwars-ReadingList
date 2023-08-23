import React, { useContext } from "react";
import PeopleCard from "../component/peopleCard.jsx";
import VehicleCard from "../component/vehicleCard.jsx";
import PlanetCard from "../component/planetCard.jsx";
import "../../styles/home.css";
import { Context } from "../store/appContext";
export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.people, "people list");
  console.log(store.vehicles, "vehicles list");
  console.log(store.planets, "planets list");

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row overflow-auto flex-nowrap">
            {store.people.map((item, index) => {
              return (
                <>
                  <PeopleCard
                    name={item.name}
                    gender={item.gender}
                    hair_color={item.hair_color}
                    id={item.uid}
                    eye_color={item.eye_color}
                  />
                </>
              );
            })}
          </div>
          <div className="row overflow-auto flex-nowrap">
            {store.vehicles.map((item, index) => {
              return (
                <>
                  <VehicleCard
                    name={item.name}
                    model={item.model}
                    manufacturer={item.manufacturer}
                    cargo_capacity={item.cargo_capacity}
                  />
                </>
              );
            })}
          </div>
          <div className="row overflow-auto flex-nowrap">
            {store.planets.map((item, index) => {
              return (
                <>
                  <PlanetCard
                    name={item.name}
                    population={item.population}
                    terrain={item.terrain}
                    id={item.uid}
                    climate={item.climate}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
