import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { FcHome } from "react-icons/fc";
import { Avatar } from "@material-ui/core";
import toast, { Toaster } from "react-hot-toast";
import { logOut } from "../../Redux/Actions/authAction";

import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    if (user) {
      toast(`Hello ${user.firstName}  ${user.lastName} !`, {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  }, [user]);

  const handleClick = () => {
    navigate("/auth");
  };
  const handleHomeNavigate = () => {
    navigate("/");
  };
  const handleLogout = () => {
    dispatch(logOut(navigate));
  };
  const buttonHome = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="currentColor"
      className="bi bi-bank2"
      viewBox="0 0 16 16"
    >
      <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
    </svg>
  );
  return (
    <div className="nav-header">
      <Toaster position="top-center" reverseOrder={false} />
      <Button
        style={{
          backgroundColor: "transparent",
          border: "2px solid gray",
          color: "gray",
          width: "88px",
          height: "40px",
        }}
        onClick={handleHomeNavigate}
      >
        {buttonHome}
      </Button>

      {user ? (
        <>
          <Avatar
            name={user.firstName}
            size="40"
            className="avatar"
            style={{ backgroundColor: "purple" }}
          >
            {user && user.firstName.charAt(0)}
          </Avatar>
          <Button variant="outlined" color="error" onClick={handleLogout}>
            Logout
          </Button>
        </>
      ) : (
        <Button variant="contained" onClick={handleClick}>
          Sign In
        </Button>
      )}
    </div>
  );
}

export default Navbar;
