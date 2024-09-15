const express = require("express");
const answerRouter = require("./answerRouter")
const askRouter = require("./askRouter");
const userRouter = require("./userRouter");
const {login, register} = require("../controllers/userController");
const auth = require("../middleware/auth");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.use("/users", auth, userRouter);
router.use("/ask", auth, askRouter);
router.use("/answer", auth, answerRouter);

module.exports = router;