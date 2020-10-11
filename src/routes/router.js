const express = require("express");

const router = express.Router();

// Users' functions
const { getUsersData, deleteUser } = require("../controller/user");

// Categories' function
const {
  getCategories,
  getOneCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../controller/category");

// routing for Users
router.get("/users", getUsersData);
router.delete("/user/:id", deleteUser);

// routing for Categories
router.get("/category", getCategories);
router.get("/category/:id", getOneCategory);
router.post("/category", createCategory);
router.patch("/category/:id", editCategory);
router.delete("/category/:id", deleteCategory);

module.exports = router;
