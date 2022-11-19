// Import des dépendances
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";

const CharacterCard = ({ character, token }) => {
  // const navigate = useNavigate();
  // const [favChar, setFavChar] = useState([]);
  // console.log(character._id);
  return (
    <div className="fav-relative">
      <Link to={`/personnage/${character._id}`} className="character-card">
        <div className="char-name">{character.name}</div>
        <div className="profile-pic-container">
          <img
            src={
              character.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ||
              character.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
                ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668681474/Marvel/super_hero_filler_a22i0y.png"
                : character.thumbnail.path + "." + character.thumbnail.extension
            }
            alt={"Personnage : " + character.name}
            className="profile-pic"
          />
        </div>

        {character.description ? (
          <div className="char-desc">{character.description}</div>
        ) : (
          <div className="desc-filler"></div>
        )}
      </Link>
      {/* <div className="fav-btn">
        <FontAwesomeIcon
          icon="fa-heart-circle-plus"
          className="add"
          onClick={() => {
            token
              ? setFavChar(character)
              : navigate("/user/login", { state: { previousUrl: "/" } });
          }}
        />
        {<FontAwesomeIcon icon="fa-heart-circle-check" className="fav" />}
      </div> */}
    </div>
  );
};

export default CharacterCard;
