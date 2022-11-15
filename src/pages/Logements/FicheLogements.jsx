// Import des modules react
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Import des fichiers
import dataJson from "../../logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PageNotFound from "../NotFound/PageNotFound";
import TagName from "../../components/TagName/TagName";
import Rating from "../../components/Rating/Rating";
import Collaspe from "../../components/Collaspe/Collaspe";
import Loader from "../../components/Loader/Loader";

// Import Style
import "../../style/pages/_ficheLogement.scss";

const FicheLogements = () => {
  // Récupération de L'ID du logement dans l'url
  const params = useParams();
  const id = params.id;

  // Récupérations du tableau d'appartement, puis de l'appartement correspond au bon id

  const logement = dataJson.find((element) => {
    return element.id === id;
  });

  // Si il ne trouve aucun logement il retourne la page 404.
  if (logement === undefined) {
    return <PageNotFound />;
  }

  return (
    <>
      <div className="main_content">
        <Header />

        <section>
          <Slideshow data={logement.pictures} />

          <div className="kasa_fiche">
            <div className="kasa_fiche_infos">
              <div className="kasa_fiche_block">
                <div className="kasa_fiche_items">
                  <h2> {logement.title} </h2>
                  <p> {logement.location}</p>
                </div>
                {/* TagName */}
                <div className="kasa_fiche_tag-items">
                  {logement.tags.map((tag, index) => {
                    return <TagName tag={tag} key={index} />;
                  })}
                </div>
              </div>
              <div className="kasa_fiche_hostBlock">
                <div className="kasa_fiche_hostInfos">
                  <div className="kasa_fiche_hostName">
                    <p> {logement.host.name} </p>
                  </div>
                  <div className="kasa_fiche_hostPicture">
                    <img src={logement.host.picture} alt="host" />
                  </div>
                </div>

                <div className="kasa_fiche_star">
                  <Rating rating={logement.rating} />
                </div>
              </div>
            </div>
          </div>
          {/* Collaspe */}

          <div className="kasa_fiche_collaspe">
            <Collaspe label="Description" content={logement.description} />

            {/* Création d'un li pour chaque index de données dans l'équipement */}

            <Collaspe
              label="Équipements"
              content={
                <ul>
                  {logement.equipments.map((equipment, index) => {
                    return <li key={index}>{equipment} </li>;
                  })}
                </ul>
              }
            />
          </div>
        </section>
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default FicheLogements;
