const Question = require("../models/Question");

module.exports.askQuestion = (req, res, next) => {
    const question = req.body.question;
    Question.create({question})

    .then((question) => res.send({question: question, user: req.user._id}))
    .catch((err) => {
        console.error(err);
    })
}