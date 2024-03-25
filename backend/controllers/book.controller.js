const { bookServices } = require("../services");
const { responseMessage } = require("../configs");

const addBook = async (req, res) => {
  try {
    const book = await bookServices.saveBook(req.body);
    return res
      .status(201)
      .json({ message: responseMessage.BOOK_ADD, data: book });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await bookServices.findBookById(req.params.id);
    if (!book)
      return res.status(404).json({ message: responseMessage.BOOK_NOT_FOUND });
    return res
      .status(200)
      .json({ message: responseMessage.BOOK_RETRIEVED, data: book });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const query = {
      pageSize: parseInt(req.query.pageSize) || 5,
      page: parseInt(req.query.page - 1) || 0,
      genre: req.query.genre === "" ? false : req.query.genre,
      author: req.query.author || false,
      title: req.query.title === "" ? false : req.query.title,
    };
    const books = await bookServices.findAllBooks(query);
    if (books.length <= 0)
      return res.status(404).json({ message: responseMessage.BOOKS_NOT_FOUND });
    return res
      .status(200)
      .json({ message: responseMessage.BOOKS_RETRIEVED, data: books });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    let book = await bookServices.getBookById(req.params.id);
    if (!book)
      return res.status(404).json({ message: responseMessage.BOOK_NOT_FOUND });
    book = await bookServices.updateBookById(req.params.id);
    return res
      .status(200)
      .json({ message: responseMessage.BOOK_UPDATE, data: book });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    let book = await bookServices.findBookById(req.params.id);
    if (!book)
      return res.status(404).json({ message: responseMessage.BOOK_NOT_FOUND });
    book = await bookServices.deleteBookById(req.params.id);
    return res
      .status(200)
      .json({ message: responseMessage.BOOK_DELETE, data: book });
  } catch (error) {
    res.status(500).json({
      message: responseMessage.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

module.exports = {
  addBook,
  getBookById,
  getAllBooks,
  updateBook,
  deleteBook,
};
