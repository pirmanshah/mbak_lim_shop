const router = require("express").Router();
const { login, logout } = require("../controllers/authentication");

router.post("/", login);
router.get("/", logout);

module.exports = router;
