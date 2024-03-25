const { User } = require("../models");

const registerUser = async (payload) => {
  try {
    const user = await User.create(payload);
    return user;
  } catch (error) {
    throw error;
  }
};

const findUserByEmailId = async (email) => {
  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    return user ? true : false;
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, findUserByEmailId };
