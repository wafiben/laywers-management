import React from "react";
import "./Dashboard.css";
import Lawyer from "../Lawyers/Lawyer.js";
import SideBar from "../SideBar/SideBar";
function Dashboard() {
  return (
    <div className="dasboard">
      <div style={{ marginTop: "-190px"}}>
        <SideBar />
      </div>
      <div style={{margin:"auto" }}>
      <Lawyer/>
      </div>
    </div>
  );
}

export default Dashboard;
