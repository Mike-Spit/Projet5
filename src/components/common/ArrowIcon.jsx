// src/components/common/ArrowIcon.jsx

import React from "react";
import arrow from "../../assets/images/arrow.svg";

export default function ArrowIcon({ className }) {
  // On fusionne la classe "collapse__arrow" avec celle qu'on nous passe
  // (pour la rotation)
  return (
    <img src={arrow} alt="toggle" className={`collapse__arrow ${className}`} />
  );
}
