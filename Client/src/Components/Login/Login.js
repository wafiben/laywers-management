import React, { useState } from "react";
import "./Login.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../Redux/Actions/authAction";
import { useDispatch } from "react-redux";
function Login() {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userInfo, navigate));
    setUserInfo({ email: "", password: "" });
  };

  return (
    <div className="body-container">
      <div className="container" id="container">
        <div className="form-container sign-up-container"></div>
        <div className="form-container sign-in-container">
          <form className="form" onSubmit={onSubmit}>
            <h1 className="title">Welcome</h1>

            <input
              className="input"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
            />
            <input
              className="input"
              type="password"
              placeholder="password"
              onChange={handleChange}
              name="password"
            />

            <button className="button button-connect" type="submit">
              Connect
            </button>
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
                onClick={() => navigate("/contact-us")}
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
