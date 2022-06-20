import React, { useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "white" };
const imgLogo = { borderRadius: "50%" };

function Header() {
  const inputRef = useRef();

  return (
    <div className="Header">
      <div className="header">
        <h1>
          <img
            style={imgLogo}
            src="https://storage.googleapis.com/thisday-846548948316-wp-data/wp-media/10b7e17d-court.gif"
            width="70"
          />
        </h1>
        <div className="element-content">
          <Link style={linkStyle} to="/">
            HOME
          </Link>
          <p className="element-hover">ABOUT</p>
          <p className="element-hover">
            CONTACT
          </p>
          <Link to="/sign-in" style={linkStyle}>
            SIGN IN
          </Link>
        </div>
      </div>
      <div className="header-img">
        <h1 style={{ paddingTop: "25px" }}>Our Business</h1>
        <h2>Creative solution</h2>
      </div>
    </div>
  );
}

export default Header;
