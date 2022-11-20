// Import des dépendances et hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken, handleAccountName, handleAvatar }) => {
  const [avatar, setAvatar] = useState();
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
        setErrorMessage("Veuillez entrer un nom d'utilisateur.");
        return;
      } else if (!email) {
        setErrorMessage("Veuillez entrer une adresse e-mail.");
        return;
      } else if (password !== confirmPassword) {
        setErrorMessage("Vos mots de passe sont différents.");
        return;
      } else {
        const formData = new FormData();
        formData.append("avatar", avatar);
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);
        const response = await axios.post(
          "https://site--marvel-backend--67k4ycyfnl9b.code.run/user/signup",
          formData
        );
        // console.log(response.data);
        if (response.data.token) {
          const token = response.data.token;
          const accountName = response.data.username;
          const avatar = response.data.avatar;
          handleToken(token);
          handleAccountName(accountName);
          handleAvatar(avatar);
          navigate("/");

          // if (emailUsed) {
          //   setEmailUsed(false);
          // }
          // if (usernameUsed) {
          //   setUsernameUsed(false);
          // }
        }
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
        alt="Captain America"
        className="i-want-you"
      />
      <div className="signup-info">
        <h1 className="signup-title">Rejoinez l'équipe de vos super héros !</h1>
        <input
          type="file"
          onChange={(event) => {
            setAvatar(event.target.files[0]);
          }}
        />
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
        <input type="submit" value="Join me!" className="signup-btn"></input>
      </div>
    </form>
  );
};
export default Signup;
