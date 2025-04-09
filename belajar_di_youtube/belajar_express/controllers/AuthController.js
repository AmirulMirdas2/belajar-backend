const { User } = require("../models");
const jwt = require("jsonwebtoken");
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

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

    const token = signToken(newUser.id);

    return res.status(201).json({
      status: "success",
      token,
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

exports.loginUser = async (req, res) => {
  // 1) fungsi validasi

  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: "fail",
      message: "Error Validasi",
      error: "Please input email or passaword",
    });
  }

  // 2) check jika users email yang dimasukkan di req sudah ada di DB dan password sudah benar yang di input di request
  const userData = await User.findOne({ where: { email: req.body.email } });
  if (
    !userData ||
    !(await userData.CorrectPassword(req.body.password, userData.password))
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Error Login",
      error: "Invalid email or password",
    });
  }

  // 3) token di resopon pada saay login
  const token = signToken(userData.id);
  return res.status(200).json({
    status: "success",
    message: "Login Berhasil",
    token,
  });
};
