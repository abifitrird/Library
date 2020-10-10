const express = require("express");

const router = express.Router();

const { getUsersData, deleteUser } = require("../controller/user");

router.get("/users", getUsersData);
router.delete("/user/:id", deleteUser);

module.exports = router;
