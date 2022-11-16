// Import des des dépendances
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import ComicCard from "../components/ComicCard";

const Comics = ({ search }) => {
  const [comics, setComics] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics?title=${search}`
        );
        setComics(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchComics();
    // console.log(comics);
  }, [search]);

  return loading ? (
    <span>Nous faisons le tri dans les boîtes</span>
  ) : (
    <div>
      <div className="card-container">
        {comics.results.map((comic) => {
          return <ComicCard key={comic._id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
