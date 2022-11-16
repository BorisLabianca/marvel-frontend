import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import des pages
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";

// Import des composants
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Personnages />} />
        <Route path="/comics" element={<Comics />} />
      </Routes>
    </Router>
  );
}

export default App;
