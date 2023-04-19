const Book = require(".././models/Book");

const show = async (req, res) => {
  try {
    res.send("This is Book");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
};
