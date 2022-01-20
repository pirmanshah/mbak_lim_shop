"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
    static beforeCreate(user) {
      user.password = bcrypt.hashSync(user.password, 12);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "Please enter a valid email",
          },
        },
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
