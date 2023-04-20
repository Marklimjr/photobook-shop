const Book = require(".././models/Book");

const index = async (req, res) => {
  try {
    const foundBook = await Book.find({});
    res.status(200).send(foundBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const show = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send(book);
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

const update = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndRemove(req.params.id);
    res.status(200).send(deletedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  show,
  create,
  update,
  index,
  deleteBook,
};
