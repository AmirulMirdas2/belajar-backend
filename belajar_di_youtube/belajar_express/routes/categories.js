const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storCategory,
  detailCategory,
  updateCategory,
  destrotyCategory,
} = require("../controllers/categoryController");
const {
  authMiddleware,
  permissionUser,
} = require("../middleware/UserMiddleware");

// read all categories
router.get("/", getAllCategories);

// detail data
router.get("/:id", detailCategory);

// create Data
router.post("/", authMiddleware, permissionUser("admin"), storCategory);

// update data
router.put("/:id", authMiddleware, permissionUser("admin"), updateCategory);

// delete data
router.delete(
  "/:id",
  authMiddleware,
  permissionUser("admin"),
  destrotyCategory
);

router.get("/filterData", (req, res) => {
  res.send("router filterData");
});

router.get("/:name", (req, res) => {
  res.send(`halo halaman ${req.params.name}!!!`);
});

module.exports = router;
