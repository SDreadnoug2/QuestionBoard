const router = require("express").Router();
const {getQuestions} = require("../controllers/answerController");


//router.post("/answerQuestion", answerQuestion);
router.get("/", getQuestions);

module.exports = router;