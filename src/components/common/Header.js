// src/components/Header.js

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo.png"; // Adapte si besoin

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa Logo" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/about" className="header__link">
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
