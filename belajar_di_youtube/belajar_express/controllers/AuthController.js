const { User } = require("../models");

exports.registerUser = async (req, res) => {
  try {
    if (req.body.password !== req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Validasi Error",
        error: ["passwod dan passwordConfirm tidak sama"],
      });
    }

    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(201).json({
      status: "success",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Validasi Error",
      error: error.errors.map((err) => err.message),
    });
  }
};
