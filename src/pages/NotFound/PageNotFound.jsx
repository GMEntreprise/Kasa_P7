import React from "react";

// Import des module react
import { NavLink } from "react-router-dom";

// Import des fichiers
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const PageNotFound = () => {
  return (
    <div>
      <Header />
      <div className="kasa_error">
        <div className="kasa_error_block">
          <p className="kasa_error_number">404</p>
          <p className="kasa_error_message">
            Oups! La page que vous demandez n'existe pas.
          </p>
        </div>

        <NavLink className="kasa_error_link" to="/">
          <p>Retournez sur la page d'acceuil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
