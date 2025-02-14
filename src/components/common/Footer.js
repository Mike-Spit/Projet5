// src/components/Footer.js

import React from "react";
import "../styles/Footer.scss";
import logo from "../assets/logo_footer.png"; // Adapte si besoin

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Footer logo" className="footer__logo" />
      <p className="footer__text">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
