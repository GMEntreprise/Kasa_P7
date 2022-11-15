import React from "react";

// Import styles
import "../../style/components/_loader.scss";

const Loader = () => {
  return (
    <div className="kasa_loader">
      <div className="kasa_loader_block"></div>
      <span className="kasa_loader_spinner"> Chargement...</span>
    </div>
  );
};

export default Loader;
