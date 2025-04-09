"use strict";
const { v4 } = require("uuid"); // menggunakan uuid untuk id
const bcrypt = require("bcrypt"); // menggunakan bcrypt untuk password
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const salt = await bcrypt.genSaltSync(10); // menggunakan bcrypt untuk membuat salt
    const adminId = await queryInterface.rawSelect(
      "Roles",
      {
        where: { name: "admin" }, // kondisi untuk mencari id role admin
      },
      ["id"]
    ); // sama seperti 'select id from Roles where name = 'admin';

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: v4(), // menggunakan uuid untuk id (primary key)
          name: "admin",
          email: "admin@gmail.com",
          password: bcrypt.hashSync("12345678", salt), // melakukan hash password menggunakan bcrypt dan salt sebelumnya
          role_id: adminId, // id role admin
          createdAt: new Date(), // membuat tanggal sekarang
          updatedAt: new Date(), // membuat tanggal sekarang
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
