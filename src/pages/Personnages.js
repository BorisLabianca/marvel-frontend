// Import des des dépendances
import axios from "axios";
import { useEffect, useState } from "react";

// Import des composants
import CharacterCard from "../components/CharacterCard";

const Personnages = ({ search }) => {
  const [characters, setCharacters] = useState();
  const [loading, setLoading] = useState(true);
  console.log(search);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/personnages?name=${search}`
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
  }, [search]);

  return loading ? (
    <span>Vos héros se réunissent</span>
  ) : (
    <div>
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
