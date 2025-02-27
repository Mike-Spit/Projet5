// src/components/Card.js

import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Card.scss";

function Card({ id, cover, title }) {
  return (
    <article className="card">
      <Link to={`/housing/${id}`} className="card__link">
        <img src={cover} alt={title} className="card__image" />
        <h3 className="card__title">{title}</h3>
      </Link>
    </article>
  );
}

export default Card;
