const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    source: { type: String },

    destination: { type: String },
    weight: { type: Number },
    quantity: { type: Number },
    length: { type: Number },
    width: { type: Number },
    height: { type: Number },
    paymentmode: { type: String },
    invoicevalue: { type: String },
    insurance: { type: Boolean },
  },
  { timestamps: true }
);

const orderdb = mongoose.model("orders", orderSchema);

module.exports = orderdb;
