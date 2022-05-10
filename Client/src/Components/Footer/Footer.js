import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Footer() {
  let navigate = useNavigate();

  return (
    <div className="footer-body">
      <h1 className="title-footer">
				Sounds interesting? Join us now!
			</h1>
    </div>
  );
}

export default Footer;

