const express = require("express");
const router = express.Router();
const { getAllCategories, storyCategory } = require("../controllers/categoryController");

router.get("/", getAllCategories);

router.post("/", storyCategory);

router.get("/filterData", (req, res) => {
  res.send("router filterData");
});

router.get("/:nama", (req, res) => {
  res.send(`halo halaman ${req.params.nama}!!!`);
});

module.exports = router;
