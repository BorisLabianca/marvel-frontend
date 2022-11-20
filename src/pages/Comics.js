// Import des des dépendances
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import ComicCard from "../components/ComicCard";
import ToolBar from "../components/ToolBar";

const Comics = ({ addComicToFavorites, token }) => {
  const [comics, setComics] = useState();
  const [loading, setLoading] = useState(true);
  const [searchComic, setSearchComic] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?title=${searchComic}&skip=${skip}&limit=${limit}`
        );
        setComics(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchComics();
    // console.log(comics);
  }, [searchComic, skip, limit]);

  return loading ? (
    <span>Nous faisons le tri dans les boîtes</span>
  ) : (
    <div>
      <ToolBar
        searchContent={searchComic}
        setSearchContent={setSearchComic}
        placeholder="Type in the title of a comic book"
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
        data={comics.results}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />
      <div className="card-container">
        {comics.results.map((comic) => {
          return (
            <ComicCard
              key={comic._id}
              comic={comic}
              addComicToFavorites={addComicToFavorites}
              token={token}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
