// Import des module
import { React, useState } from "react";
import PropType from "prop-types";

// Import des fichiers
// Import des styles
import "../../style/components/_collaspe.scss";

const Collaspe = ({ label, text }) => {
  // Reglement de Dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Définir l'état opposé de dropDown (toggle)
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <li className="kasa_collaspe">
      {/* onclick collaspe */}
      <div className="kasa_collaspe_button" onClick={toggle}>
        <div className="kasa_collaspe_title">
          <p> {label} </p>
          {/* si dropDown est ouvert, affichez ceci */}
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            // Sinon, Affiche moi this
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>
      {isOpen && <div className="kasa_collaspe_content"> {text} </div>}
    </li>
  );
};
// Sécure variable
Collaspe.propTypes = {
  label: PropType.string,
  text: PropType.string,
};
export default Collaspe;
