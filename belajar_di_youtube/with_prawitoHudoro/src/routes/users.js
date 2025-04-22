const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

// CREATE - POST
router.get("/", userController.getAllUsers);
router.post("/", userController.createNewUsers);

module.exports = router; // mengeksport module router (const router) agar dapat dipanggil
