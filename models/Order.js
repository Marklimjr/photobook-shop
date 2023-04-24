const mongoose = require("mongoose");

const orderDetailSchema = mongoose.Schema({
  _product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },

  price: {
    type: Number,
  },

  quantity: {
    type: Number,
    required: true,
  },

  amount: {
    type: Number,
  },
});

const OrderDetails = mongoose.model("orderDetails", orderDetailSchema);
module.exports = { OrderDetails };
