const { Category } = require("../models");
// const category = require("../models/category");

exports.getAllCategories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: [
      {
        id: "01",
        nama: "iphone",
      },
      {
        id: "02",
        nama: "komputer",
      },
      {
        id: "03",
        nama: "PC",
      },
    ],
  });
};

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
      error:error.errors
    });
  }
};
