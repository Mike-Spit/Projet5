// src/Home.js
import React, { useState, useEffect } from "react";

function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Liste des biens immobiliers</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.title} - {property.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
