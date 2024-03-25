const { userServices } = require("../services");

const registerUser = async (req, res) => {
  try {
    const user = await userServices.registerUser(req.body);
    res
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
