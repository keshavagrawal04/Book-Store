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
    return user ? true : false;
  } catch (error) {
    throw error;
  }
};

const loginUser = async (payload) => {
  try {
    const user = await User.findOne({ email: payload.email });
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser, findUserByEmailId, loginUser };
