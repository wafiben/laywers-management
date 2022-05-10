const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  role: {
    type: Number,
    default: 0,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("user", userSchema);

