const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      image:       "https://starwars-visualguide.com/assets/img/characters/",
      imageTwo:    "https://starwars-visualguide.com/assets/img/vehicles/",
      imageThree:  "https://starwars-visualguide.com/assets/img/planets/",

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

      singleVehicle: [],

      planets: [],

      singlePlanet: [],

      singlePeople: [],
      favorites: [],
    },
    actions: {
      addFavorite: (name) => {
        let storeFavorites = getStore().favorites;
        storeFavorites.push(name);

        setStore({ favorites: storeFavorites });
      },
      removeFavorite: (index) => {
        let storeFavorites = getStore().favorites;
        let filterFavorites = storeFavorites.filter(
          (item, idx) => idx !== index
        );
        setStore({ favorites: filterFavorites});
      },
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
      fetchSinglePeople: (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ singlePeople: data }))
          .catch((error) => console.log("error message:", error));
      },
      fetchPlanet: () => {
        fetch("https://swapi.dev/api/planets")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((error) => console.log("error message:", error));
          
        
      },

      fetchSinglePlanet: (id) => {
        fetch(`https://swapi.dev/api/planet/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ singlePeople: data }))
          .catch((error) => console.log("error message:", error));
      }, 


      fetchVehicles: () => {
        fetch("https://swapi.dev/api/vehicles")
          .then((response) => response.json())
          .then((data) => setStore({ vehicles: data.results }))
          .catch((error) => console.log("error message:", error));
        
      },

      fetchSingleVehicle: (id) => {
        fetch(`https://swapi.dev/api/vehicle/${id}`)
          .then((response) => response.json())
          .then((data) => setStore({ singlePeople: data }))
          .catch((error) => console.log("error message:", error));
      },

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

      
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

      
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
