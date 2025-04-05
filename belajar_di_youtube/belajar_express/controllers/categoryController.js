const { Category } = require("../models");
// const category = require("../models/category");

// read all categories
exports.getAllCategories = async (req, res) => {
  try {
    const catogories = await Category.findAll();
    res.status(200).json({
      status: "success",
      data: catogories,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "Server Down",
    });
  }
};

// read detail category
exports.detailCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findByPk(id); // melakukan pencarian data pada table category
    if (!category) {
      return res.status(404).json({
        status: "fail",
        message: "Data tidak ditemukan",
      });
    }
    return res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      message: "server down",
    });
  }
};

// membuat data
exports.storCategory = async (req, res) => {
  // let name = req.body.name;
  // let description = req.body.description;

  try {
    let { name, description } = req.body;
    const newCategory = await Category.create({
      name,
      description,
    });
    res.status(201).json({
      status: "succsess",
      data: newCategory,
    });
  } catch (error) {
    return res.status(400).json({
      status: "fail",
      error: error.errors,
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    await Category.update(req.body, {
      where: {
        id: id,
      },
    });
    const newCategory = await Category.findByPk(id);
    if (!newCategory) {
      return res.status(404).json({
        status: "fail",
        message: "Id tidak ditemukan",
      });
    }
    return res.status(200).json({
      status: "success",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      status: "fail",
      error: "server down",
    });
  }
};

exports.destrotyCategory = async (req, res) => {
  const id = req.params.id;

  const idCategory = await Category.findByPk(id);

  if (!idCategory) {
    return res.status(404).json({
      status: "fail",
      message: "Id tidak ditemukan",
    });
  }

  await Category.destroy({
    where: {
      id,
    },
  });

  return res.status(200).json({
    status: "success",
    message: `data dengan id ${id}, berhasil dihapus`,
  });
};
