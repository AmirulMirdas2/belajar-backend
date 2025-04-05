"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.UUID, // membuat id dengan tipe data uuid
        allowNull: false, // membuat id tidak boleh null
        primaryKey: true, // menjadikan id sebagai primary key
        defaultValue: Sequelize.UUIDV4, // membuat id dengan tipe data uuid dan auto increment
      },
      name: {
        type: Sequelize.STRING,
        unique: true, // membuat name tidak boleh sama
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role_id: {
        type: Sequelize.UUID,
        references: {
          // membuat relasi antara tabel user dan role
          model: "Roles", // nama tabel yang direferensikan
          key: "id", // nama kolom yang direferensikan
        },
        onDelete: "CASCADE", // membuat ketika menghapus data role, data user yang memiliki role tersebut juga ikut terhapus
        onUpdate: "CASCADE", // membuat ketika mengupdate data role, data user yang memiliki role tersebut juga ikut terupdate
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
