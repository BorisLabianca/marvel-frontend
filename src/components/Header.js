// Import du logo
import logoMarvel from "../assets/images/marvel_logo.png";

const Header = ({ search, setSearch }) => {
  return (
    <header>
      <div className="header-container">
        <img src={logoMarvel} alt="Logo Marvel" className="top-logo" />
        <input
          type="text"
          placeholder="Ex : Captain America"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>
    </header>
  );
};
export default Header;
