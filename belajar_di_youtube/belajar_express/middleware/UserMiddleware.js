const jwt = require("jsonwebtoken"); // import jwt
const { User, Role } = require("../models"); // import model user

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
  const currentUser = await User.findByPk(decoded.id); // mengambil data user berdasarkan id yang ada di token
  if (!currentUser) {
    return next(
      res.status(401).json({
        status: 401,
        message: "user sudah terhapus, token sudah tidak valid",
      })
    );
  }

  req.user = currentUser; // memasukkan data user ke dalam req.user

  next();
};

exports.permissionUser = (...roles) => {
  // rest parameter
  return async (req, res, next) => {
    const rolesData = await Role.findByPk(req.user.role_id); // mengambil data role berdasarkan id role yang ada di user
    const roleName = rolesData.name; // mengambil nama

    if (!roles.includes(roleName)) {
      return next(
        res.status(403).json({
          status: 403,
          message: "anda tidak memiliki akses untuk halaman ini",
        })
      );
    }
    next();
  };
};
