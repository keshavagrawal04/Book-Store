const { userServices } = require("../services");

const registerUser = async (req, res) => {
  try {
    const isUserAlreadyExists = await userServices.findUserByEmailId(
      req.body.email
    );
    if (isUserAlreadyExists)
      return res
        .status(400)
        .json({ message: "User with this email is already exists" });
    const user = await userServices.registerUser(req.body);
    return res
      .status(201)
      .json({ message: "User registered successfully", data: user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
    console.log(error.message);
  }
};
module.exports = { registerUser };
