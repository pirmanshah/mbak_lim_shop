const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res, next) => {
    let email = req.body.email || null;
    let password = req.body.password || null;

    try {
      const user = await db.User.findOne({ where: { email: email } });
      if (user) {
        const checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
          let token = jwt.sign(
            {
              id: user.id,
              role: user.role,
            },
            process.env.SECRET,
            {
              expiresIn: "24hr",
            }
          );
          res.status(200).json({
            message: "Login success",
            token: token,
          });
        } else {
          res.status(401).json({
            message: "Password incorrect",
          });
        }
      } else {
        res.status(404).json({
          message: "Email not found",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
      return next(err);
    }
  },
};
