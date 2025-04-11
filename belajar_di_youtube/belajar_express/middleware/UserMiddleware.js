const jwt = require("jsonwebtoken"); // import jwt
const { User } = require("../models"); // import model user

exports.authMiddleware = async (req, res, next) => {
  // 1) fungsi jika di header kita masukkan token atau tidak
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "anda belum login/register, token tidak ditemukan",
    });
  }

  //   console.log(token);
  // 2) decode verifikasi token
  let decoded;
  try {
    decoded = await jwt.verify(token, process.env.JWT_SECRET); // verifikasi token
  } catch (err) {
    return next(
      res.status(401).json({
        error: err,
        message: "token yang dimasukkan tidak ditemukan atau tidak ada",
      })
    );
  }

  // 3) mengambil data user berdasarkan kondisi decoded
  const currentUser = await User.findByPk(decoded.id);
  console.log(currentUser);

  req.user;

  next();
};
