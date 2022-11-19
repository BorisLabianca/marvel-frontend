// Import des des dépendances et hooks
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import CharacterCard from "../components/CharacterCard";
import ToolBar from "../components/ToolBar";

const Personnages = ({ token }) => {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [limit, setLimit] = useState(100);
  const [skip, setSkip] = useState(0);
  // console.log(search);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnages?name=${searchCharacter}&skip=${skip}&limit=${limit}`
        );
        // console.log(response.data.results);
        setCharacters(response.data);
        setLoading(false);
        // console.log(characters.results);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharacters();
  }, [searchCharacter, skip, limit]);

  return loading ? (
    <span>Vos héros se réunissent</span>
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
      />

      <div className="card-container">
        {characters.results.map((character) => {
          // console.log(character);
          return (
            <CharacterCard
              key={character._id}
              character={character}
              token={token}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Personnages;
