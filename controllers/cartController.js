const { Cart } = require(".././models/Cart");
const { Book } = require(".././models/Book");

const addToCart = async (req, res) => {
  try {
    res.send("this is cart");

    //find and update quantity if item exist already in cart
    // push item to cart if item doesn't exist in cart
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  addToCart,
};
