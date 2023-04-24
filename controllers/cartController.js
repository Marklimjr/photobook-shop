const { Cart } = require(".././models/Cart");
const { Book } = require(".././models/Book");

const addToCart = async (req, res) => {
  try {
    const product = await Book.findById(req.body._productId);

    const cartDetails = {
      _product: req.body._productId,
      quantity: req.body.quantity,
      price: product.price,
      amount: product.price * req.body.quantity,
    };

    Cart.findOneAndUpdate;

    //find and update quantity if item exist already in cart
    // push item to cart if item doesn't exist in cart
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
};
