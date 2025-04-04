const express = require("express");
const router = express.Router();
const { getAllCategories } = require("../controllers/categoryController");
const { storCategory } = require("../controllers/categoryController");

router.get("/", getAllCategories);

router.post("/", storCategory);

router.get("/filterData", (req, res) => {
  res.send("router filterData");
});

router.get("/:name", (req, res) => {
  res.send(`halo halaman ${req.params.name}!!!`);
});

module.exports = router;
