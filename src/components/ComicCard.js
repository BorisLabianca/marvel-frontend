const ComicCard = ({ comic }) => {
  return (
    <div className="comic-card">
      <img
        src={comic.thumbnail.path + "." + comic.thumbnail.extension}
        alt={"Titre :" + comic.title}
        className="comic-cover"
      />
      <div className="comic-title">{comic.title}</div>
      <div className="comic-desc">{comic.description}</div>
    </div>
  );
};

export default ComicCard;
