const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orderController");

// GET /api/orders/cart
router.get("/cart", ordersController.cart);
// GET /api/orders/user
router.get("/user", ordersController.forUser);
// POST /api/orders/cart/items/:id
router.post("/cart/items/:id", ordersController.addToCart);
// POST /api/orders/cart/checkout
router.post("/cart/checkout", ordersController.checkout);
// POST /api/orders/cart/qty
router.put("/cart/quantity", ordersController.setItemQtyInCart);

module.exports = router;
