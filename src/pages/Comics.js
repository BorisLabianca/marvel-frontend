// Import des des dépendances
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import ComicCard from "../components/ComicCard";

const Comics = () => {
  const [comics, setComics] = useState();
  const [loading, setLoading] = useState(true);
  const [searchComic, setSearchComic] = useState("");

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?title=${searchComic}`
        );
        setComics(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchComics();
    // console.log(comics);
  }, [searchComic]);

  return loading ? (
    <span>Nous faisons le tri dans les boîtes</span>
  ) : (
    <div>
      <div className="search-bar-n-pagination">
        <input
          type="text"
          placeholder="Type in the title of a comic book"
          value={searchComic}
          className="search-bar"
          onChange={(event) => {
            setSearchComic(event.target.value);
          }}
        />
      </div>
      <div className="card-container">
        {comics.results.map((comic) => {
          return <ComicCard key={comic._id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
