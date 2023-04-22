const Schema = require("mongoose").Schema;

const itemSchema = new Schema(
  {
    bookTitle: { type: String, required: true },
    emoji: String,
    price: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
