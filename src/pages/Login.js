// Import des dépendances et hooks
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken, handleAccountName, handleAvatar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(location);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      if (!email || !password) {
        setErrorMessage(
          "Veuillez renseigner votre adresse e-mail et votre mot de passe."
        );
        return;
      } else {
        const response = await axios.post(
          "https://site--marvel-backend--67k4ycyfnl9b.code.run/user/login",
          {
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          const token = response.data.token;
          const accountName = response.data.username;
          const avatar = response.data.avatar;
          handleToken(token);
          handleAccountName(accountName);
          handleAvatar(avatar);
          if (location.state?.previousUrl) {
            navigate(location.state.previousUrl);
          } else {
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response?.data.message === "Unauthorized.") {
        setErrorMessage("Mauvaise combinaison mot de passe / e-mail 🦹‍♀️🦹🏻‍♂️");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="login-info">
        <h1 className="login-title">Connectez-vous</h1>
        <input
          type="email"
          placeholder="captain.america@avengers.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <input
          type="password"
          placeholder="captain.america@avengers.com"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Suit up!" className="login-btn" />
      </div>
    </form>
  );
};
export default Login;
