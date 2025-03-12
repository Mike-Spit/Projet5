// src/pages/About.js
import React from "react";
import Banner from "../components/common/Banner";
import Collapse from "../components/common/Collapse";
import bannerAbout from "../assets/images/banner-about.png";
import "../styles/About.scss";

function About() {
  return (
    <main className="about">
      <Banner imageSrc={bannerAbout} />
      <section className="about__collapses">
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>
        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>
        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N’hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>
        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services.
          </p>
        </Collapse>
      </section>
    </main>
  );
}

export default About;
