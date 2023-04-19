const express = require("express");
const orderController = require("../controllers/orderController");
const router = express.Router();

router.post("/", orderController.show); // create new book entry

module.exports = router;
