// src/components/common/ArrowIcon.jsx

import React from "react";
import arrow from "../../assets/images/arrow.svg";

export default function ArrowIcon({ className }) {
  return (
    <img src={arrow} alt="toggle" className={`collapse__arrow ${className}`} />
  );
}
