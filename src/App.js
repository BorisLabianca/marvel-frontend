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

// Import des composants
import Header from "./components/Header";

function App() {
  const [token, setToken] = useState();
  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("token", token, { expires: 7 });
    } else {
      setToken(null);
      Cookies.remove("token");
    }
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Personnages />} />
        <Route path="/personnage/:id" element={<Personnage />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:id" element={<Comic />} />
        <Route
          path="/user/signup"
          element={<Signup handleToken={handleToken} />}
        />
        <Route
          path="/user/login"
          element={<Login handleToken={handleToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
