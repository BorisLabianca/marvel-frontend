// Import des dépendances
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import des png
import logoMarvel from "../assets/images/marvel_logo.png";
import captainAmerica from "../assets/images/captain_america.png";
import comicCover from "../assets/images/marvel_cover.png";

const Header = ({ token, handleToken, account }) => {
  console.log(account);
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo-div">
          <img src={logoMarvel} alt="Logo Marvel" className="top-logo" />
        </Link>

        <div className="nav-section">
          <div className="site-nav-btns">
            <Link to="/" className="page-link">
              <img
                src={captainAmerica}
                alt="Captain America"
                className="captain-america"
              />
              <span>Personnages</span>
            </Link>
            <Link to="/comics" className="page-link">
              <img
                src={comicCover}
                alt="Cover of a comic"
                className="comic-cover-nav"
              />
              <span>Comics</span>
            </Link>
            <Link
              to={token ? "/favorites" : "/user/login"}
              state={{ previousUrl: "/favorites" }}
              className="page-link"
            >
              <FontAwesomeIcon icon="fa-heart" className="fav-icon-nav" />
              <span>Favoris</span>
            </Link>
          </div>
        </div>
        {token ? (
          <div className="logout-div">
            <img src="" alt="" />
            <div className="account-name">{account}</div>
            <Link to="/">
              <button
                className="deconnexion"
                onClick={() => {
                  handleToken(null);
                }}
              >
                Deconnexion
              </button>
            </Link>
          </div>
        ) : (
          <div className="login-signup">
            <Link to="user/signup" className="page-link">
              <span>S'inscrire</span>
            </Link>
            <Link to="user/login" className="page-link">
              <span>Se connecter</span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
