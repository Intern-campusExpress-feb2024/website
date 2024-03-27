const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    email: { type: String },

    name: { type: String },
    phoneNo: { type: Number },
    collegeName: { type: String },
    
  },
  { timestamps: true }
);

const userdb = mongoose.model("users", userSchema);

module.exports = userdb;
