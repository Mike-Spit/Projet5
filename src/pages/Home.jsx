// src/pages/Home.js

import React, { useEffect, useState } from "react";
import Banner from "../components/common/Banner";
import Card from "../components/common/Card";
import "../styles/Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLogements(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur: {error}</p>;
  }

  return (
    <main className="home">
      <Banner />
      <section className="home__gallery">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
