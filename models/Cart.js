const mongoose = require("mongoose");
const { OrderDetails } = require("./Order").OrderDetails.Schema;

const cartSchema = mongoose.Schema({
  cartDetails: [
    {
      type: OrderDetails,
    },
  ],
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = { Cart };
