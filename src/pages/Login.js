// Import des dépendances et hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Connectez-vous</h1>
      <input
        type="email"
        placeholder="captain.america@avengers.com"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="captain.america@avengers.com"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input type="submit" value="Suit up!" />
    </form>
  );
};
export default Login;
