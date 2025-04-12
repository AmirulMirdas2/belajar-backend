exports.notFound = (req, res, next) => {
  const error = new Error(`Not Found = ${req.originalUrl}`);
  res.status(404);
  next(error);
};

// error handler untuk menangani error ketika server down atau error lainnya
exports.errorHandler = (err, req, res, next) => {
  // jika status code tidak dimasukkan di error hanndler
  let statusCode = res.statusCode == 200 ? 500 : res.statusCode;

  let message = err.message;

  if (err.errors || err.name == "SequelizeValidationError") {
    const errorList = err.errors.map((err) => {
      let obj = {};
      obj[err.path] = err.message;
      return obj;
    });
    message = errorList;
    statusCode = 400; // bad request
  }

  res.status(statusCode).json({
    message,
    stack: err.stack,
  });
};
