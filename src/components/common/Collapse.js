// src/components/Collapse.js

import React, { useState } from "react";
import "../../styles/Collapse.scss";
import arrow from "../assets/arrow_collapse.svg"; // Adapte si besoin

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggle}>
        <h2 className="collapse__title">{title}</h2>
        <img
          src={arrow}
          alt="toggle"
          className={
            isOpen ? "collapse__arrow collapse__arrow--up" : "collapse__arrow"
          }
        />
      </div>
      {isOpen && <div className="collapse__content">{children}</div>}
    </div>
  );
}

export default Collapse;
