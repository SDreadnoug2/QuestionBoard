const router = require("express").Router();
const {askQuestion} = require("../controllers/askController");


router.post("/", askQuestion);
module.exports = router;