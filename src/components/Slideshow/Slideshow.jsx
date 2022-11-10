// Import module
import React from "react";
import { useState } from "react";

// Import fichiers
import arrowLeft from "../../assets/images/arrow_left.svg";
import arrowRight from "../../assets/images/arrow_right.svg";

// Import style
import "../../style/components/_Slideshow.scss";

const Slideshow = ({ data }) => {
  // Définition de l'état initial de l'index du diaporama
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setting previous picture change
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    // On met à jours la valeur de newIndex à chaque fois que l'utilisateur va cliquer
    setCurrentIndex(newIndex);
  };

  // Setting next picture change

  const goToNext = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slideshow_container">
      {/* Si data length > 1, Affiche moi les flêche */}
      {data.length > 1 && (
        <>
          <img
            className="slideshow_container_arrow arrowLeft"
            src={arrowLeft}
            alt="slide_left"
            onClick={goToPrevious}
          />
          <img
            className="slideshow_container_arrow arrowRight"
            src={arrowRight}
            alt="slide_right"
            onClick={goToNext}
          />
        </>
      )}

      {/* Afficher l'index de l'image dans le diaporama*/}

      {data.map((imageSlider) => {
        return (
          <div className="slideshow_container_pictures" key={imageSlider.id}>
            <img src={imageSlider} alt="" />
          </div>
        );
      })}
      <div className="slideshow_container_numbers">
        {/* data.length nous renvoie la valeur de l'objet tableau CurrentIndex vaut 0 */}
        <p>{currentIndex + 1 + "/" + data.length}</p>
      </div>
    </div>
  );
};

export default Slideshow;
