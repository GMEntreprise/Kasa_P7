import React from "react";

// Import des fichiers
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Collaspe from "../../components/Collaspe/Collaspe";

// import des styles
import "../../style/components/_banner.scss";

const items = [
  {
    id: 1,
    label: "Fiabilité",
    text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: 2,
    label: "Respect",
    text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: 3,
    label: "Service",
    text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: 4,
    label: "Sécurité",
    text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

function About() {
  return (
    <>
      <div className="main_header">
        <Header />
        <div className="banner_about"></div>
      </div>

      <main className="main_header">
        <section>
          {items.map((content) => {
            return (
              <ul key={content.id}>
                <Collaspe
                  id={content.id}
                  label={content.label}
                  content={content.text}
                />
              </ul>
            );
          })}
        </section>
      </main>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default About;
