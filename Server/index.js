const express = require("express");
const app = express();
const cors = require("cors");
const connect = require("./config/ConnectDb");
const authRoute = require("./Routes/authRoute");
const adminRoute = require("./Routes/AdminRoute.js");
require("dotenv").config({ path: "./config/.env" });
//run the server
const PORT = 10000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
//connect to database
connect();
//midelware global

//connexion front back
app.use(cors());
//api with json format
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/auth", authRoute);
app.use("/admin", adminRoute);
