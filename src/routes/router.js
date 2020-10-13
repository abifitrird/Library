const express = require("express");

const router = express.Router();

// Users' functions
const { getUsersData, deleteUser } = require("../controller/user");

// Users' function (login & register)
const { register } = require("../controller/auth");

// Categories' functions
const {
  getCategories,
  getOneCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../controller/category");

// Books' functions
const {
  getBooks,
  getOneBook,
  createBook,
  editBook,
  deleteBook,
} = require("../controller/book");

// routing for register & login
router.post("/register", register);

// routing for Users
router.get("/users", getUsersData);
router.delete("/user/:id", deleteUser);

// routing for Categories
router.get("/category", getCategories);
router.get("/category/:id", getOneCategory);
router.post("/category", createCategory);
router.patch("/category/:id", editCategory);
router.delete("/category/:id", deleteCategory);

// routing for Books
router.get("/books", getBooks);
router.get("/book/:id", getOneBook);
router.post("/book", createBook);
router.patch("/book/:id", editBook);
router.delete("/book/:id", deleteBook);

module.exports = router;
