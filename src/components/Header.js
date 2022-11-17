// Import des dépendances
import { Link } from "react-router-dom";

// Import du logo
import logoMarvel from "../assets/images/marvel_logo.png";
import captainAmerica from "../assets/images/captain_america.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="logo-div">
          <img src={logoMarvel} alt="Logo Marvel" className="top-logo" />
        </div>

        <div className="nav-section">
          <div className="site-nav-btns">
            <img
              src={captainAmerica}
              alt="Captain America"
              className="captain-america"
            />
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
          <Link to="user/signup" className="page-link">
            <span>S'inscrire</span>
          </Link>
          <Link to="user/login" className="page-link">
            <span>Se connecter</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
