import React from "react";
import { Typography, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Box
        className="box"
        sx={{
          width: 300,
          height: 300,
          padding: "50px 50px",
          margin: "auto",
          borderColor: "white",
          backgroundColor: "#00ccb1",
          borderRadius: "16px",
          marginTop: "200px",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <img
            src="https://www.docplanner.com/icons/icon-patients.svg"
            alt="client"
            width="40"
          />
          <Typography variant="h4" color="common.white">
            {" "}
            For Client
          </Typography>
        </div>

        <Typography variant="h5" color="common.white">
          Customers can track their cases by typing the number of case and see
          all details about it
        </Typography>
      </Box>
      <Box
        className="box"
        sx={{
          width: 300,
          height: 300,
          padding: "50px 50px",
          margin: "auto",
          borderColor: "white",
          backgroundColor: "#1b2734",
          borderRadius: "16px",
          marginTop: "200px",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <FontAwesomeIcon />

        <i class="fas fa-user" />
        <Typography variant="h5" color="common.white">
          Our approach is to facilitate the tasks of lawyers to be able to see
          the subject of each case and its details and of clients to follow
          their cases in front of them in our platform
        </Typography>
      </Box>
      <Box
        className="box"
        sx={{
          width: 300,
          height: 300,
          padding: "50px 50px",
          margin: "auto",
          borderColor: "white",
          backgroundColor: "#3d83df",
          borderRadius: "16px",
          marginTop: "200px",
          "&:hover": {
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <div style={{ marginBottom: "50px" }}>
          <Typography variant="h4" color="common.white">
            {" "}
            For lawyers
          </Typography>
        </div>
        <Typography variant="h5" color="common.white">
          every lawyer can use service after login and see all these cases with
          all details
        </Typography>
        <FontAwesomeIcon icon="coffee" />
      </Box>
    </div>
  );
}

export default Home;
