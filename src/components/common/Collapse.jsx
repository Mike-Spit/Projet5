// src/components/common/Collapse.jsx

import React, { useState } from "react";
import ArrowIcon from "./ArrowIcon";
import "../../styles/Collapse.scss";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      <div className="collapse__header" onClick={toggle}>
        <h2 className="collapse__title">{title}</h2>
        <ArrowIcon className={`collapse__arrow ${isOpen ? "is-open" : ""}`} />
      </div>

      <div className={`collapse__content ${isOpen ? "is-open" : ""}`}>
        <div className="collapse__content-inner">{children}</div>
      </div>
    </div>
  );
}

export default Collapse;
