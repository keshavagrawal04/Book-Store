const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contactNumber: {
    type: Number,
    require: true,
  },
  dateOfBirth: {
    type: Date,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  profileImage: {
    type: String,
    require: true,
  },
});
module.exports = mongoose.model("User", userSchema);
