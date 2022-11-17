import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des pages
import Personnages from "./pages/Personnages";
import Personnage from "./pages/Personnage";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";

// Import des composants
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Personnages />} />
        <Route path="/personnage/:id" element={<Personnage />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/comic/:id" element={<Comic />} />
      </Routes>
    </Router>
  );
}

export default App;
