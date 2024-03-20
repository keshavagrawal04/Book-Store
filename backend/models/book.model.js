const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  coverImage: {
    type: String,
    require: true,
  },
  pages: {
    type: Number,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  ISBN: {
    type: String,
    require: true,
  },
  genre: {
    type: [String],
  },
  author: {
    name: {
      type: String,
    },
    gender: {
      type: String,
      require: true,
      enum: ["Male", "Female", "Other"],
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  publication: {
    name: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      require: true,
    },
  },
});

module.exports = mongoose.model("Book", bookSchema);
