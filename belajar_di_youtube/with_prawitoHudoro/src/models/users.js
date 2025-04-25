// nama file sesuai nama table
const dbpool = require("../config/database");

// read all user
const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM users";
  return dbpool.execute(SQLQuery);
};

// create user
const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (name, email, address) 
                    VALUES ("${body.name}", '${body.email}', '${body.address}')`;
  return dbpool.execute(SQLQuery);
};

// read user
const readOneUser = (idUser) => {
  const SQLQuery = `SELECT * FROM users where id = ${idUser}`;
  return dbpool.execute(SQLQuery);
};

// update user
const updateUser = (body, idUser) => {
  const SQLQuery = `UPDATE users SET ${body.name}, ${body.email}, ${body.address} WHERE id = ${idUser}`;
  return dbpool.execute(SQLQuery);
};

// delete user
const deleteUser = (idUser) => {
  const SQLQuery = `DELETE FROM users WHERE id = ${idUser}`;
  return dbpool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  createNewUser,
  readOneUser,
  updateUser,
  deleteUser,
};
