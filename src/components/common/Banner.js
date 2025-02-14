// src/components/Banner.js

import React from "react";
import "../styles/Banner.scss";
import bannerImage from "../assets/banner_home.jpg"; // Adapte si besoin

function Banner() {
  return (
    <section className="banner">
      <img src={bannerImage} alt="Banner" className="banner__image" />
      <h2 className="banner__text">Chez vous, partout et ailleurs</h2>
    </section>
  );
}

export default Banner;
