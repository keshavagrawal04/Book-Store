const { Book } = require("../models");

const saveBook = async (payload) => {
  try {
    const book = await Book.create(payload);
    return book;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const findBookById = async (id) => {
  try {
    const book = await Book.findById({ _id: id });
    return book;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const findAllBooks = async (query) => {
  try {
    let allBooks = await Book.find({});
    let books = Book.find({});
    if (query.title)
      books.where("title").regex(new RegExp(query.title.toLowerCase(), "i"));
    if (query.genre)
      books.where("genre").regex(new RegExp(query.genre.toLowerCase(), "i"));
    if (query.author)
      books
        .where("author.name")
        .regex(new RegExp(query.author.toLowerCase(), "i"));
    books = await books.skip(query.pageSize * query.page).limit(query.pageSize);
    return { books, totalPages: Math.ceil(allBooks.length / query.pageSize) };
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const deleteBookById = async (id) => {
  try {
    const book = await Book.findOneAndDelete({ _id: id });
    return book;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const updateBookById = async (id, payload) => {
  try {
    const book = await Book.findOneAndUpdate(
      { _id: id },
      { ...payload },
      { new: true }
    );
    return book;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  saveBook,
  findBookById,
  findAllBooks,
  updateBookById,
  deleteBookById,
};
