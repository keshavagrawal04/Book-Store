const { cartServices } = require("../services");

const addItem = async (req, res) => {
  try {
    const { user, book, quantity, totalPrice } = req.body;
    const result = await cartServices.addItemService({
      user,
      book,
      quantity,
      totalPrice,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  addItem,
};
