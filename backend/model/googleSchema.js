const mongoose = require("mongoose");

const googleSchema = mongoose.Schema(
  {
    googleId: { type: Number },
    googleName: { type: String },
    email: { type: String },
    registered: { type: Boolean },
  },
  { timestamps: true }
);

const googledb = mongoose.model("googleUsers", googleSchema);

module.exports = googledb;
