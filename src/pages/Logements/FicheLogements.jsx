// Import des modules react
import React from "react";
import PropType from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import des fichiers
import "../../logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Header from "../../components/Header/Header";

// import Header from "../../components/Header/Header";

const FicheLogements = () => {
  return (
    <div className="main_content">
      <Header />

      <section>
        <Slideshow />
      </section>
    </div>
  );
};

export default FicheLogements;
