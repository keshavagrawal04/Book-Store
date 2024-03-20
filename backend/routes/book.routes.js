const router = require("express").Router();
const { bookController } = require("../controllers");

router.post("/add", bookController.addBook);
router.get("/get/:id/", bookController.getBookById);
router.get("/get/", bookController.getAllBooks);
router.patch("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;
