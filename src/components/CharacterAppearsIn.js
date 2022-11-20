// Import des dépendances
import { Link } from "react-router-dom";

const CharacterAppearsIn = ({ apparition }) => {
  const placeholderImage =
    "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp";
  const onImageError = (event) => {
    event.target.src = placeholderImage;
  };

  return (
    <Link to={`/comic/${apparition._id}`} className="appearing-comic">
      <h2 className="appears-in-title">{apparition.title}</h2>
      <img
        src={
          apparition.thumbnail.path ===
          "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
            ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp"
            : apparition.thumbnail.path + "." + apparition.thumbnail.extension
        }
        alt={"Titre :" + apparition.title}
        onError={onImageError}
        className="char-appears-in-cover"
      />
    </Link>
  );
};
export default CharacterAppearsIn;
