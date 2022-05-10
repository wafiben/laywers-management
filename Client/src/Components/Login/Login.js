import React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleNavigateContact = () => {
    navigate("/contact-us");
  };
  return (
    <div className="body-container">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form" action="#">
            <h1 className="title">Bienvenue</h1>
            <input className="input" type="text" placeholder="Nom" />
            <input className="input" type="email" placeholder="Email" />
            <input
              className="input"
              type="password"
              placeholder="Mot de passe"
            />
            <button className="connect-button">Login</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form" action="#">
            <h1 className="title">Welcome</h1>

            <input className="input" type="email" placeholder="Email" />
            <input
              className="input"
              type="password"
              placeholder="Mot de passe"
            />

            <button className="button button-connect">Connect</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1 className="title tiltle-connect">
                If you do not have an account contact admin
              </h1>
              <Button
                variant="contained"
                style={{ marginLeft: "80px" }}
                endIcon={<SendIcon />}
                onClick={handleNavigateContact}
              >
                Contact admin
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
