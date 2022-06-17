const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  contactProof: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("message", messageSchema);
