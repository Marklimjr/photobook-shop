const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    publisher: {
      type: String,
      required: true,
    },

    writeUp: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
    },

    quantity: {
      type: Number,
    },

    tags: {
      type: Array,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

module.exports = mongoose.model("Book", bookSchema);
