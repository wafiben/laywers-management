const express = require("express");
const app = express();
const connect = require("./config/ConnectDb");
const authRoute=require('./Routes/authRoute')
require("dotenv").config({ path: "./config/.env" });
//run the server
app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
//connect to database
connect();
//midelware global
app.use(express.json());
app.use('/auth',authRoute)