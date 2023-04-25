const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    bookTitle: {
      type: String,
      required: true,
    },

    bookImg: {
      type: String,
      require: true,
    },

    bookAltImg: {
      type: String,
      require: true,
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
      default: 0,
    },

    quantity: {
      type: Number,
    },

    tags: {
      type: String,
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
