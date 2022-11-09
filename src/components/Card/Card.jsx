// Import des module React
import { Link } from "react-router-dom";

// Import des fichiers
import "../../style/components/_card.scss";

const Card = ({ gallery }) => {
  // Le useEffect se joue lorque le composant sera mise en place

  return (
    <div className="kasa_wrapper">
      {gallery.map((images) => {
        return (
          <article key={images.id} className="kasa_wrapper_block">
            <Link
              className="kasa_wrapper_link"
              to={`/FicheLogement/${images.id}`}
              key={images.id}
            >
              <img src={images.cover} alt="logement" />
              <p>{images.title} </p>
            </Link>
          </article>
        );
      })}
    </div>
  );
};
// Card.protoType = {

// }
export default Card;
