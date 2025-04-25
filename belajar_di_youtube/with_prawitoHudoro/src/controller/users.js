const { emit } = require("../config/database");
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

// READ USER ONE - GET
const readOneUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    const [data] = await userModel.readOneUser(idUser);
    res.json({
      message: "GET one user success",
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
const createNewUsers = async (req, res) => {
  console.log(req.body);
  const { body } = req;
  try {
    await userModel.createNewUser(body);
    res.json({
      message: "CREATE new user success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

// UPDATE
const updateUsers = async (req, res) => {
  const { idUser } = req.params; // melakukan pemanggilan sesuai dengan id yang dimasukkan oleh user. harus sama seperti di route
  const { body } = req;
  try {
    await userModel.updateUser(body, idUser); // parameter sesuai dengan di models
    res.json({
      message: "UPDATE user success",
      data: {
        idUser,
        ...body,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

// DELETE
const deleteUsers = async (req, res) => {
  const { idUser } = req.params;
  try {
    await userModel.deleteUser(idUser);
    res.json({
      message: "DELETE user succes",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUsers,
  updateUsers,
  deleteUsers,
  readOneUser,
};
