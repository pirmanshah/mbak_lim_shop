const jwt = require("jsonwebtoken");

module.exports = {
  isAuth: (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      let decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({
        message: err.message,
      });
    }
  },
  isAuthorized: (req, res, next) => {
    if (req.user.role == "admin") {
      next();
    } else {
      res.status(401).json({
        message: "User Not Authorized",
      });
    }
  },
};
