const express = require("express");

const router = express.Router();

// Authentication's functions
const { authenticated } = require("../middleware/authentication");

// Users' functions
const { getUsersData, deleteUser } = require("../controller/user");

// Users' function (login & register)
const { register, login } = require("../controller/auth");

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
router.post("/login", login);

// routing for Users
router.get("/users", getUsersData);
router.delete("/user/:id", deleteUser);

// routing for Categories
router.get("/category", getCategories);
router.get("/category/:id", getOneCategory);
router.post("/category", authenticated, createCategory);
router.patch("/category/:id", authenticated, editCategory);
router.delete("/category/:id", authenticated, deleteCategory);

// routing for Books
router.get("/books", getBooks);
router.get("/book/:id", getOneBook);
router.post("/book", authenticated, createBook);
router.patch("/book/:id", authenticated, editBook);
router.delete("/book/:id", authenticated, deleteBook);

module.exports = router;
