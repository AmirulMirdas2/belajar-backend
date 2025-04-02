// yang mangatur fungsi logic

exports.getAllCategories = (req, res) => {
  res.status(200).json({
    status: "success",
    data: [
      {
        id: "01",
        name: "iphone",
      },
      {
        id: "02",
        name: "komputer",
      },
      {
        id: "03",
        name: "PC",
      },
    ],
  });
};

exports.storeCategory = (req, res) => {
  let name = req.body.name;
  let description = req.body.description;

  if (!name || !description) {
    return res.status(400).json({
      status: "failed",
      error: "Validation error",
    });
  }

  return res.status(200).json({
    status: "success",
    message: "Category created successfully",
  });
};
