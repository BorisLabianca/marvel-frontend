// Import des dépendances
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import Cookies from "js-cookie";

const ComicCard = ({ comic, token, addComicToFavorites }) => {
  const navigate = useNavigate();
  const placeholderImage =
    "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp";
  const onImageError = (event) => {
    event.target.src = placeholderImage;
  };
  return (
    <div className="fav-relative-comics">
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

      <div className="fav-comic-btn">
        {/* <FontAwesomeIcon icon="fa-heart-circle-check" className="fav" /> */}

        <FontAwesomeIcon
          icon="fa-heart-circle-plus"
          className="add"
          onClick={() => {
            token
              ? addComicToFavorites(comic)
              : navigate("/user/login", {
                  state: { previousUrl: "/comics" },
                });
          }}
        />
      </div>
    </div>
  );
};

export default ComicCard;
