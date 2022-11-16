// Import des des dépendances
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import CharacterCard from "../components/CharacterCard";

const Personnages = () => {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  // console.log(search);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnages?name=${searchCharacter}`
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
  }, [searchCharacter]);

  return loading ? (
    <span>Vos héros se réunissent</span>
  ) : (
    <div>
      <div className="search-bar-n-pagination">
        <input
          type="text"
          placeholder="Type in the name of a Hero"
          value={searchCharacter}
          className="search-bar"
          onChange={(event) => {
            setSearchCharacter(event.target.value);
          }}
        />
        <button>Previous</button>
        <span>1</span>
        <button>Next</button>
      </div>

      <div className="card-container">
        {characters.results.map((character) => {
          // console.log(character);
          return <CharacterCard key={character._id} character={character} />;
        })}
      </div>
    </div>
  );
};
export default Personnages;
