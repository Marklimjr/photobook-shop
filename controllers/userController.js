const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const JWT_SECRET = process.env.JWT_SECRET;

const Book = require("../models/Book");

const create = async (req, res) => {
  const { password } = req.body;
  if (password.length < 5) {
    res
      .status(400)
      .json({ message: "Password is too Short, Please Try Again." });
    return;
  }

  try {
    const user = await User.create(req.body);
    const payload = { user };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 }); // 1hr
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (password.length < 5) {
    res.status(400).json({ message: "Incorrect Password" });
    return;
  }

  try {
    const user = await User.findOne({ email });
    if (user === null) {
      res.status(401).json({ message: "No user found, Please sign up." });
      return;
    }

    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const payload = { user };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: 60 });
      res.status(200).json({ token });
      console.log("user login successful");
    } else {
      res.status(401).json({ message: "Wrong password" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getFavouriteBooks = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "favouriteBooks"
    );
    res.json(user.favouriteBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addFavouriteBook = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    const book = await Book.findById(req.params.bookId);

    if (!user || !book) {
      return res.status(404).json({ message: "User or book not found" });
    }
    if (user.favouriteBooks.includes(book._id)) {
      return res.status(400).json({ message: "Book is already in favourites" });
    }
    user.favouriteBooks.push(book._id);
    await user.save();
    res.status(201).json({ message: "Book added to favourites", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFavouriteBook = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.favouriteBooks = user.favouriteBooks.filter(
      (bookId) => bookId.toString() !== req.params.bookId
    );
    await user.save();

    res.status(200).json({ message: "Book removed from favourites" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  create,
  login,
  getFavouriteBooks,
  addFavouriteBook,
  deleteFavouriteBook,
};
