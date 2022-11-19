// Import des dépendances et hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  //   fonction pour gérer la demande d'inscription
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setErrorMessage("");
      if (!username) {
        return;
      }
      if (!email) {
        return;
      }
      if (password !== confirmPassword) {
        return;
      }
      const response = await axios.post("http://localhost:4000/user/signup", {
        username: username,
        email: email,
        password: password,
      });
      //   console.log(response);
      if (response.data.token) {
        const token = response.data.token;
        handleToken(token);
        navigate("/");

        // if (emailUsed) {
        //   setEmailUsed(false);
        // }
        // if (usernameUsed) {
        //   setUsernameUsed(false);
        // }
      }
    } catch (error) {
      console.log(error.response.data);
      if (error.response?.data.message === "This email is already used.") {
        setErrorMessage(
          "Cet e-mail est déjà utilisé par un héro / une héroïne 🦸‍♂️🦸🏻‍♀️"
        );
      }
      if (error.response?.data.message === "This username is already used.") {
        setErrorMessage(
          "Il y a déjà un héro / une héroïne qui porte ce nom 🦸‍♂️🦸🏻‍♀️"
        );
      }
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <img
        src="https://res.cloudinary.com/dbe27rnpk/image/upload/v1668722315/Marvel/captain_america_fzhlbi.jpg"
        alt=""
      />
      <div className="signup-info">
        <h1>Rejoinez l'équipe de vos super héros !</h1>
        {/* {usernameUsed ? (
          <p>Il y a déjà un héro / une héroïne qui porte ce nom 🦸‍♂️🦸🏻‍♀️</p>
        ) : null} */}
        <input
          type="text"
          placeholder="Cap'"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <input
          type="email"
          placeholder="captain.america@avengers.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        {password === "" ? null : password.length < 8 ? (
          <div className="password-too-short">
            Votre mot de passe doit comporter au moins 8 caractères.
          </div>
        ) : null}
        <input
          type="password"
          placeholder="almightycaptain"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {password !== confirmPassword ? (
          <div className="password-too-short">
            Vérifiez que les deux mots de passe sont identiques.
          </div>
        ) : null}
        <input
          type="password"
          placeholder="almightycaptain"
          value={confirmPassword}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        <input type="submit" value="Join me!"></input>
      </div>
    </form>
  );
};
export default Signup;
