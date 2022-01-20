const router = require("express").Router();
const { isAuth } = require("../middleware/authentication");
const auth = require("./auth");
const users = require("./user");

router.use("/auth", auth);
router.use("/users", isAuth, users);
router.use("*", (req, res) => {
  res.status(404).json({
    message: "Endpoint Not Found",
  });
});

module.exports = router;
