import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Import des pages
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";

// Import des composants
import Header from "./components/Header";

function App() {
  // State utilisés dans plusieurs pages/composants
  const [search, setSearch] = useState();

  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Personnages search={search} />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
