"use strict";
const { Model } = require("sequelize");
const bycrypt = require("bcrypt");
const { Sequelize } = require(".");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true, // check if email is valid
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNUll: false,
        validate: {
          len: [6], // check if password length is between 6 and 20
        },
      },
      role_id: {
        type: DataTypes.UUID,
      },
    },
    {
      hooks: {
        // membuat fungsi encripsi password
        beforeCreate: async (user) => {
          if (user.password) {
            const salt = await bycrypt.genSaltSync(10);
            user.password = bycrypt.hashSync(user.password, salt);
          }
          if (!user.role_id) {
            const roleUser = await sequelize.models.Role.findOne({
              where: { name: "user" },
            });
            user.role_id = roleUser.id;
          }
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
