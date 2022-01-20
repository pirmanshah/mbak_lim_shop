const db = require("../models");
const Op = require("sequelize").Op;

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const users = await db.User.findAll();
      res.status(200).json({
        users,
      });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
      return next(err);
    }
  },
};
