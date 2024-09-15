const Question = require("../models/Question");

module.exports.getQuestions = (req, res) => {
    Question.find({})
    .then((items) => {
        res.send(items)})
}