import React from "react";
import "./SideBar.css";
import SideBarLink from "../SideBarLink/SideBarLink.js";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { useNavigate, Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="SideBar">
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <SideBarLink Icon={HomeIcon} text="Home" />
      </Link>
      <SideBarLink Icon={SearchIcon} text="Explore" />
      <SideBarLink Icon={MailOutlineIcon} text="Messages" />
      <SideBarLink Icon={ListAltIcon} text="Cases" />
      <SideBarLink Icon={BookmarkBorderIcon} text="Loyers" />
      <SideBarLink Icon={NotificationsNoneIcon} text="Notifications" />
      <SideBarLink Icon={PermIdentityIcon} text="Profile" />
    </div>
  );
}

export default SideBar;
