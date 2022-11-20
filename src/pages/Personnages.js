// Import des des dépendances et hooks
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import CharacterCard from "../components/CharacterCard";
import ToolBar from "../components/ToolBar";
import Loader from "../components/Loader";

const Personnages = ({ token, addCharacterToFavorites }) => {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  // console.log(search);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnages?name=${searchCharacter}&skip=${skip}&limit=${limit}`
        );
        // console.log(response.data.results);
        setCharacters(response.data);
        setTimeout(() => {
          setLoading(false);
        }, 200);
        // console.log(characters.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharacters();
  }, [searchCharacter, skip, limit]);

  return loading ? (
    <Loader statement={"Vos héros se réunissent."} />
  ) : (
    <div>
      <ToolBar
        searchContent={searchCharacter}
        setSearchContent={setSearchCharacter}
        placeholder="Type in the name of a Hero"
        limit={limit}
        setLimit={setLimit}
        skip={skip}
        setSkip={setSkip}
        data={characters.results}
        suggestions={suggestions}
        setSuggestions={setSuggestions}
      />

      <div className="card-container">
        {characters.results.map((character) => {
          // console.log(character);
          return (
            <CharacterCard
              key={character._id}
              character={character}
              token={token}
              addCharacterToFavorites={addCharacterToFavorites}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Personnages;
