const router = require("express").Router();
const { login } = require("../controllers/authentication");

router.post("/", login);

module.exports = router;
