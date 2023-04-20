const Book = require(".././models/Book");

const show = async (req, res) => {
  try {
    res.send("This is Book");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    const createdBook = await Book.create(req.body);
    res.status(200).send(createdBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
  create,
};
