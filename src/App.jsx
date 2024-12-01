import React, { useEffect, useState } from "react";

const world = [
  {
    continent: "Africa",
    country: [
      {
        name: "Algeria",
        state: [
          { name: "adar", cities: ["Adam Desme", "Aggui"] },
          { name: "batna", cities: ["Ain ed Defla","Ain Regada"] },
        ],
      },
      {
        name: "Angola",
        state: [
          { name: "Luanda", cities: ["Cazenga", "Cacuaco"] },
          { name: "Huambo", cities: ["Vila Teixeira da Silva", "Ndulo"] },
        ],
      },
    ],
  },
  {
    continent: "Asia",
    country: [
      {
        name: "India",
        state: [
          { name: "Delhi", cities: ["New Delhi", "Old Delhi"] },
          { name: "Mumbai", cities: ["Mumbai City", "Suburban"] },
        ],
      },
      {
        name: "China",
        state: [
          { name: "Beijing", cities: ["Beijing City"] },
          { name: "Shanghai", cities: ["Pudong", "Minhang"] },
        ],
      },
    ],
  },
  // Add similar structures for other continents.
];



const App = () => {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Update countries when a continent is selected
    if (selectedContinent) {
      const continentData = world.find((item) => item.continent === selectedContinent);
      setCountries(continentData ? continentData.country : []);
      setSelectedCountry("");
      setStates([]);
      setCities([]);
    }
  }, [selectedContinent]);

  useEffect(() => {
    // Update states when a country is selected
    if (selectedCountry) {
      const countryData = countries.find((item) => item.name === selectedCountry);
      setStates(countryData ? countryData.state : []);
      setSelectedState("");
      setCities([]);
    }
  }, [selectedCountry, countries]);

  useEffect(() => {
    // Update cities when a state is selected
    if (selectedState) {
      const stateData = states.find((item) => item.name === selectedState);
      setCities(stateData ? stateData.cities : []);
      setSelectedCity("");
    }
  }, [selectedState, states]);

  return (
    <div>
      {/* Continent Dropdown */}
      <select
        value={selectedContinent}
        onChange={(e) => setSelectedContinent(e.target.value)}
      >
        <option value="">Select Continent</option>
        {world.map((item, index) => (
          <option key={index} value={item.continent}>
            {item.continent}
          </option>
        ))}
      </select>

      {/* Country Dropdown */}
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        disabled={!countries.length}
      >
        <option value="">Select Country</option>
        {countries.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {/* State Dropdown */}
      <select
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        disabled={!states.length}
      >
        <option value="">Select State</option>
        {states.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        disabled={!cities.length}
      >
        <option value="">Select City</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
