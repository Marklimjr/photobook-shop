const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    bookTitle: { type: String, required: true },
    price: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
