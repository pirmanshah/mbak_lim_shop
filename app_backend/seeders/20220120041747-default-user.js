"use strict";

const bcrypt = require("bcrypt");
const salt = 12;

const defaultUsers = [
  {
    email: "pirmansyah@gmail.com",
    name: "Pirmansyah",
    password: "p@ssw0rd",
    role: "admin",
    image: "avatar-1.png",
  },
  {
    email: "habib@gmail.com",
    name: "Fajar Habib",
    password: "p@ssw0rd",
    role: "admin",
    image: "avatar-1.png",
  },
  {
    email: "ardiet@gmail.com",
    name: "Ardiet Achmad",
    password: "p@ssw0rd",
    role: "admin",
    image: "avatar-1.png",
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];
    defaultUsers.forEach((user) => {
      users.push({
        email: user.email,
        name: user.name,
        password: bcrypt.hashSync(user.password, salt),
        role: user.role,
        image: user.image,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });
    return queryInterface.bulkInsert("Users", users, {});
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
