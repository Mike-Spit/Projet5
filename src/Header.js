// src/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img
        src="/assets/images/logo_header.png"
        className="logo"
        alt="logo Kasa"
      ></img>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
