// fungsi ini digunakan untuk menangani error pada async function
const asyncHandle = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next).catch(next));
};

module.exports = asyncHandle;
