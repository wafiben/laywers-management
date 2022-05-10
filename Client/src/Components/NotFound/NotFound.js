import React from "react";
import "./NotFound.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function NotFound() {
  const navigate = useNavigate();
  const handleNavigateHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Oops</h1>
      <h1>page not found</h1>
      <Button variant="text" onClick={handleNavigateHome}>
        Back Home
      </Button>
    </div>
  );
}

export default NotFound;
