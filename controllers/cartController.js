const { Cart } = require(".././models/Cart");
const { Book } = require("../models/Book");

const populate = {
  path: "cartDetails",
  populate: {
    path: "_book",
    model: "book",
  },
};

const addToCart = async (req, res) => {
  try {
    const customerCart = await Cart.findOne({ _customerId: req.userId });
    const book = await Book.findById(req.body._bookId);

    const cartDetails = {
      _book: req.body._bookId,
      quantity: req.body.quantity,
      price: book.price,
      amount: book.price * req.body.quantity,
    };
    // if customer cart exists
    if (customerCart) {
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
};
