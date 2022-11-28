// Import des module
import { React, useState } from "react";

// Import des fichiers
// Import des styles
import "../../style/components/_collaspe.scss";

// Destructuration
const Collaspe = ({ label, content }) => {
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
            // Sinon, Affiche moi isOpen false
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </div>
      </div>
      {isOpen && <div className="kasa_collaspe_content"> {content} </div>}
    </li>
  );
};

export default Collaspe;
