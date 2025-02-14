// src/pages/Housing.js

import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/common/Slideshow";
import Collapse from "../components/common/Collapse";
import "../styles/Housing.scss";

function Housing() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/logements/${id}")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLogement(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    // Selon ta logique, tu peux afficher un message ou rediriger
    return <p>Erreur : {error}</p>;
  }

  if (!logement) {
    // Si on n’a rien reçu du backend
    return <Navigate to="/404" />;
  }

  // Extraction des champs depuis la réponse du backend
  const {
    title,
    location,
    tags = [],
    host = {},
    rating,
    description,
    equipments = [],
    pictures = [],
  } = logement;

  // Pour afficher les étoiles (0 à 5)
  const stars = [1, 2, 3, 4, 5];

  return (
    <main className="housing">
      <Slideshow pictures={pictures} />
      <section className="housing__header">
        <div className="housing__info">
          <h1>{title}</h1>
          <p>{location}</p>
          <div className="housing__tags">
            {tags.map((tag) => (
              <span key={tag} className="housing__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="housing__host">
          <div className="housing__host-info">
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />
          </div>
          <div className="housing__rating">
            {stars.map((star) => (
              <span
                key={star}
                className={
                  star <= rating ? "star star--filled" : "star star--empty"
                }
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="housing__collapses">
        <Collapse title="Description">{description}</Collapse>
        <Collapse title="Équipements">
          <ul>
            {equipments.map((equip, idx) => (
              <li key={idx}>{equip}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
}

export default Housing;
