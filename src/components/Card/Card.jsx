// Import des module React
import { Link } from "react-router-dom";

// Import des fichiers
import "../../style/components/_card.scss";

// Destructuration
const Card = ({ gallery }) => {
  // Le useEffect se joue lorque le composant sera mise en place

  return (
    <div className="kasa_wrapper">
      {gallery.map((card) => {
        return (
          <article key={card.id} className="kasa_wrapper_block">
            <Link
              className="kasa_wrapper_link"
              to={`/FicheLogement/${card.id}`}
              key={card.id}
            >
              <img src={card.cover} alt="logement" />
              <p>{card.title} </p>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Card;
