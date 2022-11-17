// Import des dépendances
import { Link } from "react-router-dom";

const ComicCard = ({ comic }) => {
  const placeholderImage =
    "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp";
  const onImageError = (event) => {
    event.target.src = placeholderImage;
  };
  return (
    <Link to={`/comic/${comic._id}`} className="comic-card">
      <div className="comic-title">{comic.title}</div>
      <img
        src={
          comic.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp"
            : comic.thumbnail.path + "." + comic.thumbnail.extension
        }
        alt={"Titre :" + comic.title}
        onError={onImageError}
        className="comic-cover"
      />

      <div className="comic-desc">{comic.description}</div>
    </Link>
  );
};

export default ComicCard;
