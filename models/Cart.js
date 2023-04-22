const mongoose = require("mongoose");
const { OrderDetailSchema } = require("./Order");

const cartSchema = mongoose.Schema({
  cartDetails: [
    {
      type: OrderDetailSchema,
    },
  ],
});

const Cart = mongoose.Model("carts", cartSchema);
module.exports = { Cart };
