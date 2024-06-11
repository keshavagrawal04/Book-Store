const { Cart } = require("../models");

const addItemService = async ({ user, book, quantity, totalPrice }) => {
  try {
    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = new Cart({
        user,
        items: [{ book, quantity, totalPrice }],
      });
    } else {
      const existingItemIndex = cart.items.findIndex(
        (item) => item.book === book
      );

      if (existingItemIndex !== -1) {
        cart.items[existingItemIndex].quantity += quantity;
        cart.items[existingItemIndex].totalPrice += totalPrice;
      } else {
        cart.items.push({ book, quantity, totalPrice });
      }
    }

    await cart.save();
    return { success: true, message: "Item added to cart successfully" };
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

module.exports = {
  addItemService,
};
