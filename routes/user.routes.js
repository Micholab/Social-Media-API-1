const { createUser, updateUser } = require("../controllers/user");

const express = require("express");

const router = express.Router();

router.post("/signup", createUser);
router.put("/edit", updateUser);

module.exports = app;
