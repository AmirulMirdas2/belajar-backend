const userModel = require("../models/users");
const getAllUsers = async (req, res) => {
  try {
    const [data] = await userModel.getAllUsers(); // pemanggilan kedatabase bersifat asyncronus
    res.json({
      message: "GET all users success",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

// CREATE DATA DUMMY - POST
const createNewUsers = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user success",
    data: req.body,
  });
};

// UPDATE
const updateUsers = (req, res) => {
  const { idUser } = req.params; // melakukan pemanggilan sesuai dengan id yang dimasukkan oleh user. harus sama seperti di route
  console.log("idUser: ", idUser);
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

// DELETE
const deleteUsers = (req, res) => {
  const { idUser } = req.params;
  res.json({
    message: "DELETE user succes",
    data: {
      idUser,
      name: "amirul mirdas",
      email: "amirulmirdas2005@gmail.com",
      address: "subulussalam",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
};
