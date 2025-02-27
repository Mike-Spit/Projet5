// src/components/Slideshow.js

import React, { useState } from "react";
import "../../styles/Slideshow.scss";
import arrowLeft from "../../assets/images/arrow_left.png";
import arrowRight from "../../assets/images/arrow_right.png";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = pictures.length;

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  if (!pictures || length === 0) {
    return null;
  }

  return (
    <section className="slideshow">
      {length > 1 && (
        <img
          src={arrowLeft}
          alt="Précédent"
          className="slideshow__arrow slideshow__arrow--left"
          onClick={goToPrevious}
        />
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
        className="slideshow__image"
      />
      {length > 1 && (
        <img
          src={arrowRight}
          alt="Suivant"
          className="slideshow__arrow slideshow__arrow--right"
          onClick={goToNext}
        />
      )}
      {length > 1 && (
        <p className="slideshow__counter">
          {currentIndex + 1}/{length}
        </p>
      )}
    </section>
  );
}

export default Slideshow;
