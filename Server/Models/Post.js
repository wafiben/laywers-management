const mongoose = require("mongoose");
const caseSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  descreption: String,
  price: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  addedId: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});
module.exports = mongoose.model("case", caseSchema);