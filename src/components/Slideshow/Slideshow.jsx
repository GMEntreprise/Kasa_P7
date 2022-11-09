// Import module
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Import fichiers
import slides from "../../logements.json";
import arrowLeft from "../../assets/images/arrow_left.svg";
import arrowRight from "../../assets/images/arrow_right.svg";

// Import style
import "../../style/components/_Slideshow.scss";

const Slideshow = (data) => {
  // Définition de l'état initial de l'index du diaporama
  const [currentIndex, setCurrentIndex] = useState(0);

  // Setting previous picture change
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
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
      {/* {data.length && > 1 && ()} */}
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
      {/* Afficher l'index de l'image dans le diaporama*/}
      <div className="slideshow_container_pictures"></div>
    </div>
  );
};

export default Slideshow;
