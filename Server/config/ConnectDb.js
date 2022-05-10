const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log("db is successfylly connected");
  } catch (error) {
    console.log("connected to db is failed");
  }
};
module.exports =connectDb
