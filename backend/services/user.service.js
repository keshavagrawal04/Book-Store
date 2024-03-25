const { User } = require("../models");

const registerUser = async (payload) => {
  try {
    const user = await User.create(payload);
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser };
