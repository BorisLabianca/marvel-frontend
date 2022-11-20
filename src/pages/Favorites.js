const Favorites = ({ token }) => {
  const favComics = localStorage.getItem("favComics");
  const favCharacters = localStorage.getItem("favCharacters");
  const placeholderImage =
    "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp";
  const onImageError = (event) => {
    event.target.src = placeholderImage;
  };
  return (
    <div>
      <div className="favorite-comics">
        <h1>Mes comics favoris</h1>
        {favComics ? (
          JSON.parse(favComics).map((favComic) => {
            // console.log(favComic);
            return (
              <div key={favComic._id}>
                <div>{favComic.title}</div>
                <div>
                  <img
                    src={
                      favComic.thumbnail.path ===
                      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                        ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668682580/Marvel/cartoon-comic-pop-art-cover-background-template_530597-495_v4t5nz.webp"
                        : favComic.thumbnail.path +
                          "." +
                          favComic.thumbnail.extension
                    }
                    alt={"Titre :" + favComic.title}
                    onError={onImageError}
                    className="comic-cover"
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>Vous n'avez pas encore de comics dans vos favoris.</div>
        )}
      </div>{" "}
      <div className="favorite-characters">
        <h1>Mes personnages favoris</h1>
        {favCharacters ? (
          JSON.parse(favCharacters).map((favCharacter) => {
            return (
              <div key={favCharacter._id}>
                <div>{favCharacter.name}</div>
                <div>
                  <img
                    src={
                      favCharacter.thumbnail.path ===
                        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ||
                      favCharacter.thumbnail.path ===
                        "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
                        ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668681474/Marvel/super_hero_filler_a22i0y.png"
                        : favCharacter.thumbnail.path +
                          "." +
                          favCharacter.thumbnail.extension
                    }
                    alt={"Personnage : " + favCharacter.name}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div>Vous n'avez pas encore de personnages dans vos favoris.</div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
