const CharacterCard = ({ character }) => {
  const imgUrl = character.thumbnail.path + "." + character.thumbnail.extension;
  const name = character.name;

  //   console.log(imgUrl);
  return (
    <div className="character-card">
      <img
        src={character.thumbnail.path + "." + character.thumbnail.extension}
        alt={"Personnage : " + character.name}
        className="profile-pic"
      />
      <div className="char-name">{name}</div>
      {character.description ? (
        <div className="char-desc">{character.description}</div>
      ) : (
        <div className="desc-filler"></div>
      )}
    </div>
  );
};

export default CharacterCard;
