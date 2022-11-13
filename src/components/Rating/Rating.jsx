import React from "react";

// Import Fichier
import starFull from "../../assets/images/starFull.svg";
import starEmpty from "../../assets/images/starEmpty.svg";

// Import Style
import "../../style/components/_rating.scss";
const Rating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* On boucle sur l'image pour récuprer tout les étoile */}
      {stars.map((star, index) =>
        // Si rating >= 5 tu m'affiche le full sinon empty
        rating >= star ? (
          <img key={index} src={starFull} alt="Rating" />
        ) : (
          <img key={index} src={starEmpty} alt="Rating" />
        )
      )}
    </div>
  );
};

export default Rating;
