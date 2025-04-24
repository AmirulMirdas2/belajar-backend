const express = require("express");
const router = express.Router();
const userController = require("../controller/users");

// CREATE - POST
router.post("/", userController.createNewUsers);

// READ - GET
router.get("/", userController.getAllUsers);

// UPDATE - PATCH
router.patch("/:idUser", userController.updateUsers); // /:id -> params namanya

// DELETE - DELETE
router.delete("/:idUser", userController.deleteUsers);

module.exports = router; // mengeksport module router (const router) agar dapat dipanggil
