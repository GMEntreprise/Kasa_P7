// Import des modules react
import React from "react";
import PropType from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import des fichiers
import dataJson from "../../logements.json";
import Slideshow from "../../components/Slideshow/Slideshow";
import Header from "../../components/Header/Header";

// import Header from "../../components/Header/Header";

const FicheLogements = () => {
  const [data, setData] = useState([]);

  // Get and Stocker les données
  useEffect(() => {
    const fetchData = async () => {
      setData(dataJson);
    };
    fetchData();
  }, []);
  return (
    <div className="main_content">
      <Header />

      <section>
        <Slideshow data={data} />
      </section>
    </div>
  );
};

export default FicheLogements;
