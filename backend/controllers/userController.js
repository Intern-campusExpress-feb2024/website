const User = require("../model/userSchema");

const createUser = async (req, res) => {
  try {
    const {
      email,
      name,
      phoneNo,
      regNo,
      branch,
      learnerid,
      upiID,
      txnID,
      screenshot,
    } = req.body;

    const newUser = new User({
      email,
      name,
      phoneNo,
      regNo,
      branch,
      learnerid,
      upiID,
      txnID,
      screenshot,
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create user", error: error.message });
  }
};

module.exports = { createUser };
