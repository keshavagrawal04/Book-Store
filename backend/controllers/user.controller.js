const { userServices } = require("../services");
const { crypto } = require("../utils");
const { responseMessage } = require("../configs");

const registerUser = async (req, res) => {
  try {
    const isUserAlreadyExists = await userServices.findUserByEmailId(
      req.body.email
    );
    if (isUserAlreadyExists)
      return res
        .status(400)
        .json({ message: responseMessage.USER_ALREADY_EXISTS });
    req.body.password = crypto.generateHash(req.body.password);
    const user = await userServices.registerUser(req.body);
    return res
      .status(201)
      .json({ message: responseMessage.USER_REGISTER, data: user });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userServices.loginUser(req.body);
    if (!user)
      return res.status(400).json({ message: responseMessage.USER_NOT_EXISTS });
    const { hash, salt } = user.password;
    const isPasswordValid = crypto.validateHash(req.body.password, salt, hash);
    if (!isPasswordValid)
      return res
        .status(400)
        .json({ message: responseMessage.INVALID_PASSWORD });
    return res
      .status(200)
      .json({ message: responseMessage.USER_LOGIN, data: user });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser };
