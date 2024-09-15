const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 70,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        createdAt: { type: Date, default: Date.now }
    }
});

const question = mongoose.model("question", questionSchema);
module.exports = question;