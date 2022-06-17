const mongoose = require("mongoose");
const caseSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  descreption: String,
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
  },
  number:{
    type:String,
    required: true,
  }
});
module.exports = mongoose.model("case", caseSchema);