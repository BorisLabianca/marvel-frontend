import thor from "../assets/images/thor.png";
import cap from "../assets/images/cap.png";
import ironMan from "../assets/images/iron_man.png";

const Loader = ({ statement }) => {
  return (
    <div className="loader">
      <div className="loader-container">
        <p>{statement}</p>
        <img src={thor} alt="" className="thor" />
        <img src={cap} alt="" className="cap" />
        <img src={ironMan} alt="" className="iron-man" />
      </div>
    </div>
  );
};

export default Loader;
