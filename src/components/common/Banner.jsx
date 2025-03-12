// src/components/Banner.jsx

import React from "react";
import "../../styles/Banner.scss";

function Banner({ imageSrc, text }) {
  return (
    <section className="banner">
      <img src={imageSrc} alt="Banner" className="banner__image" />
      {text && <h2 className="banner__text">{text}</h2>}
    </section>
  );
}

export default Banner;
