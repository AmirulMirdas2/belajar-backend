const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storCategory,
  detailCategory,
  updateCategory,
} = require("../controllers/categoryController");

// read all categories
router.get("/", getAllCategories);
// detail data
router.get("/:id", detailCategory);
// create category
router.post("/", storCategory);
// update data
router.put("/:id", updateCategory);

router.get("/filterData", (req, res) => {
  res.send("router filterData");
});

router.get("/:name", (req, res) => {
  res.send(`halo halaman ${req.params.name}!!!`);
});

module.exports = router;
