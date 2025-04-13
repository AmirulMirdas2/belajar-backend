const express = require("express");
const router = express.Router();
const {
  registerUser, // register user
  loginUser, // login user
  logoutUser, // logout user
  getMyUser, // menampilkan data user
} = require("../controllers/AuthController");
const { authMiddleware } = require("../middleware/UserMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logoutUser);
router.get("/me", authMiddleware, getMyUser);

module.exports = router;
