const Order = require(".././models/Order");

const show = async (req, res) => {
  try {
    res.send("This is Order");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
};
