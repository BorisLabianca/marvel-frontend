// Import des dépendances
import { Link } from "react-router-dom";

// Import du logo
import logoMarvel from "../assets/images/marvel_logo.png";

const Header = ({ search, setSearch }) => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-div">
          <img src={logoMarvel} alt="Logo Marvel" className="top-logo" />
        </div>

        <div className="nav-section">
          <div className="search">
            <input
              type="text"
              placeholder="Ex : Captain America"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>
          <div className="site-nav-btns">
            <Link to="/" className="page-link">
              <span>Personnages</span>
            </Link>
            <Link to="/comics" className="page-link">
              <span>Comics</span>
            </Link>
            <Link to="/favoris" className="page-link">
              <span>Favoris</span>
            </Link>
          </div>
        </div>
        <div className="login-signup">
          <Link to="/signup" className="page-link">
            <span>S'inscrire</span>
          </Link>
          <Link to="/login" className="page-link">
            <span>Se connecter</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
