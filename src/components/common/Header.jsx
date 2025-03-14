// src/components/Header.js

import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Kasa Logo" className="header__logo" />
      </NavLink>

      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
