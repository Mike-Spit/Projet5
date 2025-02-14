// src/pages/Home.js

import React, { useEffect, useState } from "react";
import Banniere from "../components/Banniere";
import Card from "../components/Card";
import "../styles/Home.scss";

function Home() {
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remplace l’URL par celle de ton backend
    fetch("/logements.js")
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
      <Banniere />
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
