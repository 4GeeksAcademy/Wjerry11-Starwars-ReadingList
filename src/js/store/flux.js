const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      vehicles: [],

      planets: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      initialLoading: () => {
        getActions().fetchPeople();
        getActions().fetchPlanet();
        getActions().fetchVehicles();
      },
      fetchPeople: () => {
        fetch("https://swapi.dev/api/people")
          .then((response) => response.json())
          .then((data) => setStore({ people: data.results }))
          .catch((error) => console.log("error message:", error));
      },
      fetchPlanet: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((error) => console.log("error message:", error));
        // let data= await response.json()
        // setStore({planets:data.results})
        // console.log(data)
      },

      fetchVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((data) => setStore({ vehicles: data.results }))
          .catch((error) => console.log("error message:", error));
        // let data= await response.json()
        // setStore({vehicles:data.results})
        // console.log(data)
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
