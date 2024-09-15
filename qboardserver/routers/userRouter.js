const router = require("express").Router();
const {getUserInfo} = require("../controllers/userController");

router.get("/me", getUserInfo)
module.exports = router;