// src/components/common/Collapse.jsx

import React, { useState } from "react";
import "../../styles/Collapse.scss";
import ArrowIcon from "./ArrowIcon";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`}>
      <div className="collapse__header" onClick={toggle}>
        <h2 className="collapse__title">{title}</h2>
        <ArrowIcon className={isOpen ? "is-open" : ""} />
      </div>

      <div className={`collapse__content ${isOpen ? "is-open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
