import React from "react";
import "./Dashboard.css";
import Lawyer from "../Lawyers/Lawyer.js";
import SideBar from "../SideBar/SideBar";
function Dashboard() {
  return (
    <div className="dasboard">
  
        <SideBar />
      
      <div style={{margin:"auto" }}>
      <Lawyer/>
      </div> 
      <h1>hello</h1>
      <h1>dashboard admin</h1>
    </div>
  );
}

export default Dashboard;
