const router = require("express").Router();
const { isAuthorized } = require("../middleware/authentication");
const { getAll } = require("../controllers/user");

router.get("/", isAuthorized, getAll);

module.exports = router;
