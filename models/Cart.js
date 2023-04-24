const mongoose = require("mongoose");
const { OrderDetails } = require("./Order").OrderDetails.Schema;

const cartSchema = mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  cartDetails: [
    {
      type: OrderDetails,
    },
  ],
});

const Cart = mongoose.model("carts", cartSchema);
module.exports = { Cart };
