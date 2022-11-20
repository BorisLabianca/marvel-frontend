// Import des dépendances
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Imports de composants
import Loader from "../components/Loader";

const Comic = () => {
  const { id } = useParams();
  const [comic, setComic] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const response = await axios.get(
          `https://site--marvel-backend--67k4ycyfnl9b.code.run/comic/${id}`
        );
        setComic(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchComic();
  }, [id]);

  return loading ? (
    <Loader statement={"Nous cherchons dans les tiroirs."} />
  ) : (
    <div className="single-comic-container">
      <div className="single-comic-desc">
        <h1 className="single-comic-title">{comic.title}</h1>
        {comic.description ? (
          <div className="single-comic-desc">{comic.description}</div>
        ) : (
          <span className="single-comic-desc">
            Désolé, nous n'avons pas de description disponible pour ce comic. 🙏
          </span>
        )}
      </div>

      <img
        src={
          comic.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp"
            : comic.thumbnail.path + "." + comic.thumbnail.extension
        }
        alt={"Titre :" + comic.title}
      />
    </div>
  );
};
export default Comic;
