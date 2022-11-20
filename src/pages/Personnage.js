// Import des dépendances
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// Import des composants
import CharacterAppearsIn from "../components/CharacterAppearsIn";
import Loader from "../components/Loader";

const Personnage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [loading, setLoading] = useState(true);
  // const [appearsIn, setAppearsIn] = useState();

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/comics/${id}`);

        // await axios.get(
        //   `http://localhost:4000/personnage/${id}`
        // );

        setCharacter(response.data);

        // const appearsInResponse = await axios.get(
        //   `http://localhost:4000/comics/${id}`
        // );
        // // console.log("responde.data", response.data);
        // // console.log(appearsInResponse.data);
        // setAppearsIn(appearsInResponse.data);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchCharacter();
  }, [id]);

  return loading ? (
    <Loader statement={"Votre héro arrive."} />
  ) : (
    <div>
      <h1>{character.name}</h1>
      <img
        src={
          character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ||
          character.thumbnail.path ===
            "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708"
            ? "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668681474/Marvel/super_hero_filler_a22i0y.png"
            : character.thumbnail.path + "." + character.thumbnail.extension
        }
        alt={"Personnage : " + character.name}
      />

      {character.description ? (
        <div>{character.description}</div>
      ) : (
        <span>
          Désolé, nous n'avons pas de description disponible pour ce personnage.
          🙏
        </span>
      )}
      {character.comics.map((apparition) => {
        return (
          <CharacterAppearsIn key={apparition._id} apparition={apparition} />
        );
      })}
    </div>
  );
};
export default Personnage;
