const Order = require("../model/orderSchema");

const createOrder = async (req, res) => {
  try {
    const {
      source,
      destination,
      weight,
      quantity,
      length,
      width,
      height,
      paymentmode,
      invoicevalue,
      insurance,
    } = req.body;

    const newOrder = new Order({
      source,
      destination,
      weight,
      quantity,
      length,
      width,
      height,
      paymentmode,
      invoicevalue,
      insurance,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };
