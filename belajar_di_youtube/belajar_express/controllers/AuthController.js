const { User } = require("../models"); // import model User dari models bertujuan untuk mengakses database
const jwt = require("jsonwebtoken");
const signToken = (id) => {
  // membuat token untuk user dimana id adalah id user yang baru saja dibuat
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id); // generate token dari id user yang baru saja dibuat
  const cookieOptions = {
    // membuat opsi cookie
    expire: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000 // jam, menit, detik, milisecond
    ),
    httpOnly: true, // httpOnly adalah cookie yang hanya bisa diakses oleh server, bukan oleh client atau browser jadi hanya server yang bisa mengakses cookie ini
  };

  res.cookie("jwt", token, cookieOptions); // membuat coockie dengan nama jwt

  user.password = undefined; // menghapus password dari user agar tidak ditampilkan di response

  res.status(statusCode).json({
    // jika berhasil maka akan menampilkan data berikut
    status: "Succses",
    data: {
      // data user
      user,
    },
  });
};

// membuat fungsi registerUser yang digunakan untuk mendaftar user baru. fungsi ini akan menerima request dari client dan mengembalikan response ke client
// dan akan membuat user baru di database
exports.registerUser = async (req, res) => {
  try {
    if (req.body.password !== req.body.passwordConfirm) {
      return res.status(400).json({
        message: "Validasi Error",
        error: ["passwod dan passwordConfirm tidak sama"],
      });
    }

    const newUser = await User.create({
      // membuat user baru
      name: req.body.name, // mengambil data name dari body
      email: req.body.email, // mengambil data email dari body
      password: req.body.password, // mengambil data password dari body
    });

    createSendToken(newUser, 201, res); // menggunakan fungsi createSendToken untuk membuat token
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "Validasi Error",
      error: error.errors.map((err) => err.message), // error yang ditampilkan tidak panjang
    });
  }
};

exports.loginUser = async (req, res) => {
  // 1) fungsi validasi
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: "fail",
      message: "Error Validasi",
      error: "Masukkan email dan password",
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

  // 3) token di resopon pada saat login
  createSendToken(userData, 200, res); // menggunakan fungsi createSendToken untuk membuat token
};
