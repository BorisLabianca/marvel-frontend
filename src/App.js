import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Import des pages
import Personnages from "./pages/Personnages";
import Personnage from "./pages/Personnage";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

// Import des composants
import Header from "./components/Header";

// Import de fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartCirclePlus,
  faHeartCircleCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHeartCircleCheck, faHeartCirclePlus, faHeart);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [account, setAccount] = useState(Cookies.get("accountName") || "");
  const [avatar, setAvatar] = useState(
    Cookies.get("avatar") ||
      "https://res.cloudinary.com/dbe27rnpk/image/upload/v1668681474/Marvel/super_hero_filler_a22i0y.png"
  );
  const [favComics, setFavComics] = useState([]);
  const [favChars, setFavChars] = useState([]);
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };
  const handleAccountName = (accountName) => {
    if (accountName) {
      setAccount(accountName);
      Cookies.set("accountName", accountName, { expires: 7 });
    } else {
      setAccount("");
      Cookies.remove("accountName");
    }
  };

  const handleAvatar = (avatar) => {
    if (avatar) {
      setAvatar(avatar);
      Cookies.set("avatar", avatar, { expires: 7 });
    } else {
      Cookies.remove("avatar");
    }
  };
  const addComicToFavorites = (comic) => {
    const newFav = [...favComics];
    newFav.push(comic);
    setFavComics(newFav);
    localStorage.setItem("favComics", JSON.stringify(newFav));
  };
  const addCharacterToFavorites = (character) => {
    const newFav = [...favChars];
    newFav.push(character);
    setFavChars(newFav);
    localStorage.setItem("favCharacters", JSON.stringify(newFav));
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        account={account}
        avatar={avatar}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Personnages
              token={token}
              addCharacterToFavorites={addCharacterToFavorites}
            />
          }
        />
        <Route path="/personnage/:id" element={<Personnage />} />
        <Route
          path="/comics"
          element={
            <Comics token={token} addComicToFavorites={addComicToFavorites} />
          }
        />
        <Route path="/comic/:id" element={<Comic />} />
        <Route
          path="/favorites"
          element={<Favorites token={token} favComics={favComics} />}
        />
        <Route
          path="/user/signup"
          element={
            <Signup
              handleToken={handleToken}
              handleAccountName={handleAccountName}
              handleAvatar={handleAvatar}
            />
          }
        />
        <Route
          path="/user/login"
          element={
            <Login
              handleToken={handleToken}
              handleAccountName={handleAccountName}
              handleAvatar={handleAvatar}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
