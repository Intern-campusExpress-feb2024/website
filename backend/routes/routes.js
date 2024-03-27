// orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const userController = require("../controllers/userController");
// Order routes
router.post("/createOrder", orderController.createOrder);
// User routes
router.post("/createUser", userController.createUser);
module.exports = router;
